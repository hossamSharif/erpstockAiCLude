import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

export interface CachedData<T> {
  data: T;
  cachedAt: number;
  ttlMs: number;
}

/** TTL constants in milliseconds */
export const CACHE_TTL = {
  ITEMS: 24 * 60 * 60 * 1000,       // 24 hours
  ACCOUNTS: 12 * 60 * 60 * 1000,    // 12 hours
  INVOICES: 4 * 60 * 60 * 1000,     // 4 hours
  CATEGORIES: 24 * 60 * 60 * 1000,  // 24 hours
  ID_MAP: 30 * 24 * 60 * 60 * 1000, // 30 days
};

@Injectable({
  providedIn: 'root'
})
export class OfflineStoreService {
  private storage: Storage | null = null;
  private isInitialized = false;

  constructor(private storageInstance: Storage) {}

  async initialize(): Promise<void> {
    if (this.isInitialized) return;
    this.storage = await this.storageInstance.create();
    this.isInitialized = true;
  }

  private async ensureStorage(): Promise<Storage> {
    if (!this.storage) {
      await this.initialize();
    }
    return this.storage!;
  }

  // ─── Key Helpers ───────────────────────────────────────

  itemsKey(storeId: any, yearId?: any): string {
    return `OFFLINE_ITEMS_${storeId}${yearId ? '_' + yearId : ''}`;
  }

  accountsKey(storeId: any, yearId: any, acId?: any): string {
    return `OFFLINE_ACCOUNTS_${storeId}_${yearId}${acId ? '_' + acId : ''}`;
  }

  allAccountsKey(storeId: any, yearId: any): string {
    return `OFFLINE_ALL_ACCOUNTS_${storeId}_${yearId}`;
  }

  invoicesKey(storeId: any, type: 'SALES' | 'PURCHASE'): string {
    return `OFFLINE_INVOICES_${type}_${storeId}`;
  }

  journalsKey(storeId: any): string {
    return `OFFLINE_JOURNALS_${storeId}`;
  }

  syncQueueKey(): string {
    return 'OFFLINE_SYNC_QUEUE';
  }

  idMapKey(): string {
    return 'OFFLINE_ID_MAP';
  }

  // ─── Cache Operations ──────────────────────────────────

  async setCache<T>(key: string, data: T, ttlMs: number): Promise<void> {
    const store = await this.ensureStorage();
    const cached: CachedData<T> = {
      data,
      cachedAt: Date.now(),
      ttlMs
    };
    await store.set(key, cached);
  }

  async getCache<T>(key: string): Promise<T | null> {
    const store = await this.ensureStorage();
    const cached: CachedData<T> | null = await store.get(key);
    if (!cached) return null;

    const isExpired = Date.now() - cached.cachedAt > cached.ttlMs;
    if (isExpired) return null;

    return cached.data;
  }

  /** Returns data even if TTL expired, plus a freshness flag */
  async getCacheEvenIfStale<T>(key: string): Promise<{ data: T; isStale: boolean; cachedAt: number } | null> {
    const store = await this.ensureStorage();
    const cached: CachedData<T> | null = await store.get(key);
    if (!cached) return null;

    const isStale = Date.now() - cached.cachedAt > cached.ttlMs;
    return { data: cached.data, isStale, cachedAt: cached.cachedAt };
  }

  async removeCache(key: string): Promise<void> {
    const store = await this.ensureStorage();
    await store.remove(key);
  }

  // ─── Raw Storage (for queue / id-map) ──────────────────

  async setRaw<T>(key: string, data: T): Promise<void> {
    const store = await this.ensureStorage();
    await store.set(key, data);
  }

  async getRaw<T>(key: string): Promise<T | null> {
    const store = await this.ensureStorage();
    return await store.get(key);
  }

  async removeRaw(key: string): Promise<void> {
    const store = await this.ensureStorage();
    await store.remove(key);
  }

  // ─── ID Mapping ────────────────────────────────────────

  async setIdMapping(tempId: string, serverId: any): Promise<void> {
    const store = await this.ensureStorage();
    const key = this.idMapKey();
    const map: Record<string, { serverId: any; createdAt: number }> = (await store.get(key)) || {};
    map[tempId] = { serverId, createdAt: Date.now() };
    await store.set(key, map);
  }

  async getServerId(tempId: string): Promise<any | null> {
    const store = await this.ensureStorage();
    const key = this.idMapKey();
    const map: Record<string, { serverId: any; createdAt: number }> = (await store.get(key)) || {};
    const entry = map[tempId];
    if (!entry) return null;

    // Expire after 30 days
    if (Date.now() - entry.createdAt > CACHE_TTL.ID_MAP) {
      delete map[tempId];
      await store.set(key, map);
      return null;
    }
    return entry.serverId;
  }

  async getAllIdMappings(): Promise<Record<string, any>> {
    const store = await this.ensureStorage();
    const key = this.idMapKey();
    const map: Record<string, { serverId: any; createdAt: number }> = (await store.get(key)) || {};
    const result: Record<string, any> = {};
    for (const [tempId, entry] of Object.entries(map)) {
      result[tempId] = entry.serverId;
    }
    return result;
  }

  /** Clean up expired ID mappings */
  async cleanupIdMappings(): Promise<void> {
    const store = await this.ensureStorage();
    const key = this.idMapKey();
    const map: Record<string, { serverId: any; createdAt: number }> = (await store.get(key)) || {};
    const now = Date.now();
    let changed = false;
    for (const [tempId, entry] of Object.entries(map)) {
      if (now - entry.createdAt > CACHE_TTL.ID_MAP) {
        delete map[tempId];
        changed = true;
      }
    }
    if (changed) {
      await store.set(key, map);
    }
  }
}
