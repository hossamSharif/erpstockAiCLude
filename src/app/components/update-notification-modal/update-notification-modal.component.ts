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

  constructor(
    private modalController: ModalController,
    private updateService: UpdateService
  ) {}

  ngOnInit() {
    console.log('Update modal initialized with:', this.update);
  }

  /**
   * Close modal, mark update as seen, and refresh app
   */
  async closeAndRefresh() {
    // Mark this update as seen so it won't show again
    await this.updateService.markUpdateAsSeen(this.update.version);

    // Close the modal
    await this.modalController.dismiss();

    // Refresh app to apply new version
    setTimeout(() => {
      this.updateService.refreshApp();
    }, 300);
  }
}
