(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["main"],{

/***/ 90158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 65485);
/* harmony import */ var _auth_auth_gaurd_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth/auth-gaurd.service */ 28261);




const routes = [
    {
        path: '',
        redirectTo: 'analytics-dashboard',
        pathMatch: 'full'
    },
    {
        path: 'folder/login',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_login_login_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./login/login.module */ 80107)).then(m => m.LoginPageModule)
    },
    {
        path: 'folder',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_folder_folder_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./folder/folder.module */ 3412)).then(m => m.FolderPageModule)
    },
    {
        path: 'folder/sales',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_syncService_stock-service_service_ts"), __webpack_require__.e("default-src_app_item-modal_item-modal_page_ts"), __webpack_require__.e("default-src_app_print-modal_print-modal_page_ts"), __webpack_require__.e("default-src_app_module_shared_shared_module_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_sales_sales_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./sales/sales.module */ 29146)).then(m => m.SalesPageModule), canActivate: [_auth_auth_gaurd_service__WEBPACK_IMPORTED_MODULE_0__.AuthGaurdService]
    },
    {
        path: 'folder/sales-record',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_item-modal_item-modal_page_ts"), __webpack_require__.e("default-src_app_print-modal_print-modal_page_ts"), __webpack_require__.e("default-src_app_module_shared_shared_module_ts"), __webpack_require__.e("default-node_modules_xlsx_xlsx_mjs"), __webpack_require__.e("default-src_app_services_export_service_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_sales-record_sales-record_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./sales-record/sales-record.module */ 40994)).then(m => m.SalesRecordPageModule)
    },
    {
        path: 'folder/purchase',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_syncService_stock-service_service_ts"), __webpack_require__.e("default-src_app_item-modal_item-modal_page_ts"), __webpack_require__.e("default-src_app_print-modal_print-modal_page_ts"), __webpack_require__.e("default-src_app_module_shared_shared_module_ts"), __webpack_require__.e("src_app_purchase_purchase_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./purchase/purchase.module */ 10930)).then(m => m.PurchasePageModule)
    },
    {
        path: 'folder/purchase-record',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_item-modal_item-modal_page_ts"), __webpack_require__.e("default-src_app_print-modal_print-modal_page_ts"), __webpack_require__.e("default-src_app_module_shared_shared_module_ts"), __webpack_require__.e("default-node_modules_xlsx_xlsx_mjs"), __webpack_require__.e("default-src_app_services_export_service_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_purchase-record_purchase-record_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./purchase-record/purchase-record.module */ 96923)).then(m => m.PurchaseRecordPageModule)
    },
    {
        path: 'folder/spends',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_account-modal_account-modal_page_ts"), __webpack_require__.e("src_app_spends_spends_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./spends/spends.module */ 94797)).then(m => m.SpendsPageModule)
    },
    {
        path: 'folder/spends-recod',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_print-modal_print-modal_page_ts"), __webpack_require__.e("src_app_spends-recod_spends-recod_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./spends-recod/spends-recod.module */ 94378)).then(m => m.SpendsRecodPageModule)
    },
    {
        path: 'folder/items',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_syncService_stock-service_service_ts"), __webpack_require__.e("default-src_app_item-modal_item-modal_page_ts"), __webpack_require__.e("default-node_modules_xlsx_xlsx_mjs"), __webpack_require__.e("common"), __webpack_require__.e("src_app_items_items_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./items/items.module */ 92029)).then(m => m.ItemsPageModule)
    },
    {
        path: 'item-modal',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_item-modal_item-modal_page_ts"), __webpack_require__.e("src_app_item-modal_item-modal_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./item-modal/item-modal.module */ 84756)).then(m => m.ItemModalPageModule)
    },
    {
        path: 'folder/sub-account',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_sub-account_sub-account_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./sub-account/sub-account.module */ 28044)).then(m => m.SubAccountPageModule)
    },
    {
        path: 'folder/edit-sales',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_syncService_stock-service_service_ts"), __webpack_require__.e("default-src_app_item-modal_item-modal_page_ts"), __webpack_require__.e("default-src_app_module_shared_shared_module_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_edit-sales_edit-sales_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./edit-sales/edit-sales.module */ 22522)).then(m => m.EditSalesPageModule)
    },
    {
        path: 'print-modal',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_print-modal_print-modal_page_ts"), __webpack_require__.e("src_app_print-modal_print-modal_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./print-modal/print-modal.module */ 34112)).then(m => m.PrintModalPageModule)
    },
    {
        path: 'folder/edit-perch',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_syncService_stock-service_service_ts"), __webpack_require__.e("default-src_app_item-modal_item-modal_page_ts"), __webpack_require__.e("default-src_app_module_shared_shared_module_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_edit-perch_edit-perch_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./edit-perch/edit-perch.module */ 36878)).then(m => m.EditPerchPageModule)
    },
    {
        path: 'items-serarch',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_items-serarch_items-serarch_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./items-serarch/items-serarch.module */ 35701)).then(m => m.ItemsSerarchPageModule)
    },
    {
        path: 'fristq',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_fristq_fristq_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./fristq/fristq.module */ 77935)).then(m => m.FristqPageModule)
    },
    {
        path: 'folder/firstq-modal',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_firstq-modal_firstq-modal_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./firstq-modal/firstq-modal.module */ 12578)).then(m => m.FirstqModalPageModule)
    },
    {
        path: 'folder/settings',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_settings_settings_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./settings/settings.module */ 27075)).then(m => m.SettingsPageModule)
    },
    {
        path: 'folder/items-report',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_item-modal_item-modal_page_ts"), __webpack_require__.e("default-src_app_module_shared_shared_module_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_items-report_items-report_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./items-report/items-report.module */ 90435)).then(m => m.ItemsReportPageModule)
    },
    {
        path: 'folder/balance-sheet',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_balance-sheet_balance-sheet_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./balance-sheet/balance-sheet.module */ 99547)).then(m => m.BalanceSheetPageModule)
    },
    {
        path: 'folder/statement',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_print-modal_print-modal_page_ts"), __webpack_require__.e("src_app_statement_statement_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./statement/statement.module */ 48925)).then(m => m.StatementPageModule)
    },
    {
        path: 'account-modal',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_account-modal_account-modal_page_ts"), __webpack_require__.e("src_app_account-modal_account-modal_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./account-modal/account-modal.module */ 57901)).then(m => m.AccountModalPageModule)
    },
    {
        path: 'folder/account-tree',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_account-tree_account-tree_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./account-tree/account-tree.module */ 57364)).then(m => m.AccountTreePageModule)
    },
    {
        path: 'folder/cash',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_account-modal_account-modal_page_ts"), __webpack_require__.e("src_app_cash_cash_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./cash/cash.module */ 94142)).then(m => m.CashPageModule)
    },
    {
        path: 'folder/cash2',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_syncService_stock-service_service_ts"), __webpack_require__.e("src_app_cash2_cash2_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./cash2/cash2.module */ 36389)).then(m => m.Cash2PageModule)
    },
    {
        path: 'folder/statement2',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_item-modal_item-modal_page_ts"), __webpack_require__.e("default-src_app_module_shared_shared_module_ts"), __webpack_require__.e("default-node_modules_xlsx_xlsx_mjs"), __webpack_require__.e("default-src_app_services_export_service_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_statement2_statement2_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./statement2/statement2.module */ 16793)).then(m => m.Statement2PageModule)
    },
    {
        path: 'folder/spend-record2',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_item-modal_item-modal_page_ts"), __webpack_require__.e("default-src_app_print-modal_print-modal_page_ts"), __webpack_require__.e("default-src_app_module_shared_shared_module_ts"), __webpack_require__.e("default-node_modules_xlsx_xlsx_mjs"), __webpack_require__.e("default-src_app_services_export_service_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_spend-record2_spend-record2_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./spend-record2/spend-record2.module */ 40447)).then(m => m.SpendRecord2PageModule)
    },
    {
        path: 'folder/balance-sheet2',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_item-modal_item-modal_page_ts"), __webpack_require__.e("default-src_app_module_shared_shared_module_ts"), __webpack_require__.e("default-node_modules_xlsx_xlsx_mjs"), __webpack_require__.e("default-src_app_services_export_service_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_balance-sheet2_balance-sheet2_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./balance-sheet2/balance-sheet2.module */ 8505)).then(m => m.BalanceSheet2PageModule)
    },
    {
        path: 'folder/sub-account2',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_item-modal_item-modal_page_ts"), __webpack_require__.e("default-src_app_module_shared_shared_module_ts"), __webpack_require__.e("default-node_modules_xlsx_xlsx_mjs"), __webpack_require__.e("default-src_app_services_export_service_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_sub-account2_sub-account2_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./sub-account2/sub-account2.module */ 34588)).then(m => m.SubAccount2PageModule)
    },
    {
        path: 'folder/notifications',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_notifications_notifications_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./notifications/notifications.module */ 89182)).then(m => m.NotificationsPageModule)
    },
    {
        path: 'folder/cash3',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_syncService_stock-service_service_ts"), __webpack_require__.e("src_app_cash3_cash3_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./cash3/cash3.module */ 41849)).then(m => m.Cash3PageModule)
    },
    {
        path: 'folder/prch-order',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_item-modal_item-modal_page_ts"), __webpack_require__.e("default-src_app_print-modal_print-modal_page_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_prch-order_prch-order_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./prch-order/prch-order.module */ 36435)).then(m => m.PrchOrderPageModule)
    },
    {
        path: 'folder/prch-order-record',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_print-modal_print-modal_page_ts"), __webpack_require__.e("src_app_prch-order-record_prch-order-record_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./prch-order-record/prch-order-record.module */ 88750)).then(m => m.PrchOrderRecordPageModule)
    },
    {
        path: 'folder/edit-prch-order',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_item-modal_item-modal_page_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_edit-prch-order_edit-prch-order_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./edit-prch-order/edit-prch-order.module */ 21108)).then(m => m.EditPrchOrderPageModule)
    },
    {
        path: 'folder/tswia',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_syncService_stock-service_service_ts"), __webpack_require__.e("default-src_app_print-modal_print-modal_page_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_tswia_tswia_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./tswia/tswia.module */ 27639)).then(m => m.TswiaPageModule)
    },
    {
        path: 'folder/tswia-record',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_print-modal_print-modal_page_ts"), __webpack_require__.e("src_app_tswia-record_tswia-record_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./tswia-record/tswia-record.module */ 88375)).then(m => m.TswiaRecordPageModule)
    },
    {
        path: 'folder/edit-tswia',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_syncService_stock-service_service_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_edit-tswia_edit-tswia_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./edit-tswia/edit-tswia.module */ 23157)).then(m => m.EditTswiaPageModule)
    },
    {
        path: 'folder/user-activity',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_syncService_stock-service_service_ts"), __webpack_require__.e("src_app_user-activity_user-activity_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./user-activity/user-activity.module */ 33532)).then(m => m.UserActivityPageModule)
    },
    {
        path: 'folder/sales-mob',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_syncService_stock-service_service_ts"), __webpack_require__.e("default-src_app_print-modal_print-modal_page_ts"), __webpack_require__.e("src_app_sales-mob_sales-mob_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./sales-mob/sales-mob.module */ 38610)).then(m => m.SalesMobPageModule)
    },
    {
        path: 'folder/purchase-mob',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_syncService_stock-service_service_ts"), __webpack_require__.e("default-src_app_item-modal_item-modal_page_ts"), __webpack_require__.e("default-src_app_print-modal_print-modal_page_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_purchase-mob_purchase-mob_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./purchase-mob/purchase-mob.module */ 87860)).then(m => m.PurchaseMobPageModule)
    },
    {
        path: 'folder/edit-purchase-mob',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_syncService_stock-service_service_ts"), __webpack_require__.e("default-src_app_item-modal_item-modal_page_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_edit-purchase-mob_edit-purchase-mob_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./edit-purchase-mob/edit-purchase-mob.module */ 54807)).then(m => m.EditPurchaseMobPageModule)
    },
    {
        path: 'folder/edit-sales-mob',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_syncService_stock-service_service_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_edit-sales-mob_edit-sales-mob_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./edit-sales-mob/edit-sales-mob.module */ 69403)).then(m => m.EditSalesMobPageModule)
    },
    {
        path: 'folder/pos-sales',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_syncService_stock-service_service_ts"), __webpack_require__.e("default-src_app_print-modal_print-modal_page_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pos-sales_pos-sales_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pos-sales/pos-sales.module */ 36953)).then(m => m.PosSalesPageModule)
    },
    {
        path: 'pos-reciept',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pos-reciept_pos-reciept_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pos-reciept/pos-reciept.module */ 59234)).then(m => m.PosRecieptPageModule)
    },
    {
        path: 'folder/salessnd',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_syncService_stock-service_service_ts"), __webpack_require__.e("default-src_app_print-modal_print-modal_page_ts"), __webpack_require__.e("src_app_salessnd_salessnd_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./salessnd/salessnd.module */ 12195)).then(m => m.SalessndPageModule)
    },
    {
        path: 'folder/purchsnd',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_syncService_stock-service_service_ts"), __webpack_require__.e("default-src_app_item-modal_item-modal_page_ts"), __webpack_require__.e("default-src_app_print-modal_print-modal_page_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_purchsnd_purchsnd_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./purchsnd/purchsnd.module */ 25822)).then(m => m.PurchsndPageModule)
    },
    {
        path: 'folder/purchsndrecord',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_print-modal_print-modal_page_ts"), __webpack_require__.e("src_app_purchsndrecord_purchsndrecord_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./purchsndrecord/purchsndrecord.module */ 8415)).then(m => m.PurchsndrecordPageModule)
    },
    {
        path: 'folder/salessndrecord',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_print-modal_print-modal_page_ts"), __webpack_require__.e("src_app_salessndrecord_salessndrecord_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./salessndrecord/salessndrecord.module */ 87201)).then(m => m.SalessndrecordPageModule)
    },
    {
        path: 'folder/editsalessnd',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_syncService_stock-service_service_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_editsalessnd_editsalessnd_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./editsalessnd/editsalessnd.module */ 67033)).then(m => m.EditsalessndPageModule)
    },
    {
        path: 'folder/editpurchsnd',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_syncService_stock-service_service_ts"), __webpack_require__.e("default-src_app_item-modal_item-modal_page_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_editpurchsnd_editpurchsnd_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./editpurchsnd/editpurchsnd.module */ 13437)).then(m => m.EditpurchsndPageModule)
    },
    {
        path: 'item-stock',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_syncService_stock-service_service_ts"), __webpack_require__.e("default-src_app_item-modal_item-modal_page_ts"), __webpack_require__.e("default-src_app_module_shared_shared_module_ts"), __webpack_require__.e("default-node_modules_xlsx_xlsx_mjs"), __webpack_require__.e("default-src_app_services_export_service_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_item-stock_item-stock_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./item-stock/item-stock.module */ 5221)).then(m => m.ItemStockPageModule)
    },
    {
        path: 'edit-journal',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_syncService_stock-service_service_ts"), __webpack_require__.e("src_app_edit-journal_edit-journal_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./edit-journal/edit-journal.module */ 72083)).then(m => m.EditJournalPageModule)
    },
    {
        path: 'folder/categories',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_categories_categories_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./categories/categories.module */ 71944)).then(m => m.CategoriesPageModule)
    },
    {
        path: 'analytics-dashboard',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_analytics-dashboard_analytics-dashboard_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./analytics-dashboard/analytics-dashboard.module */ 63016)).then(m => m.AnalyticsDashboardPageModule),
        canActivate: [_auth_auth_gaurd_service__WEBPACK_IMPORTED_MODULE_0__.AuthGaurdService]
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_3__.PreloadAllModules })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], AppRoutingModule);



/***/ }),

/***/ 55041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component.html?ngResource */ 33383);
/* harmony import */ var _app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.scss?ngResource */ 32009);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 65485);
/* harmony import */ var _app_auth_auth_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app/auth/auth-service.service */ 65465);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ 52879);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 78336);
/* harmony import */ var _stockService_services_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./stockService/services.service */ 91472);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 95472);
/* harmony import */ var _component_user_actions_popover_user_actions_popover_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./component/user-actions-popover/user-actions-popover.component */ 14081);











