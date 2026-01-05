import { Component, OnInit, Input, HostListener } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { ServicesService } from '../../stockService/services.service';

@Component({
  selector: 'app-transaction-modal',
  templateUrl: './transaction-modal.component.html',
  styleUrls: ['./transaction-modal.component.scss'],
})
export class TransactionModalComponent implements OnInit {
  @Input() transaction: any; // If editing, this will be populated
  @Input() store_id: number = 0;
  @Input() year_id: number = 0;
  @Input() user_id: number = 0;
  @Input() selectedDate: string = '';

  // Transaction type
  transactionType: string = ''; // 'pay_supplier', 'receive_customer', 'expense', 'internal_transfer'

  // Form data
  selectedAccount: any = null;
  selectedPaymentMethod: any = null;
  selectedSourceAccount: any = null; // For internal transfers
  selectedDestAccount: any = null; // For internal transfers
  amount: number = 0;
  description: string = '';

  // Accounts data
  allAccounts: Array<any> = [];
  filteredAccounts: Array<any> = [];
  bankAccounts: Array<any> = [];
  paymentMethods: Array<any> = [];

  // Searching
  accountSearchTerm: string = '';
  sourceSearchTerm: string = '';
  destSearchTerm: string = '';

  // UI states
  showAccountDropdown: boolean = false;
  showPaymentDropdown: boolean = false;
  showSourceDropdown: boolean = false;
  showDestDropdown: boolean = false;

  // Loading
  loading: boolean = false;

  // Edit mode
  isEditMode: boolean = false;
  originalJdetailFrom: any = null;
  originalJdetailTo: any = null;

  // Account balances
  accountBalance: any = null;
  paymentMethodBalance: any = null;
  sourceAccountBalance: any = null;
  destAccountBalance: any = null;
  loadingAccountBalance: boolean = false;
  loadingPaymentBalance: boolean = false;
  loadingSourceBalance: boolean = false;
  loadingDestBalance: boolean = false;

  constructor(
    private modalCtrl: ModalController,
    private api: ServicesService,
    private toastCtrl: ToastController
  ) { }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    const clickedInsideDropdown = target.closest('.custom-dropdown');

