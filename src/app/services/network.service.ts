import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, Observable, Subscription, interval } from 'rxjs';
import { distinctUntilChanged, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { ServicesService } from '../stockService/services.service';

export type NetworkStatus = 'online' | 'offline' | 'checking';

@Injectable({
  providedIn: 'root'
})
export class NetworkService implements OnDestroy {
  private statusSubject: BehaviorSubject<NetworkStatus>;
  private pendingCountSubject = new BehaviorSubject<number>(0);
  private checkInterval: Subscription;
  private CHECK_INTERVAL_MS = 15000;
  private boundOnline = () => this.onBrowserOnline();
  private boundOffline = () => this.onBrowserOffline();

  status$: Observable<NetworkStatus>;
  isOnline$: Observable<boolean>;
  pendingCount$ = this.pendingCountSubject.asObservable();

  get isOnline(): boolean {
    return this.statusSubject.value === 'online';
  }

  get currentStatus(): NetworkStatus {
    return this.statusSubject.value;
  }

  constructor(
    private http: HttpClient,
    private api: ServicesService
  ) {
    // Trust navigator.onLine for the initial state — don't start as 'checking'
    // This prevents blocking data loads while waiting for HEAD verification
    const initialStatus: NetworkStatus = navigator.onLine ? 'online' : 'offline';
    this.statusSubject = new BehaviorSubject<NetworkStatus>(initialStatus);
    this.status$ = this.statusSubject.asObservable();
    this.isOnline$ = this.statusSubject.pipe(
      map(s => s === 'online'),
      distinctUntilChanged()
    );

    this.initialize();
  }

  private initialize() {
    // Browser online/offline events
    window.addEventListener('online', this.boundOnline);
    window.addEventListener('offline', this.boundOffline);

    // Delayed first verification — give ServicesService time to initialize its endpoint
    // from localStorage before we try to reach it
    setTimeout(() => {
      if (navigator.onLine) {
        this.verifyConnection();
      }
    }, 5000);

    // Periodic check every 15s
    this.checkInterval = interval(this.CHECK_INTERVAL_MS).subscribe(() => {
      if (navigator.onLine) {
        this.verifyConnection();
      } else {
        this.statusSubject.next('offline');
      }
    });
  }

  private onBrowserOnline() {
    // Immediately trust the browser event — set online right away
    this.statusSubject.next('online');
    // Then verify in background (won't downgrade if server is reachable)
    this.verifyConnection();
  }

  private onBrowserOffline() {
    this.statusSubject.next('offline');
  }

  /** Verify actual API reachability using a lightweight GET to a known endpoint */
  private verifyConnection() {
    const apiUrl = this.api.api;
    if (!apiUrl) return;

    // Use a lightweight GET to item_categories/read.php (known to exist)
    // with a short timeout. Any response (even error with status > 0) means server is up.
    this.http.get(apiUrl + 'item_categories/read.php', {
      observe: 'response',
      responseType: 'text'
    }).subscribe(
      () => {
        this.statusSubject.next('online');
      },
      (err) => {
        // Any HTTP status code > 0 means server responded (even 400/403/404/500)
        if (err.status && err.status > 0) {
          this.statusSubject.next('online');
        } else {
          // status=0 means no response at all (network unreachable, CORS preflight block on offline)
          // Only mark offline if browser also says offline
          if (!navigator.onLine) {
            this.statusSubject.next('offline');
          }
          // If navigator.onLine but status=0, likely a CORS issue — keep current state
        }
      }
    );
  }

  /** Manually trigger a connectivity check */
  forceCheck() {
    if (navigator.onLine) {
      this.statusSubject.next('online');
      this.verifyConnection();
    } else {
      this.statusSubject.next('offline');
    }
  }

  /** Update pending sync count (called by SyncQueueService) */
  updatePendingCount(count: number) {
    this.pendingCountSubject.next(count);
  }

  ngOnDestroy() {
    if (this.checkInterval) {
      this.checkInterval.unsubscribe();
    }
    window.removeEventListener('online', this.boundOnline);
    window.removeEventListener('offline', this.boundOffline);
  }
}