let AppComponent = class AppComponent {
    constructor(platform, http, api2, storage, authenticationService, router, popoverController) {
        this.platform = platform;
        this.http = http;
        this.api2 = api2;
        this.storage = storage;
        this.authenticationService = authenticationService;
        this.router = router;
        this.popoverController = popoverController;
        // Navigation structure is now defined in the template for better control
        this.appPages = [];
        this.sub_accountSalse = [];
        this.sub_accountPurch = [];
        this.payNotifArr = [];
        this.payArr = [];
        this.perchArr = [];
        this.purchNotifArr = [];
        this.itemNotifArr = [];
        this.showSpinner = false;
        this.device = '';
        this.api = 'http://localhost/myaperpi/myapi/api/';
        this.selectedEndpointName = ''; // Selected endpoint category name
        this.currentUrl = '';
        this.labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
        // Collapsible sidebar properties
        this.isSidebarCollapsed = true;
        this.isSidebarHovered = false;
        // Use matchMedia to check the user preference
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
        this.toggleDarkTheme(prefersDark.matches);
        // Listen for changes to the prefers-color-scheme media query
        prefersDark.addListener((mediaQuery) => this.toggleDarkTheme(mediaQuery.matches));
        // Add or remove the "dark" class based on if the media query matches
        this.USER_INFO = {
            id: "",
            user_name: "",
            store_id: "",
            full_name: "",
            password: "",
        };
        this.store_info = { id: "", store_ref: "", store_name: "", location: "" };
        this.company = { id: "", phone: "", phone2: "", address: "", logoUrl: "", engName: "", arName: "", tradNo: "", vatNo: "" };
        this.initializeApp();
        this.initializeEndpointInfo();
        //  this.getPayNotif(1)
        //  this.getPerchNotif(1)
        //  this.stockItems(1)
        //  setTimeout(() => {
        //   this.subiscribeInterval()
        //  }, 5000);
    }
    toggleDarkTheme(shouldAdd) {
        document.body.classList.toggle('dark', shouldAdd);
    }
    // for mobile
    //  initializeApp() {
    //    this.platform.ready().then(() => {
    //      this.statusBar.styleDefault();
    //      this.splashScreen.hide();
    //     this.authenticationService.authState.subscribe(state => {
    //       if (state) {
    //         this.router.navigate(['dashboard']);
    //       } else {
    //         this.router.navigate(['login']);
    //       }
    //     });
    //   });
    // }
    stockItems(store_id) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpParams();
        params = params.append('store_id', store_id);
        this.http.get(this.api + 'items/readStock.php', { params: params }).subscribe(data => {
            let res = data;
            this.itemNotifArr = res['data'];
            this.itemNotifArr.forEach(element => {
                element.quantity = (+element.perchQuantity + +element.firstQuantity) - +element.salesQuantity;
            });
            this.itemNotifArr = this.itemNotifArr.filter(x => +x.quantity == 0);
            // this.getTot()
            //console.log('interval data from backend',data) 
        }, (err) => {
            //console.log(err);
        });
    }
    getTot() {
        this.totalObj.items = this.itemNotifArr.length;
        this.totalObj.perch = this.purchNotifArr.length;
        this.totalObj.pay = this.payNotifArr.length;
        let tot = this.totalObj.items + this.totalObj.perch + this.totalObj.pay;
        return tot;
    }
    getPayNotif(store_id) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpParams();
        params = params.append('store_id', store_id);
        this.http.get(this.api + 'pay/paynotif.php', { params: params }).subscribe(data => {
            let res = data;
            this.payArr = res['data'];
            this.getAccounts(1, 1);
            //console.log('interval data from backend',data) 
        }, (err) => {
            //console.log(err);
        });
    }
    getPerchNotif(store_id) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpParams();
        params = params.append('store_id', store_id);
        this.http.get(this.api + 'perch/paynotif.php', { params: params }).subscribe(data => {
            let res = data;
            this.perchArr = res['data'];
            this.getAccounts(1, 2);
            //console.log('interval data from backend',data) 
        }, (err) => {
            //console.log(err);
        });
    }
    getAccounts(store_id, ac_id) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpParams();
        params = params.append('store_id', store_id);
        params = params.append('ac_id', ac_id);
        this.http.get(this.api + 'sub_accounts/readByStore.php', { params: params }).subscribe(data => {
            let res = data;
            if (ac_id == 1) {
                this.sub_accountSalse = res['data'];
                this.sub_accountSalse = this.sub_accountSalse.filter(x => x.next_pay != null);
            }
            else {
                this.sub_accountPurch = res['data'];
                this.sub_accountPurch = this.sub_accountPurch.filter(x => x.next_pay != null);
            }
            //console.log(' from backend',data)
            this.recalSubBalance(ac_id);
        }, (err) => {
            //console.log(err);
        });
    }
    recalSubBalance(type) {
        if (type == 1) {
            // adding new change to subbalances
            this.sub_accountSalse.forEach(element => {
                element.sub_balance = 0;
                let debitTot = +element.changeeTot + +element.fromDebitTot;
                let creditTot = +element.purchChangeeTot + +element.toCreditTot;
                if (debitTot == creditTot) {
                    element.sub_balance = 0;
                    element.currentCustumerStatus = '';
                }
                else if (debitTot > creditTot) {
                    element.sub_balance = (+debitTot - +creditTot).toFixed(2);
                    element.currentCustumerStatus = 'debit';
                }
                else if (creditTot > debitTot) {
                    element.sub_balance = (+creditTot - +debitTot).toFixed(2);
                    element.currentCustumerStatus = 'credit';
                }
            });
            //console.log('recalSubBalance sales',this.sub_accountSalse)
            this.preparePayNotifArr(this.payArr);
        }
        else {
            // adding new change to subbalances
            this.sub_accountPurch.forEach(element => {
                element.sub_balance = 0;
                let debitTot = +element.changeeTot + +element.fromDebitTot;
                let creditTot = +element.purchChangeeTot + +element.toCreditTot;
                if (debitTot == creditTot) {
                    element.sub_balance = 0;
                    element.currentCustumerStatus = '';
                }
                else if (debitTot > creditTot) {
                    element.sub_balance = (+debitTot - +creditTot).toFixed(2);
                    element.currentCustumerStatus = 'debit';
                }
                else if (creditTot > debitTot) {
                    element.sub_balance = (+creditTot - +debitTot).toFixed(2);
                    element.currentCustumerStatus = 'credit';
                }
            });
            //console.log('recalSubBalance purchace',this.sub_accountPurch)
            this.preparePurchNotifArr(this.perchArr);
        }
    }
    preparePayNotifArr(arr) {
        if (arr) {
            arr.forEach(element => {
                let flt = this.sub_accountSalse.filter(x => x.ac_id == element.cust_id);
                if (+flt[0].sub_balace > 0) {
                    this.payNotifArr.push({
                        'title': "مواعيد سداد فاتورة  " + element.sub_name + 'بتاريخ ' + element.pay_date,
                        'pay_ref': element.pay_ref,
                        'tot_pr': element.tot_pr,
                        'pay_date': element.pay_date,
                        'pay_time': element.pay_time,
                        'cust_id': element.cust_id,
                        'discount': element.discount,
                        'changee': element.changee,
                        'user_id': element.user_id,
                        'pay': element.pay,
                        'store_id': element.store_id,
                        'pay_method': element.pay_method,
                        'payComment': element.payComment,
                        'nextPay': element.nextPay,
                        'sub_name': element.sub_name
                    });
                }
            });
        }
        this.getTot();
    }
    preparePurchNotifArr(arr) {
        if (arr) {
            arr.forEach(element => {
                let flt = this.sub_accountPurch.filter(x => x.ac_id == element.cust_id);
                if (+flt[0].sub_balace > 0) {
                    this.payNotifArr.push({
                        'title': "مواعيد سداد فاتورة  " + element.sub_name + 'بتاريخ ' + element.pay_date,
                        'pay_ref': element.pay_ref,
                        'tot_pr': element.tot_pr,
                        'pay_date': element.pay_date,
                        'pay_time': element.pay_time,
                        'cust_id': element.cust_id,
                        'discount': element.discount,
                        'changee': element.changee,
                        'user_id': element.user_id,
                        'pay': element.pay,
                        'store_id': element.store_id,
                        'pay_method': element.pay_method,
                        'payComment': element.payComment,
                        'nextPay': element.nextPay,
                        'sub_name': element.sub_name
                    });
                }
            });
        }
        this.getTot();
    }
    subiscribeInterval() {
        setInterval(function () {
            this.getPayNotif(1);
            this.getPerchNotif(1);
            this.stockItems(1);
        }, 10000);
    }
    checkPlatform() {
        if (this.platform.is('desktop')) {
            this.device = 'desktop';
            //console.log('I am an desktop device!');
        }
        else if (this.platform.is('mobile')) {
            this.device = 'mobile';
            //console.log('I am an mobile device!'); 
        }
    }
    initializeApp() {
        this.getAppInfo();
        this.checkPlatform();
        this.auth();
    }
    // Initialize endpoint information
    initializeEndpointInfo() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            yield this.storage.create();
            // Subscribe to endpoint changes from service
            this.api2.EndpointChanged.subscribe(endpoint => {
                if (endpoint) {
                    this.updateEndpointInfo();
                }
                else {
                    this.selectedEndpointName = '';
                }
            });
            // Load initial endpoint info
            this.updateEndpointInfo();
        });
    }
    // Update endpoint information
    updateEndpointInfo() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            yield this.storage.create();
            const selectedCategory = yield this.storage.get('SELECTED_CATEGORY');
            if (selectedCategory) {
                this.selectedEndpointName = selectedCategory.category_name;
            }
            else {
                this.selectedEndpointName = '';
            }
        });
    }
    // Get selected endpoint name for display
    getSelectedEndpointName() {
        return this.selectedEndpointName;
    }
    // Toggle menu visibility
    toggleMenu() {
        const menu = document.querySelector('ion-menu');
        if (menu) {
            menu.toggle();
        }
    }
    redirectToExternal(url) {
        window.open(url, '_blank');
    }
    isCurrentUrl(domain) {
        const currentHostname = window.location.hostname;
        const currentHref = window.location.href;
        // Check if the domain is part of the current hostname or full URL
        return currentHostname.includes(domain) || currentHref.includes(domain);
    }
    getAppInfo() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            yield this.storage.create();
            this.storage.get('USER_INFO').then((response) => {
                if (response) {
                    this.USER_INFO = response;
                    //console.log(response) 
                }
            });
            this.storage.get('STORE_INFO').then((response) => {
                if (response) {
                    this.store_info = response;
                    //console.log(response)
                    //console.log(this.store_info)
                }
            });
            this.storage.get('company').then((response) => {
                if (response) {
                    this.company = response;
                }
            });
            // Update endpoint info when app info is loaded
            this.updateEndpointInfo();
        });
    }
    auth() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            yield this.storage.create();
            this.authenticationService.authState.subscribe(state => {
                this.isAuth = this.authenticationService.isAuthenticated();
                if (state) {
                    // Initialize endpoint on auth success
                    this.api2.initializeEndpoint();
                    this.router.navigate(['folder/sales']);
                }
                else {
                    this.router.navigate(['folder/login']);
                }
            });
        });
    }
    logOut() {
        this.authenticationService.logout();
    }
    // Navigate to categories page
    goToCategories() {
        this.router.navigate(['/folder/categories']);
    }
    ngAfterViewInit() {
        // Initialize active menu item based on current route
        this.currentUrl = this.router.url;
        this.updateActiveMenuItems();
    }
    updateActiveMenuItems() {
        // Remove active class from all menu items
        const menuItems = document.querySelectorAll('.menu-item');
        menuItems.forEach(item => {
            item.classList.remove('selected');
        });
        // Add active class to matching menu item
        const activeItem = this.getActiveMenuItem();
        if (activeItem) {
            activeItem.classList.add('selected');
        }
    }
    getActiveMenuItem() {
        const menuItems = document.querySelectorAll('.menu-item');
        let activeItem = null;
        menuItems.forEach(item => {
            var _a;
            const linkElement = item;
            const routerLink = this.getRouterLinkFromElement(linkElement);
            if (routerLink && this.currentUrl.includes(routerLink)) {
                // Check for more specific match
                if (!activeItem || routerLink.length > ((_a = this.getRouterLinkFromElement(activeItem)) === null || _a === void 0 ? void 0 : _a.length)) {
                    activeItem = linkElement;
                }
            }
        });
        return activeItem;
    }
    getRouterLinkFromElement(element) {
        // Extract routerLink from element attributes or data attributes
        const routerLinkAttr = element.getAttribute('data-router-link');
        if (routerLinkAttr) {
            return routerLinkAttr;
        }
        return null;
    }
    // Handle menu item click
    onMenuItemClick(routerLink) {
        this.router.navigate([routerLink]);
        this.currentUrl = routerLink;
        this.updateActiveMenuItems();
    }
    // Toggle sidebar collapsed state
    toggleSidebar() {
        this.isSidebarCollapsed = !this.isSidebarCollapsed;
    }
    // Handle sidebar hover events
    onSidebarMouseEnter() {
        this.isSidebarHovered = true;
    }
    onSidebarMouseLeave() {
        this.isSidebarHovered = false;
    }
    // Check if sidebar should be expanded (either not collapsed or hovered)
    isSidebarExpanded() {
        return !this.isSidebarCollapsed || this.isSidebarHovered;
    }
    // Present user action popover
    presentUserPopover(ev) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            const popover = yield this.popoverController.create({
                component: _component_user_actions_popover_user_actions_popover_component__WEBPACK_IMPORTED_MODULE_5__.UserActionsPopoverComponent,
                event: ev,
                translucent: true,
                cssClass: 'user-action-popover'
            });
            return yield popover.present();
        });
    }
};
AppComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.Platform },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient },
    { type: _stockService_services_service__WEBPACK_IMPORTED_MODULE_4__.ServicesService },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__.Storage },
    { type: _app_auth_auth_service_service__WEBPACK_IMPORTED_MODULE_2__.AuthServiceService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.PopoverController }
];
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-root',
        template: _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AppComponent);



/***/ }),

/***/ 36747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser */ 78394);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/router */ 65485);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ionic/angular */ 95472);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 55041);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ 90158);
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/service-worker */ 71024);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../environments/environment */ 92340);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/http */ 78336);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 38143);
/* harmony import */ var _auth_auth_gaurd_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth/auth-gaurd.service */ 28261);
/* harmony import */ var _auth_auth_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth/auth-service.service */ 65465);
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ionic/storage-angular */ 50505);
/* harmony import */ var _select_all_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./select-all.directive */ 43405);
/* harmony import */ var _shareModule_share_module_share_module_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shareModule/share-module/share-module.module */ 78565);
/* harmony import */ var _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/file-opener/ngx */ 1670);
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/file/ngx */ 18232);
/* harmony import */ var _component_user_actions_popover_user_actions_popover_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./component/user-actions-popover/user-actions-popover.component */ 14081);




















let AppModule = class AppModule {
};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.NgModule)({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent, _select_all_directive__WEBPACK_IMPORTED_MODULE_5__.SelectAllDirective, _component_user_actions_popover_user_actions_popover_component__WEBPACK_IMPORTED_MODULE_9__.UserActionsPopoverComponent],
        entryComponents: [],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__.BrowserModule, _angular_common__WEBPACK_IMPORTED_MODULE_13__.CommonModule, _shareModule_share_module_share_module_module__WEBPACK_IMPORTED_MODULE_6__.ShareModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_14__.HttpClientModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.IonicModule.forRoot(), _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_16__.IonicStorageModule.forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule, _angular_service_worker__WEBPACK_IMPORTED_MODULE_17__.ServiceWorkerModule.register('ngsw-worker.js', {
                enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.production,
                // Register the ServiceWorker as soon as the app is stable
                // or after 30 seconds (whichever comes first).
                registrationStrategy: 'registerWhenStable:30000'
            })],
        providers: [{ provide: _angular_router__WEBPACK_IMPORTED_MODULE_18__.RouteReuseStrategy, useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.IonicRouteStrategy }, _angular_common__WEBPACK_IMPORTED_MODULE_13__.DatePipe, _auth_auth_service_service__WEBPACK_IMPORTED_MODULE_4__.AuthServiceService, _auth_auth_gaurd_service__WEBPACK_IMPORTED_MODULE_3__.AuthGaurdService, _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_7__.FileOpener, _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_8__.File],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_11__.CUSTOM_ELEMENTS_SCHEMA]
    })
], AppModule);



/***/ }),

/***/ 28261:
/*!********************************************!*\
  !*** ./src/app/auth/auth-gaurd.service.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthGaurdService": () => (/* binding */ AuthGaurdService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _auth_service_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth-service.service */ 65465);



let AuthGaurdService = class AuthGaurdService {
    constructor(authenticationService) {
        this.authenticationService = authenticationService;
    }
    canActivate() {
        return this.authenticationService.isAuthenticated();
    }
};
AuthGaurdService.ctorParameters = () => [
    { type: _auth_service_service__WEBPACK_IMPORTED_MODULE_0__.AuthServiceService }
];
AuthGaurdService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], AuthGaurdService);



/***/ }),

/***/ 65465:
/*!**********************************************!*\
  !*** ./src/app/auth/auth-service.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthServiceService": () => (/* binding */ AuthServiceService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic/storage */ 52879);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 95472);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 18406);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 65485);
/* harmony import */ var _stockService_services_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../stockService/services.service */ 91472);







let AuthServiceService = class AuthServiceService {
    constructor(toast, loadingController, api, router, storage, platform, toastController) {
        this.toast = toast;
        this.loadingController = loadingController;
        this.api = api;
        this.router = router;
        this.storage = storage;
        this.platform = platform;
        this.toastController = toastController;
        this.authState = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(false);
        this.device = '';
        this.platform.ready().then(() => {
            this.checkPlatform();
            this.ifLoggedIn();
        });
    }
    checkPlatform() {
        if (this.platform.is('desktop')) {
            this.device = 'desktop';
            //console.log('I am an desktop device!');
        }
        else if (this.platform.is('mobile')) {
            this.device = 'mobile';
            //console.log('I am an mobile device!'); 
        }
    }
    presentToast(msg, color) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toast.create({
                message: msg,
                duration: 2000,
                color: color,
                cssClass: 'cust_Toast',
                mode: 'ios',
                position: 'top'
            });
            toast.present();
        });
    }
    presentLoadingWithOptions(msg, status) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                spinner: 'bubbles',
                mode: 'ios',
                duration: 2000,
                message: msg,
                translucent: true,
                // cssClass: 'custom-class custom-loading',
                backdropDismiss: false
            });
            yield loading.present();
            const { role, data } = yield loading.onDidDismiss();
            //console.log('Loading dismissed with role:', role);
        });
    }
    ifLoggedIn() {
        this.storage.get('USER_INFO').then((response) => {
            if (response) {
                this.authState.next(true);
            }
        });
    }
    login(user) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            yield this.presentLoadingWithOptions('جاري تسجيل الدخول', 'login');
            //console.log(user)
            this.api.login(user).subscribe(data => {
                //console.log('loogingksks',data)
                let res = data;
                if (res['id'] != null) {
                    this.USER_INFO = {
                        id: res['id'],
                        user_name: res['user_name'],
                        full_name: res['full_name'],
                        password: res['password'],
                        store_id: res['store_id']
                    };
                    //console.log(  'sdlijlf' ,  this.USER_INFO)
                    this.storage.set('USER_INFO', this.USER_INFO).then((response) => {
                        if (this.device == 'mobile') {
                            this.router.navigate(['folder/sales-mob']);
                        }
                        else {
                            this.router.navigate(['folder/sales']);
                        }
                        this.authState.next(true);
                    });
                }
                else {
                    this.loadingController.dismiss();
                    this.presentToast('خطأ في اسم المستخدم او كلمة المرور', 'danger');
                }
            }, (err) => {
                //console.log(err);
                this.loadingController.dismiss();
                this.presentToast('خطأ في اسم المستخدم او كلمة المرور', 'danger');
            }, () => { });
        });
    }
    logout() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            this.storage.remove('USER_INFO').then(() => {
                this.storage.remove('STORE_INFO').then(() => {
                    this.router.navigate(['folder/login']);
                    this.authState.next(false);
                });
            });
        });
    }
    isAuthenticated() {
        return this.authState.value;
    }
};
AuthServiceService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ToastController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.LoadingController },
    { type: _stockService_services_service__WEBPACK_IMPORTED_MODULE_1__.ServicesService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_0__.Storage },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.Platform },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ToastController }
];
AuthServiceService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Injectable)({
        providedIn: 'root'
    })
], AuthServiceService);



/***/ }),

/***/ 14081:
/*!**********************************************************************************!*\
  !*** ./src/app/component/user-actions-popover/user-actions-popover.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserActionsPopoverComponent": () => (/* binding */ UserActionsPopoverComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _user_actions_popover_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user-actions-popover.component.html?ngResource */ 38588);
/* harmony import */ var _user_actions_popover_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-actions-popover.component.scss?ngResource */ 96681);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 95472);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 65485);






let UserActionsPopoverComponent = class UserActionsPopoverComponent {
    constructor(popoverController, router) {
        this.popoverController = popoverController;
        this.router = router;
    }
    ngOnInit() { }
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
};
UserActionsPopoverComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.PopoverController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router }
];
UserActionsPopoverComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-user-actions-popover',
        template: _user_actions_popover_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_user_actions_popover_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], UserActionsPopoverComponent);



/***/ }),

/***/ 742:
/*!****************************************!*\
  !*** ./src/app/pipes/date-ago.pipe.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DateAgoPipe": () => (/* binding */ DateAgoPipe)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ 53975);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);



