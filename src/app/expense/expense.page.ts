import { Component, OnInit, HostListener, ElementRef } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ServicesService } from "../stockService/services.service";
import { AlertController, LoadingController, Platform, ToastController, ModalController } from '@ionic/angular';
import { DatePipe } from '@angular/common';
import { Storage } from '@ionic/storage';
import { ActivatedRoute, Router } from '@angular/router';
import { AddExpenseCategoryModalComponent } from '../components/add-expense-category-modal/add-expense-category-modal.component';

@Component({
  selector: 'app-expense',
  templateUrl: './expense.page.html',
  styleUrls: ['./expense.page.scss']
})
export class ExpensePage implements OnInit {
  store_info: { id: any, location: any, store_name: any, store_ref: any }
  user_info: { id: any, user_name: any, store_id: any, full_name: any, password: any }
  year: { id: any, yearDesc: any, yearStart: any, yearEnd: any }
  device: any = ''

  // Expense data
  expense: any = {
    id: null,
    expense_ref: '',
    amount: null,
    description: '',
    expense_date: '',
    category_id: null,
    vendor_name: '',
    payment_method: '',
    notes: '',
    attachment_path: '',
    store_id: null,
    yearId: null,
    user_id: null
  }

  // Form state
  isEditMode: boolean = false
  loading: boolean = false
  expenseCategories: Array<any> = []
  selectedCategory: any = null

  // Payment methods
  paymentMethods: string[] = ['نقدي', 'تحويل بنكي', 'شيك', 'بطاقة ائتمان', 'آجل']

  // Dropdown state for category
  showCategoryDropdown: boolean = false
  categorySearchTerm: string = ''
  highlightedCategoryIndex: number = -1
  categoryDropdownPosition = { top: '0px', left: '0px', width: '200px' }

  // Dropdown state for payment method
  showPaymentDropdown: boolean = false
  paymentSearchTerm: string = ''
  highlightedPaymentIndex: number = -1
  paymentDropdownPosition = { top: '0px', left: '0px', width: '200px' }

  constructor(
    private platform: Platform,
    private alertController: AlertController,
    private router: Router,
    private route: ActivatedRoute,
    private storage: Storage,
    private loadingController: LoadingController,
    private datePipe: DatePipe,
    private api: ServicesService,
    private toast: ToastController,
    private elementRef: ElementRef,
    private modalController: ModalController
  ) {
    this.checkPlatform()
    let d = new Date()
    this.expense.expense_date = this.datePipe.transform(d, 'yyyy-MM-dd')
  }

  checkPlatform() {
    if (this.platform.is('desktop')) {
      this.device = 'desktop'
    } else if (this.platform.is('mobile')) {
      this.device = 'mobile'
    }
  }

  ngOnInit() {
    this.getAppInfo()
  }

  ionViewDidEnter() {
    this.checkQueryParams()
  }

  getAppInfo() {
    this.storage.get('USER_INFO').then((response) => {
      if (response) {
        this.user_info = response
        this.expense.user_id = this.user_info.id
      }
    });
    this.storage.get('year').then((response) => {
      if (response) {
        this.year = response
        this.expense.yearId = this.year.id
      }
    });
    this.storage.get('STORE_INFO').then((response) => {
      if (response) {
        this.store_info = response
        this.expense.store_id = this.store_info.id
        this.loadExpenseCategories()
        this.generateExpenseRef()
      }
    });
  }

