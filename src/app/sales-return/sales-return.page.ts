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
import { PriceAdjustmentDialogComponent } from '../component/price-adjustment-dialog/price-adjustment-dialog.component';
import { CurrencyService } from '../services/currency.service';
import * as momentObj from 'moment';

@Component({
  selector: 'app-sales-return',
  templateUrl: './sales-return.page.html',
  styleUrls: ['./sales-return.page.scss']
})

export class SalesReturnPage implements OnInit, OnDestroy {
  Math = Math;
  @ViewChild("dst") nameField: ElementRef;
  @ViewChild('dstPop') dstPop;
  @ViewChild('qtyId') qtyId;
  @ViewChild('popInput') popInput;
  @ViewChild('popover') popover;
  @ViewChild('popoverNotif') popoverNotif;

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
  salesLocal: Array<any> = []
  sales: Array<any> = []
  notifArr: Array<any> = []
  LogHistoryLocalArr: Array<any> = []
  purchLocal: Array<any> = []
  purchase: Array<any> = []
  randomsNumber: Array<any> = []
  store_info: { id: any, location: any, store_name: any, store_ref: any }
  user_info: { id: any, user_name: any, store_id: any, full_name: any, password: any }
  sub_nameNew: any = ""
  discountPerc: any = 0
  selectedItem: { id: any, pay_ref: any, item_name: any, pay_price: any, perch_price: any, item_unit: any, item_desc: any, parcode: any, qty: any, tot: any, dateCreated: any, availQty: any, aliasEn: any, tax: any, imageUrl: any };
  selectedAccount: { id: any, ac_id: any, sub_name: any, sub_type: any, sub_code: any, sub_balance: any, store_id: any, cat_id: any, cat_name: any, phone: any, address: any, currentCustumerStatus: any };
  returnInvo: { return_id: any, return_ref: any, original_pay_ref: any, store_id: any, tot_pr: any, pay: any, return_date: any, return_time: any, user_id: any, cust_id: any, return_method: any, discount: any, changee: any, sub_name: any, returnComment: any, yearId: any, is_full_return: any, return_reason: any }

  // Account communication subscription
  private customerSubscription: Subscription;
  private currencySubscription: Subscription;
  printMode: boolean = false
  printArr: Array<any> = []
  offline: boolean = false;
  color: any = 'dark'
  showMe = null
  status: any = 'new'
  searchLang: any = 0
  currentCustumerStatus: any
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
  statusFromRoute: string = '';
  showBackButton: boolean = false;

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
      pay_ref: "",
      item_desc: "",
      item_name: "",
      item_unit: "",
      parcode: 0,
      pay_price: 0,
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
    // Check category visibility setting

    // Ensure discountType is properly initialized
    if (!this.discountType) {
      this.discountType = 'percentage';
      this.cdr.detectChanges();
    }

    // Initialize currency service
    this.initializeCurrency();

    // Subscribe to customer selection from account-selector
    this.customerSubscription = this.accountCommunicationService.customerSelected$.subscribe(
      ({ id, account }) => {
        if (id && this.returnInvo) {
          console.log('Customer selected in sales return, setting cust_id:', id);
          this.returnInvo.cust_id = id;
          this.returnInvo.sub_name = account.sub_name;
          this.selectedAccount = account;
          console.log('Sales return invoice updated:', this.returnInvo);
        }
      }
    );

