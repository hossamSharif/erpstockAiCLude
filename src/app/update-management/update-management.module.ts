import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { UpdateManagementPageRoutingModule } from './update-management-routing.module';
import { UpdateManagementPage } from './update-management.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateManagementPageRoutingModule
  ],
  declarations: [UpdateManagementPage]
})
export class UpdateManagementPageModule {}