  checkQueryParams() {
    this.route.queryParams.subscribe(params => {
      if (params && params.expense) {
        this.isEditMode = true
        const expenseData = JSON.parse(params.expense)
        this.expense = {
          id: expenseData.id,
          expense_ref: expenseData.expense_ref,
          amount: parseFloat(expenseData.amount),
          description: expenseData.description,
          expense_date: expenseData.expense_date,
          category_id: expenseData.category_id,
          vendor_name: expenseData.vendor_name || '',
          payment_method: expenseData.payment_method || '',
          notes: expenseData.notes || '',
          attachment_path: expenseData.attachment_path || '',
          store_id: expenseData.store_id,
          yearId: expenseData.yearId,
          user_id: expenseData.user_id
        }
        this.selectedCategory = this.expenseCategories.find(c => c.id == this.expense.category_id)
        // Set dropdown search terms for edit mode
        if (this.selectedCategory) {
          this.categorySearchTerm = this.selectedCategory.category_name
        }
        if (this.expense.payment_method) {
          this.paymentSearchTerm = this.expense.payment_method
        }
      }
      if (params && params.user_info) {
        this.user_info = JSON.parse(params.user_info)
      }
      if (params && params.store_info) {
        this.store_info = JSON.parse(params.store_info)
      }
      if (params && params.year) {
        this.year = JSON.parse(params.year)
      }
    });
  }

  loadExpenseCategories() {
    console.log('Loading expense categories for store:', this.store_info.id);
    this.api.getExpenseCategories(this.store_info.id).subscribe(data => {
      console.log('Expense categories response:', data);
      let res = data
      if (res && res['message'] !== 'No Categories Found' && res['data']) {
        this.expenseCategories = res['data']
        console.log('Loaded expense categories:', this.expenseCategories);
      } else {
        this.expenseCategories = []
        console.log('No expense categories found or empty response');
      }
    }, (err) => {
      console.error('Error loading expense categories:', err);
      this.expenseCategories = []
    })
  }

  async openAddCategoryModal() {
    const modal = await this.modalController.create({
      component: AddExpenseCategoryModalComponent,
      componentProps: { store_info: this.store_info },
      cssClass: 'add-category-modal'
    });

    await modal.present();
    const { data } = await modal.onWillDismiss();

    if (data && data.created) {
      this.loadExpenseCategories();

      // Auto-select new category
      setTimeout(() => {
        this.expense.category_id = data.category.id;
        this.selectedCategory = data.category;
        this.categorySearchTerm = data.category.category_name;
      }, 300);

      this.presentToast('تم إضافة التصنيف بنجاح', 'success');
    }
  }

  generateExpenseRef() {
    if (!this.isEditMode && this.store_info) {
      const timestamp = Date.now()
      this.expense.expense_ref = `${this.store_info.store_ref}EXP${timestamp}`
    }
  }

  onCategoryChange(event: any) {
    this.expense.category_id = event.detail.value
    this.selectedCategory = this.expenseCategories.find(c => c.id == this.expense.category_id)
  }

  // ==================== CATEGORY DROPDOWN ====================

  calculateCategoryDropdownPosition() {
    setTimeout(() => {
      const wrappers = this.elementRef.nativeElement.querySelectorAll('.custom-dropdown-wrapper')
      if (wrappers && wrappers.length > 0) {
        const categoryWrapper = wrappers[0]
        const inputElement = categoryWrapper.querySelector('.dropdown-input')
        if (inputElement) {
          const rect = inputElement.getBoundingClientRect()
          this.categoryDropdownPosition = {
            top: (rect.bottom + 4) + 'px',
            left: rect.left + 'px',
            width: rect.width + 'px'
          }
          console.log('Category dropdown position:', this.categoryDropdownPosition)
        }
      }
    }, 10)
  }

  toggleCategoryDropdown() {
    console.log('toggleCategoryDropdown - categories:', this.expenseCategories.length)
    this.showCategoryDropdown = !this.showCategoryDropdown
    this.showPaymentDropdown = false // Close the other dropdown
    this.highlightedCategoryIndex = -1
    if (this.showCategoryDropdown) {
      this.calculateCategoryDropdownPosition()
    }
  }

  onCategoryInputFocus() {
    console.log('onCategoryInputFocus - categories:', this.expenseCategories.length)
    this.showCategoryDropdown = true
    this.showPaymentDropdown = false
    this.highlightedCategoryIndex = -1
    this.calculateCategoryDropdownPosition()
  }

  onCategorySearch(event: any) {
    const searchValue = event.target?.value || event.detail?.value || ''
    console.log('onCategorySearch - searchValue:', searchValue, 'categories:', this.expenseCategories.length)
    this.categorySearchTerm = searchValue
    this.showCategoryDropdown = true
    this.showPaymentDropdown = false
    this.highlightedCategoryIndex = -1
  }