moment__WEBPACK_IMPORTED_MODULE_0__.locale("ar"); // set your language
let DateAgoPipe = class DateAgoPipe {
    constructor(changeDetectorRef, ngZone) {
        this.changeDetectorRef = changeDetectorRef;
        this.ngZone = ngZone;
    }
    transform(value) {
        this.removeTimer();
        let d = new Date(value);
        let now = new Date();
        let seconds = Math.round(Math.abs((now.getTime() - d.getTime()) / 1000));
        let timeToUpdate = (Number.isNaN(seconds)) ? 1000 : this.getSecondsUntilUpdate(seconds) * 1000;
        this.timer = this.ngZone.runOutsideAngular(() => {
            if (typeof window !== 'undefined') {
                return window.setTimeout(() => {
                    this.ngZone.run(() => this.changeDetectorRef.markForCheck());
                }, timeToUpdate);
            }
            return null;
        });
        return moment__WEBPACK_IMPORTED_MODULE_0__(d).fromNow();
    }
    ngOnDestroy() {
        this.removeTimer();
    }
    removeTimer() {
        if (this.timer) {
            window.clearTimeout(this.timer);
            this.timer = null;
        }
    }
    getSecondsUntilUpdate(seconds) {
        let min = 60;
        let hr = min * 60;
        let day = hr * 24;
        if (seconds < min) { // less than 1 min, update every 2 secs
            return 2;
        }
        else if (seconds < hr) { // less than an hour, update every 30 secs
            return 30;
        }
        else if (seconds < day) { // less then a day, update every 5 mins
            return 300;
        }
        else { // update every hour
            return 3600;
        }
    }
};
DateAgoPipe.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectorRef },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgZone }
];
DateAgoPipe = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Pipe)({
        name: 'dateAgo',
        pure: true
    })
], DateAgoPipe);



/***/ }),

/***/ 43405:
/*!*****************************************!*\
  !*** ./src/app/select-all.directive.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SelectAllDirective": () => (/* binding */ SelectAllDirective)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 51109);


let SelectAllDirective = class SelectAllDirective {
    constructor(el) {
        this.el = el;
    }
    // @HostListener('Focus')
    selectAll() {
        // access to the native input element
        let nativeEl = this.el.nativeElement.querySelector('input');
        if (nativeEl) {
            if (nativeEl.setSelectionRange) {
                // select the text from start to end
                return nativeEl.setSelectionRange(0, nativeEl.value.length);
            }
            nativeEl.select();
        }
    }
};
SelectAllDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef }
];
SelectAllDirective.propDecorators = {
    selectAll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener, args: ['click',] }]
};
SelectAllDirective = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive)({
        selector: 'ion-input[select-all]'
    })
], SelectAllDirective);



/***/ }),

/***/ 78565:
/*!*****************************************************************!*\
  !*** ./src/app/shareModule/share-module/share-module.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShareModule": () => (/* binding */ ShareModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 38143);
/* harmony import */ var src_app_pipes_date_ago_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/pipes/date-ago.pipe */ 742);




let ShareModule = class ShareModule {
};
ShareModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        declarations: [src_app_pipes_date_ago_pipe__WEBPACK_IMPORTED_MODULE_0__.DateAgoPipe],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule
        ],
        exports: [src_app_pipes_date_ago_pipe__WEBPACK_IMPORTED_MODULE_0__.DateAgoPipe]
    })
], ShareModule);



/***/ }),

/***/ 91472:
/*!**************************************************!*\
  !*** ./src/app/stockService/services.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ServicesService": () => (/* binding */ ServicesService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 18406);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 78336);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic/storage */ 52879);





