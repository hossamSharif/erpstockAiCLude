import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule, Routes } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { RecurringObligationsPage } from './recurring-obligations.page';
import { AccountDropdownSelectorComponent } from '../component/account-dropdown-selector/account-dropdown-selector.component';

const routes: Routes = [
  {
    path: '',
    component: RecurringObligationsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RecurringObligationsPage, AccountDropdownSelectorComponent]
})
export class RecurringObligationsPageModule {}
