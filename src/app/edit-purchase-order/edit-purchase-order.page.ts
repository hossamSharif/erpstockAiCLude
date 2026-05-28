import { DatePipe, Location } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';
import { Component, OnInit, OnDestroy, ViewChild, ElementRef, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { ActionSheetController, AlertController, LoadingController, ModalController, ToastController } from '@ionic/angular';
import { ServicesService } from '../stockService/services.service';
import { Storage } from '@ionic/storage';
import { ItemModalPage } from '../item-modal/item-modal.page';
import { FilterPipe } from '../sales/pipe';
import { FilterPipe2 } from '../sales/pipe2';
import { FilterPipe3 } from '../sales/pipe3';
import { StockServiceService } from '../syncService/stock-service.service';
import * as momentObj from 'moment';
import { Subscription } from 'rxjs';
import { CurrencyService } from '../services/currency.service';
import { PriceAdjustmentDialogComponent } from '../component/price-adjustment-dialog/price-adjustment-dialog.component';
import { DraftService, DraftType, DraftData } from '../services/draft.service';
import { ClipboardTransferService } from '../services/clipboard-transfer.service';

@Component({
  selector: 'app-edit-purchase-order',
  templateUrl: './edit-purchase-order.page.html',
  styleUrls: ['./edit-purchase-order.page.scss'],
})
export class EditPurchaseOrderPage implements OnInit, OnDestroy {
  @ViewChild("dstEp") dstEp: ElementRef;
  @ViewChild('qtyIdEp') qtyIdEp;
  loadingItems: boolean = false;
  @ViewChild('dstPop4') dstPop4;
  @ViewChild('popInput4') popInput4;
  @ViewChild('popover4') popover4;

  discountType: string = 'percentage'; // 'percentage' or 'amount'
  discountAmount: number = 0;
  calculatedDiscountPerc: number = 0;
  calculatedDiscountAmount: number = 0;

  @ViewChild('popoverNotif4') popoverNotif4;
  notifArr: Array<any> = [];
  showNotif = false;
  LogHistoryLocalArr: Array<any> = [];
  logHistoryArr: Array<any> = [];
  isOpenNotif = false;
  subiscribtionNotif: Subscription;
  newNotif = false;
  private currencySubscription: Subscription;

  currenQty: any = 0;
  firstQty: any = 0;
  perchTotQty: any = 0;
  payTotQty: any = 0;
  perchTot: any = 0;
  qtyReal: any = 0;
  availQty: any = 0;

  isOpen = false;
  payArray: any;
  sub_account: Array<any> = [];
  sub_accountLocalPurch: Array<any> = [];
  items: Array<any> = [];
  itemsLocal: Array<any> = [];
  itemList: Array<any> = [];
  sortedItemList: Array<any> = [];
  isItemListSorted: boolean = false;
  searchTerm: string = '';
  highlightedIndex: number = -1;
  searchMatches: number[] = [];

  // Search functionality methods
  onSearchTermChange() {
    this.searchMatches = [];
    this.highlightedIndex = -1;

    if (!this.searchTerm.trim()) {
      return;
    }

    const displayList = this.getDisplayItemList();
    const searchLower = this.searchTerm.toLowerCase();

    displayList.forEach((item, index) => {
      if (item.item_name && item.item_name.toString().toLowerCase().includes(searchLower)) {
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
      this.highlightedIndex = this.highlightedIndex === 0 ? this.searchMatches.length - 1 : this.highlightedIndex - 1;
    }

    this.scrollToHighlightedItem();
  }

  scrollToHighlightedItem() {
    if (this.highlightedIndex >= 0 && this.highlightedIndex < this.searchMatches.length) {
      const matchIndex = this.searchMatches[this.highlightedIndex];
      const element = document.querySelector(`tr[data-index="${matchIndex}"]`);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  }

  highlightText(text: string, searchTerm: string): string {
    if (!searchTerm || !text) {
      return text;
    }

    const regex = new RegExp(`(${searchTerm})`, 'gi');
    return text.replace(regex, '<mark>$1</mark>');
  }

  isSearchMatch(index: number): boolean {
    return this.searchMatches.includes(index);
  }

  isHighlighted(index: number): boolean {
    return this.highlightedIndex >= 0 && this.searchMatches[this.highlightedIndex] === index;
  }

  getSearchResultText(): string {
    if (this.searchMatches.length === 0) {
      return 'لا توجد نتائج';
    }
    return `${this.highlightedIndex + 1} من ${this.searchMatches.length}`;
  }

  sub_accountPurch: Array<any> = [];
  purchaseOrders: Array<any> = [];
  purchaseOrdersLocal: Array<any> = [];
  purchOrderLocalUpdate: Array<any> = [];
  purchOrderLocalDelete: Array<any> = [];
  randomsNumber: Array<any> = [];
  store_info: { id: any, location: any, store_name: any, store_ref: any };
  user_info: { id: any, user_name: any, store_id: any, full_name: any, password: any };
  store_id: any = 1;
  sub_nameNew: any = "";
  selectedItem: { id: any, pay_ref: any, item_name: any, pay_price: any, perch_price: any, item_unit: any, item_desc: any, parcode: any, qty: any, tot: any, dateCreated: any, aliasEn: any };
  selectedAccount: { id: any, ac_id: any, sub_name: any, sub_type: any, sub_code: any, sub_balance: any, store_id: any, cat_id: any, cat_name: any, currentCustumerStatus: any };
  payInvo: { pay_id: any, pay_ref: any, store_id: any, tot_pr: any, pay: any, pay_date: any, pay_time: any, user_id: any, cust_id: any, pay_method: any, discount: any, changee: any, sub_name: any, payComment: any, nextPay: any, yearId: any };
  discountPerc: any = 0;
  radioVal: any = 0;
  offline: boolean = false;
  searchLang: any = 0;
  showMe: any = null;
  firstq: { id: any, item_id: any, store_id: any, quantity: any, fq_year: any, pay_price: any, perch_price: any, item_name: any };

  aliasTerm: any = "";
  searchResult: Array<any> = [];
  aliasResult: Array<any> = [];
  year: { id: any, yearDesc: any, yearStart: any, yearEnd: any };

  // Loading state management - Centralized loading system
  isUpdating: boolean = false;
  isDeleting: boolean = false;
  isConverting: boolean = false;
  currentLoadingMessage: string = '';
  currentLoader: HTMLIonLoadingElement | null = null;

  // Data initialization flag to prevent re-initialization from query parameters
  private dataInitialized: boolean = false;

  // Auto-save properties
  private autoSaveInterval: any;
  private isDirty: boolean = false;
  private lastSaveTimestamp: number = 0;
  autoSaveStatus: string = '';
  lastSaveTime: string = '';

  // Bulk selection properties
  selectedItems: Set<number> = new Set();
  isSelectAll: boolean = false;

  constructor(
    private behavApi: StockServiceService,
    private _location: Location,
    private alertController: AlertController,
    private route: ActivatedRoute,
    private rout: Router,
    private storage: Storage,
    private modalController: ModalController,
    private loadingController: LoadingController,
    private datePipe: DatePipe,
    private api: ServicesService,
    private toast: ToastController,
    private currencyService: CurrencyService,
    private cdr: ChangeDetectorRef,
    private draftService: DraftService,
    private actionSheetController: ActionSheetController,
    private clipboardTransfer: ClipboardTransferService
  ) {
    this.selectedAccount = { id: "", ac_id: "", sub_name: "", sub_type: "", sub_code: "", sub_balance: "", store_id: "", cat_name: "", cat_id: "", currentCustumerStatus: 0 };
    this.route.queryParams.subscribe(params => {
      // Only initialize from parameters if data hasn't been loaded yet
      if (params && params.payInvo && !this.dataInitialized) {
        this.payInvo = JSON.parse(params.payInvo);
        this.selectedAccount.sub_name = JSON.parse(params.sub_name);
        this.user_info = JSON.parse(params.user_info);
        this.store_info = JSON.parse(params.store_info);
        this.itemList = JSON.parse(params.itemList);
        this.resortItemList();

        this.initializeDiscountValues();

        this.getAppInfo();

        // Mark data as initialized to prevent re-initialization
        this.dataInitialized = true;
      }
    });

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
      aliasEn: ""
    };
  }

  async ngOnInit() {
    // Initialize draft service for auto-save
    await this.draftService.initialize();

    this.initializeCurrency();

    // Ensure auto-save is started after a delay to allow data loading
    setTimeout(() => {
      if (!this.autoSaveInterval) {
        this.startAutoSave();
      }
    }, 1000);
  }

  ngOnDestroy() {
    // Stop auto-save before cleanup
    this.stopAutoSave();

    if (this.currencySubscription) {
      this.currencySubscription.unsubscribe();
    }

    // Cleanup any remaining loading states
    this.hideLoading();

    // Reset flag when component is actually destroyed (not just navigating to subpages)
    this.dataInitialized = false;
  }

  // Centralized Loading Management Methods
  async showLoading(message: string, operationType: 'updating' | 'deleting' | 'converting' = 'updating') {
    await this.hideLoading(); // Ensure no existing loaders
    this.resetLoadingStates();

    if (operationType === 'updating') {
      this.isUpdating = true;
    } else if (operationType === 'deleting') {
      this.isDeleting = true;
    } else if (operationType === 'converting') {
      this.isConverting = true;
    }

    this.currentLoadingMessage = message;

    this.currentLoader = await this.loadingController.create({
      spinner: 'bubbles',
      mode: 'ios',
      message: message,
      duration: 30000, // 30 second timeout
      backdropDismiss: false
    });

    await this.currentLoader.present();

    // Timeout protection
    setTimeout(() => {
      if ((this.isUpdating || this.isDeleting || this.isConverting) && this.currentLoader) {
        console.log('Loading timeout reached, dismissing...');
        this.hideLoading();
      }
    }, 30000);
  }

  async hideLoading() {
    if (this.currentLoader) {
      try {
        await this.currentLoader.dismiss();
      } catch (error) {
        console.log('Error dismissing loader:', error);
      }
      this.currentLoader = null;
    }
    this.resetLoadingStates();
  }

  resetLoadingStates() {
    this.isUpdating = false;
    this.isDeleting = false;
    this.isConverting = false;
    this.currentLoadingMessage = '';
  }

  handleError(error: any, operation: string) {
    console.error(`Error in ${operation}:`, error);
    this.hideLoading();
    this.presentToast('لم يتم حفظ البيانات، خطأ في الاتصال حاول مرة أخرى', 'danger');
  }

  // Check if any loading operation is active
  isLoading(): boolean {
    return this.isUpdating || this.isDeleting || this.isConverting;
  }

  async initializeCurrency() {
    await this.currencyService.initializeCurrency();
    await this.currencyService.loadSupportedCurrencies();
    if (this.store_info && this.year) {
      await this.currencyService.loadRatesByYear(this.store_info.id, this.year.id);
    }
    this.currencySubscription = this.currencyService.getCurrentCurrency().subscribe(currency => {
      this.cdr.detectChanges();
    });
  }

  initializeDiscountValues() {
    // Initialize discount type based on existing discount
    if (this.payInvo.discount > 0) {
      // Calculate which type was used originally
      const percentageDiscount = (+this.payInvo.discount / +this.payInvo.tot_pr) * 100;

      // You can set a default or determine based on your business logic
      this.discountType = 'percentage'; // or 'amount' based on your preference

      if (this.discountType === 'percentage') {
        this.discountPerc = percentageDiscount.toFixed(2);
        this.calculatedDiscountAmount = +this.payInvo.discount;
      } else {
        this.discountAmount = +this.payInvo.discount;
        this.calculatedDiscountPerc = percentageDiscount;
      }
    }
  }

  ionViewDidEnter() {
  }

  getStockItems(pickName?) {
    this.api.stockItems(1, this.year.id).subscribe(data => {
      let res = data;
      this.items = res['data'];
      this.items.forEach(element => {
        if (+element.tswiaQuantity > 0) {
          element.salesQuantity = +element.salesQuantity + +element.tswiaQuantity;
        } else if (+element.tswiaQuantity < 0) {
          element.perchQuantity = +element.perchQuantity + Math.abs(+element.tswiaQuantity);
        }
        element.quantity = (+element.perchQuantity + +element.firstQuantity) - +element.salesQuantity;
      });
      this.storage.set('itemsLocal', this.items).then((response) => {
      });
      this.searchResult = this.items;
      if (pickName) {
        this.pickDetail(pickName, 'afterSave');
      }
    }, (err) => {
    }, () => {
    });
  }

  ionViewDidLeave() {
  }

  async getAppInfo() {
    await this.storage.get('USER_INFO').then((response) => {
      if (response) {
        this.user_info = response;
      }
    });

    await this.storage.get('year').then((response) => {
      if (response) {
        this.year = response;
      }
    });

    await this.storage.get('STORE_INFO').then((response) => {
      if (response) {
        this.store_info = response;
        // After store info is loaded, get account balance if supplier is selected
        this.loadInitialAccountBalance();
      }
    });

    await this.storage.get('itemsLocal').then((response) => {
      if (response) {
        this.items = response;
      }
    });

    // After all data is loaded, check for existing draft and start auto-save
    if (this.user_info && this.store_info) {
      await this.checkForExistingDraft();
      this.startAutoSave();
    }
  }

  presentPopoverNotif(e?: Event) {
    this.notifArr = [];
    this.showNotif = false;
    this.popoverNotif4.event = e;
    this.isOpenNotif = true;
  }

  didDissmisNotif() {
    this.isOpenNotif = false;
  }

  qtyClick(i) {
    this.showMe = i;
  }

  hideMe(i) {
    this.showMe = null;
  }

  editCell(i) {
    const displayList = this.getDisplayItemList();
    const itemToEdit = displayList[i];

    // Find the corresponding item in the original itemList
    const originalIndex = this.itemList.findIndex(item =>
      item.item_name === itemToEdit.item_name &&
      item.perch_price === itemToEdit.perch_price
    );

    if (originalIndex !== -1 && +displayList[i].quantity > 0 && +displayList[i].perch_price > 0) {
      // Update both the display list and original list
      displayList[i].tot = +displayList[i].quantity * +displayList[i].perch_price;
      this.itemList[originalIndex].quantity = displayList[i].quantity;
      this.itemList[originalIndex].perch_price = displayList[i].perch_price;
      this.itemList[originalIndex].tot = displayList[i].tot;

      // Reset discount but preserve pay amount
      this.discountPerc = 0;
      this.payInvo.discount = 0;
      this.hideMe(i);
      this.markDirty();
      this.getTotal();
    } else {
      this.presentToast("خطأ في الإدخال ", "danger");
    }
  }

  getAllStockItemsWithouteCounts() {
    this.storage.get('year').then((response) => {
      if (response) {
        this.year = response;
        if (this.offline == false) {
          this.api.getAllStockItemsWithouteCounts(1, this.year.id).subscribe(data => {
            let res = data;
            this.items = res['data'];
            this.storage.set('itemsLocal', this.items).then((response) => {
            });
          }, (err) => {
          }, () => {
          });
        }
      }
    });
  }

  prepareInvo() {
    this.sub_nameNew = "";
    this.radioVal = 0;
    this.payInvo = {
      pay_id: this.payArray[0].pay_id,
      pay_ref: this.payArray[0].pay_ref,
      store_id: this.payArray[0].store_id,
      tot_pr: this.payArray[0].tot_pr,
      pay: this.payArray[0].pay,
      pay_date: this.payArray[0].pay_date,
      pay_time: this.payArray[0].pay_time,
      user_id: this.payArray[0].user_id,
      cust_id: this.payArray[0].cust_id,
      pay_method: this.payArray[0].pay_method,
      discount: this.payArray[0].discount,
      changee: this.payArray[0].changee,
      sub_name: this.payArray[0].sub_name,
      payComment: this.payArray[0].payComment,
      nextPay: this.payArray[0].nextPay,
      yearId: this.payArray[0].yearId
    };
    this.selectedAccount.sub_name = this.payArray[0].sub_name;
    this.pickAccount(this.payArray[0].sub_name);
    this.itemList = this.payArray['details'];

    // Clear sorting and search related variables
    this.sortedItemList = [];
    this.isItemListSorted = false;
    this.searchTerm = '';
    this.searchMatches = [];
    this.highlightedIndex = -1;

    this.setFocusOnInput('dstEp');
  }

  setFocusOnInput(Input) {
    if (Input == 'dstEp') {
      this.dstEp.nativeElement.focus();
    } else if (Input == 'dstPop4') {
      this.dstPop4.setFocus();
      this.isOpen = true;
      this.clear();
      this.searchResult = this.items;
      setTimeout(() => {
        this.popInput4.setFocus();
      }, 1500);
    } else if (Input == 'qtyIdEp') {
      this.qtyIdEp.setFocus();
    } else if (Input == 'popInput4') {
      this.popInput4.setFocus();
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

  async presentLoadingWithOptions(msg?) {
    const loading = await this.loadingController.create({
      spinner: 'bubbles',
      mode: 'ios',
      duration: 5000,
      message: msg,
      translucent: true,
      backdropDismiss: false
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
  }

  pickAccount(ev, firstLoad?) {
    let evVal;
    if (firstLoad) {
      evVal = ev;
    } else {
      evVal = ev.target.value;
    }

    let fl = this.sub_account.filter(x => x.sub_name == evVal);
    if (fl.length > 0) {
      this.selectedAccount = {
        id: fl[0]['id'],
        ac_id: fl[0]['ac_id'],
        sub_name: fl[0]['sub_name'],
        sub_type: fl[0]['sub_type'],
        sub_code: fl[0]['sub_code'],
        store_id: fl[0]['store_id'],
        sub_balance: fl[0]['sub_balance'],
        cat_id: fl[0]['cat_id'],
        cat_name: fl[0]['cat_name'],
        currentCustumerStatus: 0
      };
      this.payInvo.cust_id = this.selectedAccount.id;
    } else {
      this.presentToast('خطأ في اسم الحساب ', 'danger');
      this.selectedItem.item_name = "";
    }
  }

  selectFromPop(item) {
    this.selectedItem = {
      id: item.id,
      dateCreated: item.dateCreated,
      pay_ref: this.payInvo.pay_ref,
      item_desc: item.item_desc,
      item_name: item.item_name,
      item_unit: item.item_unit,
      parcode: item.parcode,
      pay_price: item.pay_price,
      perch_price: item.perch_price,
      qty: "",
      tot: item.perch_price,
      aliasEn: item.aliasEn
    };
    this.searchTerm = item.item_name;
    this.didDissmis();
  }

  pickDetail(ev, notev?) {
    let evVal;
    if (notev) {
      evVal = ev;
      this.searchLang = 0;
    } else {
      evVal = ev.target.value;
    }
    let fl: Array<any> = [];
    if (this.searchLang == 1) {
      fl = this.items.filter(x => x.item_desc == evVal);
    } else {
      fl = this.items.filter(x => x.item_name == evVal);
    }
    if (fl.length > 0) {
      this.selectedItem = {
        id: fl[0]['id'],
        dateCreated: fl[0]['dateCreated'],
        pay_ref: this.payInvo.pay_ref,
        item_desc: fl[0]['item_desc'],
        item_name: fl[0]['item_name'],
        item_unit: fl[0]['item_unit'],
        parcode: fl[0]['parcode'],
        pay_price: fl[0]['pay_price'],
        perch_price: fl[0]['perch_price'],
        qty: "",
        tot: fl[0]['pay_price'],
        aliasEn: fl[0]['aliasEn']
      };
      this.setFocusOnInput('qtyIdEp');
    } else {
      this.presentToast('خطأ في اسم الصنف ', 'danger');
      this.selectedItem.item_name = "";
    }
  }

  async presentModal2(id?, status?) {
    const modal = await this.modalController.create({
      component: ItemModalPage,
      componentProps: {
        "item": this.selectedItem,
        "status": status
      }
    });

    modal.onDidDismiss().then((dataReturned) => {
      if (dataReturned !== null) {
        this.doAfterDissmiss(dataReturned);
      }
    });

    return await modal.present();
  }

  qtyhange(ev) {
    this.selectedItem.tot = (this.selectedItem.qty * +this.selectedItem.perch_price).toFixed(2);
  }

  pricehange(ev) {
    this.selectedItem.tot = (this.selectedItem.qty * +this.selectedItem.perch_price).toFixed(2);
  }

  payChange(ev) {
    this.payInvo.changee = +(this.payInvo.tot_pr - +this.payInvo.discount) - ev.target.value;
  }

  onDiscountTypeChange(event: any) {
    this.discountType = event.detail.value;
    // Reset discount values when switching types
    this.discountPerc = 0;
    this.discountAmount = 0;
    this.payInvo.discount = 0;
    this.calculatedDiscountPerc = 0;
    this.calculatedDiscountAmount = 0;
    this.calculateChange();
  }

  onPercentageDiscountChange(event: any) {
    this.discountPerc = event.target.value || 0;
    if (this.payInvo.tot_pr > 0) {
      // Calculate discount amount based on percentage
      this.calculatedDiscountAmount = (+this.payInvo.tot_pr * +this.discountPerc / 100);
      this.payInvo.discount = this.calculatedDiscountAmount.toFixed(2);
      this.calculateChange();
    }
  }

  onAmountDiscountChange(event: any) {
    this.discountAmount = event.target.value || 0;
    if (this.payInvo.tot_pr > 0 && this.discountAmount > 0) {
      // Calculate discount percentage based on amount
      this.calculatedDiscountPerc = ((+this.discountAmount / +this.payInvo.tot_pr) * 100);
      this.payInvo.discount = this.discountAmount;
      this.calculateChange();
    } else {
      this.calculatedDiscountPerc = 0;
      this.payInvo.discount = 0;
      this.calculateChange();
    }
  }

  calculateChange() {
    this.payInvo.changee = +(this.payInvo.tot_pr - +this.payInvo.discount) - this.payInvo.pay;
  }

  discountChange(ev) {
    this.discountPerc = ((+this.payInvo.discount / +this.payInvo.tot_pr) * 100).toFixed(2);
    this.payInvo.changee = +(this.payInvo.tot_pr - ev.target.value) - this.payInvo.pay;
  }

  discountPerChange(ev) {
    this.payInvo.discount = (+this.payInvo.tot_pr * +this.discountPerc / 100).toFixed(2);
    this.payInvo.changee = +(this.payInvo.tot_pr - this.payInvo.discount) - this.payInvo.pay;
  }

  // Update your existing getTotal method
  getTotal() {
    let sum = this.itemList.reduce((acc, obj) => { return acc + +obj.tot; }, 0);
    this.payInvo.tot_pr = sum;
    this.payInvo.changee = +(sum - +this.payInvo.discount) - this.payInvo.pay;
    this.payInvo.tot_pr = this.payInvo.tot_pr.toFixed(2);
    this.payInvo.changee = this.payInvo.changee.toFixed(2);

    // Recalculate discount labels when total changes
    if (this.discountType === 'percentage' && this.discountPerc > 0) {
      this.calculatedDiscountAmount = (sum * +this.discountPerc / 100);
      this.payInvo.discount = this.calculatedDiscountAmount.toFixed(2);
    } else if (this.discountType === 'amount' && this.discountAmount > 0) {
      this.calculatedDiscountPerc = ((+this.discountAmount / sum) * 100);
      this.payInvo.discount = this.discountAmount;
    }

    // Recalculate change after discount update
    this.payInvo.changee = +(sum - +this.payInvo.discount) - this.payInvo.pay;
    this.payInvo.changee = this.payInvo.changee.toFixed(2);
  }

  back() {
    this._location.back();
  }

  deleteItem(index) {
    const displayList = this.getDisplayItemList();
    const itemToDelete = displayList[index];

    // Find the item in the original itemList and remove it
    const originalIndex = this.itemList.findIndex(item =>
      item.item_name === itemToDelete.item_name &&
      item.perch_price === itemToDelete.perch_price &&
      item.quantity === itemToDelete.quantity
    );

    if (originalIndex !== -1) {
      this.itemList.splice(originalIndex, 1);
    }

    // Reset discount but preserve pay amount
    this.discountPerc = 0;
    this.payInvo.discount = 0;
    this.markDirty();
    this.getTotal();
    this.autoSortAfterOperation();
  }

  // ============ Bulk Selection Methods ============

  toggleSelectAll(event: any) {
    const isChecked = event.detail.checked;
    if (isChecked === this.isSelectAll) return;
    if (isChecked) {
      this.selectAllItems();
    } else {
      this.clearSelection();
    }
  }

  selectAllItems() {
    this.selectedItems.clear();
    const displayList = this.getDisplayItemList();
    displayList.forEach((_, index) => {
      this.selectedItems.add(index);
    });
    this.isSelectAll = true;
  }

  clearSelection() {
    this.selectedItems.clear();
    this.isSelectAll = false;
  }

  toggleItemSelection(index: number, event: any) {
    const isChecked = event.detail.checked;
    if (isChecked) {
      this.selectedItems.add(index);
    } else {
      this.selectedItems.delete(index);
    }
    this.isSelectAll = this.selectedItems.size === this.getDisplayItemList().length;
  }

  isItemSelected(displayIndex: number): boolean {
    return this.selectedItems.has(displayIndex);
  }

  async bulkDeleteItems() {
    if (this.selectedItems.size === 0) return;

    const alert = await this.alertController.create({
      header: 'تأكيد الحذف',
      message: `هل تريد حذف ${this.selectedItems.size} صنف من القائمة؟`,
      mode: 'ios',
      buttons: [
        {
          text: 'إلغاء',
          role: 'cancel'
        },
        {
          text: 'حذف',
          handler: () => this.performBulkDelete()
        }
      ]
    });
    await alert.present();
  }

  private performBulkDelete() {
    const displayList = this.getDisplayItemList();

    // Get items to delete from display list
    const itemsToDelete = Array.from(this.selectedItems).map(displayIndex => displayList[displayIndex]);

    // Remove items from original itemList
    itemsToDelete.forEach(itemToDelete => {
      const originalIndex = this.itemList.findIndex(item =>
        item.item_name === itemToDelete.item_name &&
        item.perch_price === itemToDelete.perch_price &&
        item.quantity === itemToDelete.quantity
      );
      if (originalIndex !== -1) {
        this.itemList.splice(originalIndex, 1);
      }
    });

    const deletedCount = this.selectedItems.size;
    this.clearSelection();

    // Reset discount
    this.discountPerc = 0;
    this.payInvo.discount = 0;

    this.getTotal();
    this.autoSortAfterOperation();
    this.markDirty();
    this.presentToast(`تم حذف ${deletedCount} صنف`, 'success');
  }

  private autoSortAfterOperation() {
    if (this.itemList.length > 0) {
      this.sortedItemList = [...this.itemList].sort((a, b) => {
        const nameA = a.item_name?.toString().toLowerCase() || '';
        const nameB = b.item_name?.toString().toLowerCase() || '';
        return nameA.localeCompare(nameB, 'ar', { numeric: true });
      });
      this.isItemListSorted = true;
    } else {
      this.sortedItemList = [];
      this.isItemListSorted = false;
    }
    // Clear selection after sort since indices change
    this.clearSelection();
  }

  // ============ Bulk Copy/Cut Methods ============

  getSelectedItemsForNavigation(): any[] {
    const displayList = this.getDisplayItemList();
    return Array.from(this.selectedItems).map(displayIndex => {
      const item = displayList[displayIndex];
      return {
        id: item.item_id, item_id: item.item_id, item_name: item.item_name,
        item_desc: item.item_desc, part_no: item.part_no, brand: item.brand,
        model: item.model, item_unit: item.item_unit,
        perch_price: item.perch_price || 0, pay_price: item.pay_price || 0,
        qty: item.quantity,
        tot: (item.perch_price * item.quantity).toFixed(2),
        availQty: item.quantity || 0, aliasEn: item.aliasEn
      };
    });
  }

  async bulkCopyItems() {
    if (this.selectedItems.size === 0) return;
    const actionSheet = await this.actionSheetController.create({
      header: 'نسخ المحدد إلى',
      mode: 'ios',
      buttons: [
        { text: 'فاتورة بيع', icon: 'cart-outline', handler: () => { this.performBulkCopyOrCut('sales', false); } },
        { text: 'فاتورة شراء', icon: 'bag-outline', handler: () => { this.performBulkCopyOrCut('purchase', false); } },
        { text: 'طلب شراء', icon: 'document-text-outline', handler: () => { this.performBulkCopyOrCut('purchase-order', false); } },
        { text: 'إلغاء', icon: 'close', role: 'cancel' }
      ]
    });
    await actionSheet.present();
  }

  async bulkCutItems() {
    if (this.selectedItems.size === 0) return;
    const actionSheet = await this.actionSheetController.create({
      header: 'قص المحدد إلى',
      mode: 'ios',
      buttons: [
        { text: 'فاتورة بيع', icon: 'cart-outline', handler: () => { this.performBulkCopyOrCut('sales', true); } },
        { text: 'فاتورة شراء', icon: 'bag-outline', handler: () => { this.performBulkCopyOrCut('purchase', true); } },
        { text: 'طلب شراء', icon: 'document-text-outline', handler: () => { this.performBulkCopyOrCut('purchase-order', true); } },
        { text: 'إلغاء', icon: 'close', role: 'cancel' }
      ]
    });
    await actionSheet.present();
  }

  async performBulkCopyOrCut(destinationType: 'sales' | 'purchase' | 'purchase-order', isCut: boolean) {
    let items = this.getSelectedItemsForNavigation();
    const needsDialog = (destinationType === 'sales');

    if (needsDialog) {
      const { InvoicePriceConfigDialogComponent } = await import('../component/invoice-price-config-dialog/invoice-price-config-dialog.component');
      const modal = await this.modalController.create({
        component: InvoicePriceConfigDialogComponent,
        componentProps: {
          itemList: items,
          invoiceType: 'sales',
          context: 'purchase-order'
        },
        cssClass: 'invoice-price-config-modal'
      });

      modal.onDidDismiss().then((result) => {
        if (result.data) {
          this.finalizeBulkCopyOrCut(result.data, destinationType, isCut);
        }
      });

      return await modal.present();
    }

    this.finalizeBulkCopyOrCut(items, destinationType, isCut);
  }

  private async finalizeBulkCopyOrCut(items: any[], destinationType: string, isCut: boolean) {
    if (isCut) {
      if (this.selectedItems.size === this.itemList.length) {
        const alert = await this.alertController.create({
          header: 'تنبيه',
          message: 'سيتم قص جميع الأصناف من هذه الفاتورة. هل تريد المتابعة؟',
          mode: 'ios',
          buttons: [
            { text: 'إلغاء', role: 'cancel' },
            { text: 'متابعة', handler: () => { this.executeCutAndNavigate(items, destinationType); } }
          ]
        });
        await alert.present();
        return;
      }
      this.executeCutAndNavigate(items, destinationType);
    } else {
      this.navigateToDestination(items, destinationType);
    }
  }

  private async executeCutAndNavigate(items: any[], destinationType: string) {
    // Open new tab first
    this.navigateToDestination(items, destinationType);

    // Then ask user whether to remove items from source
    const alert = await this.alertController.create({
      header: 'تأكيد',
      message: 'تم فتح الفاتورة الجديدة في نافذة جديدة. هل تريد حذف الأصناف المقصوصة من هذه الفاتورة؟',
      mode: 'ios',
      buttons: [
        { text: 'إبقاء', role: 'cancel', handler: () => { this.clearSelection(); } },
        {
          text: 'حذف', cssClass: 'danger', handler: () => {
            this.performCutRemoval();
          }
        }
      ]
    });
    await alert.present();
  }

  private performCutRemoval() {
    const displayList = this.getDisplayItemList();
    const itemsToRemove = Array.from(this.selectedItems).map(displayIndex => displayList[displayIndex]);
    itemsToRemove.forEach(itemToRemove => {
      const originalIndex = this.itemList.findIndex(item =>
        item.item_name === itemToRemove.item_name &&
        item.perch_price === itemToRemove.perch_price &&
        item.quantity === itemToRemove.quantity
      );
      if (originalIndex !== -1) {
        this.itemList.splice(originalIndex, 1);
      }
    });
    this.clearSelection();
    this.getTotal();
    this.autoSortAfterOperation();
    this.markDirty();
  }

  private navigateToDestination(items: any[], destinationType: string) {
    const clipboardKey = this.clipboardTransfer.storeItems(items);

    const routes: { [key: string]: string } = {
      'sales': '/folder/sales',
      'purchase': '/folder/purchase',
      'purchase-order': '/purchase-order'
    };

    const url = routes[destinationType] + '?fromTab=true&dataKey=' + clipboardKey;
    window.open(url, '_blank');
  }

  refresh(para?) {
    this.getAllStockItemsWithouteCounts();
  }

  async openPriceAdjustmentDialog() {
    if (!this.itemList || this.itemList.length === 0) {
      this.presentToast('لا توجد أصناف في القائمة لتعديل أسعارها', 'warning');
      return;
    }

    // Transform itemList to the format expected by the dialog
    const itemsToPass = this.itemList.map(item => ({
      qty: item.quantity,
      id: item.item_id,
      item_name: item.item_name,
      perch_price: item.perch_price,
      pay_price: item.pay_price,
      item_unit: item.item_unit || '',
      parcode: item.parcode || 0
    }));

    const modal = await this.modalController.create({
      component: PriceAdjustmentDialogComponent,
      cssClass: 'price-adjustment-modal',
      componentProps: {
        itemsList: itemsToPass,
        mode: 'purchase'
      }
    });

    modal.onDidDismiss().then((result) => {
      if (result.data) {
        this.handleEditModeResult(result.data);
      }
    });

    return await modal.present();
  }

  private handleEditModeResult(updatedItems: any[]) {
    if (!updatedItems || updatedItems.length === 0) return;

    // Update the itemList with new prices
    updatedItems.forEach(updatedItem => {
      const itemIndex = this.itemList.findIndex(item =>
        item.item_id === updatedItem.id && item.item_name === updatedItem.item_name
      );

      if (itemIndex !== -1) {
        // Update the perch_price and recalculate total
        this.itemList[itemIndex].perch_price = parseFloat(updatedItem.perch_price) || 0;
        this.itemList[itemIndex].tot = (this.itemList[itemIndex].quantity * this.itemList[itemIndex].perch_price).toFixed(2);
      }
    });

    // Recalculate totals
    this.getTotal();

    this.presentToast('تم تعديل الأسعار بنجاح', 'success');
  }

  onItemSelected(selectedItem: any) {
    console.log('Item selected:', selectedItem);
  }

  onItemAdded(selectedItem: any) {
    console.log('Item to be added:', selectedItem);
    // Check if item already exists in the list
    let existingItem = this.itemList.find(item =>
      item.item_name === selectedItem.item_name &&
      item.perch_price === selectedItem.perch_price
    );

    if (existingItem) {
      // Update existing item quantity
      let newQty = +existingItem.quantity + +selectedItem.qty;
      existingItem.quantity = newQty;
      existingItem.tot = (newQty * +existingItem.perch_price).toFixed(2);
    } else {
      // Add new item to list
      let d = new Date();
      let r = this.datePipe.transform(d, 'dd-MM-YYYY');

      this.itemList.unshift({
        "id": 'NULL',
        "pay_ref": this.payInvo.pay_ref,
        "item_name": selectedItem.item_name,
        "pay_price": selectedItem.pay_price,
        "quantity": +selectedItem.qty,
        "tot": (selectedItem.qty * +selectedItem.perch_price).toFixed(2),
        "store_id": +this.store_info.id,
        "yearId": +this.year.id,
        "item_id": +selectedItem.id,
        "dateCreated": r,
        "perch_price": selectedItem.perch_price
      });
    }

    this.getTotal();
    this.updateSortedList();
  }

  addTolist() {
    if (this.selectedItem.item_name == "" || this.selectedItem.id == "" || +this.selectedItem.qty == 0) {
      this.presentToast('الرجاء ادختيار الصنف وتحديد الكمية', 'danger');
    } else {
      let fl: any = [];
      if (this.itemList.length > 0) {
        fl = this.itemList.filter(x => x.item_name == this.selectedItem.item_name && x.perch_price == this.selectedItem.perch_price);
      }

      if (fl.length == 0) {
        let d = new Date;
        let r = this.datePipe.transform(d, 'dd-MM-YYYY');

        this.itemList.unshift({
          "id": 'NULL',
          "pay_ref": this.selectedItem.pay_ref,
          "item_name": this.selectedItem.item_name,
          "pay_price": this.selectedItem.pay_price,
          "quantity": +this.selectedItem.qty,
          "tot": this.selectedItem.tot,
          "store_id": +this.store_info.id,
          "yearId": +this.year.id,
          "item_id": +this.selectedItem.id,
          "dateCreated": r,
          "perch_price": this.selectedItem.perch_price
        });
      } else {
        this.selectedItem.qty = +fl[0].quantity + +this.selectedItem.qty;
        let index = this.itemList.map(e => e.item_name).indexOf(this.selectedItem.item_name);
        this.itemList[index].quantity = +this.selectedItem.qty;
        this.itemList[index].tot = (+this.selectedItem.qty * +this.selectedItem.perch_price).toFixed(2);
      }

      this.selectedItem = {
        id: undefined,
        dateCreated: "",
        pay_ref: this.payInvo.pay_ref,
        item_desc: "",
        item_name: "",
        item_unit: "",
        parcode: 0,
        pay_price: 0,
        perch_price: 0,
        qty: 0,
        tot: 0,
        aliasEn: ""
      };
      this.getTotal();
      this.setFocusOnInput('dstPop4');
    }
  }

  presentPopover(e?: Event) {
    this.popover4.event = e;
    this.isOpen = true;
    this.clear();
    this.searchResult = this.items;
    setTimeout(() => {
      this.setFocusOnInput('popInput4');
    }, 2000);
  }

  didDissmis() {
    this.isOpen = false;
    this.setFocusOnInput('qtyIdEP');
  }

  searchItem(ev) {
    this.searchResult = [];
    this.aliasTerm = ev.target.value;
    const filterPipe = new FilterPipe;
    let fiteredArr: any = filterPipe.transform(this.items, ev.target.value);
    if (fiteredArr.length > 0) {
      fiteredArr.forEach(element => {
        this.searchResult.push(element);
      });
    }
  }

  clear(item_name?) {
    if (item_name) {
      this.selectedItem = {
        id: undefined,
        dateCreated: "",
        pay_ref: this.payInvo.pay_ref,
        item_desc: "",
        item_name: "",
        item_unit: "",
        parcode: 0,
        pay_price: 0,
        perch_price: 0,
        qty: 0,
        tot: 0,
        aliasEn: ""
      };
    } else {
      this.searchTerm = "";
    }
  }

  validate(): boolean {
    if (this.itemList.length == 0 || this.payInvo.pay_ref == "") {
      this.presentToast('الرجاء ادخال اصناف الي القائمة', 'danger');
      return false;
    }
    else if (+this.payInvo.cust_id == 0) {
      this.presentToast('الرجاء إختيار حساب المورد', 'danger');
      return false;
    } else if (this.payInvo.pay_date == "" || this.payInvo.pay_date == undefined) {
      this.presentToast('الرجاء تحديد التاريخ ', 'danger');
      return false;
    } else if (this.payInvo.changee < 0) {
      this.presentToast('الرجاء مراجعة المبلغ المستلم والخصم  ', 'danger');
      return false;
    }
    else {
      return true;
    }
  }

  doAfterDissmiss(data) {
    if (data.role == 'save') {
      this.saveItem(data.data);
    }
  }

  saveItem(mdata) {
    this.presentLoadingWithOptions('جاري حفظ البيانات ...');

    this.logHistoryArr.push({
      "id": null,
      "logRef": this.generateRandom2('insert item'),
      "userId": this.user_info.id,
      "typee": 'insert item',
      "datee": momentObj(new Date()).locale('en').format('YYYY-MM-DD HH:mm:ss'),
      "logStatus": 0,
      "logToken": JSON.stringify(mdata[0]),
      "yearId": this.year.id,
      "store_id": this.store_info.id
    });

    this.api.saveitemMulti(mdata[0]).subscribe(data => {
      if (data['message'] != 'Post Not Created') {
        this.firstq = { id: null, item_id: data['message'], store_id: this.store_info.id, quantity: mdata[1].quantity, pay_price: mdata[0].pay_price, perch_price: mdata[0].perch_price, fq_year: '2022', item_name: mdata[0].item_name };
        this.saveFierstQty(mdata[0].item_name);
      } else {
        this.presentToast('لم يتم حفظ البيانات , خطا في الإتصال حاول مرة اخري', 'danger');
      }
    }, (err) => {
      this.presentToast('لم يتم حفظ البيانات , خطا في الإتصال حاول مرة اخري', 'danger');
    });
  }

  async saveFierstQty(item_name) {
    this.api.saveFirstQty(this.firstq).subscribe(data => {
      this.performSyncItem(item_name);
      this.presentToast('COMMON.MESSAGE.SAVED_SUCCESSFULLY', 'success');
    }, (err) => {
      this.presentToast('1لم يتم حفظ البيانات , خطا في الإتصال حاول مرة اخري', 'danger');
      this.loadingController.dismiss();
    }, () => {
      this.loadingController.dismiss();
    });
  }

  preparenewaccount() {
    if (this.selectedAccount.sub_name.length > 0 && this.selectedAccount.id == null) {
    } else {
      this.selectedAccount.sub_name = this.sub_nameNew;
      this.payInvo.sub_name = this.selectedAccount.sub_name;
    }
    this.selectedAccount.id = null;
    this.selectedAccount.ac_id = 2;
    this.selectedAccount.sub_type = "credit";
    this.selectedAccount.sub_code = null;
    this.selectedAccount.sub_balance = "0";
    this.selectedAccount.cat_id = 2;
    this.selectedAccount.cat_name = 'الموردين';
    this.selectedAccount.store_id = this.store_info.id;
  }

  saveLogHistoryForInsertItem() {
    let firstq;
    let item;
    if (this.logHistoryArr.length > 1) {
      item = this.logHistoryArr[1];
      firstq = this.logHistoryArr[0];
    }
    this.api.saveLogHistoryMulti(item, firstq, 'insert').subscribe(data => {
      if (data['message'] != 'Post Not Created') {
        this.logHistoryArr = [];
      } else {
        this.presentToast('لم يتم حفظ البيانات , خطا في الإتصال حاول مرة اخري', 'danger');
      }
    }, (err) => {
      this.presentToast('لم يتم حفظ البيانات , خطا في الإتصال حاول مرة اخري', 'danger');
    });
  }

  async update() {
    let d: Date = this.payInvo.pay_date;
    this.payInvo.sub_name = this.selectedAccount.sub_name;
    this.payInvo.pay_date = this.datePipe.transform(d, 'yyyy-MM-dd');
    if (this.payInvo.nextPay != null) {
      this.payInvo.nextPay = this.datePipe.transform(d, 'yyyy-MM-dd');
    }

    if (this.validate() == true) {
      await this.showLoading('جاري تحديث طلب الشراء...', 'updating');
      try {
        this.updateInvo();
      } catch (error) {
        this.handleError(error, 'update');
      }
    }
  }

  async performSyncItem(item_name?) {
    if (item_name) {
      await this.getStockItems(item_name);
    } else {
      await this.getAllStockItemsWithouteCounts();
      await this.getStockItems();
    }
  }

  generateRandom2(role): any {
    let da = new Date;
    let randomsNumber = da.getMonth().toString() + da.getDay().toString() + da.getHours().toString() + da.getMinutes().toString() + da.getSeconds().toString() + da.getMilliseconds().toString() + role;
    return this.store_info.store_ref + randomsNumber;
  }

  updateInvo() {
    // Update purchase order and items together in single API call
    const orderWithItems = {
      order: this.payInvo,
      items: this.itemList
    };

    this.api.updatePurchaseOrderWithItems(orderWithItems).subscribe(
      (response: any) => {
        this.hideLoading();
        this.handleUpdateSuccess();
      },
      (err) => {
        this.handleError(err, 'updateInvo');
      }
    );
  }

  private async handleUpdateSuccess() {
    // Delete draft after successful update
    await this.draftService.deleteDraft(DraftType.PURCHASE_ORDER, this.user_info.id, this.store_info.id);
    this.isDirty = false;

    // Show success message
    this.presentToast('COMMON.MESSAGE.SAVED_SUCCESSFULLY', 'success');

    // Update local purchase orders storage
    this.purchaseOrders = this.purchaseOrders.filter(item => item.payInvo.pay_ref != this.payInvo.pay_ref);
    this.purchaseOrders.push({
      "payInvo": this.payInvo,
      "itemList": this.itemList
    });

    this.storage.set('purchaseOrders', this.purchaseOrders).then((response) => {
      // Purchase orders saved to local storage
    });

    let arr: Array<any> = [];
    arr.push({
      "payInvo": this.payInvo,
      "itemList": this.itemList
    });

    // Perform sync
    this.performSync();
  }

  async performSync() {
    this.back();
  }

  async performSyncDel() {
    this.back();
  }

  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'تأكيد!',
      mode: 'ios',
      message: 'هل تريد حذف السجل ؟ ',
      buttons: [
        {
          text: 'إلغاء',
          role: 'cancel',
          cssClass: 'secondary',
          id: 'cancel-button',
          handler: (blah) => {
          }
        }, {
          text: 'موافق',
          id: 'confirm-button',
          handler: () => {
            this.deletePurchaseOrder();
          }
        }
      ]
    });

    await alert.present();
  }

  delete() {
    this.presentAlertConfirm();
  }

  // Convert purchase order to purchase invoice
  async presentConvertConfirm() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'تأكيد التحويل!',
      mode: 'ios',
      message: 'هل تريد تحويل هذا الطلب إلى فاتورة شراء؟',
      buttons: [
        {
          text: 'إلغاء',
          role: 'cancel',
          cssClass: 'secondary',
          id: 'cancel-button',
          handler: () => {
            console.log('Convert cancelled');
          }
        }, {
          text: 'تحويل',
          id: 'confirm-button',
          handler: () => {
            this.executeConvertToInvoice();
          }
        }
      ]
    });

    await alert.present();
  }

  convertToInvoice() {
    this.presentConvertConfirm();
  }

  async executeConvertToInvoice() {
    await this.showLoading('جاري تحويل الطلب إلى فاتورة شراء...', 'converting');

    const conversionData = {
      pay_id: this.payInvo.pay_id,
      pay_ref: this.payInvo.pay_ref,
      tot_pr: this.payInvo.tot_pr,
      pay: this.payInvo.pay,
      changee: this.payInvo.changee,
      user_id: this.payInvo.user_id,
      store_id: this.payInvo.store_id,
      pay_date: this.payInvo.pay_date,
      pay_time: this.payInvo.pay_time,
      nextPay: this.payInvo.nextPay,
      discount: this.payInvo.discount,
      payComment: this.payInvo.payComment,
      cust_id: this.payInvo.cust_id,
      pay_method: this.payInvo.pay_method,
      yearId: this.payInvo.yearId
    };

    this.api.convertPurchaseOrderToInvoice(conversionData).subscribe(
      (response: any) => {
        this.hideLoading();
        if (response.success) {
          this.presentToast('تم تحويل الطلب إلى فاتورة شراء بنجاح', 'success');
          // Update local storage
          this.purchaseOrders = this.purchaseOrders.filter(item => item.payInvo.pay_ref != this.payInvo.pay_ref);
          this.storage.set('purchaseOrders', this.purchaseOrders).then(() => {
            this.performSyncDel();
          });
        } else {
          this.presentToast('لم يتم تحويل الطلب، خطأ في الاتصال حاول مرة أخرى', 'danger');
        }
      },
      (err) => {
        this.handleError(err, 'convertToInvoice');
      }
    );
  }

  async deletePurchaseOrder() {
    await this.showLoading('جاري حذف طلب الشراء...', 'deleting');

    const deletionData = {
      pay_id: this.payInvo.pay_id,
      pay_ref: this.payInvo.pay_ref
    };

    this.api.deletePurchaseOrderWithItems(deletionData).subscribe(data => {
      this.hideLoading();
      if (data['success']) {
        this.purchaseOrders = this.purchaseOrders.filter(item => item.payInvo.pay_ref != this.payInvo.pay_ref);
        this.storage.set('purchaseOrders', this.purchaseOrders).then((response) => {
          this.performSyncDel();
        });
        this.presentToast('تم حذف البيانات بنجاح', 'success');
      } else {
        this.presentToast('لم يتم حذف البيانات، خطأ في الاتصال حاول مرة أخرى', 'danger');
      }
    }, (err) => {
      this.handleError(err, 'deletePurchaseOrder');
    });
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
        currentCustumerStatus: account.currentCustumerStatus || 0
      };

      // Update invoice with selected account
      this.payInvo.cust_id = account.id;
      this.payInvo.sub_name = account.sub_name;

      // Mark as dirty for auto-save
      this.markDirty();

      console.log('Account selected in edit-purchase-order:', this.selectedAccount);
    }
  }

  // Handle account balance loaded
  onAccountBalanceLoaded(balance: any) {
    if (balance && this.selectedAccount) {
      // Update the current supplier status based on balance
      this.selectedAccount.sub_balance = balance.current_balance;
      this.selectedAccount.currentCustumerStatus = balance.status === 'debit' ? 0 : 1;
      console.log('Account balance loaded in edit-purchase-order:', balance);
    }
  }

  // Load account balance when page initializes with existing order data
  loadInitialAccountBalance() {
    if (this.payInvo && this.payInvo.cust_id && this.store_info && this.year) {
      // Get account balance for the supplier in the order
      this.api.getAccountBalance(this.payInvo.cust_id, this.store_info.id, this.year.id).subscribe(
        (response: any) => {
          if (response.success && response.data) {
            // Update selected account balance
            this.selectedAccount.sub_balance = response.data.current_balance;
            this.selectedAccount.currentCustumerStatus = response.data.status === 'debit' ? 0 : 1;

            // Populate selectedAccount with supplier data
            this.selectedAccount.id = this.payInvo.cust_id;
            this.selectedAccount.sub_name = this.payInvo.sub_name;

            console.log('Initial account balance loaded in edit-purchase-order:', response.data);
          }
        },
        (error) => {
          console.error('Error loading initial account balance in edit-purchase-order:', error);
        }
      );
    }
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

  resortItemList() {
    this.isItemListSorted = false;
    this.sortItemListAlphabetically();
  }

  async openBulkPriceUpdateModal() {
    if (!this.itemList || this.itemList.length === 0) {
      this.presentToast('لا توجد أصناف في القائمة', 'warning');
      return;
    }

    const { BulkPriceUpdateModalComponent } = await import('../components/bulk-price-update-modal/bulk-price-update-modal.component');

    const modal = await this.modalController.create({
      component: BulkPriceUpdateModalComponent,
      cssClass: 'bulk-price-update-modal',
      componentProps: {
        itemsList: this.itemList,
        mode: 'purchase'
      },
      backdropDismiss: false
    });

    modal.onDidDismiss().then((result) => {
      if (result.data && result.data.success) {
        if (result.data.updatedItems && result.data.updatedItems.length > 0) {
          result.data.updatedItems.forEach(updatedItem => {
            const idx = this.itemList.findIndex(item =>
              item.item_id == updatedItem.id && item.item_name === updatedItem.item_name
            );
            if (idx !== -1) {
              this.itemList[idx].pay_price = parseFloat(updatedItem.pay_price) || 0;
              this.itemList[idx].perch_price = parseFloat(updatedItem.perch_price) || 0;
              this.itemList[idx].retail_price = parseFloat(updatedItem.retail_price) || 0;
              this.itemList[idx].tot = (this.itemList[idx].quantity * this.itemList[idx].perch_price).toFixed(2);
            }
          });
          this.getTotal();
          this.updateSortedList();
          this.markDirty();
        }
        this.presentToast(`تم تعديل اسعار النظام والفاتورة لـ ${result.data.updated} صنف`, 'success');
        this.getAllStockItemsWithouteCounts();
      }
    });

    return await modal.present();
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

  // ========== Auto-save Methods ==========

  startAutoSave() {
    if (this.autoSaveInterval) {
      clearInterval(this.autoSaveInterval);
    }

    this.autoSaveInterval = setInterval(() => {
      if (this.isDirty && this.shouldSaveDraft()) {
        this.saveInvoiceDraft();
      }
      this.updateLastSaveTime();
    }, 30000); // 30 seconds
  }

  stopAutoSave() {
    if (this.autoSaveInterval) {
      clearInterval(this.autoSaveInterval);
      this.autoSaveInterval = null;
    }
  }

  markDirty() {
    this.isDirty = true;
  }

  async saveInvoiceDraft() {
    if (!this.shouldSaveDraft()) {
      return;
    }

    this.autoSaveStatus = 'جاري الحفظ...';

    const draftData: DraftData = {
      payInvo: this.payInvo,
      itemList: this.itemList,
      selectedAccount: this.selectedAccount,
      discountType: this.discountType,
      discountAmount: this.discountAmount,
      calculatedDiscountPerc: this.calculatedDiscountPerc,
      calculatedDiscountAmount: this.calculatedDiscountAmount,
      savedAt: Date.now(),
      userId: this.user_info.id,
      storeId: this.store_info.id,
      yearId: this.year.id
    };

    const saved = await this.draftService.saveDraft(DraftType.PURCHASE_ORDER, draftData);

    if (saved) {
      this.lastSaveTimestamp = Date.now();
      this.autoSaveStatus = 'تم الحفظ';
      this.isDirty = false;

      setTimeout(() => {
        this.autoSaveStatus = '';
      }, 1000);
    }
  }

  shouldSaveDraft(): boolean {
    return !!(
      this.itemList &&
      this.itemList.length > 0 &&
      this.selectedAccount &&
      this.selectedAccount.id &&
      this.user_info &&
      this.store_info
    );
  }

  async checkForExistingDraft() {
    if (!this.user_info || !this.store_info) {
      return;
    }

    const hasDraft = await this.draftService.hasDraft(
      DraftType.PURCHASE_ORDER,
      this.user_info.id,
      this.store_info.id
    );

    if (hasDraft) {
      this.showDraftRestoreDialog();
    }
  }

  async showDraftRestoreDialog() {
    const alert = await this.alertController.create({
      cssClass: 'rtl-alert',
      header: 'استعادة المسودة',
      message: 'تم العثور على مسودة محفوظة مسبقاً. هل تريد استعادتها؟',
      buttons: [
        {
          text: 'حذف',
          role: 'destructive',
          handler: () => {
            this.deleteDraftSilently();
          }
        },
        {
          text: 'إلغاء',
          role: 'cancel'
        },
        {
          text: 'استعادة',
          handler: () => {
            this.restoreDraft();
          }
        }
      ]
    });

    await alert.present();
  }

  async restoreDraft() {
    const draft = await this.draftService.loadDraft(
      DraftType.PURCHASE_ORDER,
      this.user_info.id,
      this.store_info.id
    );

    if (!draft) {
      this.presentToast('فشل في تحميل المسودة', 'danger');
      return;
    }

    if (draft.storeId !== this.store_info.id) {
      this.presentToast('المسودة من متجر آخر', 'warning');
      await this.draftService.deleteDraft(DraftType.PURCHASE_ORDER, this.user_info.id, this.store_info.id);
      return;
    }

    this.payInvo = draft.payInvo;
    this.itemList = draft.itemList;
    this.selectedAccount = draft.selectedAccount;
    this.discountType = draft.discountType || 'percentage';
    this.discountAmount = draft.discountAmount || 0;
    this.calculatedDiscountPerc = draft.calculatedDiscountPerc || 0;
    this.calculatedDiscountAmount = draft.calculatedDiscountAmount || 0;

    this.getTotal();
    this.lastSaveTimestamp = draft.savedAt;
    this.updateLastSaveTime();

    this.presentToast('تم استعادة المسودة بنجاح', 'success');
  }

  async deleteDraftSilently() {
    await this.draftService.deleteDraft(
      DraftType.PURCHASE_ORDER,
      this.user_info.id,
      this.store_info.id
    );
    this.isDirty = false;
  }

  updateLastSaveTime() {
    if (this.lastSaveTimestamp > 0) {
      this.lastSaveTime = this.draftService.getLastSaveTime(this.lastSaveTimestamp);
    }
  }
}