//import { Storage } from '@ionic/storage';
let ServicesService = class ServicesService {
    constructor(storage, http) {
        this.storage = storage;
        this.http = http;
        //  api = 'http://localhost/myapi/myapi/api/'
        //api :any =  'https://retail3.gvstech.net/myapi/api/'
        //   api :any =  'https://erpagric.gvstech.net/myapiAi/api/'
        //  api :any =  'https://erp.gvstech.net/myapi/api/'
        this.api = 'https://erp.gvstech.net/myapiAi/api/'; // Default API endpoint
        //  api :any =  'https://retail.gvstech.net/myapiAi/api/'
        this.currentEndpoint = ''; // Current selected endpoint from category
        this.categories = []; // Cached categories
        this.selectedCategory = null; // Currently selected category
        this.folderNo = '';
        this.Notifications = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject([]);
        this.EndpointChanged = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject('');
        //  this.api = 'https://erp.hosamdev.com/myapi'+ this.folderNo +'/api/'
        // this.setCurrentYear()
        console.log('ServicesService constructor - Initial API:', this.api);
        this.initializeEndpoint();
    }
    setCurrentYear() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            yield this.storage.create();
            this.storage.get('year').then((response) => {
                if (response) {
                    this.year = response;
                    if (this.year.id == 1) {
                        this.folderNo = '';
                        this.api = 'https://erp.hosamdev.com/myapi' + this.folderNo + '/api/';
                    }
                    else {
                        this.folderNo = '23';
                        this.api = 'https://erp.hosamdev.com/myapi' + this.folderNo + '/api/';
                    }
                }
            });
        });
    }
    // Category Management Methods - Enhanced for endpoint switching
    getCategories(store_id) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpParams();
        if (store_id) {
            params = params.append('store_id', store_id);
        }
        console.log('getCategories API URL:', this.api + 'item_categories/read.php');
        return this.http.get(this.api + 'item_categories/read.php', { params: params });
    }
    // Initialize endpoint from local storage
    initializeEndpoint() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            yield this.storage.create();
            // Check if default category is set in local storage
            const savedCategoryId = yield this.storage.get('SELECTED_CATEGORY_ID');
            const savedCategories = yield this.storage.get('CACHED_CATEGORIES');
            const savedEndpoint = yield this.storage.get('SELECTED_ENDPOINT');
            if (savedCategories) {
                this.categories = savedCategories;
            }
            if (savedCategoryId && savedEndpoint) {
                // Validate and format endpoint URL
                let endpointUrl = savedEndpoint.trim();
                // Check if it's a valid URL
                if (endpointUrl.startsWith('http://') || endpointUrl.startsWith('https://')) {
                    // Ensure endpoint URL ends with a slash
                    if (!endpointUrl.endsWith('/')) {
                        endpointUrl += '/';
                    }
                    this.currentEndpoint = endpointUrl;
                    this.api = this.currentEndpoint;
                    console.log('API endpoint initialized to:', this.api);
                    this.selectedCategory = this.categories.find(cat => cat.id == savedCategoryId);
                    this.EndpointChanged.next(this.currentEndpoint);
                }
            }
            else {
                // If no category is set, fetch categories from backend
                this.fetchAndCacheCategories();
            }
        });
    }
    // Fetch categories and save to local storage
    fetchAndCacheCategories(store_id) {
        return new Promise((resolve, reject) => {
            this.getCategories(store_id).subscribe(data => {
                if (data && data['data']) {
                    this.categories = data['data'];
                    this.storage.set('CACHED_CATEGORIES', this.categories);
                    resolve(this.categories);
                }
                else {
                    this.categories = [];
                    resolve([]);
                }
            }, error => {
                console.error('Error fetching categories:', error);
                this.categories = [];
                resolve([]);
            });
        });
    }
    // Get cached categories from local storage
    getCachedCategories() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            yield this.storage.create();
            const cachedCategories = yield this.storage.get('CACHED_CATEGORIES');
            if (cachedCategories) {
                this.categories = cachedCategories;
                return cachedCategories;
            }
            return [];
        });
    }
    // Set current endpoint based on category
    setEndpointFromCategory(categoryId) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            yield this.storage.create();
            // Make sure we have categories loaded
            if (this.categories.length === 0) {
                yield this.getCachedCategories();
            }
            const category = this.categories.find(cat => cat.id == categoryId);
            if (category && category.category_desc) {
                // Validate and format endpoint URL
                let endpointUrl = category.category_desc.trim();
                // Check if it's a valid URL
                if (!endpointUrl.startsWith('http://') && !endpointUrl.startsWith('https://')) {
                    return {
                        success: false,
                        message: 'Endpoint URL must start with http:// or https://'
                    };
                }
                // Ensure endpoint URL ends with a slash
                if (!endpointUrl.endsWith('/')) {
                    endpointUrl += '/';
                }
                this.currentEndpoint = endpointUrl;
                this.api = this.currentEndpoint;
                console.log('API endpoint set to:', this.api);
                this.selectedCategory = category;
                // Save to local storage
                yield this.storage.set('SELECTED_CATEGORY_ID', categoryId);
                yield this.storage.set('SELECTED_ENDPOINT', this.currentEndpoint);
                yield this.storage.set('SELECTED_CATEGORY', category);
                // Emit endpoint change event
                this.EndpointChanged.next(this.currentEndpoint);
                return {
                    success: true,
                    endpoint: this.currentEndpoint,
                    category: category
                };
            }
            return {
                success: false,
                message: 'Category not found or no endpoint URL specified'
            };
        });
    }
    // Get current endpoint
    getCurrentEndpoint() {
        return this.currentEndpoint || this.api;
    }
    // Get selected category
    getSelectedCategory() {
        return this.selectedCategory;
    }
    // Clear endpoint and reset to default
    clearEndpoint() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            yield this.storage.create();
            // Remove from local storage
            yield this.storage.remove('SELECTED_CATEGORY_ID');
            yield this.storage.remove('SELECTED_ENDPOINT');
            yield this.storage.remove('SELECTED_CATEGORY');
            // Reset to default
            this.currentEndpoint = '';
            this.api = 'https://erp.gvstech.net/myapiAi/api/';
            this.selectedCategory = null;
            // Emit endpoint change event
            this.EndpointChanged.next('');
        });
    }
    // Reload application after endpoint change
    reloadApplication() {
        window.location.reload();
    }
    getPayNotif(store_id) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpParams();
        params = params.append('store_id', store_id);
        return this.http.get(this.api + 'pay/paynotif.php', { params: params });
    }
    getFirstQty(store_id) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpParams();
        params = params.append('store_id', store_id);
        return this.http.get(this.api + 'firstq/readByStore.php', { params: params });
    }
    getItems() {
        return this.http.get(this.api + 'items/read.php');
    }
    getStores() {
        return this.http.get(this.api + 'store/read.php');
    }
    getCompany() {
        return this.http.get(this.api + 'company/read.php');
    }
    getBrands() {
        return this.http.get(this.api + 'items/readBrand.php');
    }
    getAllLogHistory(store_id, yearId) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpParams();
        params = params.append('store_id', +store_id);
        params = params.append('yearId', +yearId);
        return this.http.get(this.api + 'logHistory/readAllByStore.php', { params: params });
    }
    truncateItems() {
        return this.http.get(this.api + 'items/truncateItems.php');
    }
    // stockItems(store_id , yearId){ 
    //   let params = new HttpParams() 
    //   params=params.append('store_id' , store_id) 
    //   params=params.append('yearId' , yearId)
    //   return this.http.get(this.api+'items/readStock.php',{params: params})
    // }
    stockItems(store_id, yearId) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpParams();
        params = params.append('store_id', store_id);
        params = params.append('yearId', yearId);
        return this.http.get(this.api + 'items/itemsView.php');
    }
    getAllStockItemsWithouteCounts(store_id, yearId) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpParams();
        params = params.append('store_id', store_id);
        params = params.append('yearId', yearId);
        return this.http.get(this.api + 'items/readAllStockItems.php', { params: params });
    }
    readStockInrange(startrange, endrange) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpParams();
        params = params.append('endrange', endrange);
        params = params.append('startrange', startrange);
        return this.http.get(this.api + 'items/readStockInrange.php', { params: params });
    }
    readStockInRangeForStoretot(startrange, endrange) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpParams();
        params = params.append('endrange', endrange);
        params = params.append('startrange', startrange);
        return this.http.get(this.api + 'items/readStockInRangeForStoretot.php', { params: params });
    }
    stockItems2(store_id, yearId) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpParams();
        params = params.append('store_id', store_id);
        params = params.append('yearId', yearId);
        return this.http.get('https://erp.hosamdev.com/myapi23/api/items/readStock.php', { params: params });
    }
    getToptswia(store_id, yearId) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpParams();
        params = params.append('store_id', store_id);
        params = params.append('yearId', yearId);
        return this.http.get(this.api + 'tswia/getTopSales.php', { params: params });
    }
    getTopSales(store_id, yearId) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpParams();
        params = params.append('store_id', store_id);
        params = params.append('yearId', yearId);
        return this.http.get(this.api + 'pay/getTopSales.php', { params: params });
    }
    getTopSalesInit(store_id) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpParams();
        params = params.append('store_id', store_id);
        return this.http.get(this.api + 'payinit/getTopSales.php', { params: params });
    }
    getItemPaysByItemIdBydate(store_id, item_id, from, yearId) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpParams();
        params = params.append('store_id', store_id);
        params = params.append('item_id', item_id);
        params = params.append('from', from);
        params = params.append('yearId', yearId);
        return this.http.get(this.api + 'pay_details/readAllByItemIdDate.php', { params: params });
    }
    getItemPaysBydate(store_id, from, yearId) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpParams();
        params = params.append('store_id', store_id);
        params = params.append('from', from);
        params = params.append('yearId', yearId);
        return this.http.get(this.api + 'pay_details/readAllByDate.php', { params: params });
    }
    getItemPaysByItemId(store_id, item_id, yearId) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpParams();
        params = params.append('store_id', store_id);
        params = params.append('item_id', item_id);
        params = params.append('yearId', yearId);
        return this.http.get(this.api + 'pay_details/readAllByItemId.php', { params: params });
    }
    getItemQtyPaysByItemId(store_id, item_id, yearId) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpParams();
        params = params.append('store_id', store_id);
        params = params.append('item_id', item_id);
        params = params.append('yearId', yearId);
        return this.http.get(this.api + 'pay_details/readQtyByItemId.php', { params: params });
    }
    readItemByIdQty(store_id, item_id, yearId) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpParams();
        params = params.append('store_id', store_id);
        params = params.append('id', item_id);
        return this.http.get(this.api + 'items/readItemByIdQty.php', { params: params });
    }
    getItemPaysByItemIdBy2date(store_id, item_id, from, to, yearId) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpParams();
        params = params.append('store_id', store_id);
        params = params.append('item_id', item_id);
        params = params.append('from', from);
        params = params.append('to', to);
        params = params.append('yearId', yearId);
        return this.http.get(this.api + 'pay_details/readAllByItemId2Date.php', { params: params });
    }
    //purch
    getItemTswiaByItemIdBy2date(store_id, item_id, from, to, yearId) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpParams();
        params = params.append('store_id', store_id);
        params = params.append('item_id', item_id);
        params = params.append('from', from);
        params = params.append('to', to);
        params = params.append('yearId', yearId);
        return this.http.get(this.api + 'tswia_details/readAllByItemId2Date.php', { params: params });
    }
    //purch
    getItemPurchByItemIdBy2date(store_id, item_id, from, to, yearId) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpParams();
        params = params.append('store_id', store_id);
        params = params.append('item_id', item_id);
        params = params.append('from', from);
        params = params.append('to', to);
        params = params.append('yearId', yearId);
        return this.http.get(this.api + 'perch_details/readAllByItemId2Date.php', { params: params });
    }
    getItemPurchByItemId(store_id, item_id, yearId) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpParams();
        params = params.append('store_id', store_id);
        params = params.append('item_id', item_id);
        params = params.append('yearId', yearId);
        return this.http.get(this.api + 'perch_details/readAllByItemId.php', { params: params });
    }
    getQtyPurchByItemId(store_id, item_id, yearId) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpParams();
        params = params.append('store_id', store_id);
        params = params.append('item_id', item_id);
        params = params.append('yearId', yearId);
        return this.http.get(this.api + 'perch_details/readQtyByItemId.php', { params: params });
    }
    getQtyTswiaByItemId(store_id, item_id, yearId) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpParams();
        params = params.append('store_id', store_id);
        params = params.append('item_id', item_id);
        params = params.append('yearId', yearId);
        return this.http.get(this.api + 'tswia_details/readQtyByItemId.php', { params: params });
    }
    getItemTswiaByItemId(store_id, item_id, yearId) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpParams();
        params = params.append('store_id', store_id);
        params = params.append('item_id', item_id);
        params = params.append('yearId', yearId);
        return this.http.get(this.api + 'tswia_details/readAllByItemId.php', { params: params });
    }
    getItemPurchsByItemIdBydate(store_id, item_id, from, yearId) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpParams();
        params = params.append('store_id', store_id);
        params = params.append('item_id', item_id);
        params = params.append('from', from);
        params = params.append('yearId', yearId);
        return this.http.get(this.api + 'perch_details/readAllByItemIdDate.php', { params: params });
    }
    getItemPurchsBydate(store_id, from, yearId) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpParams();
        params = params.append('store_id', store_id);
        params = params.append('from', from);
        params = params.append('yearId', yearId);
        return this.http.get(this.api + 'perch_details/readAllByDate.php', { params: params });
    }
    getItemTswiasByItemIdBydate(store_id, item_id, from, yearId) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpParams();
        params = params.append('store_id', store_id);
        params = params.append('item_id', item_id);
        params = params.append('from', from);
        params = params.append('yearId', yearId);
        return this.http.get(this.api + 'tswia_details/readAllByItemIdDate.php', { params: params });
    }
    getItemTswiasBydate(store_id, from, yearId) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpParams();
        params = params.append('store_id', store_id);
        params = params.append('from', from);
        params = params.append('yearId', yearId);
        return this.http.get(this.api + 'tswia_details/readAllByDate.php', { params: params });
    }
    getTopInvoice(store_id, yearId) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpParams();
        params = params.append('store_id', store_id);
        params = params.append('yearId', yearId);
        return this.http.get(this.api + 'invoices/getTopSales.php', { params: params });
    }
    getInvoiceByDate(store_id, from, yearId) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpParams();
        params = params.append('store_id', store_id);
        params = params.append('from', from);
        params = params.append('yearId', yearId);
        return this.http.get(this.api + 'invoices/getSalesByDate.php', { params: params });
    }
    getInvoice2Date(store_id, from, to, yearId) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpParams();
        params = params.append('store_id', store_id);
        params = params.append('from', from);
        params = params.append('to', to);
        params = params.append('yearId', yearId);
        return this.http.get(this.api + 'invoices/getSales2Date.php', { params: params });
    }
    ////
    getTopJournale(store_id, yearId) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpParams();
        params = params.append('store_id', store_id);
        params = params.append('yearId', yearId);
        return this.http.get(this.api + 'journal/getTopSales.php', { params: params });
    }
    getJournaleByDate(store_id, from, yearId) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpParams();
        params = params.append('store_id', store_id);
        params = params.append('from', from);
        params = params.append('yearId', yearId);
        return this.http.get(this.api + 'journal/getSalesByDate.php', { params: params });
    }
    getJournale2Date(store_id, from, to, yearId) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpParams();
        params = params.append('store_id', store_id);
        params = params.append('from', from);
        params = params.append('to', to);
        params = params.append('yearId', yearId);
        return this.http.get(this.api + 'journal/getSales2Date.php', { params: params });
    }
    ///
    getTopJfrom(store_id, yearId) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpParams();
        params = params.append('store_id', store_id);
        params = params.append('yearId', yearId);
        return this.http.get(this.api + 'jdetails_from/getTopSales.php', { params: params });
    }
    getJFromByDate(store_id, from, yearId) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpParams();
        params = params.append('store_id', store_id);
        params = params.append('from', from);
        params = params.append('yearId', yearId);
        return this.http.get(this.api + 'jdetails_from/getSalesByDate.php', { params: params });
    }
    getJFrom2Date(store_id, from, to, yearId) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpParams();
        params = params.append('store_id', store_id);
        params = params.append('from', from);
        params = params.append('to', to);
        params = params.append('yearId', yearId);
        return this.http.get(this.api + 'jdetails_from/getSales2Date.php', { params: params });
    }
    ///
    getTopJTo(store_id, yearId) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpParams();
        params = params.append('store_id', store_id);
        params = params.append('yearId', yearId);
        return this.http.get(this.api + 'jdetails_to/getTopSales.php', { params: params });
    }
    getJToByDate(store_id, from, yearId) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpParams();
        params = params.append('store_id', store_id);
        params = params.append('from', from);
        params = params.append('yearId', yearId);
        return this.http.get(this.api + 'jdetails_to/getSalesByDate.php', { params: params });
    }
    getJTo2Date(store_id, from, to, yearId) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpParams();
        params = params.append('store_id', store_id);
        params = params.append('from', from);
        params = params.append('to', to);
        params = params.append('yearId', yearId);
        return this.http.get(this.api + 'jdetails_to/getSales2Date.php', { params: params });
    }
    ///
    getTswiaByDate(store_id, from, yearId) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpParams();
        params = params.append('store_id', store_id);
        params = params.append('from', from);
        params = params.append('yearId', yearId);
        return this.http.get(this.api + 'tswia/getSalesByDate.php', { params: params });
    }
    getSalesByDate(store_id, from, yearId) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpParams();
        params = params.append('store_id', store_id);
        params = params.append('from', from);
        params = params.append('yearId', yearId);
        return this.http.get(this.api + 'pay/getSalesByDate.php', { params: params });
    }
    getTswia2Date(store_id, from, to, yearId) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpParams();
        params = params.append('store_id', store_id);
        params = params.append('from', from);
        params = params.append('to', to);
        params = params.append('yearId', yearId);
        return this.http.get(this.api + 'tswia/getSales2Date.php', { params: params });
    }
    getSales2Date(store_id, from, to, yearId) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpParams();
        params = params.append('store_id', store_id);
        params = params.append('from', from);
        params = params.append('to', to);
        params = params.append('yearId', yearId);
        return this.http.get(this.api + 'pay/getSales2Date.php', { params: params });
    }
    getTopPerch(store_id, yearId) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpParams();
        params = params.append('store_id', store_id);
        params = params.append('yearId', yearId);
        return this.http.get(this.api + 'perch/getTopSales.php', { params: params });
    }
    getTopOrderPerch(store_id) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpParams();
        params = params.append('store_id', store_id);
        return this.http.get(this.api + 'perchOrder/getTopSales.php', { params: params });
    }
    getBalanceSubAccount(store_id, yearId) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpParams();
        params = params.append('store_id', store_id);
        params = params.append('yearId', yearId);
        return this.http.get(this.api + 'sub_accounts/balanceSheetByStore.php', { params: params });
    }
    // New comprehensive balance sheet API
    getComprehensiveBalanceSheet(store_id, year_id) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpParams();
        params = params.append('store_id', store_id);
        params = params.append('year_id', year_id);
        return this.http.get(this.api + 'sub_accounts/getComprehensiveBalanceSheet.php', { params: params });
    }
    // Dashboard API Methods
    getDashboardSalesPurchase(store_id, start_date, end_date, year_id) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpParams();
        params = params.append('store_id', store_id);
        params = params.append('start_date', start_date);
        params = params.append('end_date', end_date);
        params = params.append('year_id', year_id);
        return this.http.get(this.api + 'dashboard/getSalesPurchase.php', { params: params });
    }
    getDashboardDebtorCreditor(store_id, year_id) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpParams();
        params = params.append('store_id', store_id);
        params = params.append('year_id', year_id);
        return this.http.get(this.api + 'dashboard/getDebtorCreditor.php', { params: params });
    }
    getDashboardCashFlow(store_id, start_date, end_date, year_id) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpParams();
        params = params.append('store_id', store_id);
        params = params.append('start_date', start_date);
        params = params.append('end_date', end_date);
        params = params.append('year_id', year_id);
        return this.http.get(this.api + 'dashboard/getCashFlow.php', { params: params });
    }
    getDashboardStockValue(store_id, year_id) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpParams();
        params = params.append('store_id', store_id);
        params = params.append('year_id', year_id);
        return this.http.get(this.api + 'dashboard/getStockValue.php', { params: params });
    }
    getPerchByDate(store_id, from, yearId) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpParams();
        params = params.append('store_id', store_id);
        params = params.append('from', from);
        params = params.append('yearId', yearId);
        return this.http.get(this.api + 'perch/getSalesByDate.php', { params: params });
    }
    getPerch2Date(store_id, from, to, yearId) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpParams();
        params = params.append('store_id', store_id);
        params = params.append('from', from);
        params = params.append('to', to);
        params = params.append('yearId', yearId);
        return this.http.get(this.api + 'perch/getSales2Date.php', { params: params });
    }
    getPayInvoDetail(store_id, pay_ref, yearId) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpParams();
        params = params.append('store_id', store_id);
        params = params.append('yearId', yearId);
        params = params.append('pay_ref', pay_ref);
        return this.http.get(this.api + 'pay_details/readByStoreByRef.php', { params: params });
    }
    getTswiaInvoDetail(store_id, pay_ref, yearId) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpParams();
        params = params.append('store_id', store_id);
        params = params.append('yearId', yearId);
        params = params.append('pay_ref', pay_ref);
        return this.http.get(this.api + 'tswia_details/readByStoreByRef.php', { params: params });
    }
    getPayInvoDetailinit(store_id, pay_ref) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpParams();
        params = params.append('store_id', store_id);
        params = params.append('pay_ref', pay_ref);
        return this.http.get(this.api + 'payinit_details/readByStoreByRef.php', { params: params });
    }
    getPerchInvoDetail(store_id, pay_ref, yearId) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpParams();
        params = params.append('store_id', store_id);
        params = params.append('pay_ref', pay_ref);
        params = params.append('yearId', yearId);
        return this.http.get(this.api + 'perch_details/readByStoreByRef.php', { params: params });
    }
    getPerchOrderInvoDetail(store_id, pay_ref) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpParams();
        params = params.append('store_id', store_id);
        params = params.append('pay_ref', pay_ref);
        return this.http.get(this.api + 'perchOrder_details/readByStoreByRef.php', { params: params });
    }
    getAllPerchDetail(store_id, yearId) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpParams();
        params = params.append('store_id', store_id);
        params = params.append('yearId', yearId);
        return this.http.get(this.api + 'perch_details/readAllByStore.php', { params: params });
    }
    getAllTswiaDetail(store_id, yearId) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpParams();
        params = params.append('store_id', store_id);
        params = params.append('yearId', yearId);
        return this.http.get(this.api + 'tswia_details/readAllByStore.php', { params: params });
    }
    getAllSalesDetail(store_id, yearId) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpParams();
        params = params.append('yearId', yearId);
        params = params.append('store_id', store_id);
        return this.http.get(this.api + 'pay_details/readAllByStore.php', { params: params });
    }
    getExpnsesAccounts(store_id, yearId) {
        let ac_id = 3;
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpParams();
        params = params.append('store_id', store_id);
        params = params.append('ac_id', ac_id);
        params = params.append('yearId', yearId);
        return this.http.get(this.api + 'sub_accounts/readByStore.php', { params: params });
    }
    getMainAccounts() {
        return this.http.get(this.api + 'accounts/readByStore.php');
    }
    getAllAccounts(store_id, yearId) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpParams();
        params = params.append('store_id', store_id);
        params = params.append('yearId', yearId);
        return this.http.get(this.api + 'sub_accounts/readAllStore.php', { params: params });
    }
    // Get accounts with pagination and balance calculations
    getAccountsWithBalance(store_id, yearId, page = 1, pageSize = 20, searchTerm = '', filters = {}) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpParams();
        params = params.append('store_id', store_id);
        params = params.append('yearId', yearId);
        params = params.append('page', page.toString());
        params = params.append('pageSize', pageSize.toString());
        console.log('Service getAccountsWithBalance called with searchTerm:', searchTerm);
        console.log('Service getAccountsWithBalance called with filters:', filters);
        if (searchTerm && searchTerm.trim() !== '') {
            params = params.append('search', searchTerm.trim());
            console.log('Added search parameter:', searchTerm.trim());
        }
        else {
            console.log('No search parameter added (empty or null search term)');
        }
        // Add filter parameters
        if (filters.cat_name && filters.cat_name.trim() !== '') {
            params = params.append('cat_name', filters.cat_name.trim());
            console.log('Added cat_name filter:', filters.cat_name.trim());
        }
        if (filters.balance_type && filters.balance_type.trim() !== '') {
            params = params.append('balance_type', filters.balance_type.trim());
            console.log('Added balance_type filter:', filters.balance_type.trim());
        }
        if (filters.sub_type && filters.sub_type.trim() !== '') {
            params = params.append('sub_type', filters.sub_type.trim());
            console.log('Added sub_type filter:', filters.sub_type.trim());
        }
        if (filters.has_balance === true) {
            params = params.append('has_balance', '1');
            console.log('Added has_balance filter: true');
        }
        console.log('Final API URL:', this.api + 'sub_accounts/readWithBalance.php');
        console.log('Final params:', params.toString());
        return this.http.get(this.api + 'sub_accounts/readWithBalance.php', { params: params });
    }
    // Get accounts with POSITIVE balance only - separate endpoint for cleaner logic
    getAccountsWithPositiveBalance(store_id, yearId, page = 1, pageSize = 20, searchTerm = '', filters = {}) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpParams();
        params = params.append('store_id', store_id);
        params = params.append('yearId', yearId);
        params = params.append('page', page.toString());
        params = params.append('pageSize', pageSize.toString());
        console.log('Service getAccountsWithPositiveBalance called with searchTerm:', searchTerm);
        console.log('Service getAccountsWithPositiveBalance called with filters:', filters);
        if (searchTerm && searchTerm.trim() !== '') {
            params = params.append('search', searchTerm.trim());
            console.log('Added search parameter:', searchTerm.trim());
        }
        // Add filter parameters (excluding has_balance since this endpoint is specifically for positive balance)
        if (filters.cat_name && filters.cat_name.trim() !== '') {
            params = params.append('cat_name', filters.cat_name.trim());
            console.log('Added cat_name filter:', filters.cat_name.trim());
        }
        if (filters.balance_type && filters.balance_type.trim() !== '') {
            params = params.append('balance_type', filters.balance_type.trim());
            console.log('Added balance_type filter:', filters.balance_type.trim());
        }
        if (filters.sub_type && filters.sub_type.trim() !== '') {
            params = params.append('sub_type', filters.sub_type.trim());
            console.log('Added sub_type filter:', filters.sub_type.trim());
        }
        console.log('Final API URL:', this.api + 'sub_accounts/readWithBalancePositive.php');
        console.log('Final params:', params.toString());
        return this.http.get(this.api + 'sub_accounts/readWithBalancePositive.php', { params: params });
    }
    // Get detailed balance for a specific account
    getAccountBalance(account_id, store_id, yearId) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpParams();
        params = params.append('account_id', account_id);
        params = params.append('store_id', store_id);
        params = params.append('yearId', yearId);
        return this.http.get(this.api + 'sub_accounts/getAccountBalance.php', { params: params });
    }
    getAccountCategory(store_id) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpParams();
        params = params.append('store_id', store_id);
        return this.http.get(this.api + 'account_category/readByStore.php', { params: params });
    }
    getJournalType(store_id) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpParams();
        params = params.append('store_id', store_id);
        return this.http.get(this.api + 'j_type/readByStore.php', { params: params });
    }
    getJournalTypeDetails(store_id) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpParams();
        params = params.append('store_id', store_id);
        return this.http.get(this.api + 'j_typeDetails/readByStoreByRef.php', { params: params });
    }
    getSalesAccounts(store_id, yearId) {
        let ac_id = 1;
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpParams();
        params = params.append('store_id', store_id);
        params = params.append('ac_id', ac_id);
        params = params.append('yearId', yearId);
        return this.http.get(this.api + 'sub_accounts/readByStore.php', { params: params });
    }
    getPerchAccounts(store_id, yearId) {
        let ac_id = 2;
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpParams();
        params = params.append('store_id', store_id);
        params = params.append('ac_id', ac_id);
        params = params.append('yearId', yearId);
        return this.http.get(this.api + 'sub_accounts/readByStore.php', { params: params });
    }
    getAllCustomerSupplierAccounts(store_id, yearId) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpParams();
        params = params.append('store_id', store_id);
        params = params.append('yearId', yearId);
        const fullUrl = this.api + 'sub_accounts/getAllCustomerSupplier.php';
        console.log('getAllCustomerSupplierAccounts URL:', fullUrl);
        console.log('Current API base:', this.api);
        return this.http.get(fullUrl, { params: params });
    }
    getYear() {
        return this.http.get(this.api + 'year/readByStoreByRef.php');
    }
    login(user) {
        //console.log(user)
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpParams();
        params = params.append('user_name', user.user_name);
        params = params.append('password', user.password);
        params = params.append('store_id', user.store_id);
        params = params.append('level', 'user');
        return this.http.get(this.api + 'users/login.php', { params: params });
    }
    saveTswiaInvo(payInvo) {
        return this.http.post(this.api + 'tswia/create.php', payInvo);
    }
    saveSalesInvo(payInvo) {
        return this.http.post(this.api + 'pay/create.php', payInvo);
    }
    saveSalesInvoInit(payInvo) {
        return this.http.post(this.api + 'payinit/create.php', payInvo);
    }
    uploadItems(file) {
        //console.log(file)
        return this.http.post(this.api + 'uploadXsl.php', file);
    }
    uploadFq(file) {
        //console.log(file)
        return this.http.post(this.api + 'uploadXslFristq.php', file);
    }
    upload2(file) {
        // Create form data
        const formData = new FormData();
        // Store form name as "file" with file data
        formData.append("file", file, file.name);
        // Make http post request over api
        // with formData as req
        return this.http.post(this.api + 'uploadXsl.php', formData);
    }
    saveExpenseInvo(payInvo) {
        return this.http.post(this.api + 'invoices/create.php', payInvo);
    }
    saveJournal(payInvo) {
        return this.http.post(this.api + 'journal/create.php', payInvo);
    }
    updateTswiaInvo(payInvo) {
        return this.http.post(this.api + 'tswia/update.php', payInvo);
    }
    updateSalesInvo(payInvo) {
        return this.http.post(this.api + 'pay/update.php', payInvo);
    }
    updateInitSalesInvo(payInvo) {
        return this.http.post(this.api + 'payinit/update.php', payInvo);
    }
    deleteTswiaInvo(pay_id) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpParams();
        params = params.append('pay_id', pay_id);
        return this.http.delete(this.api + 'tswia/delete.php', { params: params });
    }
    deleteSalesInvo(pay_id) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpParams();
        params = params.append('pay_id', pay_id);
        return this.http.delete(this.api + 'pay/delete.php', { params: params });
    }
    deleteSalesInvoInit(pay_id) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpParams();
        params = params.append('pay_id', pay_id);
        return this.http.delete(this.api + 'payinit/delete.php', { params: params });
    }
    deleteJournal(j_ref) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpParams();
        params = params.append('j_ref', j_ref);
        return this.http.delete(this.api + 'journal/deleteMultiServices.php', { params: params });
    }
    deleteFristq(store_id, fq_year) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpParams();
        params = params.append('store_id', store_id);
        params = params.append('fq_year', fq_year);
        return this.http.delete(this.api + 'firstq/deleteByStore.php', { params: params });
    }
    savePerchInvo(payInvo) {
        return this.http.post(this.api + 'perch/create.php', payInvo);
    }
    savePerchOrderInvo(payInvo) {
        return this.http.post(this.api + 'perchOrder/create.php', payInvo);
    }
    updatePerchInvo(payInvo) {
        return this.http.post(this.api + 'perch/update.php', payInvo);
    }
    deletePerchInvo(pay_id) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpParams();
        params = params.append('pay_id', pay_id);
        return this.http.delete(this.api + 'perch/delete.php', { params: params });
    }
    updatePerchOrderInvo(payInvo) {
        return this.http.post(this.api + 'perchOrder/update.php', payInvo);
    }
    deletePerchOrderInvo(pay_id) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpParams();
        params = params.append('pay_id', pay_id);
        return this.http.delete(this.api + 'perchOrder/delete.php', { params: params });
    }
    saveSubAccount(sub_account) {
        return this.http.post(this.api + 'sub_accounts/create.php', sub_account);
    }
    updateSubAccount(payInvo) {
        return this.http.post(this.api + 'sub_accounts/update.php', payInvo);
    }
    deleteSubAccont(id) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpParams();
        params = params.append('id', id);
        return this.http.get(this.api + 'sub_accounts/delete.php', { params: params });
    }
    checkAccountUsage(account_id) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpParams();
        params = params.append('account_id', account_id);
        return this.http.get(this.api + 'sub_accounts/checkUsage.php', { params: params });
    }
    getStatementWithBalance(store_id, year_id, account_id, options = {}) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpParams();
        params = params.append('store_id', store_id);
        params = params.append('year_id', year_id);
        params = params.append('account_id', account_id);
        // Add optional search parameters (no filters)
        if (options.search_type !== undefined) {
            params = params.append('search_type', options.search_type.toString());
        }
        if (options.start_date) {
            params = params.append('start_date', options.start_date);
        }
        if (options.end_date) {
            params = params.append('end_date', options.end_date);
        }
        if (options.page) {
            params = params.append('page', options.page.toString());
        }
        if (options.limit) {
            params = params.append('limit', options.limit.toString());
        }
        return this.http.get(this.api + 'sub_accounts/getStatementWithBalance.php', { params: params });
    }
    createMultiAccount(accountList) {
        accountList = JSON.stringify(accountList);
        return this.http.post(this.api + 'sub_accounts/createMulti.php', accountList);
    }
    createAccount(accountList) {
        return this.http.post(this.api + 'sub_accounts/create.php', accountList);
    }
    saveItem(item) {
        return this.http.post(this.api + 'items/create.php', item);
    }
    getItemById(id) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpParams();
        params = params.append('id', id);
        return this.http.get(this.api + 'items/getItemById.php', { params: params });
    }
    saveitemMulti(item) {
        let itemarr = [];
        itemarr.push(item);
        itemarr = JSON.stringify(itemarr);
        return this.http.post(this.api + 'items/createMulti.php', itemarr);
    }
    saveLogHistoryMulti(item, firstq, role) {
        let itemarr = [];
        if (role == 'insert') {
            itemarr.push(item, firstq);
        }
        else {
            itemarr.push(item);
        }
        itemarr = JSON.stringify(itemarr);
        return this.http.post(this.api + 'logHistory/createMulti.php', itemarr);
    }
    saveLogHistoryMultiSales(invo, cust, role) {
        let itemarr = [];
        if (role == 'new account') {
            itemarr.push(invo, cust);
        }
        else {
            itemarr.push(invo);
        }
        itemarr = JSON.stringify(itemarr);
        return this.http.post(this.api + 'logHistory/createMulti.php', itemarr);
    }
    saveFirstQty(firstq) {
        return this.http.post(this.api + 'firstq/createf.php', firstq);
    }
    updatfiratqty(item) {
        return this.http.post(this.api + 'firstq/updateQty.php', item);
    }
    updatfiratqtynew(item) {
        console.log(item);
        return this.http.post(this.api + 'firstq/update.php', item);
    }
    saveItemStock(itemSstock) {
        return this.http.post(this.api + 'stock/create.php', itemSstock);
    }
    deleteTswiaitemList(pay_ref) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpParams();
        params = params.append('pay_ref', pay_ref);
        return this.http.delete(this.api + 'tswia_details/deleteMultiServices.php', { params: params });
    }
    deleteSalesitemList(pay_ref) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpParams();
        params = params.append('pay_ref', pay_ref);
        return this.http.delete(this.api + 'pay_details/deleteMultiServices.php', { params: params });
    }
    deleteSalesitemListInit(pay_ref) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpParams();
        params = params.append('pay_ref', pay_ref);
        return this.http.delete(this.api + 'payinit_details/deleteMultiServices.php', { params: params });
    }
    deleteJFrom(j_ref) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpParams();
        params = params.append('j_ref', j_ref);
        return this.http.delete(this.api + 'jdetails_from/deleteMultiServices.php', { params: params });
    }
    deleteJto(j_ref) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpParams();
        params = params.append('j_ref', j_ref);
        return this.http.delete(this.api + 'jdetails_to/deleteMultiServices.php', { params: params });
    }
    deletePerchitemList(pay_ref) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpParams();
        params = params.append('pay_ref', pay_ref);
        return this.http.delete(this.api + 'perch_details/deleteMultiServices.php', { params: params });
    }
    deletePerchOrderitemList(pay_ref) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpParams();
        params = params.append('pay_ref', pay_ref);
        return this.http.delete(this.api + 'perchOrder_details/deleteMultiServices.php', { params: params });
    }
    saveTswiaitemList(itemList) {
        itemList = JSON.stringify(itemList);
        return this.http.post(this.api + 'tswia_details/createMulti.php', itemList);
    }
    saveSalesitemList(itemList) {
        itemList = JSON.stringify(itemList);
        return this.http.post(this.api + 'pay_details/createMulti.php', itemList);
    }
    saveSalesitemListInit(itemList) {
        itemList = JSON.stringify(itemList);
        return this.http.post(this.api + 'payinit_details/createMulti.php', itemList);
    }
    // New optimized methods for combined invoice and items saving
    saveSalesInvoWithItems(invoiceData) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
        return this.http.post(this.api + 'pay/createWithItems.php', invoiceData, httpOptions);
    }
    // New optimized methods for combined invoice and items saving
    saveSalesInvoInitWithItems(invoiceData) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
        return this.http.post(this.api + 'payinit/createWithItems.php', invoiceData, httpOptions);
    }
    // New optimized methods for combined invoice and items saving
    savePerchInvoWithItems(invoiceData) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
        return this.http.post(this.api + 'perch/createWithItems.php', invoiceData, httpOptions);
    }
    // Update sales invoice with items in single API call
    updateSalesInvoWithItems(invoiceData) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
        return this.http.post(this.api + 'pay/updateWithItems.php', invoiceData, httpOptions);
    }
    // Update purchase invoice with items in single API call
    updatePerchInvoWithItems(invoiceData) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
        return this.http.post(this.api + 'perch/updateWithItems.php', invoiceData, httpOptions);
    }
    // Save initial invoice with items and delete final invoice in single API call (for edit-sales)
    saveSalesInvoInitWithItemsAndDeletePay(invoiceData) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
        return this.http.post(this.api + 'payinit/saveWithItemsAndDeletePay.php', invoiceData, httpOptions);
    }
    // Delete initial invoice with items in single API call (for sales page)
    deleteSalesInvoInitWithItems(deletionData) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
        return this.http.post(this.api + 'payinit/deleteWithItems.php', deletionData, httpOptions);
    }
    // Delete sales invoice with items in single API call (for edit-sales page)
    deleteSalesInvoWithItems(deletionData) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
        return this.http.post(this.api + 'pay/deleteWithItems.php', deletionData, httpOptions);
    }
    // Delete purchase invoice with items in single API call (for edit-perch page)
    deletePerchInvoWithItems(deletionData) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
        return this.http.post(this.api + 'perch/deleteWithItems.php', deletionData, httpOptions);
    }
    createMultiSales(accountList) {
        accountList = JSON.stringify(accountList);
        return this.http.post(this.api + 'pay/createMulti.php', accountList);
    }
    createMultiPurch(accountList) {
        accountList = JSON.stringify(accountList);
        return this.http.post(this.api + 'perch/createMulti.php', accountList);
    }
    saveJournalFrom(itemList) {
        itemList = JSON.stringify(itemList);
        return this.http.post(this.api + 'jdetails_from/createMulti.php', itemList);
    }
    saveJournalTo(itemList) {
        itemList = JSON.stringify(itemList);
        return this.http.post(this.api + 'jdetails_to/createMulti.php', itemList);
    }
    savePerchitemList(itemList) {
        itemList = JSON.stringify(itemList);
        return this.http.post(this.api + 'perch_details/createMulti.php', itemList);
    }
    savePerchOrderitemList(itemList) {
        itemList = JSON.stringify(itemList);
        return this.http.post(this.api + 'perchOrder_details/createMulti.php', itemList);
    }
    updateItem(item) {
        return this.http.post(this.api + 'items/update.php', item);
    }
    updatePayPrice(item) {
        return this.http.post(this.api + 'items/updatePayPrice.php', item);
    }
    updateFirstQ(item) {
        return this.http.post(this.api + 'firstq/updateF.php', item);
    }
    updatePrices(item) {
        return this.http.post(this.api + 'items/updatePrices.php', item);
    }
    increasePrice(payval, perchval) {
        let item = { payval: payval, perchval: perchval };
        return this.http.post(this.api + 'items/increasePrice.php', item);
    }
    decreasePrice(payval, perchval) {
        let item = { payval: payval, perchval: perchval };
        return this.http.post(this.api + 'items/decreasePrice.php', item);
    }
    deleteItems(id) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpParams();
        params = params.append('id', id);
        return this.http.get(this.api + 'items/delete.php', { params: params });
    }
    // New methods for edit journal functionality
    getJournalById(journalId) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpParams();
        params = params.append('j_id', journalId);
        return this.http.get(this.api + 'journal/read_single.php', { params: params });
    }
    getJFromByJournalId(journalId) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpParams();
        params = params.append('j_id', journalId);
        return this.http.get(this.api + 'jdetails_from/readByJournalId.php', { params: params });
    }
    getJToByJournalId(journalId) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpParams();
        params = params.append('j_id', journalId);
        return this.http.get(this.api + 'jdetails_to/readByJournalId.php', { params: params });
    }
    updateJournal(journal) {
        return this.http.post(this.api + 'journal/update.php', journal);
    }
    updateJFrom(jdetailFrom) {
        return this.http.post(this.api + 'jdetails_from/update.php', jdetailFrom);
    }
    updateJTo(jdetailTo) {
        return this.http.post(this.api + 'jdetails_to/update.php', jdetailTo);
    }
    createCategory(category) {
        return this.http.post(this.api + 'item_categories/create.php', category);
    }
    updateCategory(category) {
        return this.http.post(this.api + 'item_categories/update.php', category);
    }
    deleteCategory(id) {
        return this.http.post(this.api + 'item_categories/delete.php', { id: id });
    }
    getCategoryById(id) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpParams();
        params = params.append('id', id);
        return this.http.get(this.api + 'item_categories/read_single.php', { params: params });
    }
    // Updated stock items method to support category filtering
    stockItemsWithCategory(store_id, yearId, category_id) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpParams();
        params = params.append('store_id', store_id);
        params = params.append('yearId', yearId);
        if (category_id && category_id !== 'all') {
            params = params.append('category_id', category_id);
        }
        return this.http.get(this.api + 'items/readStock.php', { params: params });
    }
    // Get paginated stock items (no filters or search)
    getStockItemsWithPagination(store_id, page = 1, pageSize = 20, categoryId = 'all') {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpParams();
        params = params.append('store_id', store_id);
        params = params.append('page', page.toString());
        params = params.append('pageSize', pageSize.toString());
        if (categoryId && categoryId !== 'all') {
            params = params.append('category_id', categoryId);
        }
        return this.http.get(this.api + 'items/readStockWithPagination.php', { params: params });
    }
    // Get all stock items without pagination
    getAllStockItems(store_id, categoryId = 'all') {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpParams();
        params = params.append('store_id', store_id);
        if (categoryId && categoryId !== 'all') {
            params = params.append('category_id', categoryId);
        }
        return this.http.get(this.api + 'items/readAllStock.php', { params: params });
    }
    // Search stock items without pagination
    searchStockItems(store_id, searchTerm, categoryId = 'all') {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpParams();
        params = params.append('store_id', store_id);
        params = params.append('search', searchTerm.trim());
        if (categoryId && categoryId !== 'all') {
            params = params.append('category_id', categoryId);
        }
        return this.http.get(this.api + 'items/searchStock.php', { params: params });
    }
    // Get stock totals by category only
    getStockTotals(store_id, yearId, categoryId = 'all') {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpParams();
        params = params.append('store_id', store_id);
        params = params.append('yearId', yearId);
        if (categoryId && categoryId !== 'all') {
            params = params.append('category_id', categoryId);
        }
        return this.http.get(this.api + 'items/readStockTotals.php', { params: params });
    }
    // Get filtered stock items without pagination (no search)
    getFilteredStockItems(store_id, yearId, filters = {}) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpParams();
        params = params.append('store_id', store_id);
        params = params.append('yearId', yearId);
        // Add filter parameters only (no search)
        if (filters.category_id && filters.category_id !== 'all') {
            params = params.append('category_id', filters.category_id);
        }
        if (filters.brand && filters.brand.trim() !== '') {
            params = params.append('brand', filters.brand.trim());
        }
        if (filters.model && filters.model.trim() !== '') {
            params = params.append('model', filters.model.trim());
        }
        if (filters.quantity_filter && filters.quantity_filter.trim() !== '') {
            params = params.append('quantity_filter', filters.quantity_filter.trim());
        }
        return this.http.get(this.api + 'items/readStockFiltered.php', { params: params });
    }
    // Get unique brands for filter dropdown
    getUniqueBrands(store_id, yearId) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpParams();
        params = params.append('store_id', store_id);
        params = params.append('yearId', yearId);
        return this.http.get(this.api + 'items/readUniqueBrands.php', { params: params });
    }
    // Get unique models for filter dropdown (optionally filtered by brand)
    getUniqueModels(store_id, yearId, brand = '') {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpParams();
        params = params.append('store_id', store_id);
        params = params.append('yearId', yearId);
        if (brand && brand.trim() !== '') {
            params = params.append('brand', brand.trim());
        }
        return this.http.get(this.api + 'items/readUniqueModels.php', { params: params });
    }
    // Validate stock quantities for sales
    validateStockQuantity(store_id, itemList) {
        const requestData = {
            store_id: store_id,
            itemList: itemList
        };
        return this.http.post(this.api + 'items/validateStockQuantity.php', requestData);
    }
    // Single API endpoint for complete item report data
    getCompleteItemReport(store_id, item_id, yearId, reportType = 0, startDate = null, endDate = null) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpParams();
        params = params.append('store_id', store_id);
        params = params.append('item_id', item_id);
        params = params.append('yearId', yearId);
        params = params.append('report_type', reportType.toString());
        if (startDate && startDate.trim() !== '') {
            params = params.append('start_date', startDate.trim());
        }
        if (endDate && endDate.trim() !== '') {
            params = params.append('end_date', endDate.trim());
        }
        return this.http.get(this.api + 'items/getCompleteItemReport.php', { params: params });
    }
};
ServicesService.ctorParameters = () => [
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_0__.Storage },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient }
];
ServicesService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: 'root'
    })
], ServicesService);