  getFilteredCategories() {
    console.log('getFilteredCategories - total categories:', this.expenseCategories.length, 'searchTerm:', this.categorySearchTerm)

    if (!this.expenseCategories || this.expenseCategories.length === 0) {
      console.log('No categories available')
      return []
    }

    if (!this.categorySearchTerm || this.categorySearchTerm.trim() === '') {
      console.log('Returning all categories:', this.expenseCategories.length)
      return this.expenseCategories
    }

    const searchLower = this.categorySearchTerm.toLowerCase().trim()
    const filtered = this.expenseCategories.filter(cat =>
      cat.category_name.toLowerCase().includes(searchLower)
    )
    console.log('Filtered categories:', filtered.length)
    return filtered
  }

  selectCategory(category: any) {
    console.log('selectCategory:', category)
    this.expense.category_id = category.id
    this.selectedCategory = category
    this.categorySearchTerm = category.category_name
    this.showCategoryDropdown = false
    this.highlightedCategoryIndex = -1
  }

  // ==================== PAYMENT METHOD DROPDOWN ====================

  calculatePaymentDropdownPosition() {
    setTimeout(() => {
      const wrappers = this.elementRef.nativeElement.querySelectorAll('.custom-dropdown-wrapper')
      if (wrappers && wrappers.length > 1) {
        const paymentWrapper = wrappers[1]
        const inputElement = paymentWrapper.querySelector('.dropdown-input')
        if (inputElement) {
          const rect = inputElement.getBoundingClientRect()
          this.paymentDropdownPosition = {
            top: (rect.bottom + 4) + 'px',
            left: rect.left + 'px',
            width: rect.width + 'px'
          }
          console.log('Payment dropdown position:', this.paymentDropdownPosition)
        }
      }
    }, 10)
  }

  togglePaymentDropdown() {
    console.log('togglePaymentDropdown - methods:', this.paymentMethods.length)
    this.showPaymentDropdown = !this.showPaymentDropdown
    this.showCategoryDropdown = false // Close the other dropdown
    this.highlightedPaymentIndex = -1
    if (this.showPaymentDropdown) {
      this.calculatePaymentDropdownPosition()
    }
  }

  onPaymentInputFocus() {
    console.log('onPaymentInputFocus - methods:', this.paymentMethods.length)
    this.showPaymentDropdown = true
    this.showCategoryDropdown = false
    this.highlightedPaymentIndex = -1
    this.calculatePaymentDropdownPosition()
  }

  onPaymentSearch(event: any) {
    const searchValue = event.target?.value || event.detail?.value || ''
    console.log('onPaymentSearch - searchValue:', searchValue, 'methods:', this.paymentMethods.length)
    this.paymentSearchTerm = searchValue
    this.showPaymentDropdown = true
    this.showCategoryDropdown = false
    this.highlightedPaymentIndex = -1
  }

  getFilteredPaymentMethods() {
    console.log('getFilteredPaymentMethods - total methods:', this.paymentMethods.length, 'searchTerm:', this.paymentSearchTerm)

    if (!this.paymentSearchTerm || this.paymentSearchTerm.trim() === '') {
      console.log('Returning all payment methods:', this.paymentMethods.length)
      return this.paymentMethods
    }

    const searchLower = this.paymentSearchTerm.toLowerCase().trim()
    const filtered = this.paymentMethods.filter(method =>
      method.toLowerCase().includes(searchLower)
    )
    console.log('Filtered payment methods:', filtered.length)
    return filtered
  }

  selectPaymentMethod(method: string) {
    console.log('selectPaymentMethod:', method)
    this.expense.payment_method = method
    this.paymentSearchTerm = method
    this.showPaymentDropdown = false
    this.highlightedPaymentIndex = -1
  }

  // Close dropdowns when clicking outside
  closeDropdowns() {
    this.showCategoryDropdown = false
    this.showPaymentDropdown = false
  }

