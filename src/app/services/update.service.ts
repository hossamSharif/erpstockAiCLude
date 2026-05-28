import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

export interface AppUpdate {
  id: number;
  version: string;
  title: string;
  description: string;
  features: string[];
  is_active: number;
  priority: number;
  created_at: string;
}

@Injectable({
  providedIn: 'root'
})
export class UpdateService {
  private SEEN_UPDATES_KEY = 'SEEN_APP_UPDATES';
  private LATEST_VERSION_KEY = 'LATEST_APP_VERSION';
  private apiUrl = 'https://erp.gvstech.net/myapiAi/api/app_updates/';

  constructor(
    private http: HttpClient,
    private storage: Storage
  ) {}

  /**
   * Initialize storage
   */
  async initialize() {
    await this.storage.create();
  }

  /**
   * Get latest update from server
   * @returns Observable<AppUpdate | null>
   */
  getLatestUpdate(): Observable<AppUpdate | null> {
    return this.http.get<any>(this.apiUrl + 'get-latest.php').pipe(
      map(response => {
        // Check if response has version (means update exists)
        if (response && response.version) {
          return response as AppUpdate;
        }
        return null;
      }),
      catchError(error => {
        console.error('Error fetching latest update:', error);
        return of(null);
      })
    );
  }

  /**
   * Check if there's a new update that user hasn't seen
   * @returns Promise<AppUpdate | null>
   */
  async checkForUpdate(): Promise<AppUpdate | null> {
    try {
      const update = await this.getLatestUpdate().toPromise();

      if (!update) {
        return null;
      }

      const seenUpdates = await this.getSeenUpdates();

      // Check if user has already seen this update
      if (seenUpdates.includes(update.version)) {
        return null;
      }

      return update;
    } catch (error) {
      console.error('Error checking for updates:', error);
      return null;
    }
  }

  /**
   * Mark update as seen by storing version in local storage
   * @param version Update version number
   */
  async markUpdateAsSeen(version: string): Promise<void> {
    const seenUpdates = await this.getSeenUpdates();

    if (!seenUpdates.includes(version)) {
      seenUpdates.push(version);
      await this.storage.set(this.SEEN_UPDATES_KEY, seenUpdates);
    }
  }

  /**
   * Get list of seen updates from local storage
   * @returns Promise<string[]>
   */
  private async getSeenUpdates(): Promise<string[]> {
    const seen = await this.storage.get(this.SEEN_UPDATES_KEY);
    return seen || [];
  }

  /**
   * Clear all seen updates (for testing)
   */
  async clearSeenUpdates(): Promise<void> {
    await this.storage.remove(this.SEEN_UPDATES_KEY);
  }

  /**
   * Refresh the app to apply new version
   */
  refreshApp(): void {
    window.location.reload();
  }

  /**
   * Force-clear all service worker caches and reload.
   * This ensures the new version loads on the first reload
   * instead of requiring multiple refreshes.
   */
  async forceUpdateAndReload(): Promise<void> {
    try {
      // 1. Unregister all service workers
      if ('serviceWorker' in navigator) {
        const registrations = await navigator.serviceWorker.getRegistrations();
        await Promise.all(registrations.map(r => r.unregister()));
      }

      // 2. Clear all Cache Storage entries
      if ('caches' in window) {
        const cacheNames = await caches.keys();
        await Promise.all(cacheNames.map(name => caches.delete(name)));
      }

      // 3. Hard reload (bypasses browser cache)
      window.location.reload();
    } catch (error) {
      console.error('Error during force update:', error);
      // Fallback to plain reload
      window.location.reload();
    }
  }

  /**
   * Fetch the latest active version from the API and cache it in storage.
   * Returns the version string (e.g. '1.0.5') or fallback '1.0.3'.
   */
  async fetchAndStoreLatestVersion(): Promise<string> {
    try {
      const update = await this.getLatestUpdate().toPromise();
      if (update && update.version) {
        await this.storage.set(this.LATEST_VERSION_KEY, update.version);
        return update.version;
      }
    } catch (error) {
      console.error('Error fetching latest version:', error);
    }
    return this.getStoredVersion();
  }

  /**
   * Read the cached latest version from storage.
   * Returns '1.0.3' as a fallback if nothing is stored.
   */
  async getStoredVersion(): Promise<string> {
    try {
      const version = await this.storage.get(this.LATEST_VERSION_KEY);
      return version || '1.0.3';
    } catch {
      return '1.0.3';
    }
  }
}