/***/ }),

/***/ 92340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    hmr: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 84187:
/*!********************!*\
  !*** ./src/hmr.ts ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "hmrBootstrap": () => (/* binding */ hmrBootstrap)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angularclass_hmr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angularclass/hmr */ 53579);


const hmrBootstrap = (module, bootstrap) => {
    let ngModule;
    module.hot.accept();
    bootstrap().then(mod => ngModule = mod);
    module.hot.dispose(() => {
        const appRef = ngModule.injector.get(_angular_core__WEBPACK_IMPORTED_MODULE_0__.ApplicationRef);
        const elements = appRef.components.map(c => c.location.nativeElement);
        const makeVisible = (0,_angularclass_hmr__WEBPACK_IMPORTED_MODULE_1__.createNewHosts)(elements);
        ngModule.destroy();
        makeVisible();
    });
};


/***/ }),

/***/ 14431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 14909);
/* harmony import */ var _hmr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hmr */ 84187);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/app.module */ 36747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./environments/environment */ 92340);
/* harmony import */ var _ionic_pwa_elements_loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/pwa-elements/loader */ 82100);






if (_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.enableProdMode)();
}
const bootstrap = () => (0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_5__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_1__.AppModule);
if (_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.hmr) {
    if (false) {}
    else {
        console.error('HMR is not enabled for webpack-dev-server!');
        //console.log('Are you using the --hmr flag for ng serve?');
    }
}
else {
    bootstrap().catch(err => console.log(err));
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_5__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_1__.AppModule)
    .catch(err => console.log(err));
(0,_ionic_pwa_elements_loader__WEBPACK_IMPORTED_MODULE_3__.defineCustomElements)(window);


/***/ }),

