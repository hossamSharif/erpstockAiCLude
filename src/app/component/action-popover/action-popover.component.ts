import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-action-popover',
  templateUrl: './action-popover.component.html',
  styleUrls: ['./action-popover.component.scss'],
})
export class ActionPopoverComponent  {

 constructor(private popoverController: PopoverController) { }



  selectAction(action: string) {
    this.popoverController.dismiss({
      action: action
    });
  }

  closePopover() {
    this.popoverController.dismiss();
  }
}
