import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';
import { filter, debounceTime } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ToastController } from '@ionic/angular';
import { NetworkService } from './network.service';
import { SyncQueueService, SyncQueueItem } from './sync-queue.service';
import { OfflineStoreService } from './offline-store.service';
import { ServicesService } from '../stockService/services.service';

export type SyncStatus = 'idle' | 'syncing' | 'error' | 'completed';

@Injectable({
  providedIn: 'root'
})
export class SyncEngineService implements OnDestroy {
  syncStatus$ = new BehaviorSubject<SyncStatus>('idle');
  private networkSub: Subscription;
  private isSyncing = false;
  private MAX_RETRIES = 5;

  constructor(
    private networkService: NetworkService,
    private syncQueue: SyncQueueService,
    private offlineStore: OfflineStoreService,
    private api: ServicesService,
    private http: HttpClient,
    private toastCtrl: ToastController
  ) {}

  /** Call after auth is confirmed and queue is initialized */
  startListening() {
    // Auto-trigger sync when coming back online (with 2s stabilization delay)
    this.networkSub = this.networkService.isOnline$.pipe(
      filter(online => online),
      debounceTime(2000)
    ).subscribe(() => {
      this.processQueue();
    });

    // Also try immediately if already online
    if (this.networkService.isOnline) {
      setTimeout(() => this.processQueue(), 3000);
    }
  }

  /** Process queue items sequentially */
  async processQueue(): Promise<void> {
    if (this.isSyncing) return;

    const pendingCount = this.syncQueue.getPendingCount();
    if (pendingCount === 0) return;

    this.isSyncing = true;
    this.syncStatus$.next('syncing');

    let successCount = 0;
    let failCount = 0;
    let item: SyncQueueItem | null;

    while ((item = await this.syncQueue.dequeue()) !== null) {
      if (!this.networkService.isOnline) {
        // Lost connection during sync — reset item to pending
        await this.syncQueue.resetForRetry(item.id);
        break;
      }

      try {
        await this.processItem(item);
        await this.syncQueue.markCompleted(item.id);
        successCount++;
      } catch (err: any) {
        const statusCode = err?.status || 0;

        if (statusCode >= 400 && statusCode < 500) {
          // Client error — don't retry
          await this.syncQueue.markFailed(item.id, `خطأ ${statusCode}: ${err?.message || 'خطأ في البيانات'}`);
          failCount++;
        } else if (item.retryCount < this.MAX_RETRIES) {
          // Retry with backoff
          await this.syncQueue.markFailed(item.id, err?.message);
          await this.syncQueue.resetForRetry(item.id);

          const backoffMs = Math.min(1000 * Math.pow(2, item.retryCount), 30000);
          await this.delay(backoffMs);
        } else {
          // Max retries reached
          await this.syncQueue.markFailed(item.id, 'تجاوز الحد الأقصى للمحاولات');
          failCount++;
        }
      }
    }

    this.isSyncing = false;

    if (failCount > 0 && successCount === 0) {
      this.syncStatus$.next('error');
      this.showToast('فشلت المزامنة - تحقق من الاتصال وحاول مرة أخرى', 'danger');
    } else if (failCount > 0) {
      this.syncStatus$.next('error');
      this.showToast(`تمت مزامنة ${successCount} عملية، فشلت ${failCount}`, 'warning');
    } else if (successCount > 0) {
      this.syncStatus$.next('completed');
      this.showToast('تمت المزامنة بنجاح', 'success');
      // Reset to idle after showing completed
      setTimeout(() => {
        if (this.syncStatus$.value === 'completed') {
          this.syncStatus$.next('idle');
        }
      }, 3000);
    } else {
      this.syncStatus$.next('idle');
    }
  }

  /** Process a single queue item: resolve temp IDs, send HTTP request, store ID mapping */
  private async processItem(item: SyncQueueItem): Promise<void> {
    // Deep-scan and replace temp IDs in payload
    const resolvedPayload = await this.resolveTempIds(item.payload);

    const apiUrl = this.api.api;
    const fullUrl = apiUrl + item.endpoint;

    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    let response: any;

    if (item.method === 'POST') {
      response = await this.http.post(fullUrl, resolvedPayload, httpOptions).toPromise();
    } else if (item.method === 'PUT') {
      response = await this.http.put(fullUrl, resolvedPayload, httpOptions).toPromise();
    } else if (item.method === 'DELETE') {
      response = await this.http.delete(fullUrl, httpOptions).toPromise();
    }

    // After successful CREATE, extract server-assigned ID and store mapping
    if (item.operationType === 'CREATE' && item.tempId && response) {
      const serverId = this.extractServerId(response, item.entityType);
      if (serverId) {
        await this.offlineStore.setIdMapping(item.tempId, serverId);
        console.log('[SyncEngine] ID mapping:', item.tempId, '->', serverId);
      }
    }
  }

  /** Recursively scan an object/array and replace temp_* / TREF_* values with real IDs */
  private async resolveTempIds(payload: any): Promise<any> {
    if (payload === null || payload === undefined) return payload;

    if (typeof payload === 'string') {
      if (payload.startsWith('temp_') || payload.startsWith('TREF_')) {
        const serverId = await this.offlineStore.getServerId(payload);
        return serverId !== null ? serverId : payload;
      }
      return payload;
    }

    if (Array.isArray(payload)) {
      const resolved = [];
      for (const item of payload) {
        resolved.push(await this.resolveTempIds(item));
      }
      return resolved;
    }

    if (typeof payload === 'object') {
      const resolved: any = {};
      for (const [key, value] of Object.entries(payload)) {
        resolved[key] = await this.resolveTempIds(value);
      }
      return resolved;
    }

    return payload;
  }

  /** Extract server-assigned ID from API response based on entity type */
  private extractServerId(response: any, entityType: string): any {
    // Common patterns in the API responses
    if (response?.message && response.message !== 'Post Not Created') {
      return response.message;
    }
    if (response?.id) return response.id;
    if (response?.data?.id) return response.data.id;
    if (response?.data?.pay_id) return response.data.pay_id;
    if (response?.data?.journal_id) return response.data.journal_id;
    return null;
  }

  /** Manual sync trigger */
  async manualSync(): Promise<void> {
    if (!this.networkService.isOnline) {
      this.showToast('لا يوجد اتصال بالإنترنت', 'warning');
      return;
    }
    await this.processQueue();
  }

  private async showToast(message: string, color: string) {
    const toast = await this.toastCtrl.create({
      message,
      duration: 3000,
      position: 'top',
      color,
      cssClass: 'sync-toast'
    });
    await toast.present();
  }

  private delay(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  ngOnDestroy() {
    if (this.networkSub) {
      this.networkSub.unsubscribe();
    }
  }
}