/***/ 50863:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \******************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./ion-accordion_2.entry.js": [
		470,
		"common",
		"node_modules_ionic_core_dist_esm_ion-accordion_2_entry_js"
	],
	"./ion-action-sheet.entry.js": [
		22725,
		"node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"
	],
	"./ion-alert.entry.js": [
		36149,
		"node_modules_ionic_core_dist_esm_ion-alert_entry_js"
	],
	"./ion-app_8.entry.js": [
		19288,
		"node_modules_ionic_core_dist_esm_ion-app_8_entry_js"
	],
	"./ion-avatar_3.entry.js": [
		61031,
		"node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"
	],
	"./ion-back-button.entry.js": [
		58310,
		"common",
		"node_modules_ionic_core_dist_esm_ion-back-button_entry_js"
	],
	"./ion-backdrop.entry.js": [
		81983,
		"node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"
	],
	"./ion-breadcrumb_2.entry.js": [
		17039,
		"common",
		"node_modules_ionic_core_dist_esm_ion-breadcrumb_2_entry_js"
	],
	"./ion-button_2.entry.js": [
		57945,
		"node_modules_ionic_core_dist_esm_ion-button_2_entry_js"
	],
	"./ion-card_5.entry.js": [
		8714,
		"node_modules_ionic_core_dist_esm_ion-card_5_entry_js"
	],
	"./ion-checkbox.entry.js": [
		31786,
		"node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"
	],
	"./ion-chip.entry.js": [
		24702,
		"node_modules_ionic_core_dist_esm_ion-chip_entry_js"
	],
	"./ion-col_3.entry.js": [
		94094,
		"node_modules_ionic_core_dist_esm_ion-col_3_entry_js"
	],
	"./ion-datetime_3.entry.js": [
		50795,
		"common",
		"node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"
	],
	"./ion-fab_3.entry.js": [
		36976,
		"common",
		"node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"
	],
	"./ion-img.entry.js": [
		51417,
		"node_modules_ionic_core_dist_esm_ion-img_entry_js"
	],
	"./ion-infinite-scroll_2.entry.js": [
		78412,
		"node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"
	],
	"./ion-input.entry.js": [
		94706,
		"node_modules_ionic_core_dist_esm_ion-input_entry_js"
	],
	"./ion-item-option_3.entry.js": [
		73459,
		"node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"
	],
	"./ion-item_8.entry.js": [
		23354,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item_8_entry_js"
	],
	"./ion-loading.entry.js": [
		41025,
		"node_modules_ionic_core_dist_esm_ion-loading_entry_js"
	],
	"./ion-menu_3.entry.js": [
		98592,
		"common",
		"node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"
	],
	"./ion-modal.entry.js": [
		52526,
		"node_modules_ionic_core_dist_esm_ion-modal_entry_js"
	],
	"./ion-nav_2.entry.js": [
		92447,
		"node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"
	],
	"./ion-picker-column-internal.entry.js": [
		24820,
		"node_modules_ionic_core_dist_esm_ion-picker-column-internal_entry_js"
	],
	"./ion-picker-internal.entry.js": [
		83212,
		"node_modules_ionic_core_dist_esm_ion-picker-internal_entry_js"
	],
	"./ion-popover.entry.js": [
		87557,
		"node_modules_ionic_core_dist_esm_ion-popover_entry_js"
	],
	"./ion-progress-bar.entry.js": [
		28692,
		"node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"
	],
	"./ion-radio_2.entry.js": [
		93544,
		"node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"
	],
	"./ion-range.entry.js": [
		40042,
		"common",
		"node_modules_ionic_core_dist_esm_ion-range_entry_js"
	],
	"./ion-refresher_2.entry.js": [
		70718,
		"common",
		"node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"
	],
	"./ion-reorder_2.entry.js": [
		95981,
		"common",
		"node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"
	],
	"./ion-ripple-effect.entry.js": [
		76488,
		"node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"
	],
	"./ion-route_4.entry.js": [
		47937,
		"node_modules_ionic_core_dist_esm_ion-route_4_entry_js"
	],
	"./ion-searchbar.entry.js": [
		50942,
		"common",
		"node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"
	],
	"./ion-segment_2.entry.js": [
		20816,
		"common",
		"node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"
	],
	"./ion-select_3.entry.js": [
		19062,
		"node_modules_ionic_core_dist_esm_ion-select_3_entry_js"
	],
	"./ion-slide_2.entry.js": [
		13466,
		"node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"
	],
	"./ion-spinner.entry.js": [
		18404,
		"node_modules_ionic_core_dist_esm_ion-spinner_entry_js"
	],
	"./ion-split-pane.entry.js": [
		60953,
		"node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"
	],
	"./ion-tab-bar_2.entry.js": [
		44254,
		"node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"
	],
	"./ion-tab_2.entry.js": [
		45195,
		"node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"
	],
	"./ion-text.entry.js": [
		86116,
		"node_modules_ionic_core_dist_esm_ion-text_entry_js"
	],
	"./ion-textarea.entry.js": [
		79781,
		"node_modules_ionic_core_dist_esm_ion-textarea_entry_js"
	],
	"./ion-toast.entry.js": [
		48323,
		"node_modules_ionic_core_dist_esm_ion-toast_entry_js"
	],
	"./ion-toggle.entry.js": [
		376,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toggle_entry_js"
	],
	"./ion-virtual-scroll.entry.js": [
		82072,
		"node_modules_ionic_core_dist_esm_ion-virtual-scroll_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 50863;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 55899:
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/pwa-elements/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \**************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./pwa-action-sheet.entry.js": [
		277,
		"node_modules_ionic_pwa-elements_dist_esm_pwa-action-sheet_entry_js"
	],
	"./pwa-camera-modal-instance.entry.js": [
		12194,
		"node_modules_ionic_pwa-elements_dist_esm_pwa-camera-modal-instance_entry_js"
	],
	"./pwa-camera-modal.entry.js": [
		82278,
		"node_modules_ionic_pwa-elements_dist_esm_pwa-camera-modal_entry_js"
	],
	"./pwa-camera.entry.js": [
		66759,
		"node_modules_ionic_pwa-elements_dist_esm_pwa-camera_entry_js"
	],
	"./pwa-toast.entry.js": [
		16133,
		"node_modules_ionic_pwa-elements_dist_esm_pwa-toast_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 55899;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 46700:
/*!***************************************************!*\
  !*** ./node_modules/moment/locale/ sync ^\.\/.*$ ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./af": 51975,
	"./af.js": 51975,
	"./ar": 24145,
	"./ar-dz": 75982,
	"./ar-dz.js": 75982,
	"./ar-kw": 56242,
	"./ar-kw.js": 56242,
	"./ar-ly": 26864,
	"./ar-ly.js": 26864,
	"./ar-ma": 22239,
	"./ar-ma.js": 22239,
	"./ar-sa": 834,
	"./ar-sa.js": 834,
	"./ar-tn": 22387,
	"./ar-tn.js": 22387,
	"./ar.js": 24145,
	"./az": 32351,
	"./az.js": 32351,
	"./be": 35392,
	"./be.js": 35392,
	"./bg": 38946,
	"./bg.js": 38946,
	"./bm": 91284,
	"./bm.js": 91284,
	"./bn": 84885,
	"./bn-bd": 64936,
	"./bn-bd.js": 64936,
	"./bn.js": 84885,
	"./bo": 52342,
	"./bo.js": 52342,
	"./br": 21319,
	"./br.js": 21319,
	"./bs": 90605,
	"./bs.js": 90605,
	"./ca": 97135,
	"./ca.js": 97135,
	"./cs": 17783,
	"./cs.js": 17783,
	"./cv": 8060,
	"./cv.js": 8060,
	"./cy": 65052,
	"./cy.js": 65052,
	"./da": 6997,
	"./da.js": 6997,
	"./de": 74846,
	"./de-at": 15074,
	"./de-at.js": 15074,
	"./de-ch": 87973,
	"./de-ch.js": 87973,
	"./de.js": 74846,
	"./dv": 48879,
	"./dv.js": 48879,
	"./el": 88233,
	"./el.js": 88233,
	"./en-au": 32333,
	"./en-au.js": 32333,
	"./en-ca": 48371,
	"./en-ca.js": 48371,
	"./en-gb": 85980,
	"./en-gb.js": 85980,
	"./en-ie": 15263,
	"./en-ie.js": 15263,
	"./en-il": 96225,
	"./en-il.js": 96225,
	"./en-in": 89198,
	"./en-in.js": 89198,
	"./en-nz": 76014,
	"./en-nz.js": 76014,
	"./en-sg": 58604,
	"./en-sg.js": 58604,
	"./eo": 38351,
	"./eo.js": 38351,
	"./es": 47446,
	"./es-do": 15381,
	"./es-do.js": 15381,
	"./es-mx": 41268,
	"./es-mx.js": 41268,
	"./es-us": 93922,
	"./es-us.js": 93922,
	"./es.js": 47446,
	"./et": 93874,
	"./et.js": 93874,
	"./eu": 29501,
	"./eu.js": 29501,
	"./fa": 62986,
	"./fa.js": 62986,
	"./fi": 63517,
	"./fi.js": 63517,
	"./fil": 40471,
	"./fil.js": 40471,
	"./fo": 69848,
	"./fo.js": 69848,
	"./fr": 22104,
	"./fr-ca": 14079,
	"./fr-ca.js": 14079,
	"./fr-ch": 15960,
	"./fr-ch.js": 15960,
	"./fr.js": 22104,
	"./fy": 59942,
	"./fy.js": 59942,
	"./ga": 86259,
	"./ga.js": 86259,
	"./gd": 10196,
	"./gd.js": 10196,
	"./gl": 9667,
	"./gl.js": 9667,
	"./gom-deva": 58901,
	"./gom-deva.js": 58901,
	"./gom-latn": 8001,
	"./gom-latn.js": 8001,
	"./gu": 9430,
	"./gu.js": 9430,
	"./he": 98008,
	"./he.js": 98008,
	"./hi": 13449,
	"./hi.js": 13449,
	"./hr": 69271,
	"./hr.js": 69271,
	"./hu": 61036,
	"./hu.js": 61036,
	"./hy-am": 83043,
	"./hy-am.js": 83043,
	"./id": 27102,
	"./id.js": 27102,
	"./is": 87297,
	"./is.js": 87297,
	"./it": 11248,
	"./it-ch": 3529,
	"./it-ch.js": 3529,
	"./it.js": 11248,
	"./ja": 70645,
	"./ja.js": 70645,
	"./jv": 74317,
	"./jv.js": 74317,
	"./ka": 35359,
	"./ka.js": 35359,
	"./kk": 9027,
	"./kk.js": 9027,
	"./km": 14941,
	"./km.js": 14941,
	"./kn": 77478,
	"./kn.js": 77478,
	"./ko": 74356,
	"./ko.js": 74356,
	"./ku": 91077,
	"./ku.js": 91077,
	"./ky": 80145,
	"./ky.js": 80145,
	"./lb": 12339,
	"./lb.js": 12339,
	"./lo": 53814,
	"./lo.js": 53814,
	"./lt": 20281,
	"./lt.js": 20281,
	"./lv": 90177,
	"./lv.js": 90177,
	"./me": 39609,
	"./me.js": 39609,
	"./mi": 58772,
	"./mi.js": 58772,
	"./mk": 16112,
	"./mk.js": 16112,
	"./ml": 42854,
	"./ml.js": 42854,
	"./mn": 50538,
	"./mn.js": 50538,
	"./mr": 30450,
	"./mr.js": 30450,
	"./ms": 11508,
	"./ms-my": 86169,
	"./ms-my.js": 86169,
	"./ms.js": 11508,
	"./mt": 47009,
	"./mt.js": 47009,
	"./my": 55350,
	"./my.js": 55350,
	"./nb": 15909,
	"./nb.js": 15909,
	"./ne": 87502,
	"./ne.js": 87502,
	"./nl": 65321,
	"./nl-be": 94405,
	"./nl-be.js": 94405,
	"./nl.js": 65321,
	"./nn": 45704,
	"./nn.js": 45704,
	"./oc-lnc": 83788,
	"./oc-lnc.js": 83788,
	"./pa-in": 96290,
	"./pa-in.js": 96290,
	"./pl": 98265,
	"./pl.js": 98265,
	"./pt": 58802,
	"./pt-br": 53430,
	"./pt-br.js": 53430,
	"./pt.js": 58802,
	"./ro": 17732,
	"./ro.js": 17732,
	"./ru": 14548,
	"./ru.js": 14548,
	"./sd": 43268,
	"./sd.js": 43268,
	"./se": 31832,
	"./se.js": 31832,
	"./si": 51601,
	"./si.js": 51601,
	"./sk": 96759,
	"./sk.js": 96759,
	"./sl": 81930,
	"./sl.js": 81930,
	"./sq": 84476,
	"./sq.js": 84476,
	"./sr": 63648,
	"./sr-cyrl": 1249,
	"./sr-cyrl.js": 1249,
	"./sr.js": 63648,
	"./ss": 39724,
	"./ss.js": 39724,
	"./sv": 12280,
	"./sv.js": 12280,
	"./sw": 87639,
	"./sw.js": 87639,
	"./ta": 45843,
	"./ta.js": 45843,
	"./te": 89211,
	"./te.js": 89211,
	"./tet": 35822,
	"./tet.js": 35822,
	"./tg": 69191,
	"./tg.js": 69191,
	"./th": 74716,
	"./th.js": 74716,
	"./tk": 59684,
	"./tk.js": 59684,
	"./tl-ph": 84428,
	"./tl-ph.js": 84428,
	"./tlh": 85189,
	"./tlh.js": 85189,
	"./tr": 83807,
	"./tr.js": 83807,
	"./tzl": 6539,
	"./tzl.js": 6539,
	"./tzm": 36714,
	"./tzm-latn": 98827,
	"./tzm-latn.js": 98827,
	"./tzm.js": 36714,
	"./ug-cn": 97366,
	"./ug-cn.js": 97366,
	"./uk": 92757,
	"./uk.js": 92757,
	"./ur": 57362,
	"./ur.js": 57362,
	"./uz": 5534,
	"./uz-latn": 50321,
	"./uz-latn.js": 50321,
	"./uz.js": 5534,
	"./vi": 24049,
	"./vi.js": 24049,
	"./x-pseudo": 43134,
	"./x-pseudo.js": 43134,
	"./yo": 2668,
	"./yo.js": 2668,
	"./zh-cn": 41282,
	"./zh-cn.js": 41282,
	"./zh-hk": 13423,
	"./zh-hk.js": 13423,
	"./zh-mo": 6739,
	"./zh-mo.js": 6739,
	"./zh-tw": 81037,
	"./zh-tw.js": 81037
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 46700;

/***/ }),

