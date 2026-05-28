import { Component, OnInit, OnDestroy } from '@angular/core';
import { ModalController, ToastController, AlertController, NavController } from '@ionic/angular';
import { ServicesService } from '../stockService/services.service';
import { Storage } from '@ionic/storage';
import { TranslateService } from '@ngx-translate/core';
import { TransactionModalComponent } from '../components/transaction-modal/transaction-modal.component';
import { AccountCommunicationService } from '../services/account-communication.service';
import { Subscription } from 'rxjs';

const DRAFT_STORAGE_KEY = 'RECURRING_OBLIGATIONS_DRAFT';

@Component({
  selector: 'app-recurring-obligations',
  templateUrl: './recurring-obligations.page.html',
  styleUrls: ['./recurring-obligations.page.scss'],
})
export class RecurringObligationsPage implements OnInit, OnDestroy {

  // Segment
  selectedSegment: string = 'management';

  // Store info
  store_id: any = '';
  year_id: any = '';
  user_id: any = '';

  // Management tab data
  obligations: any[] = [];
  loadingObligations: boolean = false;

  // Monthly status tab data
  statusList: any[] = [];
  summary: any = { total_salaries: 0, total_rent: 0, paid_count: 0, total_count: 0 };
  loadingStatus: boolean = false;
  selectedMonth: string = '';
  selectedMonthDisplay: string = '';

  // Form data (add/edit)
  showForm: boolean = false;
  isEditing: boolean = false;
  formData: any = {
    id: null,
    sub_account_id: '',
    expense_account_id: '',
    amount: 0,
    obligation_type: 'salary',
    description: '',
    day_of_month: 1,
    start_date: '',
    end_date: '',
    is_active: 1
  };

  // Account lists
  allAccounts: any[] = [];
  expenseAccounts: any[] = [];
  loadingAccounts: boolean = false;

  // Track which account field triggered the add flow
  pendingAddTarget: 'main' | 'expense' | null = null;
  private newAccountSub?: Subscription;

  // Generating
  generating: boolean = false;

  constructor(
    private api: ServicesService,
    private storage: Storage,
    private modalCtrl: ModalController,
    private toastCtrl: ToastController,
    private alertCtrl: AlertController,
    private translate: TranslateService,
    private navController: NavController,
    private accountCommunicationService: AccountCommunicationService
  ) {}

  async ngOnInit() {
    await this.storage.create();
    const storeInfo = await this.storage.get('STORE_INFO');
    const userInfo = await this.storage.get('USER_INFO');
    const year = await this.storage.get('year');

    if (storeInfo) this.store_id = storeInfo.id;
    if (userInfo) this.user_id = userInfo.id;
    if (year) this.year_id = year.id;

    // Set current month
    const now = new Date();
    this.selectedMonth = now.getFullYear() + '-' + String(now.getMonth() + 1).padStart(2, '0');
    this.updateMonthDisplay();

    // Restore draft form state if returning from account-modal
    await this.restoreDraftIfPresent();

    // Listen for newly-created accounts from account-modal
    this.newAccountSub = this.accountCommunicationService.newAccount$.subscribe((newAccount) => {
      if (!newAccount) return;
      this.loadAccountsThenSelect(newAccount);
      this.accountCommunicationService.clearNewAccount();
    });

    this.loadAccounts();
    this.loadObligations();
  }

  ngOnDestroy() {
    if (this.newAccountSub) this.newAccountSub.unsubscribe();
  }

  private async restoreDraftIfPresent() {
    try {
      const draft = await this.storage.get(DRAFT_STORAGE_KEY);
      if (draft && draft.formData) {
        this.formData = draft.formData;
        this.isEditing = !!draft.isEditing;
        this.showForm = !!draft.showForm;
        this.pendingAddTarget = draft.pendingAddTarget || null;
        await this.storage.remove(DRAFT_STORAGE_KEY);
      }
    } catch {}
  }

  private loadAccountsThenSelect(newAccount: any) {
    if (!this.store_id || !this.year_id) return;
    this.loadingAccounts = true;
    this.api.getAllAccounts(this.store_id, this.year_id).subscribe(
      (res: any) => {
        this.loadingAccounts = false;
        const data = res['data'] || res;
        this.allAccounts = data;
        this.expenseAccounts = data.filter((x: any) => x.ac_id == 5);

        if (newAccount?.id) {
          if (this.pendingAddTarget === 'expense') {
            this.formData.expense_account_id = newAccount.id;
          } else {
            this.formData.sub_account_id = newAccount.id;
          }
        }
        this.pendingAddTarget = null;
      },
      () => {
        this.loadingAccounts = false;
      }
    );
  }