  // HostListener to close dropdowns when clicking outside
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event) {
    const target = event.target as HTMLElement
    if (!target) return

    // Check if click is inside a dropdown wrapper
    const categoryWrapper = this.elementRef.nativeElement.querySelector('.custom-dropdown-wrapper:first-of-type')
    const paymentWrapper = this.elementRef.nativeElement.querySelectorAll('.custom-dropdown-wrapper')[1]

    const isClickInsideCategory = categoryWrapper && categoryWrapper.contains(target)
    const isClickInsidePayment = paymentWrapper && paymentWrapper.contains(target)

    // Close category dropdown if click is outside
    if (!isClickInsideCategory && this.showCategoryDropdown) {
      this.showCategoryDropdown = false
      this.highlightedCategoryIndex = -1
    }

    // Close payment dropdown if click is outside
    if (!isClickInsidePayment && this.showPaymentDropdown) {
      this.showPaymentDropdown = false
      this.highlightedPaymentIndex = -1
    }
  }

  async saveExpense() {
    // Validation
    if (!this.expense.amount || this.expense.amount <= 0) {
      this.presentToast('يرجى إدخال مبلغ صحيح', 'warning')
      return
    }
    if (!this.expense.description || this.expense.description.trim() === '') {
      this.presentToast('يرجى إدخال وصف المصروف', 'warning')
      return
    }
    if (!this.expense.expense_date) {
      this.presentToast('يرجى اختيار التاريخ', 'warning')
      return
    }

    this.loading = true
    const loader = await this.loadingController.create({
      message: this.isEditMode ? 'جاري تحديث المصروف...' : 'جاري حفظ المصروف...',
    })
    await loader.present()

    // Prepare expense data
    const expenseData = {
      ...this.expense,
      store_id: this.store_info.id,
      yearId: this.year.id,
      user_id: this.user_info.id
    }

    if (this.isEditMode) {
      this.api.updateExpense(expenseData).subscribe(data => {
        loader.dismiss()
        this.loading = false
        this.presentToast('تم تحديث المصروف بنجاح', 'success')
        this.router.navigate(['expense-record'])
      }, (err) => {
        console.log(err)
        loader.dismiss()
        this.loading = false
        this.presentToast('خطأ في تحديث المصروف', 'danger')
      })
    } else {
      this.api.saveExpense(expenseData).subscribe(data => {
        loader.dismiss()
        this.loading = false
        this.presentToast('تم حفظ المصروف بنجاح', 'success')
        this.clearForm()
      }, (err) => {
        console.log(err)
        loader.dismiss()
        this.loading = false
        this.presentToast('خطأ في حفظ المصروف', 'danger')
      })
    }
  }

  clearForm() {
    this.expense = {
      id: null,
      expense_ref: '',
      amount: null,
      description: '',
      expense_date: this.datePipe.transform(new Date(), 'yyyy-MM-dd'),
      category_id: null,
      vendor_name: '',
      payment_method: '',
      notes: '',
      attachment_path: '',
      store_id: this.store_info?.id,
      yearId: this.year?.id,
      user_id: this.user_info?.id
    }
    this.selectedCategory = null
    this.isEditMode = false
    // Reset dropdown search terms
    this.categorySearchTerm = ''
    this.paymentSearchTerm = ''
    this.showCategoryDropdown = false
    this.showPaymentDropdown = false
    this.generateExpenseRef()
  }

  async confirmClear() {
    const alert = await this.alertController.create({
      header: 'تأكيد',
      message: 'هل أنت متأكد من مسح البيانات؟',
      buttons: [
        {
          text: 'إلغاء',
          role: 'cancel'
        },
        {
          text: 'مسح',
          handler: () => {
            this.clearForm()
          }
        }
      ]
    });
    await alert.present();
  }

  goToRecords() {
    this.router.navigate(['expense-record'])
  }

  async presentToast(msg: string, color: string) {
    const toast = await this.toast.create({
      message: msg,
      duration: 2000,
      color: color,
      position: 'bottom'
    });
    toast.present();
  }
}