    if (!clickedInsideDropdown) {
      this.closeAllDropdowns();
    }
  }

  closeAllDropdowns() {
    this.showAccountDropdown = false;
    this.showPaymentDropdown = false;
    this.showSourceDropdown = false;
    this.showDestDropdown = false;
  }

  ngOnInit() {
    this.loadAccounts();

    if (this.transaction) {
      this.isEditMode = true;
      this.loadTransactionForEdit();
    }
  }

  loadAccounts() {
    this.api.getAllAccounts(this.store_id, this.year_id).subscribe(
      (res: any) => {
        // Extract accounts from data property
        const accountsData = res['data'] || res;

        // Filter out sales and purchase accounts
        this.allAccounts = accountsData.filter((x: any) => x.ac_id != 8 && x.ac_id != 9);

        // Extract bank accounts (ac_id = 7)
        this.bankAccounts = this.allAccounts.filter((x: any) => x.ac_id == 7);

        // Prepare payment methods (Cash + Banks)
        this.paymentMethods = [
          { id: 46, sub_name: 'الخزينة', ac_id: 46 }, // Cash
          ...this.bankAccounts
        ];

        // If transaction type is already selected, refresh filtered accounts
        if (this.transactionType) {
          this.filterAccountsByType();
        }
      }
    );
  }

  loadTransactionForEdit() {
    console.log('📖 Loading transaction for edit:', this.transaction);

    // Load journal details
    this.api.getJournalById(this.transaction.j_id).subscribe((journalRes: any) => {
      console.log('✅ Journal loaded:', journalRes);

      // CRITICAL FIX: Load by j_ref instead of j_id because old transactions don't have j_id in jdetail tables
      // Use the transaction's j_ref which is always present
      const j_ref = this.transaction.j_ref;
      console.log('🔍 Loading details by j_ref:', j_ref);

      // Load ALL jdetail_from and jdetail_to records for the date, then filter by j_ref
      // This matches the pattern used in transactions-record.page.ts
      const transactionDate = this.transaction.j_date;

      this.api.getJFromByDate(this.store_id, transactionDate, this.year_id).subscribe((fromRes: any) => {
        console.log('✅ FROM details loaded (all for date):', fromRes);

        this.api.getJToByDate(this.store_id, transactionDate, this.year_id).subscribe((toRes: any) => {
          console.log('✅ TO details loaded (all for date):', toRes);

          // Extract data from response and filter by j_ref
          let allFromDetails = [];
          let allToDetails = [];

          if (fromRes && fromRes['data']) {
            allFromDetails = fromRes['data'];
          }

          if (toRes && toRes['data']) {
            allToDetails = toRes['data'];
          }

          // Filter by j_ref to get details for THIS specific transaction
          const fromDetails = allFromDetails.filter((x: any) => x.j_ref == j_ref);
          const toDetails = allToDetails.filter((x: any) => x.j_ref == j_ref);

          console.log('🔍 Filtered FROM details by j_ref:', fromDetails);
          console.log('🔍 Filtered TO details by j_ref:', toDetails);

          if (fromDetails.length > 0) {
            this.originalJdetailFrom = fromDetails[0];
            console.log('✅ Found FROM details:', this.originalJdetailFrom);
          } else {
            console.error('❌ No FROM details found for j_ref:', j_ref);
            this.showErrorToast('فشل تحميل تفاصيل الحركة: لا توجد تفاصيل FROM');
            return;
          }

          if (toDetails.length > 0) {
            this.originalJdetailTo = toDetails[0];
            console.log('✅ Found TO details:', this.originalJdetailTo);
          } else {
            console.error('❌ No TO details found for j_ref:', j_ref);
            this.showErrorToast('فشل تحميل تفاصيل الحركة: لا توجد تفاصيل TO');
            return;
          }

          console.log('📋 Original details loaded successfully:', {
            from: this.originalJdetailFrom,
            to: this.originalJdetailTo
          });

          // Populate form based on transaction type
          this.populateEditForm();
        }, (error) => {
          console.error('❌ Error loading TO details:', error);
          this.showErrorToast('فشل تحميل تفاصيل الحركة');
        });
      }, (error) => {
        console.error('❌ Error loading FROM details:', error);
        this.showErrorToast('فشل تحميل تفاصيل الحركة');
      });
    }, (error) => {
      console.error('❌ Error loading journal:', error);
      this.showErrorToast('فشل تحميل بيانات الحركة');
    });
  }

  populateEditForm() {
    console.log('🔧 Populating edit form...');

    // Set basic data
    this.description = this.transaction.j_details || '';
    this.amount = this.transaction.j_pay || 0;

    // Get account IDs from original details
    const fromAcId = this.originalJdetailFrom?.ac_id;
    const toAcId = this.originalJdetailTo?.ac_id;

    console.log('🔍 Account IDs - From:', fromAcId, 'To:', toAcId);
    console.log('🔍 Transaction type:', this.transaction.j_type);

    // Determine transaction type based on journal structure
    if (this.transaction.j_type === 'سند دفع') {
      // Payment voucher - check what type of payment

      // Find the FROM account to determine type
      const fromAccount = this.allAccounts.find(x => x.id == fromAcId);
      console.log('🔍 FROM account:', fromAccount);

      if (fromAccount) {
        if (fromAccount.ac_id == 2) {
          // Supplier payment (ac_id = 2 is suppliers)
          console.log('✅ Detected: Pay Supplier');
          this.transactionType = 'pay_supplier';
          this.filterAccountsByType();
          this.selectedAccount = fromAccount;
          this.loadAccountBalance(fromAccount.id);
        } else if (fromAccount.ac_id == 5) {
          // Expense (ac_id = 5 is expenses)
          console.log('✅ Detected: Expense');
          this.transactionType = 'expense';
          this.filterAccountsByType();
          this.selectedAccount = fromAccount;
          this.loadAccountBalance(fromAccount.id);
        }

        // Payment method is the "to" account (cash/bank)
        const paymentMethod = this.paymentMethods.find(x => x.id == toAcId);
        if (paymentMethod) {
          this.selectedPaymentMethod = paymentMethod;
          this.loadPaymentMethodBalance(paymentMethod.id);
          console.log('✅ Payment method:', paymentMethod);
        }
      }
    } else if (this.transaction.j_type === 'سند قبض') {
      // Receipt voucher

      // Find the TO account to determine type
      const toAccount = this.allAccounts.find(x => x.id == toAcId);
      console.log('🔍 TO account:', toAccount);

      if (toAccount) {
        if (toAccount.ac_id == 1) {
          // Customer receipt (ac_id = 1 is customers)
          console.log('✅ Detected: Receive Customer');
          this.transactionType = 'receive_customer';
          this.filterAccountsByType();
          this.selectedAccount = toAccount;
          this.loadAccountBalance(toAccount.id);
        }

        // Payment method is the "from" account (cash/bank)
        const paymentMethod = this.paymentMethods.find(x => x.id == fromAcId);
        if (paymentMethod) {
          this.selectedPaymentMethod = paymentMethod;
          this.loadPaymentMethodBalance(paymentMethod.id);
          console.log('✅ Payment method:', paymentMethod);
        }
      }
    } else {
      // Internal transfer (سند قيد)
      console.log('✅ Detected: Internal Transfer');
      this.transactionType = 'internal_transfer';
      this.filterAccountsByType();

      // Both source and destination are cash/bank accounts
      const sourceAccount = this.paymentMethods.find(x => x.id == fromAcId);
      const destAccount = this.paymentMethods.find(x => x.id == toAcId);

      if (sourceAccount) {
        this.selectedSourceAccount = sourceAccount;
        this.loadSourceAccountBalance(sourceAccount.id);
        console.log('✅ Source account:', sourceAccount);
      }

      if (destAccount) {
        this.selectedDestAccount = destAccount;
        this.loadDestAccountBalance(destAccount.id);
        console.log('✅ Destination account:', destAccount);
      }
    }

    console.log('✅ Form populated successfully');
  }

  selectTransactionType(type: string) {
    this.transactionType = type;
    this.filterAccountsByType();

    // Reset selections and UI state ONLY if not in edit mode
    if (!this.isEditMode) {
      this.selectedAccount = null;
      this.selectedPaymentMethod = null;
      this.accountSearchTerm = '';
      this.showAccountDropdown = false;
      this.showPaymentDropdown = false;

      if (type !== 'internal_transfer') {
        this.selectedSourceAccount = null;
        this.selectedDestAccount = null;
        this.sourceSearchTerm = '';
        this.destSearchTerm = '';
        this.showSourceDropdown = false;
        this.showDestDropdown = false;
      }
    }
  }

  filterAccountsByType() {
    switch (this.transactionType) {
      case 'pay_supplier':
      case 'receive_customer':
        // Show both customers (ac_id = 1) and suppliers (ac_id = 2)
        this.filteredAccounts = this.allAccounts.filter(x => x.ac_id == 1 || x.ac_id == 2);
        break;
      case 'expense':
        this.filteredAccounts = this.allAccounts.filter(x => x.ac_id == 5); // Expenses
        break;
      case 'internal_transfer':
        // Use payment methods array which includes both cash and banks
        this.filteredAccounts = [...this.paymentMethods];
        break;
      default:
        this.filteredAccounts = [];
    }
  }

  getFilteredAccounts() {
    if (!this.accountSearchTerm) {
      return this.filteredAccounts;
    }
    return this.filteredAccounts.filter(acc =>
      acc.sub_name?.toLowerCase().includes(this.accountSearchTerm.toLowerCase())
    );
  }

  getFilteredSourceAccounts() {
    // For internal transfer, always use payment methods directly (more reliable)
    let accountsToShow: any[] = [];

    if (this.transactionType === 'internal_transfer') {
      accountsToShow = [...this.paymentMethods];

      // Filter out the selected destination account to prevent same account selection
      if (this.selectedDestAccount) {
        accountsToShow = accountsToShow.filter(x => x.id !== this.selectedDestAccount.id);
      }
    } else {
      accountsToShow = this.filteredAccounts;
    }

    // Apply search filter
    if (!this.sourceSearchTerm) {
      return accountsToShow;
    }
    return accountsToShow.filter(acc =>
      acc.sub_name?.toLowerCase().includes(this.sourceSearchTerm.toLowerCase())
    );
  }

  getFilteredDestAccounts() {
    // For internal transfer, always use payment methods directly (more reliable)
    let accountsToShow: any[] = [];

    if (this.transactionType === 'internal_transfer') {
      accountsToShow = [...this.paymentMethods];

      // Filter out the selected source account to prevent same account selection
      if (this.selectedSourceAccount) {
        accountsToShow = accountsToShow.filter(x => x.id !== this.selectedSourceAccount.id);
      }
    } else {
      accountsToShow = this.filteredAccounts;
    }

    // Apply search filter
    if (!this.destSearchTerm) {
      return accountsToShow;
    }
    return accountsToShow.filter(acc =>
      acc.sub_name?.toLowerCase().includes(this.destSearchTerm.toLowerCase())
    );
  }

  getFilteredPaymentMethods() {
    return this.paymentMethods;
  }

  selectAccount(account: any) {
    this.selectedAccount = account;
    this.showAccountDropdown = false;
    this.accountSearchTerm = '';
    // Load balance for selected account
    this.loadAccountBalance(account.id);
  }

  clearAccount(event: Event) {
    event.stopPropagation();
    this.selectedAccount = null;
    this.accountBalance = null;
    this.showAccountDropdown = false;
  }

  selectPaymentMethod(method: any) {
    this.selectedPaymentMethod = method;
    this.showPaymentDropdown = false;
    // Load balance for payment method
    this.loadPaymentMethodBalance(method.id);
  }

  clearPaymentMethod(event: Event) {
    event.stopPropagation();
    this.selectedPaymentMethod = null;
    this.paymentMethodBalance = null;
    this.showPaymentDropdown = false;
  }

  selectSourceAccount(account: any) {
    this.selectedSourceAccount = account;
    this.showSourceDropdown = false;
    this.sourceSearchTerm = '';

    // Load balance for source account
    this.loadSourceAccountBalance(account.id);

    // Clear destination if it's the same as source
    if (this.selectedDestAccount && this.selectedDestAccount.id === account.id) {
      this.selectedDestAccount = null;
      this.destAccountBalance = null;
    }
  }

  clearSourceAccount(event: Event) {
    event.stopPropagation();
    this.selectedSourceAccount = null;
    this.sourceAccountBalance = null;
    this.showSourceDropdown = false;
    this.sourceSearchTerm = '';
  }

  selectDestAccount(account: any) {
    this.selectedDestAccount = account;
    this.showDestDropdown = false;
    this.destSearchTerm = '';

    // Load balance for destination account
    this.loadDestAccountBalance(account.id);

    // Clear source if it's the same as destination
    if (this.selectedSourceAccount && this.selectedSourceAccount.id === account.id) {
      this.selectedSourceAccount = null;
      this.sourceAccountBalance = null;
    }
  }

  clearDestAccount(event: Event) {
    event.stopPropagation();
    this.selectedDestAccount = null;
    this.destAccountBalance = null;
    this.showDestDropdown = false;
    this.destSearchTerm = '';
  }

  toggleAccountDropdown() {
    this.showAccountDropdown = !this.showAccountDropdown;
    if (this.showAccountDropdown) {
      this.accountSearchTerm = '';
    }
  }

  togglePaymentDropdown() {
    this.showPaymentDropdown = !this.showPaymentDropdown;
  }

  toggleSourceDropdown() {
    this.showSourceDropdown = !this.showSourceDropdown;
    if (this.showSourceDropdown) {
      this.sourceSearchTerm = '';
    }
  }

  toggleDestDropdown() {
    this.showDestDropdown = !this.showDestDropdown;
    if (this.showDestDropdown) {
      this.destSearchTerm = '';
    }
  }

  isFormValid(): boolean {
    if (!this.transactionType || this.amount <= 0 || !this.description.trim()) {
      return false;
    }

    if (this.transactionType === 'internal_transfer') {
      return this.selectedSourceAccount && this.selectedDestAccount &&
             this.selectedSourceAccount.id !== this.selectedDestAccount.id;
    } else {
      return this.selectedAccount && this.selectedPaymentMethod;
    }
  }

  async saveTransaction() {
    if (!this.isFormValid()) {
      return;
    }

    this.loading = true;

    if (this.isEditMode) {
      await this.updateTransaction();
    } else {
      await this.createTransaction();
    }
  }

  async createTransaction() {
    const journal = this.prepareJournalData();
    const jdetails = this.prepareJournalDetails();

    console.log('📝 Creating transaction...', { journal, jdetails });

    // Validate data before saving
    if (!jdetails.from || !jdetails.to) {
      console.error('❌ Invalid journal details:', jdetails);
      this.loading = false;
      await this.showErrorToast('خطأ في بيانات الحركة');
      return;
    }

    if (!jdetails.from.ac_id || !jdetails.to.ac_id) {
      console.error('❌ Missing account IDs:', jdetails);
      this.loading = false;
      await this.showErrorToast('خطأ: معرف الحساب مفقود');
      return;
    }

    // Save journal
    this.api.saveJournal(journal).subscribe(
      async (res: any) => {
        // CRITICAL FIX: Backend returns {message: id}, not just id
        const j_id = res?.message || res;
        console.log('✅ Journal saved. API Response:', res);
        console.log('✅ Extracted j_id:', j_id);

        // Validate we got a valid j_id
        if (!j_id) {
          console.error('❌ No j_id returned from saveJournal API');
          this.loading = false;
          await this.showErrorToast('فشل الحصول على معرف الحركة');
          return;
        }

        // Update details with j_id
        jdetails.from.j_id = j_id;
        jdetails.to.j_id = j_id;

        console.log('📝 Updated jdetails with j_id:', { from: jdetails.from.j_id, to: jdetails.to.j_id });

        console.log('📤 Saving FROM details:', jdetails.from);
        // Save from details
        this.api.saveJournalFrom([jdetails.from]).subscribe(
          async (fromRes) => {
            console.log('✅ FROM details saved:', fromRes);

            console.log('📤 Saving TO details:', jdetails.to);
            // Save to details
            this.api.saveJournalTo([jdetails.to]).subscribe(
              async (toRes) => {
                console.log('✅ TO details saved:', toRes);
                this.loading = false;
                await this.showSuccessToast('تمت إضافة الحركة بنجاح');
                this.modalCtrl.dismiss({ refresh: true });
              },
              async (toError) => {
                console.error('❌ Error saving TO details:', toError);
                this.loading = false;
                await this.showErrorToast('فشل حفظ تفاصيل الحساب المستهدف');
              }
            );
          },
          async (fromError) => {
            console.error('❌ Error saving FROM details:', fromError);
            this.loading = false;
            await this.showErrorToast('فشل حفظ تفاصيل الحساب المصدر');
          }
        );
      },
      async (error) => {
        console.error('❌ Error saving journal:', error);
        this.loading = false;
        await this.showErrorToast('حدث خطأ أثناء إضافة الحركة');
      }
    );
  }

  async updateTransaction() {
    console.log('🔄 Updating transaction...');

    // Validate form
    if (!this.isFormValid()) {
      console.error('❌ Form validation failed');
      this.loading = false;
      await this.showErrorToast('يرجى إكمال جميع الحقول المطلوبة');
      return;
    }

    const journal = this.prepareJournalData();
    const jdetails = this.prepareJournalDetails();

    // Set IDs for update
    journal.j_id = this.transaction.j_id;
    journal.j_ref = this.transaction.j_ref; // Keep original reference

    // Preserve detail IDs from original records
    jdetails.from.id = this.originalJdetailFrom?.id;
    jdetails.from.j_id = this.transaction.j_id;
    jdetails.from.j_ref = this.transaction.j_ref;

    jdetails.to.id = this.originalJdetailTo?.id;
    jdetails.to.j_id = this.transaction.j_id;
    jdetails.to.j_ref = this.transaction.j_ref;

    console.log('📝 Update data prepared:', {
      journal,
      from: jdetails.from,
      to: jdetails.to
    });

    // Validate data before updating
    if (!jdetails.from || !jdetails.to) {
      console.error('❌ Invalid journal details:', jdetails);
      this.loading = false;
      await this.showErrorToast('خطأ في بيانات الحركة');
      return;
    }

    if (!jdetails.from.ac_id || !jdetails.to.ac_id) {
      console.error('❌ Missing account IDs:', jdetails);
      this.loading = false;
      await this.showErrorToast('خطأ: معرف الحساب مفقود');
      return;
    }

    // Update journal
    console.log('📤 Updating journal...');
    this.api.updateJournal(journal).subscribe(
      async (journalRes) => {
        console.log('✅ Journal updated:', journalRes);

        if (journalRes && journalRes['message'] === 'Post Not Updated') {
          console.error('❌ Journal update failed');
          this.loading = false;
          await this.showErrorToast('فشل تحديث بيانات الحركة');
          return;
        }

        // Update from details
        console.log('📤 Updating FROM details...');
        this.api.updateJFrom(jdetails.from).subscribe(
          async (fromRes) => {
            console.log('✅ FROM details updated:', fromRes);

            if (fromRes && fromRes['message'] === 'Post Not Updated') {
              console.error('❌ FROM details update failed');
              this.loading = false;
              await this.showErrorToast('فشل تحديث تفاصيل الحساب المصدر');
              return;
            }

            // Update to details
            console.log('📤 Updating TO details...');
            this.api.updateJTo(jdetails.to).subscribe(
              async (toRes) => {
                console.log('✅ TO details updated:', toRes);

                if (toRes && toRes['message'] === 'Post Not Updated') {
                  console.error('❌ TO details update failed');
                  this.loading = false;
                  await this.showErrorToast('فشل تحديث تفاصيل الحساب المستهدف');
                  return;
                }

                this.loading = false;
                console.log('✅ Transaction updated successfully');
                await this.showSuccessToast('تم تحديث الحركة بنجاح');
                this.modalCtrl.dismiss({ refresh: true });
              },
              async (toError) => {
                console.error('❌ Error updating TO details:', toError);
                this.loading = false;
                await this.showErrorToast('فشل تحديث تفاصيل الحساب المستهدف');
              }
            );
          },
          async (fromError) => {
            console.error('❌ Error updating FROM details:', fromError);
            this.loading = false;
            await this.showErrorToast('فشل تحديث تفاصيل الحساب المصدر');
          }
        );
      },
      async (journalError) => {
        console.error('❌ Error updating journal:', journalError);
        this.loading = false;
        await this.showErrorToast('حدث خطأ أثناء تحديث الحركة');
      }
    );
  }

  prepareJournalData(): any {
    const timestamp = new Date().getTime();
    const j_ref = this.isEditMode ? this.transaction.j_ref : `${this.store_id}JO${timestamp}`;

    let j_type = '';
    let standard_details = '';

    if (this.transactionType === 'pay_supplier') {
      j_type = 'سند دفع';
      standard_details = `من حساب ${this.selectedAccount.sub_name} إلى حساب ${this.selectedPaymentMethod.sub_name}`;
    } else if (this.transactionType === 'receive_customer') {
      j_type = 'سند قبض';
      standard_details = `من حساب ${this.selectedPaymentMethod.sub_name} إلى حساب ${this.selectedAccount.sub_name}`;
    } else if (this.transactionType === 'expense') {
      j_type = 'سند دفع';
      standard_details = `من حساب ${this.selectedAccount.sub_name} إلى حساب ${this.selectedPaymentMethod.sub_name}`;
    } else if (this.transactionType === 'internal_transfer') {
      j_type = 'سند قيد';
      standard_details = `من حساب ${this.selectedSourceAccount.sub_name} إلى حساب ${this.selectedDestAccount.sub_name}`;
    }

    return {
      j_id: undefined,
      j_ref: j_ref,
      j_details: this.description,
      j_type: j_type,
      invo_ref: '',
      j_desc: this.description,
      j_date: this.selectedDate,
      store_id: this.store_id,
      user_id: this.user_id,
      j_pay: this.amount,
      standard_details: standard_details,
      yearId: this.year_id
    };
  }

  prepareJournalDetails(): any {
    let fromDetail: any = {};
    let toDetail: any = {};

    const timestamp = new Date().getTime();
    const j_ref = this.isEditMode ? this.transaction.j_ref : `${this.store_id}JO${timestamp}`;

    if (this.transactionType === 'pay_supplier') {
      // From: Supplier (debit), To: Cash/Bank (credit)
      fromDetail = {
        id: null,
        j_id: undefined,
        j_ref: j_ref,
        ac_id: this.selectedAccount.id,
        credit: 0,
        debit: this.amount,
        j_desc: this.selectedAccount.sub_name,
        j_type: 'سند دفع',
        store_id: this.store_id,
        yearId: this.year_id
      };
      toDetail = {
        id: null,
        j_id: undefined,
        j_ref: j_ref,
        ac_id: this.selectedPaymentMethod.id,
        credit: this.amount,
        debit: 0,
        j_desc: this.selectedPaymentMethod.sub_name,
        j_type: 'سند دفع',
        store_id: this.store_id,
        yearId: this.year_id
      };
    } else if (this.transactionType === 'receive_customer') {
      // From: Cash/Bank (debit), To: Customer (credit)
      fromDetail = {
        id: null,
        j_id: undefined,
        j_ref: j_ref,
        ac_id: this.selectedPaymentMethod.id,
        credit: 0,
        debit: this.amount,
        j_desc: this.selectedPaymentMethod.sub_name,
        j_type: 'سند قبض',
        store_id: this.store_id,
        yearId: this.year_id
      };
      toDetail = {
        id: null,
        j_id: undefined,
        j_ref: j_ref,
        ac_id: this.selectedAccount.id,
        credit: this.amount,
        debit: 0,
        j_desc: this.selectedAccount.sub_name,
        j_type: 'سند قبض',
        store_id: this.store_id,
        yearId: this.year_id
      };
    } else if (this.transactionType === 'expense') {
      // From: Expense (debit), To: Cash/Bank (credit)
      fromDetail = {
        id: null,
        j_id: undefined,
        j_ref: j_ref,
        ac_id: this.selectedAccount.id,
        credit: 0,
        debit: this.amount,
        j_desc: this.selectedAccount.sub_name,
        j_type: 'سند دفع',
        store_id: this.store_id,
        yearId: this.year_id
      };
      toDetail = {
        id: null,
        j_id: undefined,
        j_ref: j_ref,
        ac_id: this.selectedPaymentMethod.id,
        credit: this.amount,
        debit: 0,
        j_desc: this.selectedPaymentMethod.sub_name,
        j_type: 'سند دفع',
        store_id: this.store_id,
        yearId: this.year_id
      };
    } else if (this.transactionType === 'internal_transfer') {
      // From: Source account (debit), To: Destination account (credit)
      console.log('🔍 Preparing internal transfer - Source:', this.selectedSourceAccount);
      console.log('🔍 Preparing internal transfer - Dest:', this.selectedDestAccount);

      fromDetail = {
        id: null,
        j_id: undefined,
        j_ref: j_ref,
        ac_id: this.selectedSourceAccount?.id || this.selectedSourceAccount?.ac_id,
        credit: 0,
        debit: this.amount,
        j_desc: this.selectedSourceAccount.sub_name,
        j_type: 'سند قيد',
        store_id: this.store_id,
        yearId: this.year_id
      };
      toDetail = {
        id: null,
        j_id: undefined,
        j_ref: j_ref,
        ac_id: this.selectedDestAccount?.id || this.selectedDestAccount?.ac_id,
        credit: this.amount,
        debit: 0,
        j_desc: this.selectedDestAccount.sub_name,
        j_type: 'سند قيد',
        store_id: this.store_id,
        yearId: this.year_id
      };
    }

    return { from: fromDetail, to: toDetail };
  }

  async showSuccessToast(message: string) {
    const toast = await this.toastCtrl.create({
      message: message,
      duration: 2000,
      color: 'success'
    });
    toast.present();
  }

  async showErrorToast(message: string) {
    const toast = await this.toastCtrl.create({
      message: message,
      duration: 3000,
      color: 'danger'
    });
    toast.present();
  }

  // Load balance methods
  loadAccountBalance(accountId: any) {
    if (!accountId || !this.store_id || !this.year_id) {
      return;
    }

    this.loadingAccountBalance = true;
    this.accountBalance = null;
    this.api.getAccountBalance(accountId, this.store_id, this.year_id).subscribe(
      (response: any) => {
        this.loadingAccountBalance = false;
        if (response.success) {
          this.accountBalance = response.data;
        } else {
          this.accountBalance = null;
        }
      },
      (error) => {
        this.loadingAccountBalance = false;
        this.accountBalance = null;
      }
    );
  }

  loadPaymentMethodBalance(accountId: any) {
    if (!accountId || !this.store_id || !this.year_id) {
      return;
    }

    this.loadingPaymentBalance = true;
    this.paymentMethodBalance = null;
    this.api.getAccountBalance(accountId, this.store_id, this.year_id).subscribe(
      (response: any) => {
        this.loadingPaymentBalance = false;
        if (response.success) {
          this.paymentMethodBalance = response.data;
        } else {
          this.paymentMethodBalance = null;
        }
      },
      (error) => {
        this.loadingPaymentBalance = false;
        this.paymentMethodBalance = null;
      }
    );
  }

  loadSourceAccountBalance(accountId: any) {
    if (!accountId || !this.store_id || !this.year_id) {
      return;
    }

    this.loadingSourceBalance = true;
    this.sourceAccountBalance = null;
    this.api.getAccountBalance(accountId, this.store_id, this.year_id).subscribe(
      (response: any) => {
        this.loadingSourceBalance = false;
        if (response.success) {
          this.sourceAccountBalance = response.data;
        } else {
          this.sourceAccountBalance = null;
        }
      },
      (error) => {
        this.loadingSourceBalance = false;
        this.sourceAccountBalance = null;
      }
    );
  }

  loadDestAccountBalance(accountId: any) {
    if (!accountId || !this.store_id || !this.year_id) {
      return;
    }

    this.loadingDestBalance = true;
    this.destAccountBalance = null;
    this.api.getAccountBalance(accountId, this.store_id, this.year_id).subscribe(
      (response: any) => {
        this.loadingDestBalance = false;
        if (response.success) {
          this.destAccountBalance = response.data;
        } else {
          this.destAccountBalance = null;
        }
      },
      (error) => {
        this.loadingDestBalance = false;
        this.destAccountBalance = null;
      }
    );
  }

  // Format balance for display
  formatBalance(balance: any): string {
    if (!balance) return '0.00';
    const amount = parseFloat(balance.current_balance || 0).toFixed(2);
    const type = balance.status === 'debit' ? 'مدين' : 'دائن';
    return `${amount} ${type}`;
  }

  // Get balance color for styling
  getBalanceColor(balance: any): string {
    if (!balance) return 'medium';
    return balance.status === 'debit' ? 'success' : 'danger';
  }

  close() {
    this.modalCtrl.dismiss();
  }
}
