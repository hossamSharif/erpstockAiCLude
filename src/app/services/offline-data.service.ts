import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { NetworkService } from './network.service';
import { OfflineStoreService, CACHE_TTL } from './offline-store.service';
import { SyncQueueService, EntityType, OperationType } from './sync-queue.service';
import { ServicesService } from '../stockService/services.service';

export interface OfflineWriteResult {
  success: boolean;
  isQueued: boolean;
  tempId?: string;
  response?: any;
}

@Injectable({
  providedIn: 'root'
})
export class OfflineDataService {
  private isInitialized = false;

  constructor(
    private networkService: NetworkService,
    private offlineStore: OfflineStoreService,
    private syncQueue: SyncQueueService,
    private api: ServicesService,
    private toastCtrl: ToastController
  ) {}

  async initialize(): Promise<void> {
    if (this.isInitialized) return;
    await this.offlineStore.initialize();
    await this.syncQueue.initialize();
    this.isInitialized = true;
  }

  // ─── Temp ID Generator ─────────────────────────────────

  private generateTempId(): string {
    return 'temp_' + Date.now() + '_' + Math.random().toString(36).substr(2, 6);
  }

  private generateTempRef(): string {
    return 'TREF_' + Date.now() + '_' + Math.random().toString(36).substr(2, 4);
  }

  // ─── READ Operations (cache-through) ──────────────────

  /**
   * Determines if we should attempt a network fetch.
   * Uses both the verified NetworkService status AND navigator.onLine.
   * This prevents blocking data loads when NetworkService hasn't verified yet.
   */
  private shouldAttemptFetch(): boolean {
    return this.networkService.isOnline || navigator.onLine;
  }

  /** Get all stock items — online: fetch + cache | offline: return cached */
  async getItems(storeId: any, yearId: any): Promise<any[]> {
    const cacheKey = this.offlineStore.itemsKey(storeId, yearId);

    if (this.shouldAttemptFetch()) {
      try {
        const data: any = await this.api.getAllStockItemsWithouteCounts(storeId, yearId).toPromise();
        const items = data?.data || [];
        await this.offlineStore.setCache(cacheKey, items, CACHE_TTL.ITEMS);
        return items;
      } catch (err) {
        console.warn('[OfflineData] getItems fetch failed, falling back to cache', err);
      }
    }

    // Offline or fetch failed — return cached (even if stale)
    const cached = await this.offlineStore.getCacheEvenIfStale<any[]>(cacheKey);
    if (cached) {
      if (cached.isStale) {
        console.log('[OfflineData] Returning stale items cache');
      }
      return cached.data;
    }
    return [];
  }

  /** Get accounts by type — online: fetch + cache | offline: return cached */
  async getAccounts(storeId: any, yearId: any, acId: any): Promise<any[]> {
    const cacheKey = this.offlineStore.accountsKey(storeId, yearId, acId);

    if (this.shouldAttemptFetch()) {
      try {
        let data: any;
        if (acId == 1) {
          data = await this.api.getSalesAccounts(storeId, yearId).toPromise();
        } else {
          data = await this.api.getPerchAccounts(storeId, yearId).toPromise();
        }
        const accounts = data?.data || [];
        await this.offlineStore.setCache(cacheKey, accounts, CACHE_TTL.ACCOUNTS);
        return accounts;
      } catch (err) {
        console.warn('[OfflineData] getAccounts fetch failed, falling back to cache', err);
      }
    }

    const cached = await this.offlineStore.getCacheEvenIfStale<any[]>(cacheKey);
    if (cached) return cached.data;
    return [];
  }

