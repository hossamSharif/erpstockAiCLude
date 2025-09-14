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
  selector: 'app-edit-sales-return',
  templateUrl: './edit-sales-return.page.html',
  styleUrls: ['./edit-sales-return.page.scss']
})

export class EditSalesReturnPage implements OnInit, OnDestroy {
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
  
  // Return-specific properties (inherited from sales-return)
  isReturnAllItems: boolean = false;
  originalInvoice: any = null;
  originalItems: Array<any> = [];
  selectedOriginalInvoice: any = null;
  availableSalesInvoices: Array<any> = [];
  returnReason: string = '';

  discountType: string = 'percentage';
  discountAmount: number = 0;
  calculatedDiscountPerc: number = 0;
  calculatedDiscountAmount: number = 0;

  // Common properties (from sales-return structure)
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
  status: any = 'edit'
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
  showBackButton: boolean = true; // Always show back button in edit mode

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
    // Initialize currency service
    this.initializeCurrency();

    // Subscribe to customer selection from account-selector
    this.customerSubscription = this.accountCommunicationService.customerSelected$.subscribe(
      ({ id, account }) => {
        if (id && this.returnInvo) {
          console.log('Customer selected in edit sales return, setting cust_id:', id);
          this.returnInvo.cust_id = id;
          this.returnInvo.sub_name = account.sub_name;
          this.selectedAccount = account;
          console.log('Edit return invoice updated:', this.returnInvo);
        }
      }
    );

    // Get route parameters
    this.route.queryParams.subscribe(params => {
      this.returnRefToEdit = params['return_ref'] || '';
      if (this.returnRefToEdit) {
        this.loadReturnForEdit();
      } else {
        this.presentToast('لم يتم تحديد مرجع المرتجعة للتعديل', 'danger');
        this.goBack();
      }
    });

    this.getAppInfo();
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

  // Load existing return data for editing
  async loadReturnForEdit() {
    await this.showLoading('جاري تحميل بيانات المرتجعة...', 'updating');

    try {
      // Get return details
      this.api.getSalesReturnDetail(this.store_info.id, this.returnRefToEdit, this.year.id).subscribe(
        async (response: any) => {
          if (response.message !== 'No record Found' && response.data) {
            // Load return invoice data and items
            await this.populateReturnData(response.data);
            await this.hideLoading();
          } else {
            await this.hideLoading();
            this.presentToast('لم يتم العثور على بيانات المرتجعة', 'danger');
            this.goBack();
          }
        },
        async (error) => {
          await this.hideLoading();
          console.error('Error loading return for edit:', error);
          this.presentToast('حدث خطأ في تحميل بيانات المرتجعة', 'danger');
          this.goBack();
        }
      );
    } catch (error) {
      await this.hideLoading();
      console.error('Error in loadReturnForEdit:', error);
      this.presentToast('حدث خطأ في تحميل بيانات المرتجعة', 'danger');
      this.goBack();
    }
  }

  // Populate form with existing return data
  async populateReturnData(returnData: any) {
    try {
      console.log('Populating return data:', returnData);
      
      // Set return invoice data
      this.returnInvo = {
        return_id: returnData.returnInvoice.return_id,
        return_ref: returnData.returnInvoice.return_ref,
        original_pay_ref: returnData.returnInvoice.original_pay_ref,
        store_id: returnData.returnInvoice.store_id,
        tot_pr: parseFloat(returnData.returnInvoice.tot_pr),
        pay: parseFloat(returnData.returnInvoice.pay || 0),
        return_date: returnData.returnInvoice.return_date,
        return_time: returnData.returnInvoice.return_time,
        user_id: returnData.returnInvoice.user_id,
        cust_id: returnData.returnInvoice.cust_id,
        return_method: returnData.returnInvoice.return_method,
        discount: parseFloat(returnData.returnInvoice.discount || 0),
        changee: parseFloat(returnData.returnInvoice.changee || 0),
        sub_name: returnData.returnInvoice.sub_name,
        returnComment: returnData.returnInvoice.returnComment,
        yearId: returnData.returnInvoice.yearId,
        is_full_return: parseInt(returnData.returnInvoice.is_full_return),
        return_reason: returnData.returnInvoice.return_reason
      };

      // Set return reason
      this.returnReason = this.returnInvo.return_reason || '';

      // Set return type
      this.isReturnAllItems = this.returnInvo.is_full_return === 1;

      // Set account data
      if (returnData.returnInvoice.cust_id) {
        this.selectedAccount = {
          id: returnData.returnInvoice.cust_id,
          ac_id: returnData.returnInvoice.cust_id,
          sub_name: returnData.returnInvoice.sub_name,
          sub_type: "",
          sub_code: "",
          sub_balance: "",
          store_id: this.store_info.id,
          cat_id: "",
          cat_name: "",
          phone: "",
          address: "",
          currentCustumerStatus: 0
        };
      }

      // Set discount data
      if (this.returnInvo.discount > 0) {
        this.discountType = 'amount'; // Default to amount since we have the final amount
        this.discountAmount = this.returnInvo.discount;
        this.calculatedDiscountAmount = this.returnInvo.discount;
        this.calculateDiscountPercentage();
      }

      // Set item list
      this.itemList = returnData.returnItems || [];
      this.itemList.forEach((item: any) => {
        item.quantity = parseFloat(item.quantity);
        item.return_price = parseFloat(item.return_price);
        item.tot = parseFloat(item.tot);
      });

      console.log('Return data populated successfully');
      console.log('Return invoice:', this.returnInvo);
      console.log('Item list:', this.itemList);

    } catch (error) {
      console.error('Error populating return data:', error);
      this.presentToast('حدث خطأ في تحميل بيانات المرتجعة', 'danger');
    }
  }