    this.getAppInfo()
  }

  async ngOnDestroy() {
    // Clean up loading states
    await this.hideLoading();

    // Clean up subscriptions
    if (this.customerSubscription) {
      this.customerSubscription.unsubscribe();
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

  // Toggle return all items
  onReturnAllToggle() {
    this.isReturnAllItems = !this.isReturnAllItems;
    
    if (this.isReturnAllItems && this.originalItems.length > 0) {
      // Auto-select all items from original invoice
      this.selectAllItemsForReturn();
    } else {
      // Clear item selection for manual selection
      this.clearItemSelection();
    }
    
    this.updateReturnFlag();
    this.getTotal();
  }

  // Select all items from original invoice for return
  selectAllItemsForReturn() {
    this.itemList = [];
    
    if (this.originalItems && this.originalItems.length > 0) {
      this.originalItems.forEach(item => {
        let d = new Date();
        let r = this.datePipe.transform(d, 'dd-MM-YYYY');

        this.itemList.push({
          "id": 'NULL',
          "return_ref": this.returnInvo.return_ref,
          "item_name": item.item_name,
          "return_price": item.pay_price,
          "quantity": +item.quantity,
          "tot": (item.quantity * +item.pay_price).toFixed(2),
          "store_id": +this.store_info.id,
          "yearId": +this.year.id,
          "item_id": +item.item_id,
          "dateCreated": r,
          "original_price": item.pay_price,
          "tax": item.tax || 0,
          "imageUrl": item.imageUrl || ''
        });
      });
    }

    this.updateSortedList();
  }

  // Clear item selection
  clearItemSelection() {
    this.itemList = [];
    this.updateSortedList();
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
  async loadAvailableSalesInvoices() {
    await this.showLoading('جاري تحميل الفواتير المتاحة...', 'saving');
    
    try {
      this.api.getTopSales(this.store_info.id, this.year.id).subscribe(data => {
        this.hideLoading();
        let res = data;
        if (res['message'] != 'No record Found') {
          this.availableSalesInvoices = res['data'];
        } else {
          this.availableSalesInvoices = [];
        }
      }, (err) => {
        this.hideLoading();
        console.log('Error loading sales invoices:', err);
        this.presentToast('خطأ في تحميل الفواتير', 'danger');
      });
    } catch (error) {
      await this.hideLoading();
      console.error('Error in loadAvailableSalesInvoices:', error);
    }
  }

  // Select original sales invoice
  async selectOriginalInvoice(invoice: any) {
    await this.showLoading('جاري فحص الفاتورة المختارة...', 'saving');
    
    try {
      // Check for existing returns first
      const existingReturns = await this.checkForExistingReturns(invoice.pay_ref);
      
      if (existingReturns.has_existing_returns) {
        await this.hideLoading();
        await this.showExistingReturnsWarning(existingReturns);
        
        // Allow user to continue but with warning
        const shouldContinue = await this.presentConfirmAlert(
          'تحذير - مرتجعات موجودة',
          `هذه الفاتورة لديها ${existingReturns.returns_count} مرتجعة(ات) موجودة بالفعل.\nهل تريد المتابعة لإنشاء مرتجعة جديدة؟`,
          'نعم، متابعة',
          'إلغاء'
        );
        
        if (!shouldContinue) {
          return; // User chose to cancel
        }
      } else {
        await this.hideLoading();
      }
      
      // Proceed with invoice selection
      this.selectedOriginalInvoice = invoice;
      this.originalInvoice = invoice;
      
      // Load original invoice items
      await this.loadOriginalInvoiceItems(invoice.pay_ref);
      
      // Update return invoice details
      this.returnInvo.original_pay_ref = invoice.pay_ref;
      this.returnInvo.cust_id = invoice.cust_id;
      this.selectedAccount.id = invoice.cust_id;
      this.selectedAccount.sub_name = invoice.sub_name || '';
      
      // Clear previous selections
      this.isReturnAllItems = false;
      this.clearItemSelection();
      
    } catch (error) {
      await this.hideLoading();
      console.error('Error checking existing returns:', error);
      this.presentToast('حدث خطأ أثناء فحص الفاتورة', 'danger');
    }
  }

  // Load original invoice items
  async loadOriginalInvoiceItems(pay_ref: string) {
    await this.showLoading('جاري تحميل أصناف الفاتورة...', 'saving');
    
    try {
      this.api.getPayInvoDetail(this.store_info.id, pay_ref, this.year.id).subscribe(data => {
        this.hideLoading();
        let res = data;
        this.originalItems = res['data'] || [];
        console.log('Original invoice items loaded:', this.originalItems);
      }, (err) => {
        this.hideLoading();
        console.log('Error loading original items:', err);
        this.presentToast('خطأ في تحميل أصناف الفاتورة', 'danger');
      });
    } catch (error) {
      await this.hideLoading();
      console.error('Error in loadOriginalInvoiceItems:', error);
    }
  }

  presentPopover(e?: Event) {
    this.popover.event = e;
    this.isOpen = true;
    this.clear()
    this.searchResult = this.originalItems // Show original items instead of all items
    setTimeout(() => {
      this.setFocusOnInput('popInput')
    }, 2000);
  }

  presentPopoverNotif(e?: Event) {
    this.notifArr = []
    this.showNotif = false
    this.popoverNotif.event = e;
    this.isOpenNotif = true;
  }

  didDissmis() {
    this.isOpen = false
    this.setFocusOnInput('qtyId')
  }

  didDissmisNotif() {
    this.isOpenNotif = false
  }

  searchItem(ev) {
    this.searchResult = []
    this.aliasTerm = ev.target.value
    const filterPipe = new FilterPipe;
    let fiteredArr: any = filterPipe.transform(this.originalItems, ev.target.value); // Search in original items
    if (fiteredArr.length > 0) {
      fiteredArr.forEach(element => {
        this.searchResult.push(element)
      });
    }
  }

  clear(item_name?) {
    if (item_name) {
      this.selectedItem = {
        id: undefined,
        dateCreated: "",
        pay_ref: this.returnInvo.return_ref,
        item_desc: "",
        item_name: "",
        item_unit: "",
        parcode: 0,
        pay_price: 0,
        perch_price: 0,
        qty: 0,
        tot: 0,
        availQty: 0,
        aliasEn: "",
        tax: 0,
        imageUrl: ""
      }
    } else {
      this.searchTerm = ""
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
        this.prepareReturnInvo()
        this.loadAvailableSalesInvoices()
      }
    });
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
  }

  setFocusOnInput(Input) {
    if (Input == 'dst') {
      this.nameField.nativeElement.focus();
    } else if (Input == 'dstPop') {
      this.dstPop.setFocus();
      this.isOpen = true;
      this.clear()
      this.searchResult = this.originalItems
      setTimeout(() => {
        this.popInput.setFocus();
      }, 1500);
    } else if (Input == 'qtyId') {
      this.qtyId.setFocus();
    } else if (Input == 'popInput') {
      this.popInput.setFocus();
    }
  }

  isFocused(event) {
    //console.log('focus event', event)
  }

  generateRandom(): any {
    let da = new Date
    let randomsNumber = da.getMonth().toString() + da.getDay().toString() + da.getHours().toString() + da.getMinutes().toString() + da.getSeconds().toString() + da.getMilliseconds().toString()
    this.returnInvo.return_ref = 'RTN' + this.store_info.store_ref + randomsNumber
  }

  selectFromPop(item) {
    this.selectedItem = {
      id: item.item_id,
      dateCreated: item.dateCreated,
      pay_ref: this.returnInvo.return_ref,
      item_desc: item.item_desc,
      item_name: item.item_name,
      item_unit: item.item_unit,
      parcode: item.parcode,
      pay_price: item.pay_price,
      perch_price: item.perch_price || item.pay_price,
      qty: "",
      tot: item.pay_price,
      availQty: item.quantity, // Available quantity from original invoice
      aliasEn: item.aliasEn,
      tax: item.tax,
      imageUrl: item.imageUrl
    }
    this.searchTerm = item.item_name
    this.didDissmis()
  }

  pickDetail(ev) {
    let fl: Array<any> = []
    if (this.searchLang == 1) {
      fl = this.originalItems.filter(x => x.item_desc == ev.target.value)
    } else {
      fl = this.originalItems.filter(x => x.item_name == ev.target.value)
    }

    if (fl.length > 0) {
      this.selectedItem = {
        id: fl[0]['item_id'],
        dateCreated: fl[0]['dateCreated'],
        pay_ref: this.returnInvo.return_ref,
        item_desc: fl[0]['item_desc'],
        item_name: fl[0]['item_name'],
        item_unit: fl[0]['item_unit'],
        parcode: fl[0]['parcode'],
        pay_price: fl[0]['pay_price'],
        perch_price: fl[0]['perch_price'] || fl[0]['pay_price'],
        qty: "",
        tot: fl[0]['pay_price'],
        availQty: fl[0]['quantity'], // Available quantity from original invoice
        aliasEn: fl[0]['aliasEn'],
        tax: fl[0]['tax'],
        imageUrl: fl[0]['imageUrl']
      }
      this.setFocusOnInput('qtyId')
    } else {
      this.presentToast('خطأ في اسم الصنف ', 'danger')
      this.selectedItem.item_name = ""
      this.selectedItem.item_desc = ""
    }
  }

  qtyhange(ev) {
    // Update item total
    this.selectedItem.tot = (this.selectedItem.qty * +this.selectedItem.pay_price).toFixed(2)

    // Enhanced validation using the new validation methods
    const validationResult = this.validateItemQuantity(this.selectedItem, +this.selectedItem.qty);
    
    if (!validationResult.valid) {
      this.presentToast(validationResult.message, 'warning')
      // Reset quantity to previous valid value or available quantity
      this.selectedItem.qty = Math.min(+this.selectedItem.availQty, +this.selectedItem.qty);
      this.selectedItem.tot = (this.selectedItem.qty * +this.selectedItem.pay_price).toFixed(2);
      return;
    }

    // Additional real-time validation for business rules
    if (+this.selectedItem.qty > +this.selectedItem.availQty) {
      this.presentToast('الكمية المطلوب إرجاعها أكبر من الكمية المتاحة في الفاتورة الأصلية', 'warning')
      this.selectedItem.qty = +this.selectedItem.availQty;
      this.selectedItem.tot = (this.selectedItem.qty * +this.selectedItem.pay_price).toFixed(2);
    }

    // Check for existing returns of the same item
    const existingReturnItem = this.itemList.find(x => x.item_name == this.selectedItem.item_name);
    if (existingReturnItem) {
      const totalQuantity = +this.selectedItem.qty + +existingReturnItem.quantity;
      if (totalQuantity > +this.selectedItem.availQty) {
        this.presentToast(`مجموع الكمية المطلوب إرجاعها (${totalQuantity}) أكبر من الكمية المتاحة (${this.selectedItem.availQty})`, 'warning')
        const maxAllowedQty = +this.selectedItem.availQty - +existingReturnItem.quantity;
        this.selectedItem.qty = Math.max(0, maxAllowedQty);
        this.selectedItem.tot = (this.selectedItem.qty * +this.selectedItem.pay_price).toFixed(2);
      }
    }
  }

  pricehange(ev) {
    // Update total
    this.selectedItem.tot = (this.selectedItem.qty * +this.selectedItem.pay_price).toFixed(2)
    
    // Validate price against original price
    const originalItem = this.originalItems.find(item => 
      item.item_id === this.selectedItem.id || item.item_name === this.selectedItem.item_name
    );
    
    if (originalItem && +this.selectedItem.pay_price > (+originalItem.pay_price * 1.1)) {
      this.presentToast(`سعر الإرجاع (${this.selectedItem.pay_price}) أكبر من السعر الأصلي (${originalItem.pay_price}) بشكل غير مقبول`, 'warning')
      this.selectedItem.pay_price = +originalItem.pay_price;
      this.selectedItem.tot = (this.selectedItem.qty * +this.selectedItem.pay_price).toFixed(2);
    }
    
    // Ensure price is not negative
    if (+this.selectedItem.pay_price < 0) {
      this.presentToast('السعر لا يمكن أن يكون سالباً', 'warning')
      this.selectedItem.pay_price = originalItem ? +originalItem.pay_price : 0;
      this.selectedItem.tot = (this.selectedItem.qty * +this.selectedItem.pay_price).toFixed(2);
    }
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

  getTotal() {
    // Use the enhanced calculation method
    this.recalculateReturnTotals();
    
    // Additional validation during calculation
    const subtotal = this.itemList.reduce((acc, obj) => { return acc + +obj.tot; }, 0);
    
    // Validate total against original invoice
    if (this.selectedOriginalInvoice && subtotal > +this.selectedOriginalInvoice.tot_pr) {
      console.warn('Return total exceeds original invoice total');
      this.presentToast('تحذير: إجمالي المرتجعة يتجاوز إجمالي الفاتورة الأصلية', 'warning');
    }
    
    // Update discount calculation labels
    if (this.discountType === 'percentage' && this.discountPerc > 0) {
      this.calculatedDiscountAmount = (subtotal * +this.discountPerc / 100);
    } else if (this.discountType === 'amount' && this.discountAmount > 0 && subtotal > 0) {
      this.calculatedDiscountPerc = ((+this.discountAmount / subtotal) * 100);
    }
  }

  deleteItem(index) {
    const displayList = this.getDisplayItemList();
    const itemToDelete = displayList[index];

    // Find the item in the original itemList and remove it
    const originalIndex = this.itemList.findIndex(item =>
      item.item_name === itemToDelete.item_name &&
      item.return_price === itemToDelete.return_price &&
      item.quantity === itemToDelete.quantity
    );

    if (originalIndex !== -1) {
      this.itemList.splice(originalIndex, 1);
    }

    // Reset discount but preserve pay amount
    this.discountPerc = 0
    this.returnInvo.discount = 0
    this.getTotal()
    this.updateSortedList()
    this.updateReturnFlag()
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

  addTolist() {
    // Enhanced validation before adding to list
    if (this.selectedItem.item_name == "" || this.selectedItem.id == "" || +this.selectedItem.qty == 0) {
      this.presentToast('الرجاء اختيار الصنف وتحديد الكمية', 'danger')
      return;
    }
    
    // Validate item quantity using enhanced validation
    const validationResult = this.validateItemQuantity(this.selectedItem, +this.selectedItem.qty);
    if (!validationResult.valid) {
      this.presentToast(validationResult.message, 'danger')
      return;
    }
    
    // Validate price
    const originalItem = this.originalItems.find(item => 
      item.item_id === this.selectedItem.id || item.item_name === this.selectedItem.item_name
    );
    
    if (originalItem && +this.selectedItem.pay_price > (+originalItem.pay_price * 1.1)) {
      this.presentToast('سعر الإرجاع أكبر من السعر الأصلي بشكل غير مقبول', 'danger')
      return;
    }
    
    // Proceed with adding to list if all validation passes
    {
      let fl: any = []
      if (this.itemList.length > 0) {
        fl = this.itemList.filter(x => x.item_name == this.selectedItem.item_name && x.return_price == this.selectedItem.pay_price)
      }

      if (fl.length == 0) {
        let d = new Date
        let r = this.datePipe.transform(d, 'dd-MM-YYYY')

        this.itemList.push({
          "id": 'NULL',
          "return_ref": this.selectedItem.pay_ref,
          "item_name": this.selectedItem.item_name,
          "return_price": this.selectedItem.pay_price,
          "quantity": +this.selectedItem.qty,
          "tot": this.selectedItem.tot,
          "store_id": +this.store_info.id,
          "yearId": +this.year.id,
          "item_id": +this.selectedItem.id,
          "dateCreated": r,
          "original_price": this.selectedItem.pay_price,
          "tax": this.selectedItem.tax,
          "imageUrl": this.selectedItem.imageUrl
        })

      } else {
        this.selectedItem.qty = +fl[0].quantity + +this.selectedItem.qty
        let index = this.itemList.map(e => e.item_name).indexOf(this.selectedItem.item_name);
        this.itemList[index].quantity = +this.selectedItem.qty
        this.itemList[index].tot = (this.selectedItem.qty * +this.selectedItem.pay_price).toFixed(2)
      }

      this.selectedItem = {
        id: undefined,
        dateCreated: "",
        pay_ref: this.returnInvo.return_ref,
        item_desc: "",
        item_name: "",
        item_unit: "",
        parcode: 0,
        pay_price: 0,
        perch_price: 0,
        qty: 0,
        tot: 0,
        availQty: 0,
        aliasEn: "",
        tax: 0,
        imageUrl: ""
      }
      this.discountPerc = 0
      this.returnInvo.discount = 0

      this.getTotal()
      this.updateReturnFlag()
      this.setFocusOnInput('dstPop')
    }
  }

  qtyClick(i) {
    this.showMe = i
  }

  hideMe(i) {
    this.showMe = null
  }

  editCell(i) {
    const displayList = this.getDisplayItemList();
    const itemToEdit = displayList[i];

    // Find the corresponding item in the original itemList
    const originalIndex = this.itemList.findIndex(item =>
      item.item_name === itemToEdit.item_name &&
      item.return_price === itemToEdit.return_price
    );

    if (originalIndex !== -1 && +displayList[i].quantity > 0 && +displayList[i].return_price > 0) {
      // Update both the display list and original list
      displayList[i].tot = +displayList[i].quantity * displayList[i].return_price;
      this.itemList[originalIndex].quantity = displayList[i].quantity;
      this.itemList[originalIndex].return_price = displayList[i].return_price;
      this.itemList[originalIndex].tot = displayList[i].tot;

      // Reset discount but preserve pay amount
      this.discountPerc = 0
      this.returnInvo.discount = 0
      this.hideMe(i)
      this.getTotal()
    } else {
      this.presentToast("خطأ في الإدخال ", "danger")
    }
  }

  validate(): boolean {
    // Enhanced return-specific validation
    
    // 1. Original invoice validation
    if (!this.selectedOriginalInvoice || !this.returnInvo.original_pay_ref) {
      this.presentToast('الرجاء اختيار الفاتورة الأصلية أولاً', 'danger')
      return false
    }
    
    // 2. Items validation
    if (this.itemList.length == 0 || this.returnInvo.return_ref == "") {
      this.presentToast('الرجاء ادخال اصناف الي القائمة', 'danger')
      return false
    }
    
    // 3. Return quantities validation
    const quantityValidationResult = this.validateReturnQuantities();
    if (!quantityValidationResult.valid) {
      this.presentToast(quantityValidationResult.message, 'danger')
      return false
    }
    
    // 4. Customer validation
    if (!this.returnInvo.cust_id || !this.selectedAccount.sub_name) {
      this.presentToast('الرجاء إختيار حساب العميل', 'danger')
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

  save() {
    let d: Date = this.returnInvo.return_date
    this.returnInvo.sub_name = this.selectedAccount.sub_name
    this.returnInvo.return_date = this.datePipe.transform(d, 'yyyy-MM-dd')

    if (this.validate() == true) {
      this.saveReturn()
    }
  }

  // Shared success handler for optimized save process
  private handleSaveSuccess() {
    this.presentToast('تم الحفظ بنجاح', 'success');

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

  back() {
    this._location.back()
  }

  goBack() {
    this._location.back();
  }

  // Handle account selection from AccountSelectorComponent
  onAccountSelected(account: any) {
    if (account) {
      this.selectedAccount = {
        id: account.id,
        ac_id: account.ac_id,
        sub_name: account.sub_name,
        sub_type: account.sub_type,
        sub_code: account.sub_code,
        sub_balance: account.sub_balance,
        store_id: account.store_id,
        cat_name: account.cat_name,
        cat_id: account.cat_id,
        phone: account.phone,
        address: account.address,
        currentCustumerStatus: 0
      };

      // Update return invoice with selected account
      this.returnInvo.cust_id = account.id;
      this.returnInvo.sub_name = account.sub_name;

      console.log('Account selected in sales return:', this.selectedAccount);
    }
  }

  // Handle account balance loaded
  onAccountBalanceLoaded(balance: any) {
    if (balance && this.selectedAccount) {
      // Update the current customer status based on balance
      this.currentCustumerStatus = balance.status === 'debit' ? 0 : 1;
      console.log('Account balance loaded in sales return:', balance);
    }
  }

  // Centralized loading management methods
  async showLoading(message: string, operationType: 'saving' | 'deleting' | 'updating' = 'saving') {
    // Dismiss any existing loader first
    await this.hideLoading();

    // Set appropriate state
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

    // Create new loader without auto-dismiss
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

  // Check if any loading operation is active
  isLoading(): boolean {
    return this.isSaving || this.isDeleting || this.isUpdating;
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

  highlightText(text: string, searchTerm: string): string {
    if (!text || !searchTerm.trim()) {
      return text || '';
    }

    const regex = new RegExp(`(${searchTerm.trim()})`, 'gi');
    return text.replace(regex, '<mark>$1</mark>');
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

  // Real-time quantity validation (called during item entry)
  validateItemQuantity(item: any, newQuantity: number): {valid: boolean, message: string} {
    const originalItem = this.originalItems.find(origItem => 
      origItem.item_id === item.id || origItem.item_name === item.item_name
    );
    
    if (!originalItem) {
      return {
        valid: false,
        message: 'هذا الصنف غير موجود في الفاتورة الأصلية'
      };
    }
    
    // Check existing returns for this item
    const existingReturnQuantity = this.itemList
      .filter(returnItem => returnItem.item_name === item.item_name)
      .reduce((total, returnItem) => total + +returnItem.quantity, 0);
    
    const totalReturnQuantity = existingReturnQuantity + newQuantity;
    
    if (totalReturnQuantity > +originalItem.quantity) {
      return {
        valid: false,
        message: `إجمالي كمية الإرجاع (${totalReturnQuantity}) أكبر من الكمية الأصلية (${originalItem.quantity})`
      };
    }
    
    if (newQuantity <= 0) {
      return {
        valid: false,
        message: 'الكمية يجب أن تكون أكبر من صفر'
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
}