  /** Get all customer/supplier accounts — online: fetch + cache | offline: return cached */
  async getAllAccounts(storeId: any, yearId: any): Promise<any[]> {
    const cacheKey = this.offlineStore.allAccountsKey(storeId, yearId);

    if (this.shouldAttemptFetch()) {
      try {
        const data: any = await this.api.getAllCustomerSupplierAccounts(storeId, yearId).toPromise();
        const accounts = data?.data || [];
        await this.offlineStore.setCache(cacheKey, accounts, CACHE_TTL.ACCOUNTS);
        return accounts;
      } catch (err) {
        console.warn('[OfflineData] getAllAccounts fetch failed, falling back to cache', err);
      }
    }

    const cached = await this.offlineStore.getCacheEvenIfStale<any[]>(cacheKey);
    if (cached) return cached.data;
    return [];
  }

  // ─── WRITE Operations (queue-when-offline) ─────────────

  /** Save final sales invoice */
  async saveSalesInvoice(invoiceWithItems: any, storeId: any, userId: any, yearId: any): Promise<OfflineWriteResult> {
    if (this.networkService.isOnline) {
      try {
        const response: any = await this.api.saveSalesInvoWithItems(invoiceWithItems).toPromise();
        return { success: true, isQueued: false, response };
      } catch (err) {
        console.warn('[OfflineData] saveSalesInvoice online failed, queuing', err);
      }
    }

    // Queue for later sync
    const tempId = this.generateTempId();
    const tempRef = this.generateTempRef();

    // Assign temp IDs to payload
    if (invoiceWithItems.invoice) {
      invoiceWithItems.invoice.pay_id = invoiceWithItems.invoice.pay_id || tempId;
      invoiceWithItems.invoice.pay_ref = invoiceWithItems.invoice.pay_ref || tempRef;
    }

    await this.syncQueue.enqueue({
      operationType: 'CREATE',
      entityType: 'SALE',
      endpoint: 'pay/createWithItems.php',
      method: 'POST',
      payload: invoiceWithItems,
      tempId,
      description: 'حفظ فاتورة مبيعات'
    });

    await this.showQueuedToast();
    return { success: true, isQueued: true, tempId };
  }

  /** Save initial sales invoice */
  async saveSalesInvoiceInit(invoiceWithItems: any, storeId: any, userId: any, yearId: any): Promise<OfflineWriteResult> {
    if (this.networkService.isOnline) {
      try {
        const response: any = await this.api.saveSalesInvoInitWithItems(invoiceWithItems).toPromise();
        return { success: true, isQueued: false, response };
      } catch (err) {
        console.warn('[OfflineData] saveSalesInvoiceInit online failed, queuing', err);
      }
    }

    const tempId = this.generateTempId();
    const tempRef = this.generateTempRef();

    if (invoiceWithItems.invoice) {
      invoiceWithItems.invoice.pay_id = invoiceWithItems.invoice.pay_id || tempId;
      invoiceWithItems.invoice.pay_ref = invoiceWithItems.invoice.pay_ref || tempRef;
    }

    await this.syncQueue.enqueue({
      operationType: 'CREATE',
      entityType: 'SALE_INIT',
      endpoint: 'payinit/createWithItems.php',
      method: 'POST',
      payload: invoiceWithItems,
      tempId,
      description: 'حفظ فاتورة مبيعات مبدئية'
    });

    await this.showQueuedToast();
    return { success: true, isQueued: true, tempId };
  }

  /** Update sales invoice */
  async updateSalesInvoice(invoiceWithItems: any): Promise<OfflineWriteResult> {
    if (this.networkService.isOnline) {
      try {
        const response: any = await this.api.updateSalesInvoWithItems(invoiceWithItems).toPromise();
        return { success: true, isQueued: false, response };
      } catch (err) {
        console.warn('[OfflineData] updateSalesInvoice online failed, queuing', err);
      }
    }

    await this.syncQueue.enqueue({
      operationType: 'UPDATE',
      entityType: 'SALE',
      endpoint: 'pay/updateWithItems.php',
      method: 'POST',
      payload: invoiceWithItems,
      tempId: null,
      description: 'تحديث فاتورة مبيعات'
    });

    await this.showQueuedToast();
    return { success: true, isQueued: true };
  }

