import { Component, OnInit, ViewChild, ElementRef, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { ServicesService } from "../stockService/services.service";
import { Subscription } from 'rxjs';
import { AlertController, LoadingController, ModalController, ToastController } from '@ionic/angular';
import { DatePipe, Location } from '@angular/common';
import { Storage } from '@ionic/storage';
import { ActivatedRoute } from '@angular/router';
import { CurrencyService } from '../services/currency.service';

@Component({
  selector: 'app-purchase-order',
  templateUrl: './purchase-order.page.html',
  styleUrls: ['./purchase-order.page.scss'],
})
export class PurchaseOrderPage implements OnInit, OnDestroy {
  @ViewChild("dstP") nameField: ElementRef;

  // Discount management
  discountType: string = 'percentage'; // 'percentage' or 'amount'
  discountAmount: number = 0;
  calculatedDiscountPerc: number = 0;
  calculatedDiscountAmount: number = 0;

  // Data arrays
  sub_account: Array<any> = []
  items: Array<any> = []
  itemList: Array<any> = []
  sortedItemList: Array<any> = []
  isItemListSorted: boolean = false
  searchTerm: string = ''
  highlightedIndex: number = -1
  searchMatches: number[] = []
  loadingItems: boolean = false
  searchLang: any = 0

  // Store and user info
  store_info: { id: any, location: any, store_name: any, store_ref: any }
  user_info: { id: any, user_name: any, store_id: any, full_name: any, password: any }
  year: { id: any, yearDesc: any, yearStart: any, yearEnd: any }

  // Selected data
  selectedItem: { id: any, pay_ref: any, item_name: any, pay_price: any, perch_price: any, item_unit: any, item_desc: any, parcode: any, qty: any, tot: any, dateCreated: any, aliasEn: any };
  selectedAccount: { id: any, ac_id: any, sub_name: any, sub_type: any, sub_code: any, sub_balance: any, store_id: any, cat_id: any, cat_name: any, currentCustumerStatus: any };
  payInvo: { pay_id: any, pay_ref: any, store_id: any, tot_pr: any, pay: any, pay_date: any, pay_time: any, user_id: any, cust_id: any, pay_method: any, discount: any, changee: any, sub_name: any, payComment: any, nextPay: any, yearId: any };

  discountPerc: any = 0
  showMe: any = null
  searchResult: Array<any> = []

  private currencySubscription: Subscription;

  // Loading state management
  isSaving: boolean = false;
  currentLoadingMessage: string = '';
  currentLoader: HTMLIonLoadingElement | null = null;

  constructor(
    private route: ActivatedRoute,
    private modalController: ModalController,
    private alertController: AlertController,
    private storage: Storage,
    private loadingController: LoadingController,
    private datePipe: DatePipe,
    private api: ServicesService,
    private toast: ToastController,
    private _location: Location,
    private cdr: ChangeDetectorRef,
    private currencyService: CurrencyService
  ) {
    this.selectedAccount = { id: "", ac_id: "", sub_name: "", sub_type: "", sub_code: "", sub_balance: "", store_id: "", cat_name: "", cat_id: "", currentCustumerStatus: 0 };

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
    }

    // Handle incoming items from sales invoices
    this.route.queryParams.subscribe(params => {
      if (params['status'] === 'newInvoFromItemsPage' && params['selectedItemsList']) {
        console.log('New purchase order from sales invoices');
        const incomingItems = JSON.parse(params['selectedItemsList']);

        // Wait for store_info and year to be loaded, then populate itemList
        setTimeout(() => {
          this.populateItemsFromSalesInvoices(incomingItems);
        }, 500);
      }
    });
  }

  ngOnInit() {
    this.initializeCurrency();
    this.getAppInfo();
    this.prepareInvo();
  }

  ngOnDestroy() {
    if (this.currencySubscription) {
      this.currencySubscription.unsubscribe();
    }
    this.hideLoading();
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

  ionViewDidEnter() {
    this.getAppInfo();
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
        this.getSupplierAccounts()
      }
    });

    this.storage.get('itemsLocal').then((response) => {
      if (response) {
        this.items = response
        this.searchResult = this.items
      }
    });
  }

  getSupplierAccounts() {
    this.api.getPerchAccounts(this.store_info.id, this.year.id).subscribe(data => {
      let res = data
      this.sub_account = res['data']
    }, (err) => {
      console.log(err);
    })
  }

  prepareInvo() {
    let d = new Date
    let da = this.datePipe.transform(d, 'yyyy-MM-dd')
    let ti = this.datePipe.transform(d, 'HH:mm')
    this.payInvo = {
      pay_id: null,
      pay_ref: this.generateRandom(),
      store_id: 0,
      tot_pr: 0,
      pay: 0,
      pay_date: da,
      pay_time: ti,
      user_id: 0,
      cust_id: 0,
      pay_method: 'cash',
      discount: 0,
      changee: 0,
      sub_name: "",
      payComment: "",
      nextPay: null,
      yearId: 0
    };
  }

  generateRandom(): any {
    let da = new Date
    let randomsNumber = da.getMonth().toString() + da.getDay().toString() + da.getHours().toString() + da.getMinutes().toString() + da.getSeconds().toString() + da.getMilliseconds().toString()
    return this.store_info ? this.store_info.store_ref + randomsNumber : randomsNumber
  }

  // Search functionality
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

  // Item list management
  qtyClick(i) {
    this.showMe = i
  }

  hideMe(i) {
    this.showMe = null
  }

  editCell(i) {
    const displayList = this.getDisplayItemList();
    const itemToEdit = displayList[i];

    const originalIndex = this.itemList.findIndex(item =>
      item.item_name === itemToEdit.item_name &&
      item.perch_price === itemToEdit.perch_price
    );

    if (originalIndex !== -1 && +displayList[i].quantity > 0 && +displayList[i].perch_price > 0) {
      displayList[i].tot = +displayList[i].quantity * +displayList[i].perch_price;
      this.itemList[originalIndex].quantity = displayList[i].quantity;
      this.itemList[originalIndex].perch_price = displayList[i].perch_price;
      this.itemList[originalIndex].tot = displayList[i].tot;

      this.discountPerc = 0
      this.payInvo.discount = 0
      this.hideMe(i)
      this.getTotal()
    } else {
      this.presentToast("خطأ في الإدخال ", "danger")
    }
  }

  deleteItem(index) {
    const displayList = this.getDisplayItemList();
    const itemToDelete = displayList[index];

    const originalIndex = this.itemList.findIndex(item =>
      item.item_name === itemToDelete.item_name &&
      item.perch_price === itemToDelete.perch_price &&
      item.quantity === itemToDelete.quantity
    );

    if (originalIndex !== -1) {
      this.itemList.splice(originalIndex, 1);
    }

    this.discountPerc = 0
    this.payInvo.discount = 0
    this.getTotal()
    this.updateSortedList()
  }

  sortItemListAlphabetically() {
    if (!this.itemList || this.itemList.length === 0) {
      return;
    }

    if (this.isItemListSorted) {
      this.sortedItemList = [...this.itemList];
      this.isItemListSorted = false;
    } else {
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

  // Item selection from item-selector
  onItemSelected(selectedItem: any) {
    console.log('Item selected:', selectedItem);
  }

  onItemAdded(selectedItem: any) {
    console.log('Item to be added:', selectedItem);
    let existingItem = this.itemList.find(item =>
      item.item_name === selectedItem.item_name &&
      item.perch_price === selectedItem.perch_price
    );

    if (existingItem) {
      let newQty = +existingItem.quantity + +selectedItem.qty;
      existingItem.quantity = newQty;
      existingItem.tot = (newQty * +existingItem.perch_price).toFixed(2);
    } else {
      let d = new Date();
      let r = this.datePipe.transform(d, 'dd-MM-YYYY');

      this.itemList.push({
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

  // Populate items from sales invoices
  populateItemsFromSalesInvoices(incomingItems: any[]) {
    if (!this.store_info || !this.year || !this.payInvo) {
      console.error('Store info, year, or payInvo not loaded yet');
      // Retry after a short delay
      setTimeout(() => {
        this.populateItemsFromSalesInvoices(incomingItems);
      }, 500);
      return;
    }

    console.log('Populating items from sales invoices:', incomingItems);

    let d = new Date();
    let r = this.datePipe.transform(d, 'dd-MM-YYYY');

    incomingItems.forEach(item => {
      this.itemList.push({
        "id": 'NULL',
        "pay_ref": this.payInvo.pay_ref,
        "item_name": item.item_name,
        "pay_price": item.pay_price || 0,
        "quantity": +item.qty,
        "tot": (item.qty * +item.perch_price).toFixed(2),
        "store_id": +this.store_info.id,
        "yearId": +this.year.id,
        "item_id": +item.item_id,
        "dateCreated": r,
        "perch_price": item.perch_price || 0,
        "item_desc": item.item_desc || "",
        "part_no": item.part_no || "",
        "brand": item.brand || "",
        "model": item.model || "",
        "item_unit": item.item_unit || ""
      });
    });

    this.getTotal();
    this.updateSortedList();

    console.log('Items populated successfully. Total items:', this.itemList.length);
    this.presentToast(`تم تحميل ${this.itemList.length} صنف من الفواتير المحددة`, 'success');
  }

  // Discount calculations
  onDiscountTypeChange(event: any) {
    this.discountType = event.detail.value;
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
      this.calculatedDiscountAmount = (+this.payInvo.tot_pr * +this.discountPerc / 100);
      this.payInvo.discount = this.calculatedDiscountAmount.toFixed(2);
      this.calculateChange();
    }
  }

  onAmountDiscountChange(event: any) {
    this.discountAmount = event.target.value || 0;
    if (this.payInvo.tot_pr > 0 && this.discountAmount > 0) {
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

  getTotal() {
    let sum = this.itemList.reduce((acc, obj) => { return acc + +obj.tot; }, 0);
    this.payInvo.tot_pr = sum;
    this.payInvo.changee = +(sum - +this.payInvo.discount) - this.payInvo.pay;
    this.payInvo.tot_pr = this.payInvo.tot_pr.toFixed(2);
    this.payInvo.changee = this.payInvo.changee.toFixed(2);

    if (this.discountType === 'percentage' && this.discountPerc > 0) {
      this.calculatedDiscountAmount = (sum * +this.discountPerc / 100);
      this.payInvo.discount = this.calculatedDiscountAmount.toFixed(2);
    } else if (this.discountType === 'amount' && this.discountAmount > 0) {
      this.calculatedDiscountPerc = ((+this.discountAmount / sum) * 100);
      this.payInvo.discount = this.discountAmount;
    }

    this.payInvo.changee = +(sum - +this.payInvo.discount) - this.payInvo.pay;
    this.payInvo.changee = this.payInvo.changee.toFixed(2);
  }

  // Account selection
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

      this.payInvo.cust_id = account.id;
      this.payInvo.sub_name = account.sub_name;

      console.log('Account selected in purchase-order:', this.selectedAccount);
    }
  }

  onAccountBalanceLoaded(balance: any) {
    if (balance && this.selectedAccount) {
      this.selectedAccount.sub_balance = balance.current_balance;
      this.selectedAccount.currentCustumerStatus = balance.status === 'debit' ? 0 : 1;
      console.log('Account balance loaded in purchase-order:', balance);
    }
  }

  // Validation
  validate(): boolean {
    if (this.itemList.length == 0 || this.payInvo.pay_ref == "") {
      this.presentToast('الرجاء إدخال أصناف إلى القائمة', 'danger')
      return false
    }
    else if (+this.payInvo.cust_id == 0) {
      this.presentToast('الرجاء إختيار حساب المورد', 'danger')
      return false
    } else if (this.payInvo.pay_date == "" || this.payInvo.pay_date == undefined) {
      this.presentToast('الرجاء تحديد التاريخ', 'danger')
      return false
    } else if (this.payInvo.changee < 0) {
      this.presentToast('الرجاء مراجعة المبلغ المستلم والخصم', 'danger')
      return false
    }
    else {
      return true
    }
  }

  // Save purchase order
  async save() {
    let d: Date = this.payInvo.pay_date
    this.payInvo.sub_name = this.selectedAccount.sub_name
    this.payInvo.pay_date = this.datePipe.transform(d, 'yyyy-MM-dd')
    if (this.payInvo.nextPay != null) {
      this.payInvo.nextPay = this.datePipe.transform(d, 'yyyy-MM-dd')
    }
    this.payInvo.store_id = this.store_info.id
    this.payInvo.user_id = this.user_info.id
    this.payInvo.yearId = this.year.id

    if (this.validate() == true) {
      await this.showLoading('جاري حفظ طلب الشراء...', 'saving');
      try {
        this.saveInvo();
      } catch (error) {
        this.handleError(error, 'save');
      }
    }
  }

  saveInvo() {
    const orderWithItems = {
      order: this.payInvo,
      items: this.itemList
    };

    this.api.savePurchaseOrderWithItems(orderWithItems).subscribe(
      (response: any) => {
        this.hideLoading();
        this.handleSaveSuccess();
      },
      (err) => {
        this.handleError(err, 'saveInvo');
      }
    );
  }

  private handleSaveSuccess() {
    this.presentToast('تم الحفظ بنجاح', 'success');
    this.itemList = [];
    this.prepareInvo();
    this.selectedAccount = { id: "", ac_id: "", sub_name: "", sub_type: "", sub_code: "", sub_balance: "", store_id: "", cat_name: "", cat_id: "", currentCustumerStatus: 0 };
    this.discountPerc = 0;
    this.discountAmount = 0;
    this.payInvo.discount = 0;
  }

  // Loading management
  async showLoading(message: string, operationType: 'saving' = 'saving') {
    await this.hideLoading();
    this.isSaving = true;
    this.currentLoadingMessage = message;

    this.currentLoader = await this.loadingController.create({
      spinner: 'bubbles',
      mode: 'ios',
      message: message,
      duration: 30000,
      backdropDismiss: false
    });

    await this.currentLoader.present();

    setTimeout(() => {
      if (this.isSaving && this.currentLoader) {
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
    this.isSaving = false;
    this.currentLoadingMessage = '';
  }

  handleError(error: any, operation: string) {
    console.error(`Error in ${operation}:`, error);
    this.hideLoading();
    this.presentToast('لم يتم حفظ البيانات، خطأ في الاتصال حاول مرة أخرى', 'danger');
  }

  isLoading(): boolean {
    return this.isSaving;
  }

  // UI helpers
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

  refresh(para?) {
    this.storage.get('itemsLocal').then((response) => {
      if (response) {
        this.items = response
        this.searchResult = this.items
      }
    });
  }

  getCurrencySymbol(): string {
    return this.currencyService.getCurrentCurrencySymbol();
  }

  // Price adjustment dialog
  async openPriceAdjustmentDialog() {
    const alert = await this.alertController.create({
      header: 'تعديل الأسعار',
      message: 'اختر نوع التعديل وأدخل القيمة',
      inputs: [
        {
          name: 'adjustmentType',
          type: 'radio',
          label: 'زيادة بنسبة مئوية',
          value: 'increasePercent',
          checked: true
        },
        {
          name: 'adjustmentType',
          type: 'radio',
          label: 'تخفيض بنسبة مئوية',
          value: 'decreasePercent'
        },
        {
          name: 'adjustmentType',
          type: 'radio',
          label: 'زيادة بمبلغ ثابت',
          value: 'increaseAmount'
        },
        {
          name: 'adjustmentType',
          type: 'radio',
          label: 'تخفيض بمبلغ ثابت',
          value: 'decreaseAmount'
        },
        {
          name: 'value',
          type: 'number',
          placeholder: 'أدخل القيمة',
          min: 0
        }
      ],
      buttons: [
        {
          text: 'إلغاء',
          role: 'cancel'
        },
        {
          text: 'تطبيق',
          handler: (data) => {
            if (data.value && data.value > 0) {
              this.applyPriceAdjustment(data.adjustmentType, parseFloat(data.value));
            } else {
              this.presentToast('الرجاء إدخال قيمة صحيحة', 'warning');
              return false;
            }
          }
        }
      ]
    });

    await alert.present();
  }

  // Apply price adjustment to all items
  applyPriceAdjustment(type: string, value: number) {
    if (!this.itemList || this.itemList.length === 0) {
      this.presentToast('لا توجد أصناف لتعديل أسعارها', 'warning');
      return;
    }

    this.itemList.forEach(item => {
      let newPrice = item.perch_price;

      switch(type) {
        case 'increasePercent':
          newPrice = +item.perch_price * (1 + value / 100);
          break;
        case 'decreasePercent':
          newPrice = +item.perch_price * (1 - value / 100);
          break;
        case 'increaseAmount':
          newPrice = +item.perch_price + value;
          break;
        case 'decreaseAmount':
          newPrice = +item.perch_price - value;
          break;
      }

      // Ensure price doesn't go below 0
      if (newPrice < 0) {
        newPrice = 0;
      }

      item.perch_price = newPrice.toFixed(2);
      item.tot = (+item.quantity * +item.perch_price).toFixed(2);
    });

    this.getTotal();
    this.updateSortedList();
    this.presentToast('تم تعديل الأسعار بنجاح', 'success');
  }
}
