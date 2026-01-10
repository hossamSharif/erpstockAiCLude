import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

export enum DraftType {
  SALES = 'SALES',
  PURCHASE = 'PURCHASE',
  PURCHASE_ORDER = 'PURCHASE_ORDER'
}

export interface DraftData {
  payInvo: any;
  itemList: any[];
  selectedAccount: any;
  radioVal2?: number;
  status?: string;
  discountType?: string;
  discountAmount?: number;
  calculatedDiscountPerc?: number;
  calculatedDiscountAmount?: number;
  savedAt: number;
  userId: any;
  storeId: any;
  yearId: any;
}

@Injectable({
  providedIn: 'root'
})
export class DraftService {
  private storage: Storage | null = null;
  private isInitialized = false;

  constructor(private storageInstance: Storage) {}

  async initialize(): Promise<void> {
    if (this.isInitialized) {
      return;
    }
    this.storage = await this.storageInstance.create();
    this.isInitialized = true;
  }

  private getStorageKey(type: DraftType, userId: any, storeId: any): string {
    return `DRAFT_${type}_${userId}_${storeId}`;
  }

  async saveDraft(type: DraftType, data: DraftData): Promise<boolean> {
    try {
      if (!this.storage) {
        await this.initialize();
      }

      if (!data.itemList || data.itemList.length === 0) {
        return false;
      }

      if (!data.selectedAccount || !data.selectedAccount.id) {
        return false;
      }

      data.savedAt = Date.now();

      const key = this.getStorageKey(type, data.userId, data.storeId);
      await this.storage.set(key, data);
      return true;
    } catch (error) {
      console.error('Error saving draft:', error);

      if (error.name === 'QuotaExceededError') {
        await this.cleanupOldDrafts();
        try {
          const key = this.getStorageKey(type, data.userId, data.storeId);
          await this.storage.set(key, data);
          return true;
        } catch (retryError) {
          console.error('Error saving draft after cleanup:', retryError);
          return false;
        }
      }
      return false;
    }
  }

  async loadDraft(type: DraftType, userId: any, storeId: any): Promise<DraftData | null> {
    try {
      if (!this.storage) {
        await this.initialize();
      }

      const key = this.getStorageKey(type, userId, storeId);
      const draft = await this.storage.get(key);

      if (!draft) {
        return null;
      }

      const thirtyDaysAgo = Date.now() - (30 * 24 * 60 * 60 * 1000);
      if (draft.savedAt < thirtyDaysAgo) {
        await this.deleteDraft(type, userId, storeId);
        return null;
      }

      return draft;
    } catch (error) {
      console.error('Error loading draft:', error);
      return null;
    }
  }

  async deleteDraft(type: DraftType, userId: any, storeId: any): Promise<boolean> {
    try {
      if (!this.storage) {
        await this.initialize();
      }

      const key = this.getStorageKey(type, userId, storeId);
      await this.storage.remove(key);
      return true;
    } catch (error) {
      console.error('Error deleting draft:', error);
      return false;
    }
  }

  async hasDraft(type: DraftType, userId: any, storeId: any): Promise<boolean> {
    try {
      if (!this.storage) {
        await this.initialize();
      }

      const key = this.getStorageKey(type, userId, storeId);
      const draft = await this.storage.get(key);
      return draft !== null && draft !== undefined;
    } catch (error) {
      console.error('Error checking for draft:', error);
      return false;
    }
  }

  getLastSaveTime(timestamp: number): string {
    const now = Date.now();
    const diff = now - timestamp;

    const seconds = Math.floor(diff / 1000);
    const minutes = Math.floor(diff / 60000);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (seconds < 60) {
      return 'الآن';
    }
    if (minutes < 2) {
      return 'منذ دقيقة';
    }
    if (minutes < 60) {
      return `منذ ${minutes} دقيقة`;
    }
    if (hours < 2) {
      return 'منذ ساعة';
    }
    if (hours < 24) {
      return `منذ ${hours} ساعة`;
    }
    if (days < 2) {
      return 'منذ يوم';
    }
    return `منذ ${days} يوم`;
  }

  getDraftAge(timestamp: number): { days: number; hours: number; minutes: number } {
    const now = Date.now();
    const diff = now - timestamp;

    const minutes = Math.floor(diff / 60000);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    return { days, hours, minutes };
  }

  private async cleanupOldDrafts(): Promise<void> {
    try {
      if (!this.storage) {
        await this.initialize();
      }

      const sevenDaysAgo = Date.now() - (7 * 24 * 60 * 60 * 1000);
      const keys = await this.storage.keys();

      for (const key of keys) {
        if (key.startsWith('DRAFT_')) {
          const draft = await this.storage.get(key);
          if (draft && draft.savedAt && draft.savedAt < sevenDaysAgo) {
            await this.storage.remove(key);
            console.log(`Cleaned up old draft: ${key}`);
          }
        }
      }
    } catch (error) {
      console.error('Error cleaning up old drafts:', error);
    }
  }
}
