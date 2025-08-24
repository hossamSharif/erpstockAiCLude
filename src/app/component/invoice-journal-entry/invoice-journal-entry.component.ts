import { Component, Input, Output, EventEmitter, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { ServicesService } from "../../stockService/services.service";
import { AlertController, LoadingController, ToastController } from '@ionic/angular';
import { DatePipe } from '@angular/common';
import { Storage } from '@ionic/storage';
import * as momentObj from 'moment';

export interface InvoiceJournalData {
  invoiceAmount: number;
  customerAccount: any;
  invoiceRef: string;
  invoiceType: 'sales' | 'purchase';
  store_info: any;
  user_info: any;
  year: any;
  invoiceDate?: string;
  totalAfterDiscount?: number;
  customerBalance?: any;
}

@Component({
  selector: 'app-invoice-journal-entry',
  templateUrl: './invoice-journal-entry.component.html',
  styleUrls: ['./invoice-journal-entry.component.scss']
})
export class InvoiceJournalEntryComponent implements OnInit, AfterViewInit {
  @Input() invoiceData: InvoiceJournalData;
  @Output() journalSaved = new EventEmitter<boolean>();
  @Output() journalCancelled = new EventEmitter<void>();

  // ViewChild for focusing on amount input
  @ViewChild('amountInput') amountInput: ElementRef;

  // Component state
  jType: string = "2"; // 1 = payment, 2 = receipt
  radioVal: string = "1"; // 1 = cash, other = bank
  pay: number = 0;
  selectedBankAccount: any = null;
  banksAccountArray: Array<any> = [];
  
  // Journal objects
  journal: any = {};
  payInvo: any = {};
  jdetail_from: any = {};
  jdetail_to: any = {};
  jdetail_fromArr: Array<any> = [];
  jdetail_toArr: Array<any> = [];

  // Balance display
  selectedAccountBalance: any = null;
  sourceAccountBalance: any = null;
  loadingAccountBalance = false;
  loadingSourceBalance = false;

  // Form validation
  isFormValid(): boolean {
    return !!(
      this.jType && +this.jType > 0 &&
      this.pay && +this.pay > 0 &&
      this.isValidAmount() &&
      this.journal.j_details && this.journal.j_details.trim() !== '' &&
      this.journal.j_date &&
      (this.radioVal === "1" || this.selectedBankAccount)
    );
  }

  // Validate amount against invoice total
  isValidAmount(): boolean {
    const maxAmount = this.invoiceData?.totalAfterDiscount || this.invoiceData?.invoiceAmount || 0;
    return this.pay <= maxAmount;
  }

  // Get validation error message
  getAmountValidationError(): string {
    const maxAmount = this.invoiceData?.totalAfterDiscount || this.invoiceData?.invoiceAmount || 0;
    if (this.pay > maxAmount) {
      return `المبلغ لا يمكن أن يتجاوز ${maxAmount.toLocaleString()}`;
    }
    return '';
  }

  constructor(
    private api: ServicesService,
    private alertController: AlertController,
    private loadingController: LoadingController,
    private toast: ToastController,
    private datePipe: DatePipe,
    private storage: Storage
  ) {
    this.initializeObjects();
  }

  ngOnInit() {
    if (this.invoiceData) {
      this.setupForInvoiceData();
      this.getBanksAccount();
    }
  }

  ngAfterViewInit() {
    // Set focus on amount input after view is initialized
    setTimeout(() => {
      if (this.amountInput && this.amountInput.nativeElement) {
        this.amountInput.nativeElement.setFocus();
      }
    }, 300);
  }

  private initializeObjects() {
    this.selectedBankAccount = {
      id: null, ac_id: null, sub_name: null, sub_type: null,
      sub_code: null, sub_balance: null, store_id: null,
      debit: null, credit: null, currentType: null
    };
    
    this.payInvo = {
      rec_id: undefined, rec_ref: 0, store_id: "", rec_date: "",
      user_id: "", ac_id: 0, rec_detailes: "", rec_pay: 0,
      rec_type: "", yearId: ""
    };
    
    this.journal = {
      j_id: undefined, j_ref: "", j_details: "", j_type: "",
      invo_ref: "", j_desc: "", j_date: "", store_id: "",
      user_id: "", j_pay: "", standard_details: "", yearId: ""
    };
  }

  private setupForInvoiceData() {
    if (!this.invoiceData) return;

    // Auto-set journal type based on invoice type
    this.jType = this.invoiceData.invoiceType === 'sales' ? "2" : "1"; // Sales = receipt, Purchase = payment
    
    // Auto-set amount to total after discount or invoice amount
    this.pay = this.invoiceData.totalAfterDiscount || this.invoiceData.invoiceAmount;
    
    // Set up journal details with proper format
    const actionText = this.invoiceData.invoiceType === 'sales' ? 'تحصيل' : 'دفع';
    const invoiceTypeText = this.invoiceData.invoiceType === 'sales' ? 'مبيعات' : 'مشتريات';
    const customerName = this.invoiceData.customerAccount?.sub_name || 'غير محدد';
    const invoiceDate = this.invoiceData.invoiceDate || this.datePipe.transform(new Date(), 'dd-MM-yyyy');
    const totalAmount = (this.invoiceData.totalAfterDiscount || this.invoiceData.invoiceAmount).toLocaleString();
    
    this.journal.j_details = `${actionText} فاتورة ${invoiceTypeText} ${customerName} بتاريخ ${invoiceDate} اجمالي ${totalAmount}`;
    
    // Set up basic data
    this.payInvo.store_id = this.invoiceData.store_info.id;
    this.payInvo.yearId = this.invoiceData.year.id;
    this.payInvo.user_id = this.invoiceData.user_info.id;
    
    this.journal.store_id = this.invoiceData.store_info.id;
    this.journal.yearId = this.invoiceData.year.id;
    this.journal.user_id = this.invoiceData.user_info.id;
    this.journal.invo_ref = this.invoiceData.invoiceRef;
    
    // Set current date
    let d = new Date();
    this.payInvo.rec_date = this.datePipe.transform(d, 'yyyy-MM-dd');
    this.journal.j_date = this.datePipe.transform(d, 'yyyy-MM-dd');
    
    // Generate references
    this.generateRandom();
  }

  private getBanksAccount() {
    if (!this.invoiceData) return;
    
    this.api.getAllAccounts(this.invoiceData.store_info.id, this.invoiceData.year.id).subscribe(
      data => {
        let res = data;
        if (res && res['data']) {
          const allAccounts = res['data'];
          this.banksAccountArray = allAccounts.filter(x => x.ac_id == 7); // Bank accounts
          console.log('Banks accounts loaded:', this.banksAccountArray);
        }
      },
      (err) => {
        console.log('Error loading accounts:', err);
      }
    );
  }

  pickAccountBank(ev) {
    console.log('Bank selection:', ev.target.value);
    
    if (ev.target.value == "1") {
      // Cash selection
      this.selectedBankAccount = {
        id: 46, ac_id: 7, sub_name: "الخزينة",
        sub_type: "", sub_code: "", store_id: this.invoiceData.store_info.id,
        sub_balance: "", currentType: "", debit: "", credit: ""
      };
      this.loadSourceBalance(46);
    } else {
      // Bank selection
      let fl = this.banksAccountArray.filter(x => x.id == ev.target.value);
      if (fl.length > 0) {
        this.selectedBankAccount = {
          id: fl[0]['id'], ac_id: fl[0]['ac_id'],
          sub_name: fl[0]['sub_name'], sub_type: fl[0]['sub_type'],
          sub_code: fl[0]['sub_code'], store_id: fl[0]['store_id'],
          sub_balance: fl[0]['sub_balance'], currentType: "",
          debit: +fl[0]['debit'], credit: +fl[0]['credit']
        };
        this.loadSourceBalance(fl[0]['id']);
      }
    }
  }

  private generateRandom() {
    let da = new Date();
    let randomsNumber = da.getMonth().toString() + da.getDay().toString() + 
                       da.getHours().toString() + da.getMinutes().toString() + 
                       da.getSeconds().toString() + da.getMilliseconds().toString();
                       
    this.payInvo.rec_ref = this.invoiceData.store_info.store_ref + "INV" + randomsNumber;
    this.journal.j_ref = this.invoiceData.store_info.store_ref + "JO" + randomsNumber;
    this.journal.invo_ref = this.payInvo.rec_ref;
  }

  private prepare4save() {
    this.payInvo.rec_date = this.journal.j_date;
    let d: Date = this.payInvo.rec_date;
    this.payInvo.rec_date = this.datePipe.transform(d, 'yyyy-MM-dd');
    
    let debit: any = 0;
    let credit: any = 0;
    
    if (+this.jType == 1) {
      debit = +this.pay;
      this.journal.j_type = "سند دفع";
    } else if (+this.jType == 2) {
      credit = +this.pay;
      this.journal.j_type = "سند قبض";
    }

    this.journal.j_pay = +this.pay;
    let from: any = "";
    let to: any = "";

    // Prepare journal entries based on type
    if (+this.jType == 1) { // Payment
      if (+this.radioVal == 1) {
        // Cash payment
        this.jdetail_to = {
          id: "NULL", j_id: this.journal.j_id, j_ref: this.journal.j_ref,
          ac_id: 46, j_desc: "", j_type: "سند دفع",
          credit: this.pay, debit: 0,
          store_id: this.invoiceData.store_info.id,
          yearId: this.invoiceData.year.id
        };
        to = 'الخزينة';
      } else {
        // Bank payment
        this.jdetail_to = {
          id: "NULL", j_id: this.journal.j_id, j_ref: this.journal.j_ref,
          ac_id: this.selectedBankAccount.id, j_desc: "", j_type: "سند دفع",
          credit: this.pay, debit: 0,
          store_id: this.invoiceData.store_info.id,
          yearId: this.invoiceData.year.id
        };
        to = this.selectedBankAccount.sub_name;
      }
      from = this.invoiceData.customerAccount.sub_name;
      this.jdetail_toArr.push(this.jdetail_to);
    } else if (+this.jType == 2) { // Receipt
      if (+this.radioVal == 1) {
        // Cash receipt
        this.jdetail_from = {
          id: "NULL", j_id: this.journal.j_id, j_ref: this.journal.j_ref,
          ac_id: 46, j_desc: "", j_type: "سند قبض",
          credit: 0, debit: this.pay,
          store_id: this.invoiceData.store_info.id,
          yearId: this.invoiceData.year.id
        };
        from = 'الخزينة';
      } else {
        // Bank receipt
        this.jdetail_from = {
          id: "NULL", j_id: this.journal.j_id, j_ref: this.journal.j_ref,
          ac_id: this.selectedBankAccount.id, j_desc: "", j_type: "سند قبض",
          credit: 0, debit: +this.pay,
          store_id: this.invoiceData.store_info.id,
          yearId: this.invoiceData.year.id
        };
        from = this.selectedBankAccount.sub_name;
      }
      to = this.invoiceData.customerAccount.sub_name;
      this.jdetail_fromArr.push(this.jdetail_from);
    }

    // Add customer account entry
    const customerEntry = {
      id: "NULL", j_id: this.journal.j_id, j_ref: this.journal.j_ref,
      ac_id: this.invoiceData.customerAccount.id,
      j_desc: this.invoiceData.customerAccount.sub_type,
      j_type: this.journal.j_type,
      credit: +this.jType == 1 ? credit : 0,
      debit: +this.jType == 1 ? 0 : debit,
      store_id: this.invoiceData.store_info.id,
      sub_code: this.invoiceData.customerAccount.sub_code,
      sub_name: this.invoiceData.customerAccount.sub_name,
      yearId: this.invoiceData.year.id
    };

    if (+this.jType == 1) {
      this.jdetail_fromArr.push(customerEntry);
    } else {
      this.jdetail_toArr.push(customerEntry);
    }

    this.journal.standard_details = 'من حساب ' + from + ' الي حساب ' + to;
  }

  async save() {
    if (!this.isFormValid()) {
      if (!this.isValidAmount()) {
        this.presentToast(this.getAmountValidationError(), 'danger');
      } else {
        this.presentToast('الرجاء إكمال جميع الحقول المطلوبة', 'danger');
      }
      return;
    }

    this.prepare4save();
    await this.presentLoadingWithOptions('جاري حفظ البيانات...');
    this.saveJournal();
  }

  private saveJournal() {
    this.api.saveJournal(this.journal).subscribe(
      data => {
        if (data['message'] != 'Post Not Created') {
          // Update journal entries with the returned ID
          for (let i = 0; i < this.jdetail_fromArr.length; i++) {
            this.jdetail_fromArr[i].j_id = data['message'];
          }
          for (let i = 0; i < this.jdetail_toArr.length; i++) {
            this.jdetail_toArr[i].j_id = data['message'];
          }
          this.saveJournalDetails();
        } else {
          this.loadingController.dismiss();
          this.presentToast('لم يتم حفظ البيانات، خطأ في الإتصال حاول مرة أخرى', 'danger');
        }
      },
      (err) => {
        this.loadingController.dismiss();
        this.presentToast('لم يتم حفظ البيانات، خطأ في الإتصال حاول مرة أخرى', 'danger');
      }
    );
  }

  private saveJournalDetails() {
    // Save both from and to journal details
    if (this.jdetail_fromArr.length > 0) {
      this.api.saveJournalFrom(this.jdetail_fromArr).subscribe(
        data => {
          if (data['message'] != 'Post Not Created') {
            if (this.jdetail_toArr.length > 0) {
              this.saveJournalTo();
            } else {
              this.handleSaveSuccess();
            }
          } else {
            this.loadingController.dismiss();
            this.presentToast('لم يتم حفظ البيانات، خطأ في الإتصال حاول مرة أخرى', 'danger');
          }
        },
        (err) => {
          this.loadingController.dismiss();
          this.presentToast('لم يتم حفظ البيانات، خطأ في الإتصال حاول مرة أخرى', 'danger');
        }
      );
    } else if (this.jdetail_toArr.length > 0) {
      this.saveJournalTo();
    }
  }

  private saveJournalTo() {
    this.api.saveJournalTo(this.jdetail_toArr).subscribe(
      data => {
        if (data['message'] != 'Post Not Created') {
          this.handleSaveSuccess();
        } else {
          this.loadingController.dismiss();
          this.presentToast('لم يتم حفظ البيانات، خطأ في الإتصال حاول مرة أخرى', 'danger');
        }
      },
      (err) => {
        this.loadingController.dismiss();
        this.presentToast('لم يتم حفظ البيانات، خطأ في الإتصال حاول مرة أخرى', 'danger');
      }
    );
  }

  private handleSaveSuccess() {
    this.loadingController.dismiss();
    this.presentToast('تم حفظ القيد بنجاح', 'success');
    this.journalSaved.emit(true);
  }

  cancel() {
    this.journalCancelled.emit();
  }

  // Get current amount for header display (reactive to user changes)
  getCurrentAmount(): number {
    return this.pay || 0;
  }

  // Handle amount input changes with validation
  onAmountChange(event: any) {
    const newAmount = event.target.value;
    this.pay = parseFloat(newAmount) || 0;
    // The header will automatically update due to getCurrentAmount() method
  }

  // Get transaction type text for header
  getTransactionTypeText(): string {
    return this.invoiceData?.invoiceType === 'sales' ? 'سند قبض' : 'سند دفع';
  }

  // Get customer name for header
  getCustomerName(): string {
    return this.invoiceData?.customerAccount?.sub_name || 'غير محدد';
  }

  // Get customer balance for header display
  getCustomerBalance(): any {
    return this.invoiceData?.customerBalance || null;
  }

  // Format customer balance for display
  formatCustomerBalance(balance: any): string {
    if (!balance) return '0.00';
    const amount = Math.abs(parseFloat(balance.current_balance || 0)).toFixed(2);
    const status = balance.status === 'debit' ? 'مدين' : 'دائن';
    return `${amount} ${status}`;
  }

  // Get balance color for styling
  getCustomerBalanceColor(balance: any): string {
    if (!balance) return 'medium';
    return balance.status === 'debit' ? 'success' : 'danger';
  }

  // Load balance for source account
  loadSourceBalance(accountId: any) {
    if (!accountId || !this.invoiceData) return;

    this.loadingSourceBalance = true;
    this.sourceAccountBalance = null;

    this.api.getAccountBalance(accountId, this.invoiceData.store_info.id, this.invoiceData.year.id).subscribe(
      (response) => {
        this.loadingSourceBalance = false;
        if (response.success) {
          this.sourceAccountBalance = response.data;
        }
      },
      (error) => {
        this.loadingSourceBalance = false;
        this.sourceAccountBalance = null;
      }
    );
  }

  // Format balance for display
  formatBalance(balance: any): string {
    if (!balance) return '0.00';
    const amount = parseFloat(balance.current_balance || 0).toFixed(2);
    const type = balance.balance_type === 'debit' ? 'مدين' : 'دائن';
    return `${amount} ${type}`;
  }

  // Get balance color for styling
  getBalanceColor(balance: any): string {
    if (!balance) return 'medium';
    return balance.balance_type === 'debit' ? 'success' : 'danger';
  }

  async presentToast(msg: string, color?: string) {
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

  async presentLoadingWithOptions(msg?: string) {
    const loading = await this.loadingController.create({
      spinner: 'bubbles',
      mode: 'ios',
      message: msg,
      translucent: true,
      backdropDismiss: false
    });
    await loading.present();
  }
}