  // Update return functionality
  async updateReturn() {
    if (this.isUpdating) return;

    // Validate return data
    const validationError = this.validateReturnData();
    if (validationError) {
      this.presentToast(validationError, 'warning');
      return;
    }

    await this.showLoading('جاري تحديث المرتجعة...', 'updating');
    this.isUpdating = true;

    try {
      // Calculate totals
      this.calculateTotals();

      // Prepare return data
      const returnData = {
        returnInvoice: {
          ...this.returnInvo,
          return_reason: this.returnReason,
          is_full_return: this.isReturnAllItems ? 1 : 0,
          discount: this.returnInvo.discount
        },
        returnItems: this.itemList.map(item => ({
          item_id: item.id,
          item_name: item.item_name,
          quantity: item.quantity,
          return_price: item.return_price,
          tot: item.tot
        }))
      };

      console.log('Updating return with data:', returnData);

      // Update return via API
      this.api.updateSalesReturnWithItems(returnData).subscribe(
        async (response: any) => {
          await this.hideLoading();
          this.isUpdating = false;

          if (response.message === 'Sales return updated successfully') {
            this.presentToast('تم تحديث المرتجعة بنجاح', 'success');
            this.goBack();
          } else {
            this.presentToast('فشل في تحديث المرتجعة: ' + (response.message || 'خطأ غير معروف'), 'danger');
          }
        },
        async (error) => {
          await this.hideLoading();
          this.isUpdating = false;
          console.error('Error updating return:', error);
          this.presentToast('حدث خطأ في تحديث المرتجعة', 'danger');
        }
      );
    } catch (error) {
      await this.hideLoading();
      this.isUpdating = false;
      console.error('Error in updateReturn:', error);
      this.presentToast('حدث خطأ في تحديث المرتجعة', 'danger');
    }
  }

  // Delete return functionality
  async deleteReturn() {
    if (this.isDeleting) return;

    const alert = await this.alertController.create({
      header: 'تأكيد الحذف',
      message: 'هل أنت متأكد من حذف هذه المرتجعة؟ لا يمكن التراجع عن هذا الإجراء.',
      buttons: [
        {
          text: 'إلغاء',
          role: 'cancel'
        }, {
          text: 'حذف',
          cssClass: 'danger',
          handler: async () => {
            await this.performDelete();
          }
        }
      ]
    });

    await alert.present();
  }

  async performDelete() {
    if (this.isDeleting) return;

    await this.showLoading('جاري حذف المرتجعة...', 'deleting');
    this.isDeleting = true;

    try {
      const deletionData = {
        return_ref: this.returnInvo.return_ref,
        store_id: this.store_info.id,
        yearId: this.year.id
      };

      console.log('Deleting return with data:', deletionData);

      // Delete return via API
      this.api.deleteSalesReturnWithItems(deletionData).subscribe(
        async (response: any) => {
          await this.hideLoading();
          this.isDeleting = false;

          if (response.message === 'Sales return deleted successfully') {
            this.presentToast('تم حذف المرتجعة بنجاح', 'success');
            this.goBack();
          } else {
            this.presentToast('فشل في حذف المرتجعة: ' + (response.message || 'خطأ غير معروف'), 'danger');
          }
        },
        async (error) => {
          await this.hideLoading();
          this.isDeleting = false;
          console.error('Error deleting return:', error);
          this.presentToast('حدث خطأ في حذف المرتجعة', 'danger');
        }
      );
    } catch (error) {
      await this.hideLoading();
      this.isDeleting = false;
      console.error('Error in performDelete:', error);
      this.presentToast('حدث خطأ في حذف المرتجعة', 'danger');
    }
  }