/***/ 32009:
/*!***********************************************!*\
  !*** ./src/app/app.component.scss?ngResource ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = "ion-app {\n  width: 100%;\n  height: 100%;\n}\n\nion-menu ion-content {\n  --background: var(--ion-item-background, var(--ion-background-color, #fff));\n  box-shadow: -2px 0 10px rgba(0, 0, 0, 0.05);\n  transition: width 0.3s ease;\n}\n\nion-split-pane {\n  --side-width: 250px;\n  --side-min-width: 250px;\n  width: 100%;\n  height: 100%;\n}\n\nion-menu[side=end] {\n  left: auto;\n  right: 0;\n}\n\n.menu-container {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  transition: all 0.3s ease;\n}\n\n.logo-section {\n  padding: 16px;\n  text-align: center;\n  border-bottom: 1px solid var(--ion-color-step-150, #d7d8da);\n  transition: all 0.3s ease;\n  overflow: hidden;\n}\n\n.logo-section .logo-container {\n  display: flex;\n  justify-content: center;\n  margin-bottom: 12px;\n}\n\n.logo-section .logo-container .sidebar-logo {\n  max-width: 60px;\n  max-height: 60px;\n  width: auto;\n  height: auto;\n}\n\n.logo-section .app-title {\n  margin: 0;\n  font-size: 18px;\n  font-weight: 600;\n  color: var(--ion-color-primary);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.logo-section.collapsed {\n  padding: 16px 8px;\n}\n\n.logo-section.collapsed .logo-container {\n  margin-bottom: 0;\n}\n\n.logo-section.collapsed .logo-container .sidebar-logo {\n  max-width: 40px;\n  max-height: 40px;\n}\n\n.logo-section.collapsed .app-title {\n  opacity: 0;\n  transform: translateX(20px);\n  height: 0;\n  margin: 0;\n  padding: 0;\n}\n\n.logo-section.expanded .app-title {\n  opacity: 1;\n  transform: translateX(0);\n}\n\n.sidebar-toggle {\n  display: flex;\n  justify-content: flex-end;\n  padding: 8px 16px;\n  cursor: pointer;\n}\n\n.sidebar-toggle .toggle-icon {\n  font-size: 20px;\n  color: var(--ion-color-medium);\n  transition: transform 0.3s ease;\n}\n\n.sidebar-toggle:hover .toggle-icon {\n  color: var(--ion-color-primary);\n  transform: scale(1.1);\n}\n\n.menu-header {\n  padding: 8px 16px 16px 16px;\n  text-align: center;\n  transition: all 0.3s ease;\n  overflow: hidden;\n}\n\n.menu-header ion-label {\n  font-size: 14px;\n  color: var(--ion-color-medium);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.menu-header.collapsed {\n  padding: 8px;\n}\n\n.menu-header.collapsed ion-label {\n  opacity: 0;\n  transform: translateX(20px);\n}\n\n.menu-header.expanded ion-label {\n  opacity: 1;\n  transform: translateX(0);\n}\n\n.user-profile {\n  padding: 16px;\n  background: white;\n  border-bottom: 1px solid var(--ion-color-step-150, #d7d8da);\n  transition: all 0.3s ease;\n  overflow: hidden;\n}\n\n.user-profile .user-info-container {\n  display: flex;\n  align-items: center;\n  padding: 12px;\n  background: var(--ion-color-light);\n  border-radius: 12px;\n  transition: all 0.3s ease;\n}\n\n.user-profile .user-avatar {\n  font-size: 40px;\n  color: var(--ion-color-primary);\n  margin-inline-end: 12px;\n  flex-shrink: 0;\n}\n\n.user-profile .user-details {\n  flex: 1;\n  min-width: 0;\n}\n\n.user-profile .user-details h2 {\n  margin: 0;\n  font-size: 16px;\n  font-weight: 600;\n  color: var(--ion-color-dark);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.user-profile .user-actions-button {\n  margin-inline-start: 8px;\n  flex-shrink: 0;\n  --color: var(--ion-color-medium);\n}\n\n.user-profile .user-actions-button:hover {\n  --color: var(--ion-color-primary);\n}\n\n.user-profile.collapsed {\n  padding: 12px 8px;\n}\n\n.user-profile.collapsed .user-info-container {\n  padding: 8px;\n  justify-content: center;\n}\n\n.user-profile.collapsed .user-details {\n  opacity: 0;\n  transform: translateX(20px);\n  width: 0;\n  margin: 0;\n  padding: 0;\n}\n\n.user-profile.collapsed .user-avatar {\n  margin-inline-end: 0;\n  font-size: 32px;\n}\n\n.user-profile.collapsed .user-actions-button {\n  --padding-start: 4px;\n  --padding-end: 4px;\n  margin-inline-start: 0;\n}\n\n.user-profile.expanded .user-details {\n  opacity: 1;\n  transform: translateX(0);\n}\n\n.navigation-menu {\n  flex: 1;\n  overflow-y: auto;\n  padding: 10px 0;\n  transition: all 0.3s ease;\n}\n\n.menu-section {\n  margin-bottom: 16px;\n  transition: all 0.3s ease;\n}\n\n.menu-section .section-header {\n  display: flex;\n  align-items: center;\n  padding: 16px 16px 8px 16px;\n  color: var(--ion-color-medium);\n  font-weight: 600;\n  font-size: 14px;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  transition: all 0.3s ease;\n  overflow: hidden;\n}\n\n.menu-section .section-header ion-icon {\n  font-size: 18px;\n  margin-inline-end: 8px;\n  flex-shrink: 0;\n}\n\n.menu-section .section-header span {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.menu-item {\n  padding: 0 12px;\n  margin: 2px 12px;\n  border-radius: 8px;\n  cursor: pointer;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  position: relative;\n  overflow: hidden;\n}\n\n.menu-item:hover {\n  background-color: var(--ion-color-light);\n  transform: translateX(-4px);\n}\n\n.menu-item:hover::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  right: 0;\n  width: 4px;\n  height: 100%;\n  background-color: var(--ion-color-primary);\n  border-radius: 4px 0 0 4px;\n}\n\n.menu-item.selected {\n  background-color: rgba(var(--ion-color-primary-rgb), 0.14);\n}\n\n.menu-item.selected::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  right: 0;\n  width: 4px;\n  height: 100%;\n  background-color: var(--ion-color-primary);\n  border-radius: 4px 0 0 4px;\n}\n\n.menu-item.selected .menu-item-content ion-icon {\n  color: var(--ion-color-primary);\n  transform: scale(1.1);\n}\n\n.menu-item.selected .menu-item-content span {\n  color: var(--ion-color-primary);\n  font-weight: 600;\n}\n\n.menu-item-content {\n  display: flex;\n  align-items: center;\n  padding: 12px 8px;\n  transition: all 0.3s ease;\n}\n\n.menu-item-content ion-icon {\n  font-size: 20px;\n  color: #616e7e;\n  margin-inline-end: 16px;\n  transition: all 0.2s ease;\n  flex-shrink: 0;\n}\n\n.menu-item-content span {\n  font-weight: 500;\n  color: var(--ion-color-dark);\n  transition: all 0.2s ease;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.main-content-wrapper {\n  width: 100%;\n  height: 100%;\n  direction: rtl;\n}\n\nion-menu.collapsed {\n  --side-width: 70px;\n  --side-min-width: 70px;\n}\n\nion-menu.expanded {\n  --side-width: 250px;\n  --side-min-width: 250px;\n}\n\nion-menu.collapsed .menu-header,\nion-menu.collapsed .section-header span,\nion-menu.collapsed .menu-item-content span {\n  opacity: 0;\n  transform: translateX(20px);\n  width: 0;\n  margin: 0;\n  padding: 0;\n}\n\nion-menu.collapsed .section-header {\n  padding: 16px 16px 8px 16px;\n  justify-content: center;\n}\n\nion-menu.collapsed .section-header ion-icon {\n  margin-inline-end: 0;\n}\n\nion-menu.collapsed .menu-item {\n  margin: 2px 6px;\n}\n\nion-menu.collapsed .menu-item-content {\n  padding: 12px 4px;\n  justify-content: center;\n}\n\nion-menu.collapsed .menu-item-content ion-icon {\n  margin-inline-end: 0;\n}\n\nion-menu.collapsed .sidebar-toggle {\n  justify-content: center;\n}\n\nion-menu.collapsed .sidebar-toggle .toggle-icon {\n  transform: rotate(180deg);\n}\n\nion-menu.expanded .menu-header,\nion-menu.expanded .section-header span,\nion-menu.expanded .menu-item-content span {\n  opacity: 1;\n  transform: translateX(0);\n  width: auto;\n}\n\nion-menu.expanded .section-header {\n  padding: 16px 16px 8px 16px;\n}\n\nion-menu.expanded .section-header ion-icon {\n  margin-inline-end: 8px;\n}\n\nion-menu.expanded .menu-item {\n  margin: 2px 12px;\n}\n\nion-menu.expanded .menu-item-content {\n  padding: 12px 8px;\n}\n\nion-menu.expanded .menu-item-content ion-icon {\n  margin-inline-end: 16px;\n}\n\nion-menu.expanded .sidebar-toggle {\n  justify-content: flex-end;\n}\n\nion-menu.expanded .sidebar-toggle .toggle-icon {\n  transform: rotate(0deg);\n}\n\n.user-action-popover {\n  --width: 250px;\n}\n\n@media (max-width: 768px) {\n  ion-split-pane {\n    --side-width: 280px;\n    --side-min-width: 280px;\n    width: 100%;\n    height: 100%;\n  }\n\n  ion-menu.collapsed {\n    --side-width: 70px;\n    --side-min-width: 70px;\n  }\n\n  ion-menu.expanded {\n    --side-width: 280px;\n    --side-min-width: 280px;\n  }\n\n  .user-profile {\n    padding: 16px;\n  }\n\n  .menu-header {\n    padding: 12px;\n  }\n\n  .section-header {\n    padding: 10px 12px 6px 12px;\n  }\n\n  .menu-item {\n    margin: 2px 8px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSwyRUFBQTtFQUNBLDJDQUFBO0VBQ0EsMkJBQUE7QUFDRjs7QUFFQTtFQUNFLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUdBO0VBQ0UsVUFBQTtFQUNBLFFBQUE7QUFBRjs7QUFHQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtBQUFGOztBQUdBO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsMkRBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0FBQUY7O0FBRUU7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUFKOztBQUVJO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFBTjs7QUFJRTtFQUNFLFNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSwrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtBQUZKOztBQU1FO0VBQ0UsaUJBQUE7QUFKSjs7QUFNSTtFQUNFLGdCQUFBO0FBSk47O0FBTU07RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUFKUjs7QUFRSTtFQUNFLFVBQUE7RUFDQSwyQkFBQTtFQUNBLFNBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQU5OOztBQVlJO0VBQ0UsVUFBQTtFQUNBLHdCQUFBO0FBVk47O0FBZUE7RUFDRSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUFaRjs7QUFjRTtFQUNFLGVBQUE7RUFDQSw4QkFBQTtFQUNBLCtCQUFBO0FBWko7O0FBZUU7RUFDRSwrQkFBQTtFQUNBLHFCQUFBO0FBYko7O0FBaUJBO0VBQ0UsMkJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7QUFkRjs7QUFnQkU7RUFDRSxlQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7QUFkSjs7QUFrQkU7RUFDRSxZQUFBO0FBaEJKOztBQWtCSTtFQUNFLFVBQUE7RUFDQSwyQkFBQTtBQWhCTjs7QUFzQkk7RUFDRSxVQUFBO0VBQ0Esd0JBQUE7QUFwQk47O0FBeUJBO0VBQ0UsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsMkRBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0FBdEJGOztBQXdCRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxrQ0FBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7QUF0Qko7O0FBeUJFO0VBQ0UsZUFBQTtFQUNBLCtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0FBdkJKOztBQTBCRTtFQUNFLE9BQUE7RUFDQSxZQUFBO0FBeEJKOztBQTBCSTtFQUNFLFNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSw0QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtBQXhCTjs7QUE0QkU7RUFDRSx3QkFBQTtFQUNBLGNBQUE7RUFDQSxnQ0FBQTtBQTFCSjs7QUE0Qkk7RUFDRSxpQ0FBQTtBQTFCTjs7QUErQkU7RUFDRSxpQkFBQTtBQTdCSjs7QUErQkk7RUFDRSxZQUFBO0VBQ0EsdUJBQUE7QUE3Qk47O0FBZ0NJO0VBQ0UsVUFBQTtFQUNBLDJCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FBOUJOOztBQWlDSTtFQUNFLG9CQUFBO0VBQ0EsZUFBQTtBQS9CTjs7QUFrQ0k7RUFDRSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7QUFoQ047O0FBc0NJO0VBQ0UsVUFBQTtFQUNBLHdCQUFBO0FBcENOOztBQXlDQTtFQUNFLE9BQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtBQXRDRjs7QUF5Q0E7RUFDRSxtQkFBQTtFQUNBLHlCQUFBO0FBdENGOztBQXdDRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtBQXRDSjs7QUF3Q0k7RUFDRSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0FBdENOOztBQXlDSTtFQUNFLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtBQXZDTjs7QUE0Q0E7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxpREFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUF6Q0Y7O0FBMkNFO0VBQ0Usd0NBQUE7RUFDQSwyQkFBQTtBQXpDSjs7QUEyQ0k7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsMENBQUE7RUFDQSwwQkFBQTtBQXpDTjs7QUE2Q0U7RUFDRSwwREFBQTtBQTNDSjs7QUE2Q0k7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsMENBQUE7RUFDQSwwQkFBQTtBQTNDTjs7QUErQ007RUFDRSwrQkFBQTtFQUNBLHFCQUFBO0FBN0NSOztBQWdETTtFQUNFLCtCQUFBO0VBQ0EsZ0JBQUE7QUE5Q1I7O0FBb0RBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtBQWpERjs7QUFtREU7RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLHVCQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0FBakRKOztBQW9ERTtFQUNFLGdCQUFBO0VBQ0EsNEJBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtBQWxESjs7QUFzREE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUFuREY7O0FBdURBO0VBQ0Usa0JBQUE7RUFDQSxzQkFBQTtBQXBERjs7QUF3REE7RUFDRSxtQkFBQTtFQUNBLHVCQUFBO0FBckRGOztBQTBERTs7O0VBR0UsVUFBQTtFQUNBLDJCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FBdkRKOztBQTBERTtFQUNFLDJCQUFBO0VBQ0EsdUJBQUE7QUF4REo7O0FBMERJO0VBQ0Usb0JBQUE7QUF4RE47O0FBNERFO0VBQ0UsZUFBQTtBQTFESjs7QUE2REU7RUFDRSxpQkFBQTtFQUNBLHVCQUFBO0FBM0RKOztBQTZESTtFQUNFLG9CQUFBO0FBM0ROOztBQStERTtFQUNFLHVCQUFBO0FBN0RKOztBQStESTtFQUNFLHlCQUFBO0FBN0ROOztBQW9FRTs7O0VBR0UsVUFBQTtFQUNBLHdCQUFBO0VBQ0EsV0FBQTtBQWpFSjs7QUFvRUU7RUFDRSwyQkFBQTtBQWxFSjs7QUFvRUk7RUFDRSxzQkFBQTtBQWxFTjs7QUFzRUU7RUFDRSxnQkFBQTtBQXBFSjs7QUF1RUU7RUFDRSxpQkFBQTtBQXJFSjs7QUF1RUk7RUFDRSx1QkFBQTtBQXJFTjs7QUF5RUU7RUFDRSx5QkFBQTtBQXZFSjs7QUF5RUk7RUFDRSx1QkFBQTtBQXZFTjs7QUE2RUE7RUFDRSxjQUFBO0FBMUVGOztBQThFQTtFQUNFO0lBQ0UsbUJBQUE7SUFDQSx1QkFBQTtJQUNBLFdBQUE7SUFDQSxZQUFBO0VBM0VGOztFQThFQTtJQUNFLGtCQUFBO0lBQ0Esc0JBQUE7RUEzRUY7O0VBOEVBO0lBQ0UsbUJBQUE7SUFDQSx1QkFBQTtFQTNFRjs7RUE4RUE7SUFDRSxhQUFBO0VBM0VGOztFQThFQTtJQUNFLGFBQUE7RUEzRUY7O0VBOEVBO0lBQ0UsMkJBQUE7RUEzRUY7O0VBOEVBO0lBQ0UsZUFBQTtFQTNFRjtBQUNGIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1hcHAge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG5pb24tbWVudSBpb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWl0ZW0tYmFja2dyb3VuZCwgdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IsICNmZmYpKTtcbiAgYm94LXNoYWRvdzogLTJweCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcbiAgdHJhbnNpdGlvbjogd2lkdGggMC4zcyBlYXNlO1xufVxuXG5pb24tc3BsaXQtcGFuZSB7XG4gIC0tc2lkZS13aWR0aDogMjUwcHg7XG4gIC0tc2lkZS1taW4td2lkdGg6IDI1MHB4O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4vLyBGb3JjZSBtZW51IHRvIGFwcGVhciBvbiB0aGUgcmlnaHQgc2lkZVxuaW9uLW1lbnVbc2lkZT1cImVuZFwiXSB7XG4gIGxlZnQ6IGF1dG87XG4gIHJpZ2h0OiAwO1xufVxuXG4ubWVudS1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG59XG5cbi5sb2dvLXNlY3Rpb24ge1xuICBwYWRkaW5nOiAxNnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3Itc3RlcC0xNTAsICNkN2Q4ZGEpO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBcbiAgLmxvZ28tY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIG1hcmdpbi1ib3R0b206IDEycHg7XG4gICAgXG4gICAgLnNpZGViYXItbG9nbyB7XG4gICAgICBtYXgtd2lkdGg6IDYwcHg7XG4gICAgICBtYXgtaGVpZ2h0OiA2MHB4O1xuICAgICAgd2lkdGg6IGF1dG87XG4gICAgICBoZWlnaHQ6IGF1dG87XG4gICAgfVxuICB9XG4gIFxuICAuYXBwLXRpdGxlIHtcbiAgICBtYXJnaW46IDA7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIH1cbiAgXG4gIC8vIENvbGxhcHNlZCBzdGF0ZVxuICAmLmNvbGxhcHNlZCB7XG4gICAgcGFkZGluZzogMTZweCA4cHg7XG4gICAgXG4gICAgLmxvZ28tY29udGFpbmVyIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICBcbiAgICAgIC5zaWRlYmFyLWxvZ28ge1xuICAgICAgICBtYXgtd2lkdGg6IDQwcHg7XG4gICAgICAgIG1heC1oZWlnaHQ6IDQwcHg7XG4gICAgICB9XG4gICAgfVxuICAgIFxuICAgIC5hcHAtdGl0bGUge1xuICAgICAgb3BhY2l0eTogMDtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyMHB4KTtcbiAgICAgIGhlaWdodDogMDtcbiAgICAgIG1hcmdpbjogMDtcbiAgICAgIHBhZGRpbmc6IDA7XG4gICAgfVxuICB9XG4gIFxuICAvLyBFeHBhbmRlZCBzdGF0ZVxuICAmLmV4cGFuZGVkIHtcbiAgICAuYXBwLXRpdGxlIHtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gICAgfVxuICB9XG59XG5cbi5zaWRlYmFyLXRvZ2dsZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIHBhZGRpbmc6IDhweCAxNnB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIFxuICAudG9nZ2xlLWljb24ge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZTtcbiAgfVxuICBcbiAgJjpob3ZlciAudG9nZ2xlLWljb24ge1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xuICB9XG59XG5cbi5tZW51LWhlYWRlciB7XG4gIHBhZGRpbmc6IDhweCAxNnB4IDE2cHggMTZweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBcbiAgaW9uLWxhYmVsIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgfVxuICBcbiAgLy8gQ29sbGFwc2VkIHN0YXRlXG4gICYuY29sbGFwc2VkIHtcbiAgICBwYWRkaW5nOiA4cHg7XG4gICAgXG4gICAgaW9uLWxhYmVsIHtcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjBweCk7XG4gICAgfVxuICB9XG4gIFxuICAvLyBFeHBhbmRlZCBzdGF0ZVxuICAmLmV4cGFuZGVkIHtcbiAgICBpb24tbGFiZWwge1xuICAgICAgb3BhY2l0eTogMTtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgICB9XG4gIH1cbn1cblxuLnVzZXItcHJvZmlsZSB7XG4gIHBhZGRpbmc6IDE2cHg7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLXN0ZXAtMTUwLCAjZDdkOGRhKTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgXG4gIC51c2VyLWluZm8tY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMTJweDtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbiAgfVxuICBcbiAgLnVzZXItYXZhdGFyIHtcbiAgICBmb250LXNpemU6IDQwcHg7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICBtYXJnaW4taW5saW5lLWVuZDogMTJweDtcbiAgICBmbGV4LXNocmluazogMDtcbiAgfVxuICBcbiAgLnVzZXItZGV0YWlscyB7XG4gICAgZmxleDogMTtcbiAgICBtaW4td2lkdGg6IDA7XG4gICAgXG4gICAgaDIge1xuICAgICAgbWFyZ2luOiAwO1xuICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG4gICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgIH1cbiAgfVxuICBcbiAgLnVzZXItYWN0aW9ucy1idXR0b24ge1xuICAgIG1hcmdpbi1pbmxpbmUtc3RhcnQ6IDhweDtcbiAgICBmbGV4LXNocmluazogMDtcbiAgICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbiAgICBcbiAgICAmOmhvdmVyIHtcbiAgICAgIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICB9XG4gIH1cbiAgXG4gIC8vIENvbGxhcHNlZCBzdGF0ZVxuICAmLmNvbGxhcHNlZCB7XG4gICAgcGFkZGluZzogMTJweCA4cHg7XG4gICAgXG4gICAgLnVzZXItaW5mby1jb250YWluZXIge1xuICAgICAgcGFkZGluZzogOHB4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgfVxuICAgIFxuICAgIC51c2VyLWRldGFpbHMge1xuICAgICAgb3BhY2l0eTogMDtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyMHB4KTtcbiAgICAgIHdpZHRoOiAwO1xuICAgICAgbWFyZ2luOiAwO1xuICAgICAgcGFkZGluZzogMDtcbiAgICB9XG4gICAgXG4gICAgLnVzZXItYXZhdGFyIHtcbiAgICAgIG1hcmdpbi1pbmxpbmUtZW5kOiAwO1xuICAgICAgZm9udC1zaXplOiAzMnB4O1xuICAgIH1cbiAgICBcbiAgICAudXNlci1hY3Rpb25zLWJ1dHRvbiB7XG4gICAgICAtLXBhZGRpbmctc3RhcnQ6IDRweDtcbiAgICAgIC0tcGFkZGluZy1lbmQ6IDRweDtcbiAgICAgIG1hcmdpbi1pbmxpbmUtc3RhcnQ6IDA7XG4gICAgfVxuICB9XG4gIFxuICAvLyBFeHBhbmRlZCBzdGF0ZVxuICAmLmV4cGFuZGVkIHtcbiAgICAudXNlci1kZXRhaWxzIHtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gICAgfVxuICB9XG59XG5cbi5uYXZpZ2F0aW9uLW1lbnUge1xuICBmbGV4OiAxO1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICBwYWRkaW5nOiAxMHB4IDA7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG59XG5cbi5tZW51LXNlY3Rpb24ge1xuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuICBcbiAgLnNlY3Rpb24taGVhZGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMTZweCAxNnB4IDhweCAxNnB4O1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjVweDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgXG4gICAgaW9uLWljb24ge1xuICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgbWFyZ2luLWlubGluZS1lbmQ6IDhweDtcbiAgICAgIGZsZXgtc2hyaW5rOiAwO1xuICAgIH1cbiAgICBcbiAgICBzcGFuIHtcbiAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgfVxuICB9XG59XG5cbi5tZW51LWl0ZW0ge1xuICBwYWRkaW5nOiAwIDEycHg7XG4gIG1hcmdpbjogMnB4IDEycHg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIFxuICAmOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNHB4KTtcbiAgICBcbiAgICAmOjpiZWZvcmUge1xuICAgICAgY29udGVudDogJyc7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB0b3A6IDA7XG4gICAgICByaWdodDogMDtcbiAgICAgIHdpZHRoOiA0cHg7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgICBib3JkZXItcmFkaXVzOiA0cHggMCAwIDRweDtcbiAgICB9XG4gIH1cbiAgXG4gICYuc2VsZWN0ZWQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEodmFyKC0taW9uLWNvbG9yLXByaW1hcnktcmdiKSwgMC4xNCk7XG4gICAgXG4gICAgJjo6YmVmb3JlIHtcbiAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdG9wOiAwO1xuICAgICAgcmlnaHQ6IDA7XG4gICAgICB3aWR0aDogNHB4O1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgYm9yZGVyLXJhZGl1czogNHB4IDAgMCA0cHg7XG4gICAgfVxuICAgIFxuICAgIC5tZW51LWl0ZW0tY29udGVudCB7XG4gICAgICBpb24taWNvbiB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgc3BhbiB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi5tZW51LWl0ZW0tY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDEycHggOHB4O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuICBcbiAgaW9uLWljb24ge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBjb2xvcjogIzYxNmU3ZTtcbiAgICBtYXJnaW4taW5saW5lLWVuZDogMTZweDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xuICAgIGZsZXgtc2hyaW5rOiAwO1xuICB9XG4gIFxuICBzcGFuIHtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIH1cbn1cblxuLm1haW4tY29udGVudC13cmFwcGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlyZWN0aW9uOiBydGw7XG59XG5cbi8vIENvbGxhcHNlZCBzaWRlYmFyIHN0eWxlc1xuaW9uLW1lbnUuY29sbGFwc2VkIHtcbiAgLS1zaWRlLXdpZHRoOiA3MHB4O1xuICAtLXNpZGUtbWluLXdpZHRoOiA3MHB4O1xufVxuXG4vLyBFeHBhbmRlZCBzaWRlYmFyIHN0eWxlcyAod2hlbiBob3ZlcmVkIG9yIG5vdCBjb2xsYXBzZWQpXG5pb24tbWVudS5leHBhbmRlZCB7XG4gIC0tc2lkZS13aWR0aDogMjUwcHg7XG4gIC0tc2lkZS1taW4td2lkdGg6IDI1MHB4O1xufVxuXG4vLyBDb2xsYXBzZWQgc3RhdGUgc3R5bGVzXG5pb24tbWVudS5jb2xsYXBzZWQge1xuICAubWVudS1oZWFkZXIsXG4gIC5zZWN0aW9uLWhlYWRlciBzcGFuLFxuICAubWVudS1pdGVtLWNvbnRlbnQgc3BhbiB7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjBweCk7XG4gICAgd2lkdGg6IDA7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gIH1cbiAgXG4gIC5zZWN0aW9uLWhlYWRlciB7XG4gICAgcGFkZGluZzogMTZweCAxNnB4IDhweCAxNnB4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIFxuICAgIGlvbi1pY29uIHtcbiAgICAgIG1hcmdpbi1pbmxpbmUtZW5kOiAwO1xuICAgIH1cbiAgfVxuICBcbiAgLm1lbnUtaXRlbSB7XG4gICAgbWFyZ2luOiAycHggNnB4O1xuICB9XG4gIFxuICAubWVudS1pdGVtLWNvbnRlbnQge1xuICAgIHBhZGRpbmc6IDEycHggNHB4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIFxuICAgIGlvbi1pY29uIHtcbiAgICAgIG1hcmdpbi1pbmxpbmUtZW5kOiAwO1xuICAgIH1cbiAgfVxuICBcbiAgLnNpZGViYXItdG9nZ2xlIHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBcbiAgICAudG9nZ2xlLWljb24ge1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcbiAgICB9XG4gIH1cbn1cblxuLy8gRXhwYW5kZWQgc3RhdGUgc3R5bGVzXG5pb24tbWVudS5leHBhbmRlZCB7XG4gIC5tZW51LWhlYWRlcixcbiAgLnNlY3Rpb24taGVhZGVyIHNwYW4sXG4gIC5tZW51LWl0ZW0tY29udGVudCBzcGFuIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgICB3aWR0aDogYXV0bztcbiAgfVxuICBcbiAgLnNlY3Rpb24taGVhZGVyIHtcbiAgICBwYWRkaW5nOiAxNnB4IDE2cHggOHB4IDE2cHg7XG4gICAgXG4gICAgaW9uLWljb24ge1xuICAgICAgbWFyZ2luLWlubGluZS1lbmQ6IDhweDtcbiAgICB9XG4gIH1cbiAgXG4gIC5tZW51LWl0ZW0ge1xuICAgIG1hcmdpbjogMnB4IDEycHg7XG4gIH1cbiAgXG4gIC5tZW51LWl0ZW0tY29udGVudCB7XG4gICAgcGFkZGluZzogMTJweCA4cHg7XG4gICAgXG4gICAgaW9uLWljb24ge1xuICAgICAgbWFyZ2luLWlubGluZS1lbmQ6IDE2cHg7XG4gICAgfVxuICB9XG4gIFxuICAuc2lkZWJhci10b2dnbGUge1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgXG4gICAgLnRvZ2dsZS1pY29uIHtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICAgIH1cbiAgfVxufVxuXG4vLyBVc2VyIGFjdGlvbiBwb3BvdmVyIHN0eWxlc1xuLnVzZXItYWN0aW9uLXBvcG92ZXIge1xuICAtLXdpZHRoOiAyNTBweDtcbn1cblxuLy8gUmVzcG9uc2l2ZSBhZGp1c3RtZW50c1xuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIGlvbi1zcGxpdC1wYW5lIHtcbiAgICAtLXNpZGUtd2lkdGg6IDI4MHB4O1xuICAgIC0tc2lkZS1taW4td2lkdGg6IDI4MHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgfVxuICBcbiAgaW9uLW1lbnUuY29sbGFwc2VkIHtcbiAgICAtLXNpZGUtd2lkdGg6IDcwcHg7XG4gICAgLS1zaWRlLW1pbi13aWR0aDogNzBweDtcbiAgfVxuICBcbiAgaW9uLW1lbnUuZXhwYW5kZWQge1xuICAgIC0tc2lkZS13aWR0aDogMjgwcHg7XG4gICAgLS1zaWRlLW1pbi13aWR0aDogMjgwcHg7XG4gIH1cbiAgXG4gIC51c2VyLXByb2ZpbGUge1xuICAgIHBhZGRpbmc6IDE2cHg7XG4gIH1cbiAgXG4gIC5tZW51LWhlYWRlciB7XG4gICAgcGFkZGluZzogMTJweDtcbiAgfVxuICBcbiAgLnNlY3Rpb24taGVhZGVyIHtcbiAgICBwYWRkaW5nOiAxMHB4IDEycHggNnB4IDEycHg7XG4gIH1cbiAgXG4gIC5tZW51LWl0ZW0ge1xuICAgIG1hcmdpbjogMnB4IDhweDtcbiAgfVxufSJdfQ== */";

