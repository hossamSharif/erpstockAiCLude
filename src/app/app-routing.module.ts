import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGaurdService } from './auth/auth-gaurd.service';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'analytics-dashboard',
    pathMatch: 'full'
  },
  {
    path: 'folder/login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'folder',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule),
    canActivate: [AuthGaurdService]
  },
  {
    path: 'folder/sales',
    loadChildren: () => import('./sales/sales.module').then( m => m.SalesPageModule),
    canActivate: [AuthGaurdService]
  },
  {
    path: 'folder/sales-record',
    loadChildren: () => import('./sales-record/sales-record.module').then( m => m.SalesRecordPageModule),
    canActivate: [AuthGaurdService]
  },
  {
    path: 'folder/sales-return',
    loadChildren: () => import('./sales-return/sales-return.module').then( m => m.SalesReturnPageModule),
    canActivate: [AuthGaurdService]
  },
  {
    path: 'folder/edit-sales-return',
    loadChildren: () => import('./edit-sales-return/edit-sales-return.module').then( m => m.EditSalesReturnPageModule),
    canActivate: [AuthGaurdService]
  },
  {
    path: 'folder/purchase',
    loadChildren: () => import('./purchase/purchase.module').then( m => m.PurchasePageModule),
    canActivate: [AuthGaurdService]
  },
  {
    path: 'folder/purchase-record',
    loadChildren: () => import('./purchase-record/purchase-record.module').then( m => m.PurchaseRecordPageModule),
    canActivate: [AuthGaurdService]
  },
  {
    path: 'folder/purchase-return',
    loadChildren: () => import('./purchase-return/purchase-return.module').then( m => m.PurchaseReturnPageModule),
    canActivate: [AuthGaurdService]
  },
  {
    path: 'folder/edit-purchase-return',
    loadChildren: () => import('./edit-purchase-return/edit-purchase-return.module').then( m => m.EditPurchaseReturnPageModule),
    canActivate: [AuthGaurdService]
  },
  {
    path: 'folder/spends',
    loadChildren: () => import('./spends/spends.module').then( m => m.SpendsPageModule),
    canActivate: [AuthGaurdService]
  },
  {
    path: 'folder/spends-recod',
    loadChildren: () => import('./spends-recod/spends-recod.module').then( m => m.SpendsRecodPageModule),
    canActivate: [AuthGaurdService]
  },
  {
    path: 'folder/items',
    loadChildren: () => import('./items/items.module').then( m => m.ItemsPageModule),
    canActivate: [AuthGaurdService]
  },
  {
    path: 'item-modal',
    loadChildren: () => import('./item-modal/item-modal.module').then( m => m.ItemModalPageModule),
    canActivate: [AuthGaurdService]
  },
  {
    path: 'folder/sub-account',
    loadChildren: () => import('./sub-account/sub-account.module').then( m => m.SubAccountPageModule),
    canActivate: [AuthGaurdService]
  },
  {
    path: 'folder/edit-sales',
    loadChildren: () => import('./edit-sales/edit-sales.module').then( m => m.EditSalesPageModule),
    canActivate: [AuthGaurdService]
  },
  {
    path: 'print-modal',
    loadChildren: () => import('./print-modal/print-modal.module').then( m => m.PrintModalPageModule),
    canActivate: [AuthGaurdService]
  },
  {
    path: 'folder/edit-perch',
    loadChildren: () => import('./edit-perch/edit-perch.module').then( m => m.EditPerchPageModule),
    canActivate: [AuthGaurdService]
  },
  {
    path: 'items-serarch',
    loadChildren: () => import('./items-serarch/items-serarch.module').then( m => m.ItemsSerarchPageModule),
    canActivate: [AuthGaurdService]
  },
  {
    path: 'fristq',
    loadChildren: () => import('./fristq/fristq.module').then( m => m.FristqPageModule),
    canActivate: [AuthGaurdService]
  },
  {
    path: 'folder/firstq-modal',
    loadChildren: () => import('./firstq-modal/firstq-modal.module').then( m => m.FirstqModalPageModule),
    canActivate: [AuthGaurdService]
  },
  {
    path: 'folder/settings',
    loadChildren: () => import('./settings/settings.module').then( m => m.SettingsPageModule),
    canActivate: [AuthGaurdService]
  },
  {
    path: 'folder/profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule),
    canActivate: [AuthGaurdService]
  },
  {
    path: 'folder/items-report',
    loadChildren: () => import('./items-report/items-report.module').then( m => m.ItemsReportPageModule),
    canActivate: [AuthGaurdService]
  },
  {
    path: 'folder/balance-sheet',
    loadChildren: () => import('./balance-sheet/balance-sheet.module').then( m => m.BalanceSheetPageModule),
    canActivate: [AuthGaurdService]
  },
  {
    path: 'folder/statement',
    loadChildren: () => import('./statement/statement.module').then( m => m.StatementPageModule),
    canActivate: [AuthGaurdService]
  },
  {
    path: 'account-modal',
    loadChildren: () => import('./account-modal/account-modal.module').then( m => m.AccountModalPageModule),
    canActivate: [AuthGaurdService]
  },
  {
    path: 'folder/account-tree',
    loadChildren: () => import('./account-tree/account-tree.module').then( m => m.AccountTreePageModule),
    canActivate: [AuthGaurdService]
  },
  {
    path: 'folder/cash',
    loadChildren: () => import('./cash/cash.module').then( m => m.CashPageModule),
    canActivate: [AuthGaurdService]
  },
  {
    path: 'folder/cash2',
    loadChildren: () => import('./cash2/cash2.module').then( m => m.Cash2PageModule),
    canActivate: [AuthGaurdService]
  },
  {
    path: 'folder/statement2',
    loadChildren: () => import('./statement2/statement2.module').then( m => m.Statement2PageModule),
    canActivate: [AuthGaurdService]
  },
  {
    path: 'folder/spend-record2',
    loadChildren: () => import('./spend-record2/spend-record2.module').then( m => m.SpendRecord2PageModule),
    canActivate: [AuthGaurdService]
  },
  {
    path: 'folder/balance-sheet2',
    loadChildren: () => import('./balance-sheet2/balance-sheet2.module').then( m => m.BalanceSheet2PageModule),
    canActivate: [AuthGaurdService]
  },
  {
    path: 'folder/sub-account2',
    loadChildren: () => import('./sub-account2/sub-account2.module').then( m => m.SubAccount2PageModule),
    canActivate: [AuthGaurdService]
  },
  {
    path: 'folder/notifications',
    loadChildren: () => import('./notifications/notifications.module').then( m => m.NotificationsPageModule),
    canActivate: [AuthGaurdService]
  },
  {
    path: 'folder/cash3',
    loadChildren: () => import('./cash3/cash3.module').then( m => m.Cash3PageModule),
    canActivate: [AuthGaurdService]
  },
  {
    path: 'folder/prch-order',
    loadChildren: () => import('./prch-order/prch-order.module').then( m => m.PrchOrderPageModule),
    canActivate: [AuthGaurdService]
  },
  {
    path: 'folder/prch-order-record',
    loadChildren: () => import('./prch-order-record/prch-order-record.module').then( m => m.PrchOrderRecordPageModule),
    canActivate: [AuthGaurdService]
  },
  {
    path: 'folder/edit-prch-order',
    loadChildren: () => import('./edit-prch-order/edit-prch-order.module').then( m => m.EditPrchOrderPageModule),
    canActivate: [AuthGaurdService]
  },
  {
    path: 'folder/tswia',
    loadChildren: () => import('./tswia/tswia.module').then( m => m.TswiaPageModule),
    canActivate: [AuthGaurdService]
  },
  {
    path: 'folder/tswia-record',
    loadChildren: () => import('./tswia-record/tswia-record.module').then( m => m.TswiaRecordPageModule),
    canActivate: [AuthGaurdService]
  },
  {
    path: 'folder/edit-tswia',
    loadChildren: () => import('./edit-tswia/edit-tswia.module').then( m => m.EditTswiaPageModule),
    canActivate: [AuthGaurdService]
  },
  {
    path: 'folder/user-activity',
    loadChildren: () => import('./user-activity/user-activity.module').then( m => m.UserActivityPageModule),
    canActivate: [AuthGaurdService]
  },
  {
    path: 'folder/sales-mob',
    loadChildren: () => import('./sales-mob/sales-mob.module').then( m => m.SalesMobPageModule),
    canActivate: [AuthGaurdService]
  },
  {
    path: 'folder/purchase-mob',
    loadChildren: () => import('./purchase-mob/purchase-mob.module').then( m => m.PurchaseMobPageModule),
    canActivate: [AuthGaurdService]
  },
  {
    path: 'folder/edit-purchase-mob',
    loadChildren: () => import('./edit-purchase-mob/edit-purchase-mob.module').then( m => m.EditPurchaseMobPageModule),
    canActivate: [AuthGaurdService]
  },
  {
    path: 'folder/edit-sales-mob',
    loadChildren: () => import('./edit-sales-mob/edit-sales-mob.module').then( m => m.EditSalesMobPageModule),
    canActivate: [AuthGaurdService]
  },
  {
    path: 'folder/pos-sales',
    loadChildren: () => import('./pos-sales/pos-sales.module').then( m => m.PosSalesPageModule),
    canActivate: [AuthGaurdService]
  },
  {
    path: 'pos-reciept',
    loadChildren: () => import('./pos-reciept/pos-reciept.module').then( m => m.PosRecieptPageModule),
    canActivate: [AuthGaurdService]
  },
  {
    path: 'folder/salessnd',
    loadChildren: () => import('./salessnd/salessnd.module').then( m => m.SalessndPageModule),
    canActivate: [AuthGaurdService]
  },
  {
    path: 'folder/purchsnd',
    loadChildren: () => import('./purchsnd/purchsnd.module').then( m => m.PurchsndPageModule),
    canActivate: [AuthGaurdService]
  },
  {
    path: 'folder/purchsndrecord',
    loadChildren: () => import('./purchsndrecord/purchsndrecord.module').then( m => m.PurchsndrecordPageModule),
    canActivate: [AuthGaurdService]
  },
  {
    path: 'folder/salessndrecord',
    loadChildren: () => import('./salessndrecord/salessndrecord.module').then( m => m.SalessndrecordPageModule),
    canActivate: [AuthGaurdService]
  },
  {
    path: 'folder/editsalessnd',
    loadChildren: () => import('./editsalessnd/editsalessnd.module').then( m => m.EditsalessndPageModule),
    canActivate: [AuthGaurdService]
  },
  {
    path: 'folder/editpurchsnd',
    loadChildren: () => import('./editpurchsnd/editpurchsnd.module').then( m => m.EditpurchsndPageModule),
    canActivate: [AuthGaurdService]
  },
  {
    path: 'item-stock',
    loadChildren: () => import('./item-stock/item-stock.module').then( m => m.ItemStockPageModule),
    canActivate: [AuthGaurdService]
  },
  {
    path: 'edit-journal',
    loadChildren: () => import('./edit-journal/edit-journal.module').then( m => m.EditJournalPageModule),
    canActivate: [AuthGaurdService]
  },
  {
    path: 'folder/categories',
    loadChildren: () => import('./categories/categories.module').then( m => m.CategoriesPageModule),
    canActivate: [AuthGaurdService]
  },
  {
    path: 'analytics-dashboard',
    loadChildren: () => import('./analytics-dashboard/analytics-dashboard.module').then( m => m.AnalyticsDashboardPageModule),
    canActivate: [AuthGaurdService]
  },
  {
    path: 'item-stock-print',
    loadChildren: () => import('./item-stock-print/item-stock-print.module').then( m => m.ItemStockPrintPageModule),
    canActivate: [AuthGaurdService]
  },
  {
    path: 'currency-management',
    loadChildren: () => import('./currency-management/currency-management.module').then( m => m.CurrencyManagementPageModule),
    canActivate: [AuthGaurdService]
  },
  {
    path: 'item-analytics',
    loadChildren: () => import('./item-analytics/item-analytics.module').then( m => m.ItemAnalyticsPageModule),
    canActivate: [AuthGaurdService]
  },
  {
    path: 'purchase-order',
    loadChildren: () => import('./purchase-order/purchase-order.module').then( m => m.PurchaseOrderPageModule),
    canActivate: [AuthGaurdService]
  },
  {
    path: 'edit-purchase-order',
    loadChildren: () => import('./edit-purchase-order/edit-purchase-order.module').then( m => m.EditPurchaseOrderPageModule),
    canActivate: [AuthGaurdService]
  },
  {
    path: 'data-verification',
    loadChildren: () => import('./data-verification/data-verification.module').then( m => m.DataVerificationPageModule),
    canActivate: [AuthGaurdService]
  },
  {
    path: 'folder/daily-report',
    loadChildren: () => import('./daily-report/daily-report.module').then( m => m.DailyReportPageModule),
    canActivate: [AuthGaurdService]
  },
  {
    path: 'expense-record',
    loadChildren: () => import('./expense-record/expense-record.module').then( m => m.ExpenseRecordPageModule),
    canActivate: [AuthGaurdService]
  },
  {
    path: 'expense',
    loadChildren: () => import('./expense/expense.module').then( m => m.ExpensePageModule),
    canActivate: [AuthGaurdService]
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./forgot-password/forgot-password.module').then( m => m.ForgotPasswordPageModule)
  },
  {
    path: 'reset-password',
    loadChildren: () => import('./reset-password/reset-password.module').then( m => m.ResetPasswordPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule),
    canActivate: [AuthGaurdService]
  },
  {
    path: 'expense-categories',
    loadChildren: () => import('./expense-categories/expense-categories.module').then( m => m.ExpenseCategoriesPageModule),
    canActivate: [AuthGaurdService]
  },
  {
    path: 'folder/sales-report',
    loadChildren: () => import('./sales-report/sales-report.module').then( m => m.SalesReportPageModule),
    canActivate: [AuthGaurdService]
  },
  {
    path: 'folder/purchase-report',
    loadChildren: () => import('./purchase-report/purchase-report.module').then( m => m.PurchaseReportPageModule),
    canActivate: [AuthGaurdService]
  },
  {
    path: 'folder/ai-assistant',
    loadChildren: () => import('./ai-assistant/ai-assistant.module').then( m => m.AiAssistantPageModule),
    canActivate: [AuthGaurdService]
  },
  {
    path: 'folder/update-management',
    loadChildren: () => import('./update-management/update-management.module').then( m => m.UpdateManagementPageModule),
    canActivate: [AuthGaurdService]
  },
  {
    path: 'folder/transactions-record',
    loadChildren: () => import('./transactions-record/transactions-record.module').then( m => m.TransactionsRecordPageModule),
    canActivate: [AuthGaurdService]
  },
  {
    path: 'recurring-obligations',
    loadChildren: () => import('./recurring-obligations/recurring-obligations.module').then( m => m.RecurringObligationsPageModule),
    canActivate: [AuthGaurdService]
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