  // Validate return data before save
  validateReturnData(): string | null {
    if (!this.returnInvo.return_ref) {
      return 'مرجع المرتجعة مطلوب';
    }

    if (!this.returnInvo.return_date) {
      return 'تاريخ المرتجعة مطلوب';
    }

    if (!this.selectedAccount || !this.selectedAccount.id) {
      return 'يجب اختيار حساب العميل';
    }

    if (!this.itemList || this.itemList.length === 0) {
      return 'يجب أن تحتوي المرتجعة على صنف واحد على الأقل';
    }

    // Validate items
    for (let i = 0; i < this.itemList.length; i++) {
      const item = this.itemList[i];
      if (!item.quantity || item.quantity <= 0) {
        return `الكمية المرتجعة للصنف "${item.item_name}" يجب أن تكون أكبر من الصفر`;
      }
      if (!item.return_price || item.return_price < 0) {
        return `سعر الإرجاع للصنف "${item.item_name}" يجب أن يكون صالحاً`;
      }
    }

    if (!this.returnReason || this.returnReason.trim().length < 3) {
      return 'يجب كتابة سبب الإرجاع (3 أحرف على الأقل)';
    }

    return null;
  }

  // Calculate totals based on item list and discount
  calculateTotals() {
    // Calculate subtotal from items
    const subtotal = this.itemList.reduce((acc, item) => acc + (+item.tot), 0);
    
    // Apply discount
    let discountAmount = 0;
    if (this.discountType === 'percentage' && this.discountPerc > 0) {
      discountAmount = (subtotal * this.discountPerc) / 100;
    } else if (this.discountType === 'amount' && this.discountAmount > 0) {
      discountAmount = this.discountAmount;
    }
    
    // Update return invoice totals
    this.returnInvo.discount = discountAmount;
    this.returnInvo.tot_pr = subtotal - discountAmount;
    
    console.log('Calculated totals - Subtotal:', subtotal, 'Discount:', discountAmount, 'Total:', this.returnInvo.tot_pr);
  }
  
  // Calculate discount percentage when amount is given
  calculateDiscountPercentage() {
    const subtotal = this.itemList.reduce((acc, item) => acc + (+item.tot), 0);
    if (subtotal > 0 && this.discountAmount > 0) {
      this.calculatedDiscountPerc = (this.discountAmount / subtotal) * 100;
    } else {
      this.calculatedDiscountPerc = 0;
    }
  }
  
  // Handle discount type change
  onDiscountTypeChange(event: any) {
    this.discountType = event.detail.value;
    // Reset discount values when type changes
    this.discountPerc = 0;
    this.discountAmount = 0;
    this.calculatedDiscountPerc = 0;
    this.calculatedDiscountAmount = 0;
    this.returnInvo.discount = 0;
    this.calculateTotals();
  }
  
  // Handle percentage discount change
  onPercentageDiscountChange(event: any) {
    this.discountPerc = parseFloat(event.detail.value) || 0;
    if (this.discountPerc > 100) {
      this.discountPerc = 100;
    } else if (this.discountPerc < 0) {
      this.discountPerc = 0;
    }
    
    // Calculate amount from percentage
    const subtotal = this.itemList.reduce((acc, item) => acc + (+item.tot), 0);
    this.calculatedDiscountAmount = (subtotal * this.discountPerc) / 100;
    this.calculateTotals();
  }
  
  // Handle amount discount change
  onAmountDiscountChange(event: any) {
    this.discountAmount = parseFloat(event.detail.value) || 0;
    if (this.discountAmount < 0) {
      this.discountAmount = 0;
    }
    
    this.calculateDiscountPercentage();
    this.calculateTotals();
  }
  
  // Item editing methods
  editCell(i: number) {
    if (this.itemList[i]) {
      // Recalculate item total
      this.itemList[i].tot = this.itemList[i].quantity * this.itemList[i].return_price;
      this.calculateTotals();
    }
  }
  
  qtyClick(i: number) {
    this.showMe = i;
  }
  
  hideMe(i: number) {
    this.showMe = null;
  }
  
  deleteItem(i: number) {
    if (this.itemList.length > 1) {
      this.itemList.splice(i, 1);
      this.calculateTotals();
    } else {
      this.presentToast('يجب أن تحتوي المرتجعة على صنف واحد على الأقل', 'warning');
    }
  }
  
