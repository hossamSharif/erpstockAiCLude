import { Component, OnInit, ViewChild, ElementRef, Renderer2, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { ServicesService } from "../stockService/services.service";
import { Observable, Subscription } from 'rxjs';
import { AlertController, Platform, IonInput, LoadingController, ModalController, ToastController } from '@ionic/angular';
import { DatePipe, Location } from '@angular/common';
import { Storage } from '@ionic/storage';
import { AuthServiceService } from '../auth/auth-service.service';
import { PrintModalPage } from '../print-modal/print-modal.page';
import { ActivatedRoute, Router } from '@angular/router';
import { FilterPipe } from '../sales/pipe';
import { FilterPipe2 } from '../sales/pipe2';
import { FilterPipe3 } from '../sales/pipe3';
import { StockServiceService } from '../syncService/stock-service.service';
import { AccountCommunicationService } from '../services/account-communication.service';
import { CurrencyService } from '../services/currency.service';
import * as momentObj from 'moment';

@Component({
  selector: 'app-edit-purchase-return',
  templateUrl: './edit-purchase-return.page.html',
  styleUrls: ['./edit-purchase-return.page.scss']
})

export class EditPurchaseReturnPage implements OnInit, OnDestroy {
  @ViewChild("dst") nameField: ElementRef;
  @ViewChild('dstPop') dstPop;
  @ViewChild('qtyId') qtyId;
  @ViewChild('popInput') popInput;
  @ViewChild('popover') popover;
  @ViewChild('popoverNotif') popoverNotif;

  // Edit mode specific properties
  editMode: boolean = true;
  returnRefToEdit: string = '';
  originalReturnData: any = null;
  
  // Return-specific properties (inherited from purchase-return)
  isReturnAllItems: boolean = false;
  originalInvoice: any = null;
  originalItems: Array<any> = [];
  selectedOriginalInvoice: any = null;
  availablePurchaseInvoices: Array<any> = [];
  returnReason: string = '';

  discountType: string = 'percentage';
  discountAmount: number = 0;
  calculatedDiscountPerc: number = 0;
  calculatedDiscountAmount: number = 0;

  isOpen = false;
  isOpenNotif = false;
  newNotif = false;
  sub_account: Array<any> = []
  sub_accountLocalSales: Array<any> = []
  sub_accountSales: Array<any> = []
  initialInvoices: Array<any> = []
  items: Array<any> = []
  itemsLocal: Array<any> = []
  itemList: Array<any> = []
  sortedItemList: Array<any> = []
  isItemListSorted: boolean = false
  searchTerm: string = ''
  highlightedIndex: number = -1
  searchMatches: number[] = []
  purchaseLocal: Array<any> = []
  purchase: Array<any> = []
  notifArr: Array<any> = []
  LogHistoryLocalArr: Array<any> = []
  randomsNumber: Array<any> = []
  store_info: { id: any, location: any, store_name: any, store_ref: any }
  user_info: { id: any, user_name: any, store_id: any, full_name: any, password: any }
  sub_nameNew: any = ""
  discountPerc: any = 0
  selectedItem: { id: any, return_ref: any, item_name: any, return_price: any, perch_price: any, item_unit: any, item_desc: any, parcode: any, qty: any, tot: any, dateCreated: any, availQty: any, aliasEn: any, tax: any, imageUrl: any };
  selectedAccount: { id: any, ac_id: any, sub_name: any, sub_type: any, sub_code: any, sub_balance: any, store_id: any, cat_id: any, cat_name: any, phone: any, address: any, currentSupplierStatus: any };
  returnInvo: { return_id: any, return_ref: any, original_pay_ref: any, store_id: any, tot_pr: any, pay: any, return_date: any, return_time: any, user_id: any, supplier_id: any, return_method: any, discount: any, changee: any, sub_name: any, returnComment: any, yearId: any, is_full_return: any, return_reason: any }

  // Account communication subscription
  private supplierSubscription: Subscription;
  private currencySubscription: Subscription;
  printMode: boolean = false
  printArr: Array<any> = []
  offline: boolean = false;
  color: any = 'dark'
  showMe = null
  status: any = 'edit'
  searchLang: any = 0
  currentSupplierStatus: any
  aliasTerm: any = ""
  searchResult: Array<any> = []
  aliasResult: Array<any> = []
  finalResult: Array<any> = []
  year: { id: any, yearDesc: any, yearStart: any, yearEnd: any }
  loadingItems: boolean = false
  logHistoryArr: Array<any> = [];
  subiscribtionItem: Subscription
  subiscribtionNotif: Subscription
  showNotif = false
  device: any = ""
  currenQty: any = 0
  firstQty: any = 0
  perchTotQty: any = 0
  payTotQty: any = 0
  perchTot: any = 0
  qtyReal: any = 0
  availQty: any = 0

  pendingItemsFromStock: Array<any> = [];

  // Default category from localStorage
  defaultCategoryId: any = null;
  statusFromRoute: string = 'edit';
  showBackButton: boolean = true;

  // Loading state management
  isSaving: boolean = false;
  isDeleting: boolean = false;
  isUpdating: boolean = false;
  currentLoadingMessage: string = '';
  private currentLoader: any = null;

  constructor(
    private rout: Router,
    private platform: Platform,
    private behavApi: StockServiceService,
    private _location: Location,
    private route: ActivatedRoute,
    private renderer: Renderer2,
    private modalController: ModalController,
    private alertController: AlertController,
    private authenticationService: AuthServiceService,
    private storage: Storage,
    private loadingController: LoadingController,
    private datePipe: DatePipe,
    private api: ServicesService,
    private toast: ToastController,
    private accountCommunicationService: AccountCommunicationService,
    private cdr: ChangeDetectorRef,
    private currencyService: CurrencyService
  ) {
    this.selectedAccount = { id: "", ac_id: "", sub_name: "", sub_type: "", sub_code: "", sub_balance: "", store_id: "", cat_name: "", cat_id: "", phone: "", address: "", currentSupplierStatus: 0 };

    this.printArr.push({
      'returnInvo': "",
      'itemList': "",
      'selectedAccount': "",
      'sub_nameNew': "",
      "userInfo": "",
      "sub_balanse": 0,
      "balanceStatus": ""
    })

    this.selectedItem = {
      id: undefined,
      dateCreated: "",
      return_ref: "",
      item_desc: "",
      item_name: "",
      item_unit: "",
      parcode: 0,
      return_price: 0,
      perch_price: 0,
      qty: 0,
      tot: 0,
      availQty: 0,
      aliasEn: "",
      tax: 0,
      imageUrl: ""
    }
  }

  ngOnInit() {
    // Get route parameters for editing
    this.route.queryParams.subscribe(params => {
      if (params['return_ref']) {
        this.returnRefToEdit = params['return_ref'];
        this.editMode = true;
        this.showBackButton = true;
        console.log('Edit mode - Return ref:', this.returnRefToEdit);
      }
    });

    // Ensure discountType is properly initialized
    if (!this.discountType) {
      this.discountType = 'percentage';
      this.cdr.detectChanges();
    }

    // Initialize currency service
    this.initializeCurrency();

    // Subscribe to supplier selection from account-selector
    this.supplierSubscription = this.accountCommunicationService.customerSelected$.subscribe(
      ({ id, account }) => {
        if (id && this.returnInvo) {
          console.log('Supplier selected in edit purchase return, setting supplier_id:', id);
          this.returnInvo.supplier_id = id;
          this.returnInvo.sub_name = account.sub_name;
          this.selectedAccount = account;
          console.log('Edit purchase return invoice updated:', this.returnInvo);
        }
      }
    );

    this.getAppInfo()
  }

  async ngOnDestroy() {
    // Clean up loading states
    await this.hideLoading();

    // Clean up subscriptions
    if (this.supplierSubscription) {
      this.supplierSubscription.unsubscribe();
    }
    if (this.currencySubscription) {
      this.currencySubscription.unsubscribe();
    }
  }

  async initializeCurrency() {
    try {
      await this.currencyService.initializeCurrency();
      await this.currencyService.loadSupportedCurrencies();

      // Load currency rates when year and store info are available
      if (this.store_info && this.year) {
        await this.currencyService.loadRatesByYear(this.store_info.id, this.year.id);
      }

      // Subscribe to currency changes
      this.currencySubscription = this.currencyService.getCurrentCurrency().subscribe(currency => {
        this.cdr.detectChanges();
      });
    } catch (error) {
      console.error('Error initializing currency:', error);
    }
  }

  getAppInfo() {
    this.storage.get('USER_INFO').then((response) => {
      if (response) {
        this.user_info = response
      }
    });
    
    this.storage.get('year').then((response) => {
      if (response) {
        this.year = response
      }
    });

    this.storage.get('STORE_INFO').then((response) => {
      if (response) {
        this.store_info = response
        
        // Load the return data for editing
        if (this.returnRefToEdit) {
          this.loadReturnForEditing();
        } else {
          this.prepareReturnInvo();
        }
      }
    });
  }

  // Load existing return data for editing
  async loadReturnForEditing() {
    await this.showLoading('جاري تحميل بيانات المرتجعة...', 'saving');
    
    try {
      this.api.getPurchaseReturnDetail(this.store_info.id, this.returnRefToEdit, this.year.id).subscribe(
        async (data: any) => {
          console.log('Return data loaded:', data);
          await this.hideLoading();
          
          if (data.message === 'Purchase return details retrieved successfully') {
            this.populateReturnData(data.data);
          } else {
            this.presentToast('لم يتم العثور على بيانات المرتجعة', 'danger');
            this.goBack();
          }
        },
        async (err) => {
          await this.hideLoading();
          console.log('Error loading return data:', err);
          this.presentToast('خطأ في تحميل بيانات المرتجعة', 'danger');
          this.goBack();
        }
      );
    } catch (error) {
      await this.hideLoading();
      console.error('Error in loadReturnForEditing:', error);
    }
  }

  // Populate the form with existing return data
  populateReturnData(data: any) {
    const returnInvoice = data.returnInvoice;
    const returnItems = data.returnItems;
    
    console.log('Populating return data:', returnInvoice, returnItems);
    
    // Store original data for comparison
    this.originalReturnData = JSON.parse(JSON.stringify(data));
    
    // Set up return invoice data
    this.returnInvo = {
      return_id: returnInvoice.return_id,
      return_ref: returnInvoice.return_ref,
      original_pay_ref: returnInvoice.original_pay_ref,
      store_id: returnInvoice.store_id,
      tot_pr: returnInvoice.tot_pr,
      pay: returnInvoice.pay,
      return_date: returnInvoice.return_date,
      return_time: returnInvoice.return_time,
      user_id: returnInvoice.user_id,
      supplier_id: returnInvoice.supplier_id,
      return_method: returnInvoice.return_method,
      discount: returnInvoice.discount,
      changee: returnInvoice.changee,
      sub_name: returnInvoice.sub_name,
      returnComment: returnInvoice.returnComment,
      yearId: returnInvoice.yearId,
      is_full_return: returnInvoice.is_full_return,
      return_reason: returnInvoice.return_reason
    };
    
    // Set return reason
    this.returnReason = returnInvoice.return_reason || '';
    
    // Set discount information
    if (returnInvoice.discount > 0) {
      const subtotal = returnItems.reduce((acc, item) => acc + (+item.quantity * +item.return_price), 0);
      if (subtotal > 0) {
        this.calculatedDiscountPerc = ((+returnInvoice.discount / subtotal) * 100);
        this.calculatedDiscountAmount = +returnInvoice.discount;
        
        // Determine discount type based on the calculated percentage
        if (Math.abs(this.calculatedDiscountPerc - Math.round(this.calculatedDiscountPerc)) < 0.01) {
          this.discountType = 'percentage';
          this.discountPerc = Math.round(this.calculatedDiscountPerc);
        } else {
          this.discountType = 'amount';
          this.discountAmount = +returnInvoice.discount;
        }
      }
    }
    
    // Set up supplier account
    this.selectedAccount = {
      id: returnInvoice.supplier_id,
      ac_id: returnInvoice.supplier_id,
      sub_name: returnInvoice.sub_name,
      sub_type: "",
      sub_code: "",
      sub_balance: "",
      store_id: returnInvoice.store_id,
      cat_name: "",
      cat_id: "",
      phone: "",
      address: "",
      currentSupplierStatus: 0
    };
    
    // Set up return items
    this.itemList = returnItems.map(item => ({
      id: item.id,
      return_ref: item.return_ref,
      item_name: item.item_name,
      return_price: item.return_price,
      quantity: item.quantity,
      tot: item.tot,
      store_id: item.store_id,
      yearId: item.yearId,
      item_id: item.item_id,
      dateCreated: item.dateCreated,
      original_price: item.original_price,
      tax: item.tax,
      imageUrl: item.imageUrl
    }));
    
    // Check if it's a full return
    this.isReturnAllItems = returnInvoice.is_full_return == 1;
    
    // Load original invoice data
    this.loadOriginalInvoiceForEdit(returnInvoice.original_pay_ref);
    
    this.updateSortedList();
    this.getTotal();
  }

  // Load original invoice data for editing context
  async loadOriginalInvoiceForEdit(original_pay_ref: string) {
    try {
      this.api.getPerchInvoDetail(this.store_info.id, original_pay_ref, this.year.id).subscribe(data => {
        let res = data;
        this.originalItems = res['data'] || [];
        console.log('Original purchase items loaded for editing:', this.originalItems);
        
        // Set selected original invoice info
        this.selectedOriginalInvoice = {
          pay_ref: original_pay_ref,
          supplier_id: this.returnInvo.supplier_id,
          sub_name: this.returnInvo.sub_name
        };
        
        this.originalInvoice = this.selectedOriginalInvoice;
      }, (err) => {
        console.log('Error loading original items for editing:', err);
      });
    } catch (error) {
      console.error('Error in loadOriginalInvoiceForEdit:', error);
    }
  }

  prepareReturnInvo() {
    // This should not be called in edit mode, but keep for consistency
    this.selectedAccount = { id: "", ac_id: "", sub_name: "", sub_type: "", sub_code: "", sub_balance: "", store_id: "", cat_name: "", cat_id: "", phone: "", address: "", currentSupplierStatus: 0 };
    this.sub_nameNew = ""
    this.returnInvo = { 
      return_id: undefined, 
      return_ref: 0, 
      original_pay_ref: "", 
      store_id: "", 
      tot_pr: 0, 
      pay: 0, 
      return_date: "", 
      return_time: "", 
      user_id: "", 
      supplier_id: null, 
      return_method: "", 
      discount: 0, 
      changee: 0, 
      sub_name: "", 
      returnComment: "", 
      yearId: this.year.id, 
      is_full_return: 0, 
      return_reason: "" 
    };
    
    this.discountPerc = 0
    this.returnReason = ''
    this.isReturnAllItems = false
    
    let d = new Date
    this.returnInvo.return_date = this.datePipe.transform(d, 'yyyy-MM-dd')
    this.returnInvo.return_time = this.datePipe.transform(d, 'HH:mm:ss')
    this.returnInvo.store_id = this.store_info.id
    this.returnInvo.user_id = this.user_info.id
    this.returnInvo.yearId = this.year.id

    this.itemList = []
    this.sortedItemList = []
    this.isItemListSorted = false
    this.searchTerm = ''
    this.searchMatches = []
    this.highlightedIndex = -1
    this.originalInvoice = null
    this.originalItems = []
    this.selectedOriginalInvoice = null
  }

  // Update existing return
  async updateReturn() {
    await this.showLoading('جاري تحديث فاتورة مرتجعات الشراء...', 'updating');

    try {
      this.returnInvo.return_reason = this.returnReason;
      
      const returnWithItems = {
        invoice: this.returnInvo,
        items: this.itemList
      };

      console.log('Updating purchase return data:', returnWithItems);

      this.api.updatePurchaseReturnWithItems(returnWithItems).subscribe(
        async (response: any) => {
          console.log('Purchase return updated:', response);
          await this.hideLoading();
          this.handleUpdateSuccess();
        },
        async (err) => {
          console.log('Update error:', err);
          await this.hideLoading();
          this.presentToast('لم يتم تحديث البيانات، خطأ في الاتصال حاول مرة أخرى', 'danger');
        }
      );
    } catch (error) {
      await this.hideLoading();
      console.error('Unexpected error in updateReturn:', error);
      this.presentToast('حدث خطأ غير متوقع أثناء التحديث', 'danger');
    }
  }

  // Delete the return
  async deleteReturn() {
    const confirmDelete = await this.presentConfirmAlert(
      'تأكيد الحذف',
      'هل أنت متأكد من حذف هذه المرتجعة؟ لا يمكن التراجع عن هذا الإجراء.',
      'نعم، احذف',
      'إلغاء'
    );

    if (!confirmDelete) {
      return;
    }

    await this.showLoading('جاري حذف فاتورة المرتجعات...', 'deleting');

    try {
      const deletionData = {
        return_ref: this.returnInvo.return_ref,
        store_id: this.returnInvo.store_id,
        yearId: this.returnInvo.yearId
      };

      this.api.deletePurchaseReturnWithItems(deletionData).subscribe(
        async (response: any) => {
          console.log('Purchase return deleted:', response);
          await this.hideLoading();
          this.presentToast('تم حذف المرتجعة بنجاح', 'success');
          this.goBack();
        },
        async (err) => {
          console.log('Delete error:', err);
          await this.hideLoading();
          this.presentToast('لم يتم حذف البيانات، خطأ في الاتصال حاول مرة أخرى', 'danger');
        }
      );
    } catch (error) {
      await this.hideLoading();
      console.error('Unexpected error in deleteReturn:', error);
      this.presentToast('حدث خطأ غير متوقع أثناء الحذف', 'danger');
    }
  }

  save() {
    let d: Date = this.returnInvo.return_date
    this.returnInvo.sub_name = this.selectedAccount.sub_name
    this.returnInvo.return_date = this.datePipe.transform(d, 'yyyy-MM-dd')

    if (this.validate() == true) {
      if (this.editMode) {
        this.updateReturn()
      } else {
        // This shouldn't happen in edit mode, but keep for safety
        this.updateReturn()
      }
    }
  }

  private handleUpdateSuccess() {
    this.presentToast('تم التحديث بنجاح', 'success');
    
    // Prepare print data with updated return information
    this.printArr = [];
    this.printArr.push({
      'returnInvo': this.returnInvo,
      'itemList': this.itemList,
      'selectedAccount': this.selectedAccount,
      'sub_nameNew': this.sub_nameNew,
      "user_name": this.user_info.full_name,
      "sub_balanse": this.selectedAccount.sub_balance,
      "balanceStatus": this.selectedAccount.currentSupplierStatus
    });

    console.log('Print array prepared for updated return:', this.printArr);
    this.presentAlertConfirm();
  }

  async presentAlertConfirm() {
    let msg: string = 'هل تريد طباعة فاتورة المرتجعات المحدثة؟'

    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'تأكيد!',
      mode: 'ios',
      message: msg,
      buttons: [
        {
          text: 'إلغاء',
          role: 'cancel',
          cssClass: 'secondary',
          id: 'cancel-button',
          handler: (blah) => {
            this.goBack();
          }
        }, {
          text: 'موافق',
          id: 'confirm-button',
          handler: () => {
            this.presentModal(this.printArr, 'purchase_return').then(() => {
              this.goBack();
            });
          }
        }
      ]
    });

    await alert.present();
  }

  async presentModal(printArr: any, page: string) {
    const modal = await this.modalController.create({
      component: PrintModalPage,
      componentProps: {
        printArr: printArr,
        page: page
      }
    });
    return await modal.present();
  }

  back() {
    this._location.back()
  }

  goBack() {
    this._location.back();
  }

  // Include all other methods from purchase-return.page.ts that are needed
  // (validation, calculations, item management, etc.)
  // These are exactly the same as in purchase-return page, so including key ones:

  validate(): boolean {
    // Same validation as purchase-return page
    if (!this.selectedOriginalInvoice || !this.returnInvo.original_pay_ref) {
      this.presentToast('الرجاء التأكد من بيانات الفاتورة الأصلية', 'danger')
      return false
    }
    
    if (this.itemList.length == 0 || this.returnInvo.return_ref == "") {
      this.presentToast('الرجاء ادخال اصناف الي القائمة', 'danger')
      return false
    }
    
    const quantityValidationResult = this.validateReturnQuantities();
    if (!quantityValidationResult.valid) {
      this.presentToast(quantityValidationResult.message, 'danger')
      return false
    }
    
    if (!this.returnInvo.supplier_id || !this.selectedAccount.sub_name) {
      this.presentToast('الرجاء إختيار حساب المورد', 'danger')
      return false
    }
    
    if (this.returnInvo.return_date == "" || this.returnInvo.return_date == undefined) {
      this.presentToast('الرجاء تحديد التاريخ ', 'danger')
      return false
    }
    
    const businessValidationResult = this.validateBusinessLogic();
    if (!businessValidationResult.valid) {
      this.presentToast(businessValidationResult.message, 'danger')
      return false
    }
    
    return true
  }

  validateReturnQuantities(): {valid: boolean, message: string} {
    for (const returnItem of this.itemList) {
      const originalItem = this.originalItems.find(item => 
        item.item_id === returnItem.item_id || item.item_name === returnItem.item_name
      );
      
      if (!originalItem) {
        return {
          valid: false,
          message: `الصنف "${returnItem.item_name}" غير موجود في الفاتورة الأصلية`
        };
      }
      
      if (+returnItem.quantity > +originalItem.quantity) {
        return {
          valid: false,
          message: `كمية الإرجاع للصنف "${returnItem.item_name}" (${returnItem.quantity}) أكبر من الكمية الأصلية (${originalItem.quantity})`
        };
      }
      
      if (+returnItem.quantity <= 0) {
        return {
          valid: false,
          message: `كمية الإرجاع للصنف "${returnItem.item_name}" يجب أن تكون أكبر من صفر`
        };
      }
    }
    
    return {valid: true, message: ''};
  }

  validateBusinessLogic(): {valid: boolean, message: string} {
    const returnTotal = +this.returnInvo.tot_pr;
    
    if (+this.returnInvo.discount > returnTotal) {
      return {
        valid: false,
        message: 'قيمة الخصم لا يمكن أن تتجاوز إجمالي المرتجعة'
      };
    }
    
    return {valid: true, message: ''};
  }

  getTotal() {
    this.recalculateReturnTotals();
  }

  recalculateReturnTotals() {
    let subtotal = 0;
    
    this.itemList.forEach(item => {
      const itemTotal = (+item.quantity * +item.return_price);
      item.tot = itemTotal.toFixed(2);
      subtotal += itemTotal;
    });
    
    const discountAmount = this.calculateDiscountAmount(subtotal);
    this.returnInvo.discount = discountAmount.toFixed(2);
    this.returnInvo.tot_pr = (subtotal - discountAmount).toFixed(2);
    this.returnInvo.changee = ((subtotal - discountAmount) - +this.returnInvo.pay).toFixed(2);
  }

  private calculateDiscountAmount(subtotal: number): number {
    if (this.discountType === 'percentage') {
      return subtotal * (+this.discountPerc / 100);
    } else {
      return +this.discountAmount;
    }
  }

  async presentToast(msg, color?) {
    const toast = await this.toast.create({
      message: msg,
      duration: 2000,
      color: color,
      cssClass: 'cust_Toast',
      mode: 'ios',
      position: 'top'
    });
    toast.present();
  }

  private async presentConfirmAlert(header: string, message: string, confirmText: string, cancelText: string): Promise<boolean> {
    return new Promise(async (resolve) => {
      const alert = await this.alertController.create({
        cssClass: 'my-custom-class',
        header: header,
        message: message,
        mode: 'ios',
        buttons: [
          {
            text: cancelText,
            role: 'cancel',
            cssClass: 'secondary',
            handler: () => {
              resolve(false);
            }
          },
          {
            text: confirmText,
            handler: () => {
              resolve(true);
            }
          }
        ]
      });

      await alert.present();
    });
  }

  // Centralized loading management methods
  async showLoading(message: string, operationType: 'saving' | 'deleting' | 'updating' = 'saving') {
    await this.hideLoading();

    this.resetLoadingStates();
    switch (operationType) {
      case 'saving':
        this.isSaving = true;
        break;
      case 'deleting':
        this.isDeleting = true;
        break;
      case 'updating':
        this.isUpdating = true;
        break;
    }

    this.currentLoadingMessage = message;

    this.currentLoader = await this.loadingController.create({
      spinner: 'bubbles',
      mode: 'ios',
      message: message,
      translucent: true,
      backdropDismiss: false
    });

    await this.currentLoader.present();
    this.cdr.detectChanges();
  }

  async hideLoading() {
    if (this.currentLoader) {
      try {
        await this.currentLoader.dismiss();
      } catch (error) {
        // Loader might already be dismissed, ignore error
      }
      this.currentLoader = null;
    }

    this.resetLoadingStates();
    this.currentLoadingMessage = '';
    this.cdr.detectChanges();
  }

  private resetLoadingStates() {
    this.isSaving = false;
    this.isDeleting = false;
    this.isUpdating = false;
  }

  isLoading(): boolean {
    return this.isSaving || this.isDeleting || this.isUpdating;
  }

  // Get current currency symbol for table headers
  getCurrencySymbol(): string {
    return this.currencyService.getCurrentCurrencySymbol();
  }

  // Format balance display with number separators
  formatBalance(balance: number): string {
    if (!balance && balance !== 0) return '0.00';
    return new Intl.NumberFormat('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(Math.abs(balance));
  }

  updateSortedList() {
    this.sortedItemList = [...this.itemList];
  }

  getDisplayItemList() {
    return this.sortedItemList.length > 0 ? this.sortedItemList : this.itemList;
  }

  deleteItem(index) {
    const displayList = this.getDisplayItemList();
    const itemToDelete = displayList[index];

    const originalIndex = this.itemList.findIndex(item =>
      item.item_name === itemToDelete.item_name &&
      item.return_price === itemToDelete.return_price &&
      item.quantity === itemToDelete.quantity
    );

    if (originalIndex !== -1) {
      this.itemList.splice(originalIndex, 1);
    }

    this.discountPerc = 0
    this.returnInvo.discount = 0
    this.getTotal()
    this.updateSortedList()
  }

  onDiscountTypeChange(event: any) {
    this.discountType = event.detail.value;
    this.discountPerc = 0;
    this.discountAmount = 0;
    this.returnInvo.discount = 0;
    this.calculatedDiscountPerc = 0;
    this.calculatedDiscountAmount = 0;
    this.calculateChange();
    this.cdr.detectChanges();
  }

  onPercentageDiscountChange(event: any) {
    this.discountPerc = event.target.value || 0;
    if (this.returnInvo.tot_pr > 0) {
      this.calculatedDiscountAmount = (+this.returnInvo.tot_pr * +this.discountPerc / 100);
      this.returnInvo.discount = this.calculatedDiscountAmount.toFixed(2);
      this.calculateChange();
    }
  }

  onAmountDiscountChange(event: any) {
    this.discountAmount = event.target.value || 0;
    if (this.returnInvo.tot_pr > 0 && this.discountAmount > 0) {
      this.calculatedDiscountPerc = ((+this.discountAmount / +this.returnInvo.tot_pr) * 100);
      this.returnInvo.discount = this.discountAmount;
      this.calculateChange();
    } else {
      this.calculatedDiscountPerc = 0;
      this.returnInvo.discount = 0;
      this.calculateChange();
    }
  }

  calculateChange() {
    this.returnInvo.changee = +(this.returnInvo.tot_pr - +this.returnInvo.discount) - this.returnInvo.pay;
  }

  payChange(ev) {
    if (this.discountPerc > 0) {
      this.returnInvo.discount = (+this.returnInvo.tot_pr * +this.discountPerc / 100).toFixed(2)
    }
    this.returnInvo.changee = +(this.returnInvo.tot_pr - +this.returnInvo.discount) - ev.target.value
  }
}