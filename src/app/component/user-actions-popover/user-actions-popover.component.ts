import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-actions-popover',
  templateUrl: './user-actions-popover.component.html',
  styleUrls: ['./user-actions-popover.component.scss'],
})
export class UserActionsPopoverComponent implements OnInit {

  constructor(
    private popoverController: PopoverController,
    private router: Router
  ) { }

  ngOnInit() {}

  navigateToProfile() {
    this.popoverController.dismiss();
    this.router.navigate(['/folder/profile']);
  }

  navigateToCategories() {
    this.popoverController.dismiss();
    this.router.navigate(['/folder/categories']);
  }

  logout() {
    this.popoverController.dismiss();
    this.router.navigate(['/folder/login']);
  }

}