  // Account selection methods
  onAccountSelected(account: any) {
    console.log('Account selected in edit sales return:', account);
    this.selectedAccount = account;
    this.returnInvo.cust_id = account.id;
    this.returnInvo.sub_name = account.sub_name;
  }
  
  onAccountBalanceLoaded(balance: any) {
    console.log('Account balance loaded in edit sales return:', balance);
  }

  // Search and navigation methods
  onSearchTermChange() {
    if (this.searchTerm.trim()) {
      this.searchMatches = this.findSearchMatches();
      this.highlightedIndex = this.searchMatches.length > 0 ? 0 : -1;
    } else {
      this.searchMatches = [];
      this.highlightedIndex = -1;
    }
  }

  findSearchMatches(): number[] {
    const matches: number[] = [];
    const term = this.searchTerm.toLowerCase();
    
    this.getDisplayItemList().forEach((item, index) => {
      if (item.item_name.toLowerCase().includes(term)) {
        matches.push(index);
      }
    });
    
    return matches;
  }

  navigateSearch(direction: 'next' | 'prev') {
    if (this.searchMatches.length === 0) return;
    
    if (direction === 'next') {
      this.highlightedIndex = (this.highlightedIndex + 1) % this.searchMatches.length;
    } else {
      this.highlightedIndex = this.highlightedIndex <= 0 
        ? this.searchMatches.length - 1 
        : this.highlightedIndex - 1;
    }
  }

  getSearchResultText(): string {
    if (this.searchMatches.length === 0) return '0 / 0';
    return `${this.highlightedIndex + 1} / ${this.searchMatches.length}`;
  }

  isHighlighted(index: number): boolean {
    if (this.highlightedIndex === -1) return false;
    return this.searchMatches[this.highlightedIndex] === index;
  }

  isSearchMatch(index: number): boolean {
    return this.searchMatches.includes(index);
  }

  sortItemListAlphabetically() {
    if (!this.isItemListSorted) {
      this.sortedItemList = [...this.itemList].sort((a, b) => 
        a.item_name.localeCompare(b.item_name, 'ar')
      );
      this.isItemListSorted = true;
    } else {
      this.isItemListSorted = false;
    }
  }

  getDisplayItemList() {
    return this.isItemListSorted ? this.sortedItemList : this.itemList;
  }

  highlightText(text: string, searchTerm: string): string {
    if (!searchTerm || !text) return text;
    const regex = new RegExp(`(${searchTerm})`, 'gi');
    return text.replace(regex, '<mark>$1</mark>');
  }

  // Currency and utility methods
  getCurrencySymbol(): string {
    return this.currencyService.getCurrentCurrencySymbol();
  }

  // Loading and utility methods
  async getAppInfo() {
    this.store_info = await this.storage.get('store_info');
    this.user_info = await this.storage.get('user_info');
    this.year = await this.storage.get('year');

    if (!this.store_info || !this.user_info || !this.year) {
      this.presentToast('معلومات التطبيق غير مكتملة', 'danger');
      this.rout.navigate(['/folder/login']);
      return;
    }

    // Initialize currency rates if not done yet
    if (this.store_info && this.year) {
      await this.currencyService.loadRatesByYear(this.store_info.id, this.year.id);
    }

    console.log('App info loaded - Store:', this.store_info, 'User:', this.user_info, 'Year:', this.year);
  }

  isLoading(): boolean {
    return this.isSaving || this.isDeleting || this.isUpdating || this.loadingItems;
  }

  async showLoading(message: string, operation: string) {
    this.currentLoadingMessage = message;
    
    if (this.currentLoader) {
      await this.currentLoader.dismiss();
    }

    this.currentLoader = await this.loadingController.create({
      message: message,
      cssClass: 'custom-loading'
    });

    await this.currentLoader.present();
  }

  async hideLoading() {
    if (this.currentLoader) {
      await this.currentLoader.dismiss();
      this.currentLoader = null;
    }
    this.currentLoadingMessage = '';
  }

  getSubtotal(): number {
    if (!this.itemList || this.itemList.length === 0) {
      return 0;
    }
    return this.itemList.reduce((acc, item) => acc + Number(item.tot || 0), 0);
  }

  async presentToast(message: string, color: string = 'primary') {
    const toast = await this.toast.create({
      message: message,
      duration: 3000,
      color: color,
      position: 'bottom'
    });
    
    await toast.present();
  }

  goBack() {
    this._location.back();
  }
}