  async onAddAccount(target: 'main' | 'expense') {
    this.pendingAddTarget = target;
    // Stash current form state so we can restore it when user returns
    try {
      await this.storage.set(DRAFT_STORAGE_KEY, {
        showForm: this.showForm,
        isEditing: this.isEditing,
        formData: this.formData,
        pendingAddTarget: target,
      });
    } catch {}
    this.navController.navigateForward('/account-modal', {
      queryParams: { mode: 'create' },
    });
  }

  segmentChanged(event: any) {
    this.selectedSegment = event.detail.value;
    if (this.selectedSegment === 'status') {
      this.loadStatus();
    }
  }

  // ========== Management Tab ==========

  loadObligations() {
    if (!this.store_id || !this.year_id) return;
    this.loadingObligations = true;
    this.api.getRecurringObligations(this.store_id, this.year_id).subscribe(
      (res: any) => {
        this.loadingObligations = false;
        this.obligations = res.data || [];
      },
      (err) => {
        this.loadingObligations = false;
        this.obligations = [];
      }
    );
  }

  loadAccounts() {
    if (!this.store_id || !this.year_id) return;
    this.loadingAccounts = true;
    this.api.getAllAccounts(this.store_id, this.year_id).subscribe(
      (res: any) => {
        this.loadingAccounts = false;
        const data = res['data'] || res;
        this.allAccounts = data;
        // Expense accounts (ac_id = 5)
        this.expenseAccounts = data.filter((x: any) => x.ac_id == 5);
      },
      (err) => {
        this.loadingAccounts = false;
      }
    );
  }

  openAddForm() {
    this.isEditing = false;
    this.formData = {
      id: null,
      sub_account_id: '',
      expense_account_id: '',
      amount: 0,
      obligation_type: 'salary',
      description: '',
      day_of_month: 1,
      start_date: new Date().toISOString().split('T')[0],
      end_date: '',
      is_active: 1
    };
    this.showForm = true;
  }

  openEditForm(ob: any) {
    this.isEditing = true;
    this.formData = {
      id: ob.id,
      sub_account_id: ob.sub_account_id,
      expense_account_id: ob.expense_account_id,
      amount: ob.amount,
      obligation_type: ob.obligation_type,
      description: ob.description,
      day_of_month: ob.day_of_month,
      start_date: ob.start_date,
      end_date: ob.end_date || '',
      is_active: ob.is_active
    };
    this.showForm = true;
  }

  cancelForm() {
    this.showForm = false;
  }

  saveObligation() {
    if (!this.formData.sub_account_id || !this.formData.expense_account_id || !this.formData.amount) {
      this.showToast('يرجى إكمال جميع الحقول المطلوبة', 'warning');
      return;
    }

    const data = {
      ...this.formData,
      store_id: this.store_id,
      year_id: this.year_id,
      end_date: this.formData.end_date || null
    };

    if (this.isEditing) {
      this.api.updateRecurringObligation(data).subscribe(
        (res: any) => {
          if (res.success) {
            this.showToast('تم تحديث الالتزام بنجاح', 'success');
            this.showForm = false;
            this.loadObligations();
          } else {
            this.showToast('فشل التحديث', 'danger');
          }
        },
        () => this.showToast('حدث خطأ', 'danger')
      );
    } else {
      this.api.createRecurringObligation(data).subscribe(
        (res: any) => {
          if (res.success) {
            this.showToast('تم إضافة الالتزام بنجاح', 'success');
            this.showForm = false;
            this.loadObligations();

            // Jump to the Status tab and navigate to the obligation's start month,
            // so the user immediately sees the newly-created row in context.
            if (this.formData.start_date) {
              const startMonth = (this.formData.start_date as string).substring(0, 7); // YYYY-MM
              this.selectedMonth = startMonth;
              this.updateMonthDisplay();
              this.selectedSegment = 'status';
              this.loadStatus();
            }
          } else {
            this.showToast('فشل الإضافة', 'danger');
          }
        },
        () => this.showToast('حدث خطأ', 'danger')
      );
    }
  }

  async confirmDelete(ob: any) {
    const alert = await this.alertCtrl.create({
      header: 'تأكيد الحذف',
      message: 'هل تريد حذف هذا الالتزام؟',
      buttons: [
        { text: 'إلغاء', role: 'cancel' },
        {
          text: 'حذف',
          role: 'destructive',
          handler: () => this.deleteObligation(ob.id)
        }
      ]
    });
    await alert.present();
  }

  deleteObligation(id: any) {
    this.api.deleteRecurringObligation(id).subscribe(
      (res: any) => {
        if (res.success) {
          this.showToast('تم حذف الالتزام', 'success');
          this.loadObligations();
        }
      },
      () => this.showToast('حدث خطأ', 'danger')
    );
  }

