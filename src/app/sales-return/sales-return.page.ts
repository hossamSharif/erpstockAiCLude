import { Component, OnInit, ViewChild, ElementRef, Renderer2, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { ServicesService } from "../stockService/services.service";
import { Observable, Subscription } from 'rxjs';
import { AlertController, Platform, IonInput, LoadingController, ModalController, ToastController } from '@ionic/angular';
import { DatePipe, Location } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';
import { Storage } from '@ionic/storage';
import { AuthServiceService } from '../auth/auth-service.service';
import { PrintModalPage } from '../print-modal/print-modal.page';
import { ActivatedRoute, Router } from '@angular/router';
import { FilterPipe } from '../sales/pipe';
import { FilterPipe2 } from '../sales/pipe2';
import { FilterPipe3 } from '../sales/pipe3';
import { StockServiceService } from '../syncService/stock-service.service';
import { AccountCommunicationService } from '../services/account-communication.service';
import { PriceAdjustmentDialogComponent } from '../component/price-adjustment-dialog/price-adjustment-dialog.component';
import { CurrencyService } from '../services/currency.service';
import * as momentObj from 'moment';

@Component({
  selector: 'app-sales-return',
  templateUrl: './sales-return.page.html',
  styleUrls: ['./sales-return.page.scss']
})

export class SalesReturnPage implements OnInit, OnDestroy {
  @ViewChild("dst") nameField: ElementRef;

  // Return-specific properties
  isReturnAllItems: boolean = false;
  originalInvoice: any = null;
  originalItems: Array<any> = [];
  selectedOriginalInvoice: any = null;
  availableSalesInvoices: Array<any> = [];
  returnReason: string = '';

  discountType: string = 'percentage'; // 'percentage' or 'amount'
  discountAmount: number = 0;
  calculatedDiscountPerc: number = 0;
  calculatedDiscountAmount: number = 0;

  // Checklist properties
  checklistItems: Array<{
    item_id: number;
    item_name: string;
    item_desc: string;
    originalQty: number;
    originalPrice: number;
    returnQty: number;
    returnPrice: number;
    selected: boolean;
    rowTotal: number;
    tax: number;
    imageUrl: string;
  }> = [];
  selectedItemCount: number = 0;
  checklistSearchTerm: string = '';
  isAllSelected: boolean = true;
  showInvoiceSelector: boolean = false;
  filteredChecklistItems: Array<any> = [];

  itemList: Array<any> = []
  sortedItemList: Array<any> = []
  isItemListSorted: boolean = false
  searchTerm: string = ''
  highlightedIndex: number = -1
  searchMatches: number[] = []
  store_info: { id: any, location: any, store_name: any, store_ref: any }
  user_info: { id: any, user_name: any, store_id: any, full_name: any, password: any }
  sub_nameNew: any = ""
  discountPerc: any = 0
  selectedAccount: { id: any, ac_id: any, sub_name: any, sub_type: any, sub_code: any, sub_balance: any, store_id: any, cat_id: any, cat_name: any, phone: any, address: any, currentCustumerStatus: any };
  returnInvo: { return_id: any, return_ref: any, original_pay_ref: any, store_id: any, tot_pr: any, pay: any, return_date: any, return_time: any, user_id: any, cust_id: any, return_method: any, discount: any, changee: any, sub_name: any, returnComment: any, yearId: any, is_full_return: any, return_reason: any }

  private currencySubscription: Subscription;
  printMode: boolean = false
  printArr: Array<any> = []
  offline: boolean = false;
  color: any = 'dark'
  showMe = null
  status: any = 'new'
  searchLang: any = 0
  year: { id: any, yearDesc: any, yearStart: any, yearEnd: any }
  showBackButton: boolean = false;
  navigationParams: any = null;
  isFromNavigation: boolean = false;

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
    this.selectedAccount = { id: "", ac_id: "", sub_name: "", sub_type: "", sub_code: "", sub_balance: "", store_id: "", cat_name: "", cat_id: "", phone: "", address: "", currentCustumerStatus: 0 };

    this.returnInvo = {
      return_id: undefined, return_ref: 0, original_pay_ref: "", store_id: "",
      tot_pr: 0, pay: 0, return_date: "", return_time: "", user_id: "",
      cust_id: null, return_method: "", discount: 0, changee: 0, sub_name: "",
      returnComment: "", yearId: null, is_full_return: 0, return_reason: ""
    };

    this.printArr.push({
      'returnInvo': "",
      'itemList': "",
      'selectedAccount': "",
      'sub_nameNew': "",
      "userInfo": "",
      "sub_balanse": 0,
      "balanceStatus": ""
    })
  }

  ngOnInit() {
    // Ensure discountType is properly initialized
    if (!this.discountType) {
      this.discountType = 'percentage';
      this.cdr.detectChanges();
    }

    // Initialize currency service
    this.initializeCurrency();

    // Handle navigation parameters from sales-record page
    this.route.queryParams.subscribe(params => {
      if (params['original_pay_ref']) {
        console.log('Navigation parameters received:', params);
        this.showBackButton = true;
        this.isFromNavigation = true;
        this.navigationParams = params;
      }
    });

    this.getAppInfo()
  }

  async ngOnDestroy() {
    // Clean up loading states
    await this.hideLoading();

    // Clean up subscriptions
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

  // Update return flag based on current selection
  updateReturnFlag() {
    if (this.originalItems && this.originalItems.length > 0 && this.itemList.length > 0) {
      // Check if all original items are selected with full quantities
      this.returnInvo.is_full_return = this.isReturnAllItems ? 1 : 0;
    } else {
      this.returnInvo.is_full_return = 0;
    }
  }

  // Load available sales invoices for selection
  loadAvailableSalesInvoices() {
    this.isSaving = true;
    this.currentLoadingMessage = 'جاري تحميل الفواتير المتاحة...';
    this.cdr.detectChanges();

    this.api.getTopSales(this.store_info.id, this.year.id).subscribe(data => {
      this.isSaving = false;
      this.currentLoadingMessage = '';
      let res = data;
      if (res['message'] != 'No record Found') {
        this.availableSalesInvoices = res['data'] || [];
      } else {
        this.availableSalesInvoices = [];
      }
      this.cdr.detectChanges();
    }, (err) => {
      this.isSaving = false;
      this.currentLoadingMessage = '';
      console.log('Error loading sales invoices:', err);
      this.presentToast('خطأ في تحميل الفواتير', 'danger');
      this.cdr.detectChanges();
    });
  }

  // Select original sales invoice
  async selectOriginalInvoice(invoice: any) {
    // Set invoice data immediately (before any async calls)
    this.selectedOriginalInvoice = invoice;
    this.originalInvoice = invoice;
    this.returnInvo.original_pay_ref = invoice.pay_ref;
    this.returnInvo.cust_id = invoice.cust_id;
    this.selectedAccount.id = invoice.cust_id;
    this.selectedAccount.sub_name = invoice.sub_name || '';

    // Load original invoice items (this is the critical path)
    this.loadOriginalInvoiceItems(invoice.pay_ref);

    // Check for existing returns in background (non-blocking, won't delay loading)
    this.checkForExistingReturns(invoice.pay_ref).then(existingReturns => {
      if (existingReturns && existingReturns.has_existing_returns) {
        this.showExistingReturnsWarning(existingReturns);
      }
    }).catch(error => {
      console.warn('Could not check existing returns (non-blocking):', error);
    });
  }

  // Load original invoice items
  loadOriginalInvoiceItems(pay_ref: string) {
    this.isSaving = true;
    this.currentLoadingMessage = 'جاري تحميل أصناف الفاتورة...';
    this.cdr.detectChanges();

    this.api.getPayInvoDetail(this.store_info.id, pay_ref, this.year.id).subscribe(data => {
      this.isSaving = false;
      this.currentLoadingMessage = '';
      try {
        let res = data;
        this.originalItems = res['data'] || res || [];
        if (!Array.isArray(this.originalItems)) {
          this.originalItems = [];
        }
        if (this.originalItems.length > 0) {
          this.buildChecklistFromOriginalItems();
        } else {
          this.presentToast('لا توجد أصناف في الفاتورة المحددة', 'warning');
        }
        console.log('Original invoice items loaded:', this.originalItems);
      } catch (error) {
        console.error('Error processing invoice items:', error);
        this.presentToast('خطأ في معالجة أصناف الفاتورة', 'danger');
      }
      this.cdr.detectChanges();
    }, (err) => {
      this.isSaving = false;
      this.currentLoadingMessage = '';
      console.log('Error loading original items:', err);
      this.presentToast('خطأ في تحميل أصناف الفاتورة', 'danger');
      this.cdr.detectChanges();
    });
  }

  getAppInfo() {
    Promise.all([
      this.storage.get('USER_INFO'),
      this.storage.get('year'),
      this.storage.get('STORE_INFO')
    ]).then(([userInfo, year, storeInfo]) => {
      if (userInfo) this.user_info = userInfo;
      if (year) this.year = year;
      if (storeInfo) {
        this.store_info = storeInfo;
        this.prepareReturnInvo();

        // Auto-select invoice if navigated from sales-record, otherwise show invoice selector
        if (this.navigationParams) {
          this.handleNavigationParams(this.navigationParams);
        } else {
          this.showInvoiceSelector = true;
        }
      }
    });
  }

  handleNavigationParams(params: any) {
    if (params['original_pay_ref']) {
      const mockInvoice = {
        pay_ref: params['original_pay_ref'],
        cust_id: params['cust_id'],
        sub_name: params['cust_name'],
        tot_pr: params['original_total'],
        pay_date: params['original_date']
      };
      this.selectOriginalInvoice(mockInvoice);
    }
  }

  prepareReturnInvo() {
    this.selectedAccount = { id: "", ac_id: "", sub_name: "", sub_type: "", sub_code: "", sub_balance: "", store_id: "", cat_name: "", cat_id: "", phone: "", address: "", currentCustumerStatus: 0 };
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
      cust_id: null,
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

    // Clear discount related variables - use setTimeout to prevent expression change error
    setTimeout(() => {
      this.discountType = 'percentage';
      this.discountAmount = 0;
      this.calculatedDiscountPerc = 0;
      this.calculatedDiscountAmount = 0;
      this.cdr.detectChanges();
    }, 0);

    let d = new Date
    this.returnInvo.return_date = this.datePipe.transform(d, 'yyyy-MM-dd')
    this.returnInvo.return_time = this.datePipe.transform(d, 'HH:mm:ss')
    this.generateRandom()
    this.returnInvo.store_id = this.store_info.id
    this.returnInvo.user_id = this.user_info.id
    this.returnInvo.yearId = this.year.id

    // Clear itemList and related arrays
    this.itemList = []
    this.sortedItemList = []
    this.isItemListSorted = false

    // Clear search related variables
    this.searchTerm = ''
    this.searchMatches = []
    this.highlightedIndex = -1

    // Clear original invoice data
    this.originalInvoice = null
    this.originalItems = []
    this.selectedOriginalInvoice = null
    this.checklistItems = []
    this.checklistSearchTerm = ''
    this.selectedItemCount = 0
    this.isAllSelected = true
    this.showInvoiceSelector = false
  }

  generateRandom(): any {
    let da = new Date
    let randomsNumber = da.getMonth().toString() + da.getDay().toString() + da.getHours().toString() + da.getMinutes().toString() + da.getSeconds().toString() + da.getMilliseconds().toString()
    this.returnInvo.return_ref = 'RTN' + this.store_info.store_ref + randomsNumber
  }

  payChange(ev) {
    if (this.discountPerc > 0) {
      this.returnInvo.discount = (+this.returnInvo.tot_pr * +this.discountPerc / 100).toFixed(2)
    }
    this.returnInvo.changee = +(this.returnInvo.tot_pr - +this.returnInvo.discount) - ev.target.value
  }

  onDiscountTypeChange(event: any) {
    this.discountType = event.detail.value;
    // Reset discount values when switching types
    this.discountPerc = 0;
    this.discountAmount = 0;
    this.returnInvo.discount = 0;
    this.calculatedDiscountPerc = 0;
    this.calculatedDiscountAmount = 0;
    this.calculateChange();
    // Trigger change detection to prevent ExpressionChangedAfterItHasBeenCheckedError
    this.cdr.detectChanges();
  }

  onPercentageDiscountChange(event: any) {
    this.discountPerc = event.target.value || 0;
    if (this.returnInvo.tot_pr > 0) {
      // Calculate discount amount based on percentage
      this.calculatedDiscountAmount = (+this.returnInvo.tot_pr * +this.discountPerc / 100);
      this.returnInvo.discount = this.calculatedDiscountAmount.toFixed(2);
      this.calculateChange();
    }
  }

  onAmountDiscountChange(event: any) {
    this.discountAmount = event.target.value || 0;
    if (this.returnInvo.tot_pr > 0 && this.discountAmount > 0) {
      // Calculate discount percentage based on amount
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

  validate(): boolean {
    // Enhanced return-specific validation

    // 1. Original invoice validation
    if (!this.selectedOriginalInvoice || !this.returnInvo.original_pay_ref) {
      this.presentToast('الرجاء اختيار الفاتورة الأصلية أولاً', 'danger')
      return false
    }

    // 2. Items validation - check checklist instead of itemList directly
    if (this.checklistItems.filter(item => item.selected && item.returnQty > 0).length === 0) {
      this.presentToast('الرجاء اختيار صنف واحد على الأقل للإرجاع', 'danger')
      return false
    }

    // 3. Return quantities validation
    const quantityValidationResult = this.validateReturnQuantities();
    if (!quantityValidationResult.valid) {
      this.presentToast(quantityValidationResult.message, 'danger')
      return false
    }

    // 4. Customer validation
    if (!this.returnInvo.cust_id) {
      this.presentToast('لم يتم تحديد العميل من الفاتورة الأصلية', 'danger')
      return false
    }

    // 5. Date validation
    if (this.returnInvo.return_date == "" || this.returnInvo.return_date == undefined) {
      this.presentToast('الرجاء تحديد التاريخ ', 'danger')
      return false
    }

    // 6. Return date should not be earlier than original invoice date
    if (this.selectedOriginalInvoice && this.selectedOriginalInvoice.pay_date) {
      const returnDate = new Date(this.returnInvo.return_date);
      const originalDate = new Date(this.selectedOriginalInvoice.pay_date);
      if (returnDate < originalDate) {
        this.presentToast('تاريخ المرتجعة لا يمكن أن يكون قبل تاريخ الفاتورة الأصلية', 'danger')
        return false
      }
    }

    // 7. Business logic validation
    const businessValidationResult = this.validateBusinessLogic();
    if (!businessValidationResult.valid) {
      this.presentToast(businessValidationResult.message, 'danger')
      return false
    }

    // 8. Financial validation
    if (this.returnInvo.changee < 0) {
      this.presentToast('الرجاء مراجعة المبلغ المستلم والخصم  ', 'danger')
      return false
    }

    // 9. Return reason validation for partial returns
    if (!this.isReturnAllItems && (!this.returnReason || this.returnReason.trim() === '')) {
      this.presentToast('الرجاء إدخال سبب الإرجاع للمرتجعات الجزئية', 'warning')
      // Allow but warn for partial returns without reason
    }

    return true
  }

  save() {
    this.recalculateFromChecklist();
    let d: Date = this.returnInvo.return_date
    this.returnInvo.sub_name = this.selectedAccount.sub_name
    this.returnInvo.return_date = this.datePipe.transform(d, 'yyyy-MM-dd')

    if (this.validate() == true) {
      this.saveReturn()
    }
  }

  async saveReturn() {
    // Show loading indicator
    await this.showLoading('جاري حفظ فاتورة المرتجعات...', 'saving');

    try {
      // Prepare return invoice and items together
      this.returnInvo.return_reason = this.returnReason;

      const returnWithItems = {
        invoice: this.returnInvo,
        items: this.itemList
      };

      console.log('Sending return data:', returnWithItems);

      this.api.createSalesReturnWithItems(returnWithItems).subscribe(
        async (response: any) => {
          console.log('Return saved:', response);
          await this.hideLoading();
          this.handleSaveSuccess();
        },
        async (err) => {
          console.log('Save error:', err);
          await this.hideLoading();
          this.presentToast('لم يتم حفظ البيانات , خطا في الإتصال حاول مرة اخري', 'danger');
        }
      );
    } catch (error) {
      await this.hideLoading();
      console.error('Unexpected error in saveReturn:', error);
      this.presentToast('حدث خطأ غير متوقع أثناء الحفظ', 'danger');
    }
  }

  // Shared success handler for optimized save process
  private handleSaveSuccess() {
    this.presentToast('COMMON.MESSAGE.SAVED_SUCCESSFULLY', 'success');

    // Prepare print data with current return information
    this.printArr = [];
    this.printArr.push({
      'returnInvo': this.returnInvo,
      'itemList': this.itemList,
      'selectedAccount': this.selectedAccount,
      'sub_nameNew': this.sub_nameNew,
      "user_name": this.user_info.full_name,
      "sub_balanse": this.selectedAccount.sub_balance,
      "balanceStatus": this.selectedAccount.currentCustumerStatus
    });

    console.log('Print array prepared:', this.printArr);

    // Show print confirmation
    this.presentAlertConfirm();
  }

  async presentAlertConfirm() {
    let msg: string = 'هل تريد طباعة فاتورة المرتجعات ؟ '

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
            // Reset invoice data when user cancels print (after save)
            this.resetPageAfterReturn();
          }
        }, {
          text: 'موافق',
          id: 'confirm-button',
          handler: () => {
            this.presentModal(this.printArr, 'sales_return').then(() => {
              // Reset page after print modal is presented
              this.resetPageAfterReturn();
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

  // Method to reset page to initial state after return operations
  private resetPageAfterReturn() {
    console.log('Resetting page after return operation');
    this.prepareReturnInvo();
    this.status = 'new';

    // Navigate back if needed
    if (this.showBackButton) {
      setTimeout(() => {
        this.goBack();
      }, 1000); // Give time for reset to complete
    }
  }

  // Enhanced validation methods for return business logic

  validateReturnQuantities(): {valid: boolean, message: string} {
    // Check if any return quantities exceed original quantities
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

      // Check if return quantity exceeds original quantity
      if (+returnItem.quantity > +originalItem.quantity) {
        return {
          valid: false,
          message: `كمية الإرجاع للصنف "${returnItem.item_name}" (${returnItem.quantity}) أكبر من الكمية الأصلية (${originalItem.quantity})`
        };
      }

      // Check for negative quantities
      if (+returnItem.quantity <= 0) {
        return {
          valid: false,
          message: `كمية الإرجاع للصنف "${returnItem.item_name}" يجب أن تكون أكبر من صفر`
        };
      }

      // Check if return price is reasonable (should not exceed original price significantly)
      if (+returnItem.return_price > (+originalItem.pay_price * 1.1)) {
        return {
          valid: false,
          message: `سعر الإرجاع للصنف "${returnItem.item_name}" أكبر من السعر الأصلي بشكل غير مقبول`
        };
      }
    }

    // Check for duplicate items in return list
    const itemNames = this.itemList.map(item => item.item_name);
    const duplicates = itemNames.filter((name, index) => itemNames.indexOf(name) !== index);
    if (duplicates.length > 0) {
      return {
        valid: false,
        message: `يوجد أصناف مكررة في قائمة الإرجاع: ${duplicates.join(', ')}`
      };
    }

    return {valid: true, message: ''};
  }

  validateBusinessLogic(): {valid: boolean, message: string} {
    // Check if total return amount doesn't exceed original invoice amount
    const returnTotal = +this.returnInvo.tot_pr;
    const originalTotal = +this.selectedOriginalInvoice.tot_pr;

    if (returnTotal > originalTotal) {
      return {
        valid: false,
        message: `إجمالي المرتجعة (${returnTotal}) لا يمكن أن يتجاوز إجمالي الفاتورة الأصلية (${originalTotal})`
      };
    }

    // Validate discount logic
    if (+this.returnInvo.discount > returnTotal) {
      return {
        valid: false,
        message: 'قيمة الخصم لا يمكن أن تتجاوز إجمالي المرتجعة'
      };
    }

    // Check if return is attempted on the same day as purchase (business rule)
    if (this.selectedOriginalInvoice && this.selectedOriginalInvoice.pay_date) {
      const returnDate = new Date(this.returnInvo.return_date);
      const originalDate = new Date(this.selectedOriginalInvoice.pay_date);
      const daysDifference = Math.floor((returnDate.getTime() - originalDate.getTime()) / (1000 * 3600 * 24));

      // Allow same-day or future returns, but warn if too far in the future
      if (daysDifference > 365) {
        return {
          valid: false,
          message: 'لا يمكن إرجاع أصناف بعد أكثر من سنة من تاريخ الشراء'
        };
      }
    }

    // Validate customer consistency
    if (this.selectedOriginalInvoice && this.selectedOriginalInvoice.cust_id !== this.returnInvo.cust_id) {
      return {
        valid: false,
        message: 'يجب أن يكون العميل المسترجع هو نفس عميل الفاتورة الأصلية'
      };
    }

    return {valid: true, message: ''};
  }

  // Enhanced calculation methods with validation

  recalculateReturnTotals() {
    // Recalculate all totals with validation
    let subtotal = 0;

    this.itemList.forEach(item => {
      const itemTotal = (+item.quantity * +item.return_price);
      item.tot = itemTotal.toFixed(2);
      subtotal += itemTotal;
    });

    // Apply discount
    const discountAmount = this.calculateDiscountAmount(subtotal);
    this.returnInvo.discount = discountAmount.toFixed(2);

    // Calculate final total
    this.returnInvo.tot_pr = (subtotal - discountAmount).toFixed(2);

    // Calculate change
    this.returnInvo.changee = ((subtotal - discountAmount) - +this.returnInvo.pay).toFixed(2);

    // Update return flag
    this.updateReturnFlag();
  }

  private calculateDiscountAmount(subtotal: number): number {
    if (this.discountType === 'percentage') {
      return subtotal * (+this.discountPerc / 100);
    } else {
      return +this.discountAmount;
    }
  }

  // Helper methods for existing returns validation

  private async checkForExistingReturns(original_pay_ref: string): Promise<any> {
    return new Promise((resolve, reject) => {
      this.api.checkExistingReturns(original_pay_ref, this.store_info.id, this.year.id).subscribe(
        (response: any) => {
          if (response.success) {
            resolve(response);
          } else {
            reject(response.message);
          }
        },
        (error) => {
          reject(error);
        }
      );
    });
  }

  private async showExistingReturnsWarning(existingReturns: any) {
    if (existingReturns.has_full_return) {
      this.presentToast('تحذير: تم إرجاع هذه الفاتورة بالكامل من قبل!', 'warning');
    } else if (existingReturns.returns_count > 0) {
      const returnedItemsText = existingReturns.returned_items_summary.length > 0
        ? `الأصناف المرتجعة: ${existingReturns.returned_items_summary.join(', ')}`
        : '';

      this.presentToast(
        `تحذير: توجد ${existingReturns.returns_count} مرتجعة(ات) لهذه الفاتورة. ${returnedItemsText}`,
        'warning'
      );
    }
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

  // Format balance display with number separators
  formatBalance(balance: number): string {
    if (!balance && balance !== 0) return '0.00';
    return new Intl.NumberFormat('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(Math.abs(balance));
  }

  // Get current currency symbol for table headers
  getCurrencySymbol(): string {
    return this.currencyService.getCurrentCurrencySymbol();
  }

  highlightText(text: string, searchTerm: string): string {
    if (!text || !searchTerm || !searchTerm.trim()) {
      return text || '';
    }

    const regex = new RegExp(`(${searchTerm.trim()})`, 'gi');
    return text.replace(regex, '<mark>$1</mark>');
  }

  // Lightweight loading management - uses only the HTML overlay, no Ionic loadingController
  async showLoading(message: string, operationType: 'saving' | 'deleting' | 'updating' = 'saving') {
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
    this.cdr.detectChanges();
  }

  async hideLoading() {
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

  back() {
    this._location.back()
  }

  goBack() {
    this._location.back();
  }

  // Search-in-list methods (kept unchanged)
  onSearchTermChange() {
    this.searchMatches = [];
    this.highlightedIndex = -1;

    if (this.searchTerm.trim() === '') {
      return;
    }

    const displayList = this.getDisplayItemList();
    const searchTermLower = this.searchTerm.toLowerCase().trim();

    displayList.forEach((item, index) => {
      if (item.item_name && item.item_name.toLowerCase().includes(searchTermLower)) {
        this.searchMatches.push(index);
      }
    });

    if (this.searchMatches.length > 0) {
      this.highlightedIndex = 0;
      this.scrollToHighlightedItem();
    }
  }

  navigateSearch(direction: 'next' | 'prev') {
    if (this.searchMatches.length === 0) return;

    if (direction === 'next') {
      this.highlightedIndex = (this.highlightedIndex + 1) % this.searchMatches.length;
    } else {
      this.highlightedIndex = this.highlightedIndex <= 0 ? this.searchMatches.length - 1 : this.highlightedIndex - 1;
    }

    this.scrollToHighlightedItem();
  }

  scrollToHighlightedItem() {
    if (this.highlightedIndex >= 0 && this.searchMatches.length > 0) {
      const targetIndex = this.searchMatches[this.highlightedIndex];
      setTimeout(() => {
        const tableContainer = document.querySelector('.table-container');
        const targetRow = document.querySelector(`tr[data-index="${targetIndex}"]`);
        if (tableContainer && targetRow) {
          targetRow.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }, 100);
    }
  }

  isHighlighted(index: number): boolean {
    return this.searchMatches.includes(index) && this.searchMatches[this.highlightedIndex] === index;
  }

  isSearchMatch(index: number): boolean {
    return this.searchMatches.includes(index);
  }

  clearSearch() {
    this.searchTerm = '';
    this.searchMatches = [];
    this.highlightedIndex = -1;
  }

  getSearchResultText(): string {
    if (this.searchTerm.trim() === '') return '';
    if (this.searchMatches.length === 0) return 'لا توجد نتائج';
    return `${this.highlightedIndex + 1} من ${this.searchMatches.length}`;
  }

  sortItemListAlphabetically() {
    if (!this.itemList || this.itemList.length === 0) {
      return;
    }

    if (this.isItemListSorted) {
      // If already sorted, restore original order
      this.sortedItemList = [...this.itemList];
      this.isItemListSorted = false;
    } else {
      // Sort alphabetically by item_name
      this.sortedItemList = [...this.itemList].sort((a, b) => {
        const nameA = a.item_name ? a.item_name.toString().toLowerCase() : '';
        const nameB = b.item_name ? b.item_name.toString().toLowerCase() : '';
        return nameA.localeCompare(nameB, 'ar', { numeric: true });
      });
      this.isItemListSorted = true;
    }
  }

  getDisplayItemList() {
    return this.sortedItemList.length > 0 ? this.sortedItemList : this.itemList;
  }

  updateSortedList() {
    if (this.isItemListSorted) {
      this.sortItemListAlphabetically();
    } else {
      this.sortedItemList = [...this.itemList];
    }
  }

  // Checklist methods

  buildChecklistFromOriginalItems() {
    this.checklistItems = this.originalItems.map(item => ({
      item_id: +item.item_id,
      item_name: item.item_name,
      item_desc: item.item_desc || '',
      originalQty: +item.quantity,
      originalPrice: +item.pay_price,
      returnQty: +item.quantity,
      returnPrice: +item.pay_price,
      selected: true,
      rowTotal: +(+item.quantity * +item.pay_price).toFixed(2),
      tax: item.tax || 0,
      imageUrl: item.imageUrl || ''
    }));
    this.isAllSelected = true;
    this.isReturnAllItems = true;
    this.updateFilteredChecklist();
    this.updateSelectionState();
    this.recalculateFromChecklist();
  }

  toggleItemSelection(index: number) {
    const item = this.checklistItems[index];
    item.selected = !item.selected;
    if (!item.selected) {
      item.returnQty = 0;
      item.rowTotal = 0;
    } else {
      item.returnQty = item.originalQty;
      item.returnPrice = item.originalPrice;
      item.rowTotal = +(item.returnQty * item.returnPrice).toFixed(2);
    }
    this.updateSelectionState();
    this.recalculateFromChecklist();
  }

  toggleSelectAll() {
    this.isAllSelected = !this.isAllSelected;
    this.checklistItems.forEach(item => {
      item.selected = this.isAllSelected;
      if (this.isAllSelected) {
        item.returnQty = item.originalQty;
        item.returnPrice = item.originalPrice;
        item.rowTotal = +(item.returnQty * item.returnPrice).toFixed(2);
      } else {
        item.returnQty = 0;
        item.rowTotal = 0;
      }
    });
    this.updateSelectionState();
    this.recalculateFromChecklist();
  }

  onReturnQtyChange(index: number) {
    const item = this.checklistItems[index];
    // Clamp quantity
    if (item.returnQty > item.originalQty) {
      item.returnQty = item.originalQty;
      this.presentToast('الكمية لا يمكن أن تتجاوز الكمية الأصلية', 'warning');
    }
    if (item.returnQty < 0) {
      item.returnQty = 0;
    }
    // Auto-select/deselect based on qty
    item.selected = item.returnQty > 0;
    item.rowTotal = +(item.returnQty * item.returnPrice).toFixed(2);
    this.updateSelectionState();
    this.recalculateFromChecklist();
  }

  onReturnPriceChange(index: number) {
    const item = this.checklistItems[index];
    if (item.returnPrice > item.originalPrice * 1.1) {
      item.returnPrice = item.originalPrice;
      this.presentToast('سعر الإرجاع لا يمكن أن يتجاوز السعر الأصلي بأكثر من 10%', 'warning');
    }
    if (item.returnPrice < 0) {
      item.returnPrice = 0;
    }
    item.rowTotal = +(item.returnQty * item.returnPrice).toFixed(2);
    this.recalculateFromChecklist();
  }

  recalculateFromChecklist() {
    // Build itemList from selected checklist items (for save compatibility)
    let d = new Date();
    let r = this.datePipe.transform(d, 'dd-MM-YYYY');

    this.itemList = this.checklistItems
      .filter(item => item.selected && item.returnQty > 0)
      .map(item => ({
        "id": 'NULL',
        "return_ref": this.returnInvo.return_ref,
        "item_name": item.item_name,
        "return_price": item.returnPrice,
        "quantity": item.returnQty,
        "tot": item.rowTotal.toFixed(2),
        "store_id": +this.store_info.id,
        "yearId": +this.year.id,
        "item_id": item.item_id,
        "dateCreated": r,
        "original_price": item.originalPrice,
        "tax": item.tax,
        "imageUrl": item.imageUrl
      }));

    this.recalculateReturnTotals();
  }

  getFilteredChecklistItems() {
    return this.filteredChecklistItems;
  }

  updateFilteredChecklist() {
    if (!this.checklistSearchTerm || this.checklistSearchTerm.trim() === '') {
      this.filteredChecklistItems = this.checklistItems;
    } else {
      const term = this.checklistSearchTerm.toLowerCase().trim();
      this.filteredChecklistItems = this.checklistItems.filter(item =>
        item.item_name.toLowerCase().includes(term) ||
        (item.item_desc && item.item_desc.toLowerCase().includes(term))
      );
    }
  }

  onChecklistSearchChange() {
    this.updateFilteredChecklist();
  }

  updateSelectionState() {
    this.selectedItemCount = this.checklistItems.filter(item => item.selected).length;
    this.isAllSelected = this.selectedItemCount === this.checklistItems.length && this.checklistItems.length > 0;
    this.isReturnAllItems = this.isAllSelected && this.checklistItems.every(item => item.returnQty === item.originalQty);
    this.updateReturnFlag();
  }

  getSubtotal(): number {
    return this.checklistItems
      .filter(item => item.selected)
      .reduce((sum, item) => sum + item.rowTotal, 0);
  }

  absValue(val: number): number {
    return Math.abs(val);
  }
}
