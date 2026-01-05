import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UpdateManagementPage } from './update-management.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateManagementPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateManagementPageRoutingModule {}
