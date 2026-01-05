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
}