  /** Save purchase invoice */
  async savePurchaseInvoice(invoiceWithItems: any, storeId: any, userId: any, yearId: any): Promise<OfflineWriteResult> {
    if (this.networkService.isOnline) {
      try {
        const response: any = await this.api.savePerchInvoWithItems(invoiceWithItems).toPromise();
        return { success: true, isQueued: false, response };
      } catch (err) {
        console.warn('[OfflineData] savePurchaseInvoice online failed, queuing', err);
      }
    }

    const tempId = this.generateTempId();
    const tempRef = this.generateTempRef();

    if (invoiceWithItems.invoice) {
      invoiceWithItems.invoice.pay_id = invoiceWithItems.invoice.pay_id || tempId;
      invoiceWithItems.invoice.pay_ref = invoiceWithItems.invoice.pay_ref || tempRef;
    }

    await this.syncQueue.enqueue({
      operationType: 'CREATE',
      entityType: 'PURCHASE',
      endpoint: 'perch/createWithItems.php',
      method: 'POST',
      payload: invoiceWithItems,
      tempId,
      description: 'حفظ فاتورة مشتريات'
    });

    await this.showQueuedToast();
    return { success: true, isQueued: true, tempId };
  }

  /** Update purchase invoice */
  async updatePurchaseInvoice(invoiceWithItems: any): Promise<OfflineWriteResult> {
    if (this.networkService.isOnline) {
      try {
        const response: any = await this.api.updatePerchInvoWithItems(invoiceWithItems).toPromise();
        return { success: true, isQueued: false, response };
      } catch (err) {
        console.warn('[OfflineData] updatePurchaseInvoice online failed, queuing', err);
      }
    }

    await this.syncQueue.enqueue({
      operationType: 'UPDATE',
      entityType: 'PURCHASE',
      endpoint: 'perch/updateWithItems.php',
      method: 'POST',
      payload: invoiceWithItems,
      tempId: null,
      description: 'تحديث فاتورة مشتريات'
    });

    await this.showQueuedToast();
    return { success: true, isQueued: true };
  }

  /** Save accounting transaction */
  async saveTransaction(transactionData: any): Promise<OfflineWriteResult> {
    if (this.networkService.isOnline) {
      try {
        const response: any = await this.api.createFullTransaction(transactionData).toPromise();
        return { success: true, isQueued: false, response };
      } catch (err) {
        console.warn('[OfflineData] saveTransaction online failed, queuing', err);
      }
    }

    const tempId = this.generateTempId();

    if (transactionData.journal) {
      transactionData.journal.j_id = transactionData.journal.j_id || tempId;
    }

    await this.syncQueue.enqueue({
      operationType: 'CREATE',
      entityType: 'TRANSACTION',
      endpoint: 'journal/createTransaction.php',
      method: 'POST',
      payload: transactionData,
      tempId,
      description: 'حفظ سند محاسبي'
    });

    await this.showQueuedToast();
    return { success: true, isQueued: true, tempId };
  }

  // ─── Pre-caching ───────────────────────────────────────

  /** Pre-cache all reference data for offline use */
  async preCacheReferenceData(storeId: any, yearId: any): Promise<void> {
    if (!this.shouldAttemptFetch()) return;

    try {
      // Fetch all in parallel
      await Promise.all([
        this.getItems(storeId, yearId),
        this.getAccounts(storeId, yearId, 1),  // Sales accounts
        this.getAccounts(storeId, yearId, 2),  // Purchase accounts
        this.getAllAccounts(storeId, yearId),
      ]);
      console.log('[OfflineData] Reference data pre-cached successfully');
    } catch (err) {
      console.warn('[OfflineData] Pre-caching partially failed:', err);
    }
  }

  // ─── Helpers ───────────────────────────────────────────

  private async showQueuedToast() {
    const toast = await this.toastCtrl.create({
      message: 'تم حفظ العملية للمزامنة لاحقاً',
      duration: 3000,
      position: 'top',
      color: 'warning',
      icon: 'cloud-offline-outline'
    });
    await toast.present();
  }
}
