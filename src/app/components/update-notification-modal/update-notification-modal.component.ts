import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { UpdateService, AppUpdate } from '../../services/update.service';

@Component({
  selector: 'app-update-notification-modal',
  templateUrl: './update-notification-modal.component.html',
  styleUrls: ['./update-notification-modal.component.scss'],
})
export class UpdateNotificationModalComponent implements OnInit {
  @Input() update: AppUpdate;
  isUpdating: boolean = false;

  constructor(
    private modalController: ModalController,
    private updateService: UpdateService
  ) {}

  ngOnInit() {
    console.log('Update modal initialized with:', this.update);
  }

  /**
   * Mark update as seen, show loading spinner, then force-clear SW cache and reload.
   * The modal stays visible during reload — the page reload dismisses everything.
   */
  async closeAndRefresh() {
    this.isUpdating = true;
    await this.updateService.markUpdateAsSeen(this.update.version);
    await this.updateService.forceUpdateAndReload();
  }

  /**
   * Dismiss the modal without reloading (user chose "Later").
   * Marks the update as seen so the modal won't appear again this session.
   */
  async dismissLater() {
    await this.updateService.markUpdateAsSeen(this.update.version);
    await this.modalController.dismiss();
  }
}
