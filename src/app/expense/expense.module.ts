import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ExpensePageRoutingModule } from './expense-routing.module';
import { ExpensePage } from './expense.page';
import { SharedModule } from '../module/shared/shared.module';
import { AddExpenseCategoryModalComponent } from '../components/add-expense-category-modal/add-expense-category-modal.component';

@NgModule({
  imports: [
    TranslateModule,
    CommonModule,
    FormsModule,
    IonicModule,
    ExpensePageRoutingModule,
    SharedModule
  ],
  declarations: [ExpensePage, AddExpenseCategoryModalComponent]
})
export class ExpensePageModule {}