/***/ }),

/***/ 96681:
/*!***********************************************************************************************!*\
  !*** ./src/app/component/user-actions-popover/user-actions-popover.component.scss?ngResource ***!
  \***********************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".user-actions-list {\n  margin: 0;\n  padding: 8px 0;\n  min-width: 200px;\n}\n\n.user-action-item {\n  --padding-start: 16px;\n  --padding-end: 16px;\n  --padding-top: 12px;\n  --padding-bottom: 12px;\n  cursor: pointer;\n}\n\n.user-action-item ion-icon {\n  font-size: 20px;\n  margin-inline-end: 12px;\n  color: var(--ion-color-medium);\n}\n\n.user-action-item ion-label {\n  font-size: 16px;\n  color: var(--ion-color-dark);\n}\n\n.user-action-item.logout-item ion-icon {\n  color: var(--ion-color-danger);\n}\n\n.user-action-item.logout-item ion-label {\n  color: var(--ion-color-danger);\n}\n\n.user-action-item:hover {\n  --background: var(--ion-color-light);\n}\n\n.user-action-item:hover ion-icon {\n  color: var(--ion-color-primary);\n}\n\n.user-action-item:hover.logout-item ion-icon {\n  color: var(--ion-color-danger);\n}\n\n[dir=rtl] .user-action-item ion-icon {\n  margin-inline-end: 0;\n  margin-inline-start: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXItYWN0aW9ucy1wb3BvdmVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsU0FBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UscUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0FBQ0Y7O0FBQ0U7RUFDRSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSw4QkFBQTtBQUNKOztBQUVFO0VBQ0UsZUFBQTtFQUNBLDRCQUFBO0FBQUo7O0FBSUk7RUFDRSw4QkFBQTtBQUZOOztBQUtJO0VBQ0UsOEJBQUE7QUFITjs7QUFPRTtFQUNFLG9DQUFBO0FBTEo7O0FBT0k7RUFDRSwrQkFBQTtBQUxOOztBQVNNO0VBQ0UsOEJBQUE7QUFQUjs7QUFnQkk7RUFDRSxvQkFBQTtFQUNBLHlCQUFBO0FBYk4iLCJmaWxlIjoidXNlci1hY3Rpb25zLXBvcG92ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudXNlci1hY3Rpb25zLWxpc3Qge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDhweCAwO1xuICBtaW4td2lkdGg6IDIwMHB4O1xufVxuXG4udXNlci1hY3Rpb24taXRlbSB7XG4gIC0tcGFkZGluZy1zdGFydDogMTZweDtcbiAgLS1wYWRkaW5nLWVuZDogMTZweDtcbiAgLS1wYWRkaW5nLXRvcDogMTJweDtcbiAgLS1wYWRkaW5nLWJvdHRvbTogMTJweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBcbiAgaW9uLWljb24ge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBtYXJnaW4taW5saW5lLWVuZDogMTJweDtcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG4gIH1cbiAgXG4gIGlvbi1sYWJlbCB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG4gIH1cbiAgXG4gICYubG9nb3V0LWl0ZW0ge1xuICAgIGlvbi1pY29uIHtcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyKTtcbiAgICB9XG4gICAgXG4gICAgaW9uLWxhYmVsIHtcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyKTtcbiAgICB9XG4gIH1cbiAgXG4gICY6aG92ZXIge1xuICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbiAgICBcbiAgICBpb24taWNvbiB7XG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgIH1cbiAgICBcbiAgICAmLmxvZ291dC1pdGVtIHtcbiAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYW5nZXIpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vLyBSVEwgYWRqdXN0bWVudHNcbltkaXI9XCJydGxcIl0ge1xuICAudXNlci1hY3Rpb24taXRlbSB7XG4gICAgaW9uLWljb24ge1xuICAgICAgbWFyZ2luLWlubGluZS1lbmQ6IDA7XG4gICAgICBtYXJnaW4taW5saW5lLXN0YXJ0OiAxMnB4O1xuICAgIH1cbiAgfVxufSJdfQ== */";

/***/ }),

/***/ 33383:
/*!***********************************************!*\
  !*** ./src/app/app.component.html?ngResource ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-app>\n  <ion-split-pane contentId=\"main-content\" when=\"lg\" *ngIf=\"isAuth == true\">\n    <!-- Main Content Area -->\n    <ion-content id=\"main-content\">\n      <div class=\"main-content-wrapper\" dir=\"rtl\">\n        <ion-router-outlet></ion-router-outlet>\n      </div>\n    </ion-content>\n\n    <!-- Main Menu - Positioned on the right side -->\n    <ion-menu \n      contentId=\"main-content\" \n      type=\"overlay\" \n      side=\"start\" \n      swipeGesture=\"true\"\n      [class.collapsed]=\"isSidebarCollapsed\"\n      [class.expanded]=\"isSidebarExpanded()\"\n      (mouseenter)=\"onSidebarMouseEnter()\"\n      (mouseleave)=\"onSidebarMouseLeave()\">\n      \n      <ion-content>\n        <div class=\"menu-container\">\n          <!-- Logo Section -->\n          <div class=\"logo-section\" [class.collapsed]=\"isSidebarCollapsed\" [class.expanded]=\"isSidebarExpanded()\">\n            <div class=\"logo-container\">\n              <img src=\"assets/imgs/logo.png\" alt=\"Logo\" class=\"sidebar-logo\">\n            </div>\n            <h1 class=\"app-title\">نظام إدارة المخازن</h1>\n          </div>\n          \n          <!-- Toggle Button -->\n          <div class=\"sidebar-toggle\" (click)=\"toggleSidebar()\">\n            <ion-icon \n              [name]=\"isSidebarCollapsed ? 'chevron-forward-outline' : 'chevron-back-outline'\"\n              class=\"toggle-icon\">\n            </ion-icon>\n          </div>\n          \n          <!-- Header Section -->\n          <div class=\"menu-header\" [class.collapsed]=\"isSidebarCollapsed\" [class.expanded]=\"isSidebarExpanded()\">\n            <ion-label>{{getSelectedEndpointName()}}</ion-label>\n          </div>\n          \n          <!-- User Profile Section -->\n          <div class=\"user-profile\" [class.collapsed]=\"isSidebarCollapsed\" [class.expanded]=\"isSidebarExpanded()\">\n            <div class=\"user-info-container\">\n              <div class=\"user-avatar\">\n                <ion-icon name=\"person-circle\"></ion-icon>\n              </div>\n              <div class=\"user-details\">\n                <h2>{{USER_INFO.full_name}}</h2> \n              </div>\n\n              <!-- Three dots button for popover -->\n              <ion-button (click)=\"presentUserPopover($event)\" fill=\"clear\" class=\"user-actions-button\">\n                <ion-icon name=\"ellipsis-vertical\"></ion-icon>\n              </ion-button>\n            </div> \n          </div>\n          \n          <!-- Navigation Menu -->\n          <div class=\"navigation-menu\">\n            <!-- Dashboard -->\n            <div class=\"menu-item\" *ngIf=\"device == 'desktop'\" (click)=\"onMenuItemClick('analytics-dashboard')\" data-router-link=\"analytics-dashboard\">\n              <div class=\"menu-item-content\">\n                <ion-icon name=\"home\"></ion-icon>\n                <span>الرئيسية</span>\n              </div>\n            </div>\n            \n            <!-- Sales Section -->\n            <div class=\"menu-section\">\n              <div class=\"section-header\">\n                <ion-icon name=\"basket\"></ion-icon>\n                <span>المبيعات</span>\n              </div>\n              \n              <div class=\"menu-item\" *ngIf=\"device == 'desktop'\" (click)=\"onMenuItemClick('folder/sales')\" data-router-link=\"folder/sales\">\n                <div class=\"menu-item-content\">\n                  <ion-icon name=\"receipt\"></ion-icon>\n                  <span>فاتورة مبيعات</span>\n                </div>\n              </div>\n              \n              <div class=\"menu-item\" *ngIf=\"device == 'mobile'\" (click)=\"onMenuItemClick('folder/sales-mob')\" data-router-link=\"folder/sales-mob\">\n                <div class=\"menu-item-content\">\n                  <ion-icon name=\"receipt\"></ion-icon>\n                  <span>فاتورة مبيعات</span>\n                </div>\n              </div>\n              \n              <div class=\"menu-item\" (click)=\"onMenuItemClick('folder/sales-record')\" data-router-link=\"folder/sales-record\">\n                <div class=\"menu-item-content\">\n                  <ion-icon name=\"document-text\"></ion-icon>\n                  <span>سجل المبيعات</span>\n                </div>\n              </div>\n            </div>\n            \n            <!-- Purchases Section -->\n            <div class=\"menu-section\">\n              <div class=\"section-header\">\n                <ion-icon name=\"bag-remove\"></ion-icon>\n                <span>المشتريات</span>\n              </div>\n              \n              <div class=\"menu-item\" *ngIf=\"device == 'mobile'\" (click)=\"onMenuItemClick('folder/purchase-mob')\" data-router-link=\"folder/purchase-mob\">\n                <div class=\"menu-item-content\">\n                  <ion-icon name=\"cart\"></ion-icon>\n                  <span>فاتورة مشتريات</span>\n                </div>\n              </div>\n              \n              <div class=\"menu-item\" *ngIf=\"device == 'desktop'\" (click)=\"onMenuItemClick('folder/purchase')\" data-router-link=\"folder/purchase\">\n                <div class=\"menu-item-content\">\n                  <ion-icon name=\"cart\"></ion-icon>\n                  <span>فاتورة مشتريات</span>\n                </div>\n              </div>\n              \n              <div class=\"menu-item\" (click)=\"onMenuItemClick('folder/purchase-record')\" data-router-link=\"folder/purchase-record\">\n                <div class=\"menu-item-content\">\n                  <ion-icon name=\"document-text\"></ion-icon>\n                  <span>سجل المشتريات</span>\n                </div>\n              </div>\n              \n              <div class=\"menu-item\" *ngIf=\"device == 'desktop'\" (click)=\"onMenuItemClick('folder/prch-order')\" data-router-link=\"folder/prch-order\">\n                <div class=\"menu-item-content\">\n                  <ion-icon name=\"clipboard\"></ion-icon>\n                  <span>طلبات الشراء</span>\n                </div>\n              </div>\n              \n              <div class=\"menu-item\" *ngIf=\"device == 'desktop'\" (click)=\"onMenuItemClick('folder/prch-order-record')\" data-router-link=\"folder/prch-order-record\">\n                <div class=\"menu-item-content\">\n                  <ion-icon name=\"document-text\"></ion-icon>\n                  <span>سجل طلبات الشراء</span>\n                </div>\n              </div>\n            </div>\n            \n            <!-- Inventory Section -->\n            <div class=\"menu-section\">\n              <div class=\"section-header\">\n                <ion-icon name=\"file-tray-full\"></ion-icon>\n                <span>المخزن</span>\n              </div>\n              \n              <div class=\"menu-item\" (click)=\"onMenuItemClick('item-stock')\" data-router-link=\"item-stock\">\n                <div class=\"menu-item-content\">\n                  <ion-icon name=\"cube\"></ion-icon>\n                  <span>المخزن</span>\n                </div>\n              </div>\n              \n              <div class=\"menu-item\" *ngIf=\"device == 'desktop'\" (click)=\"onMenuItemClick('folder/items-report')\" data-router-link=\"folder/items-report\">\n                <div class=\"menu-item-content\">\n                  <ion-icon name=\"swap-vertical\"></ion-icon>\n                  <span>حركة الأصناف</span>\n                </div>\n              </div>\n              \n              <div class=\"menu-item\" *ngIf=\"device == 'desktop'\" (click)=\"onMenuItemClick('folder/tswia')\" data-router-link=\"folder/tswia\">\n                <div class=\"menu-item-content\">\n                  <ion-icon name=\"sync\"></ion-icon>\n                  <span>التسوية الجردية</span>\n                </div>\n              </div>\n              \n              <div class=\"menu-item\" *ngIf=\"device == 'desktop'\" (click)=\"onMenuItemClick('folder/tswia-record')\" data-router-link=\"folder/tswia-record\">\n                <div class=\"menu-item-content\">\n                  <ion-icon name=\"document-text\"></ion-icon>\n                  <span>سجل التسويات الجردية</span>\n                </div>\n              </div>\n            </div>\n            \n            <!-- Accounts Section -->\n            <div class=\"menu-section\">\n              <div class=\"section-header\">\n                <ion-icon name=\"cash\"></ion-icon>\n                <span>الحسابات</span>\n              </div>\n              \n              <div class=\"menu-item\" *ngIf=\"device == 'desktop'\" (click)=\"onMenuItemClick('folder/sub-account2')\" data-router-link=\"folder/sub-account2\">\n                <div class=\"menu-item-content\">\n                  <ion-icon name=\"people\"></ion-icon>\n                  <span>إدارة الحسابات</span>\n                </div>\n              </div>\n              \n              <div class=\"menu-item\" (click)=\"onMenuItemClick('folder/cash2')\" data-router-link=\"folder/cash2\">\n                <div class=\"menu-item-content\">\n                  <ion-icon name=\"card\"></ion-icon>\n                  <span>السندات</span>\n                </div>\n              </div>\n              \n              <div class=\"menu-item\" (click)=\"onMenuItemClick('folder/spend-record2')\" data-router-link=\"folder/spend-record2\">\n                <div class=\"menu-item-content\">\n                  <ion-icon name=\"document-text\"></ion-icon>\n                  <span>سجل السندات</span>\n                </div>\n              </div>\n              \n              <div class=\"menu-item\" (click)=\"onMenuItemClick('folder/statement2')\" data-router-link=\"folder/statement2\">\n                <div class=\"menu-item-content\">\n                  <ion-icon name=\"reader\"></ion-icon>\n                  <span>كشف حساب</span>\n                </div>\n              </div>\n              \n              <div class=\"menu-item\" (click)=\"onMenuItemClick('folder/balance-sheet2')\" data-router-link=\"folder/balance-sheet2\">\n                <div class=\"menu-item-content\">\n                  <ion-icon name=\"bar-chart\"></ion-icon>\n                  <span>الأرصدة</span>\n                </div>\n              </div>\n            </div>\n            \n            <!-- Settings Section -->\n            <div class=\"menu-section\">\n              <div class=\"section-header\">\n                <ion-icon name=\"cog\"></ion-icon>\n                <span>الإعدادات والضبط</span>\n              </div>\n              \n              <div class=\"menu-item\" (click)=\"onMenuItemClick('folder/categories')\" data-router-link=\"folder/categories\">\n                <div class=\"menu-item-content\">\n                  <ion-icon name=\"grid\"></ion-icon>\n                  <span>التصنيفات</span>\n                </div>\n              </div>\n              \n              <div class=\"menu-item\" (click)=\"onMenuItemClick('folder/settings')\" data-router-link=\"folder/settings\">\n                <div class=\"menu-item-content\">\n                  <ion-icon name=\"sync\"></ion-icon>\n                  <span>المزامنة والإتصال</span>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </ion-content>\n    </ion-menu>\n  </ion-split-pane>\n  \n  <!-- Login View -->\n  <ion-router-outlet *ngIf=\"isAuth == false\"></ion-router-outlet>\n</ion-app>";

/***/ }),

/***/ 38588:
/*!***********************************************************************************************!*\
  !*** ./src/app/component/user-actions-popover/user-actions-popover.component.html?ngResource ***!
  \***********************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-content>\n  <ion-list class=\"user-actions-list\" lines=\"none\">\n    <ion-item button (click)=\"navigateToProfile()\" class=\"user-action-item\">\n      <ion-icon name=\"person-outline\" slot=\"start\"></ion-icon>\n      <ion-label>الملف الشخصي</ion-label>\n    </ion-item>\n    \n    <ion-item button (click)=\"navigateToCategories()\" class=\"user-action-item\">\n      <ion-icon name=\"grid-outline\" slot=\"start\"></ion-icon>\n      <ion-label>التصنيفات</ion-label>\n    </ion-item>\n    \n    <ion-item button (click)=\"logout()\" class=\"user-action-item logout-item\">\n      <ion-icon name=\"log-out-outline\" slot=\"start\"></ion-icon>\n      <ion-label>تسجيل الخروج</ion-label>\n    </ion-item>\n  </ion-list>\n</ion-content>";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(14431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map