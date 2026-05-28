import { AfterViewInit, ChangeDetectorRef, Component, Input, NgZone, OnDestroy } from '@angular/core';
import { IonContent } from '@ionic/angular';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-scroll-to-top-fab',
  templateUrl: './scroll-to-top-fab.component.html',
  styleUrls: ['./scroll-to-top-fab.component.scss'],
})
export class ScrollToTopFabComponent implements AfterViewInit, OnDestroy {
  @Input() content!: IonContent;
  @Input() threshold = 150;

  visible = false;
  private scrollSub?: Subscription;

  constructor(private cdr: ChangeDetectorRef, private zone: NgZone) {}

  ngAfterViewInit() {
    if (!this.content) { return; }
    // Ionic's ionScroll only fires when scrollEvents is enabled on ion-content.
    // Force it on from here so the host page template doesn't have to.
    (this.content as any).scrollEvents = true;
    this.scrollSub = (this.content.ionScroll as any).subscribe((ev: any) => {
      const top = ev?.detail?.scrollTop ?? 0;
      const next = top > this.threshold;
      if (next !== this.visible) {
        this.zone.run(() => {
          this.visible = next;
          this.cdr.markForCheck();
        });
      }
    });
  }

  ngOnDestroy() {
    this.scrollSub?.unsubscribe();
  }

  // Kept so existing (ionScroll)="scrollFab.onScroll($event)" bindings in page
  // templates remain valid; the real work is done via internal subscription.
  onScroll(_ev: Event) {}

  async scrollToTop() {
    await this.content?.scrollToTop(400);
  }
}