  toggleActive(ob: any) {
    const data = {
      ...ob,
      is_active: ob.is_active == 1 ? 0 : 1
    };
    this.api.updateRecurringObligation(data).subscribe(
      (res: any) => {
        if (res.success) {
          ob.is_active = data.is_active;
          this.showToast(data.is_active ? 'تم التفعيل' : 'تم التعطيل', 'success');
        }
      }
    );
  }

  // ========== Monthly Status Tab ==========

  updateMonthDisplay() {
    const [year, month] = this.selectedMonth.split('-');
    const monthNames = [
      'يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو',
      'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'
    ];
    this.selectedMonthDisplay = monthNames[parseInt(month) - 1] + ' ' + year;
  }

  prevMonth() {
    const d = new Date(this.selectedMonth + '-01');
    d.setMonth(d.getMonth() - 1);
    this.selectedMonth = d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0');
    this.updateMonthDisplay();
    this.loadStatus();
  }

  nextMonth() {
    const d = new Date(this.selectedMonth + '-01');
    d.setMonth(d.getMonth() + 1);
    this.selectedMonth = d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0');
    this.updateMonthDisplay();
    this.loadStatus();
  }

  loadStatus() {
    if (!this.store_id || !this.year_id) return;
    this.loadingStatus = true;
    this.api.getObligationStatus(this.store_id, this.year_id, this.selectedMonth).subscribe(
      (res: any) => {
        this.loadingStatus = false;
        this.statusList = res.data || [];
        this.summary = res.summary || { total_salaries: 0, total_rent: 0, paid_count: 0, total_count: 0 };
      },
      () => {
        this.loadingStatus = false;
        this.statusList = [];
      }
    );
  }

  generateAll() {
    if (!this.store_id || !this.year_id) return;
    this.generating = true;
    this.api.generateObligations(this.store_id, this.year_id, this.user_id).subscribe(
      (res: any) => {
        this.generating = false;
        if (res.success) {
          const count = res.count || 0;
          if (count > 0) {
            this.showToast('تم إنشاء ' + count + ' التزام', 'success');
          } else {
            this.showToast('لا توجد التزامات جديدة للإنشاء', 'medium');
          }
          this.loadStatus();
        } else {
          this.showToast('فشل الإنشاء', 'danger');
        }
      },
      () => {
        this.generating = false;
        this.showToast('حدث خطأ', 'danger');
      }
    );
  }

  async quickPay(item: any) {
    const storeInfo = await this.storage.get('STORE_INFO');
    const year = await this.storage.get('year');
    const userInfo = await this.storage.get('USER_INFO');

    const modal = await this.modalCtrl.create({
      component: TransactionModalComponent,
      componentProps: {
        store_id: storeInfo?.id,
        year_id: year?.id,
        user_id: userInfo?.id,
        selectedDate: new Date().toISOString().split('T')[0],
        prefillType: 'expense',
        prefillAccountId: item.sub_account_id,
        prefillAmount: parseFloat(item.amount),
        prefillDescription: item.description + ' - ' + this.selectedMonthDisplay
      },
      cssClass: 'transaction-modal'
    });

    modal.onDidDismiss().then((result) => {
      if (result.data?.refresh) {
        // Mark as paid if we have the log_id
        if (item.log_id) {
          this.api.markObligationPaid(item.log_id, '').subscribe(
            () => this.loadStatus(),
            () => this.loadStatus()
          );
        } else {
          this.loadStatus();
        }
      }
    });

    await modal.present();
  }

  getStatusColor(status: string): string {
    switch (status) {
      case 'paid': return 'success';
      case 'generated': return 'warning';
      case 'overdue': return 'danger';
      case 'pending': return 'medium';
      case 'not_started': return 'tertiary';
      case 'ended': return 'medium';
      default: return 'medium';
    }
  }

  getStatusLabel(status: string): string {
    switch (status) {
      case 'paid': return 'مدفوع';
      case 'generated': return 'تم الإنشاء';
      case 'overdue': return 'متأخر';
      case 'pending': return 'معلق';
      case 'not_started': return 'لم يبدأ بعد';
      case 'ended': return 'منتهي';
      default: return status;
    }
  }

  getTypeLabel(type: string): string {
    return type === 'salary' ? 'راتب' : 'إيجار';
  }

  getTypeColor(type: string): string {
    return type === 'salary' ? 'primary' : 'tertiary';
  }

  getAccountName(id: any): string {
    const acc = this.allAccounts.find(x => x.id == id);
    return acc ? acc.sub_name : '';
  }

  async showToast(message: string, color: string = 'primary') {
    const toast = await this.toastCtrl.create({
      message,
      duration: 2500,
      color,
      position: 'bottom'
    });
    toast.present();
  }
}
