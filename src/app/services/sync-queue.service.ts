import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { OfflineStoreService } from './offline-store.service';
import { NetworkService } from './network.service';

export type OperationType = 'CREATE' | 'UPDATE' | 'DELETE';
export type EntityType = 'SALE' | 'SALE_INIT' | 'PURCHASE' | 'TRANSACTION';
export type QueueItemStatus = 'pending' | 'processing' | 'completed' | 'failed';

export interface SyncQueueItem {
  id: string;
  operationType: OperationType;
  entityType: EntityType;
  endpoint: string;
  method: 'POST' | 'PUT' | 'DELETE';
  payload: any;
  tempId: string | null;
  timestamp: number;
  retryCount: number;
  status: QueueItemStatus;
  description: string; // Arabic text for UI
  errorMessage?: string;
}

@Injectable({
  providedIn: 'root'
})
export class SyncQueueService {
  queue$ = new BehaviorSubject<SyncQueueItem[]>([]);
  private isInitialized = false;

  constructor(
    private offlineStore: OfflineStoreService,
    private networkService: NetworkService
  ) {}

  async initialize(): Promise<void> {
    if (this.isInitialized) return;
    await this.offlineStore.initialize();
    const queue = await this.loadQueue();
    this.queue$.next(queue);
    this.updatePendingCount();
    this.isInitialized = true;
  }

  private async loadQueue(): Promise<SyncQueueItem[]> {
    const key = this.offlineStore.syncQueueKey();
    const queue = await this.offlineStore.getRaw<SyncQueueItem[]>(key);
    return queue || [];
  }

  private async persistQueue(queue: SyncQueueItem[]): Promise<void> {
    const key = this.offlineStore.syncQueueKey();
    await this.offlineStore.setRaw(key, queue);
    this.queue$.next(queue);
    this.updatePendingCount();
  }

  private updatePendingCount() {
    const pending = this.queue$.value.filter(
      item => item.status === 'pending' || item.status === 'processing'
    ).length;
    this.networkService.updatePendingCount(pending);
  }

  private generateId(): string {
    return 'sq_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
  }

  /** Add a new operation to the queue */
  async enqueue(item: Omit<SyncQueueItem, 'id' | 'timestamp' | 'retryCount' | 'status'>): Promise<SyncQueueItem> {
    await this.initialize();
    const queueItem: SyncQueueItem = {
      ...item,
      id: this.generateId(),
      timestamp: Date.now(),
      retryCount: 0,
      status: 'pending'
    };

    const queue = [...this.queue$.value, queueItem];
    await this.persistQueue(queue);
    console.log('[SyncQueue] Enqueued:', queueItem.description, queueItem.id);
    return queueItem;
  }

  /** Get the next pending item (FIFO) */
  async dequeue(): Promise<SyncQueueItem | null> {
    await this.initialize();
    const queue = this.queue$.value;
    const next = queue.find(item => item.status === 'pending');
    if (!next) return null;

    // Mark as processing
    next.status = 'processing';
    await this.persistQueue([...queue]);
    return next;
  }

  /** Mark an item as successfully completed */
  async markCompleted(itemId: string): Promise<void> {
    const queue = this.queue$.value.filter(item => item.id !== itemId);
    await this.persistQueue(queue);
    console.log('[SyncQueue] Completed:', itemId);
  }

  /** Mark an item as failed */
  async markFailed(itemId: string, errorMessage?: string): Promise<void> {
    const queue = this.queue$.value.map(item => {
      if (item.id === itemId) {
        return {
          ...item,
          status: 'failed' as QueueItemStatus,
          retryCount: item.retryCount + 1,
          errorMessage
        };
      }
      return item;
    });
    await this.persistQueue(queue);
    console.log('[SyncQueue] Failed:', itemId, errorMessage);
  }

  /** Reset a failed item back to pending for retry */
  async resetForRetry(itemId: string): Promise<void> {
    const queue = this.queue$.value.map(item => {
      if (item.id === itemId) {
        return { ...item, status: 'pending' as QueueItemStatus };
      }
      return item;
    });
    await this.persistQueue(queue);
  }

  /** Remove an item from the queue entirely */
  async removeItem(itemId: string): Promise<void> {
    const queue = this.queue$.value.filter(item => item.id !== itemId);
    await this.persistQueue(queue);
    console.log('[SyncQueue] Removed:', itemId);
  }

  /** Get count of pending/processing items */
  getPendingCount(): number {
    return this.queue$.value.filter(
      item => item.status === 'pending' || item.status === 'processing'
    ).length;
  }

  /** Get all pending items */
  getPendingItems(): SyncQueueItem[] {
    return this.queue$.value.filter(item => item.status === 'pending');
  }

  /** Get all failed items */
  getFailedItems(): SyncQueueItem[] {
    return this.queue$.value.filter(item => item.status === 'failed');
  }

  /** Clear all completed items */
  async clearCompleted(): Promise<void> {
    const queue = this.queue$.value.filter(item => item.status !== 'completed');
    await this.persistQueue(queue);
  }

  /** Clear entire queue (use with caution) */
  async clearAll(): Promise<void> {
    await this.persistQueue([]);
  }
}
