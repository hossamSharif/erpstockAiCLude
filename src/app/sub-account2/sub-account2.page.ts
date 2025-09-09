import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { ServicesService } from "../stockService/services.service";
import { Observable } from 'rxjs';
import { AlertController, IonInput, LoadingController, ModalController, ToastController, IonPopover } from '@ionic/angular';
import { DatePipe } from '@angular/common';
import { ItemModalPage } from '../item-modal/item-modal.page';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { SortingService, SortConfig } from '../services/sorting.service';
import { ExportService, ExportConfig, ExportColumn } from '../services/export.service';
import { CurrencyService } from '../services/currency.service'; 

@Component({
  selector: 'app-sub-account2',
  templateUrl: './sub-account2.page.html',
  styleUrls: ['./sub-account2.page.scss'],
})
export class SubAccount2Page implements OnInit, OnDestroy {
  @ViewChild('actionsPopover') actionsPopover: IonPopover;

  // Core data arrays
  account_category: Array<any> = [];
  sub_account: Array<any> = [];
  main_account: Array<any> = [];
  displayedAccounts: Array<any> = [];
  filteredAccounts: Array<any> = [];
  sortedAccounts: Array<any> = [];
  currentSort: SortConfig | null = null;
  
  // App info
  store_info: {id: any, location: any, store_name: any, store_ref: any};
  user_info: {id: any, user_name: any, store_id: any, full_name: any, password: any};
  year: {id: any, yearDesc: any, yearStart: any, yearEnd: any};
  
  // Search and pagination
  searchTerm: string = '';
  currentPage: number = 1;
  pageSize: number = 20;
  hasMoreAccounts: boolean = true;
  
  // UI state
  loading: boolean = false;
  loadingMore: boolean = false;
  isActionsPopoverOpen: boolean = false;
  selectedAccount: any = null;
  
  // Legacy properties for backward compatibility
  radioVal: any = 0;
  radioVal2: any = 0;
  selectedMainAccount: {ac_id: any, actype_id: any, ac_name: any, ac_code: any, eng_name: any, ac_type: any};
  selectedCategory: {id: any, cat_name: any};
  payInvo: {id: any, ac_id: any, sub_name: any, sub_type: any, sub_code: any, sub_balance: any, store_id: any, cat_id: any, cat_name: any, ac_behavior: any, phone: any, address: any};
  status: any = 'save';
  codeSe: any = '';
  sklton: boolean = false;
  
  constructor(
    private storage: Storage,
    private alertController: AlertController,
    private modalController: ModalController,
    private loadingController: LoadingController, 
    private datePipe: DatePipe,
    private api: ServicesService,
    private toast: ToastController,
    private router: Router,
    private sortingService: SortingService,
    private exportService: ExportService,
    private currencyService: CurrencyService
  ) { 
    this.initializeData();
    this.getAppInfo();
  }

  ngOnInit() {
    // Component initialization
  }

  ionViewWillEnter() {
    // Refresh data when returning from account page
    if (this.store_info && this.store_info.id) {
      this.loadAccountsWithPagination();
    }
  }

  ngOnDestroy() {
    // Component cleanup
    if (this.searchTimeout) {
      clearTimeout(this.searchTimeout);
    }
  }

  initializeData() {
    this.selectedAccount = null;
    this.selectedCategory = {id: '', cat_name: ''};
    this.payInvo = {id: '', ac_id: '', sub_name: '', sub_type: '', sub_code: '', sub_balance: '', store_id: '', cat_id: '', cat_name: '', ac_behavior: '', phone: '', address: ''};
    this.selectedMainAccount = {ac_id: '', actype_id: '', ac_name: '', ac_code: '', eng_name: '', ac_type: ''};
    this.store_info = {id: '', store_ref: '', store_name: '', location: ''};
    this.displayedAccounts = [];
    this.filteredAccounts = [];
    this.sortedAccounts = [];
    this.currentPage = 1;
    this.hasMoreAccounts = true;
    this.searchTerm = '';
    this.currentSearchTerm = '';
  }


  async presentToast(msg,color?) {
    const toast = await this.toast.create({
      message: msg,
      duration: 2000,
      color:color,
      cssClass:'cust_Toast',
      mode:'ios',
      position:'top' 
    });
    toast.present();
  }

  radioChange(ev){
    //console.log(ev.target.value) 
   }
   radioChange2(ev){
    //console.log(ev.target.value) 
   }


  pickAccount(ev){
    this.showSklt()

    this.selectedCategory.cat_name = ""
    let fl= this.sub_account.filter(x=>x.sub_name == ev.target.value)
    //console.log(fl);
    if (fl.length > 0) {
    this.selectedAccount = {
      id:fl[0]['id'],
      ac_id:fl[0]['ac_id'],
      sub_name:fl[0]['sub_name'],
      sub_type:fl[0]['sub_type'],
      sub_code:fl[0]['sub_code'], 
      store_id:fl[0]['store_id'],
      sub_balance:fl[0]['sub_balance'] ,
      cat_id:fl[0]['cat_id'] ,
      cat_name:fl[0]['cat_name'] ,
      ac_behavior:fl[0]['ac_behavior'] ,
      phone:fl[0]['phone'] ,
      address:fl[0]['address'] 
     
    }
    //console.log( this.selectedAccount);
     this.payInvo = this.selectedAccount
     this.status = 'edit'
    //  let flm = this.main_account.filter(x=>x.ac_id == +this.selectedAccount.ac_id)
    //  this.pickMainAccount(flm[0]['ac_name'],'fisrtLoad')
       let flmc = this.account_category.filter(x=>x.id == +this.selectedAccount.cat_id)
      this.pickAccountCategory(flmc[0]['cat_name'],'fisrtLoad')
  }else{
    this.presentToast(' خطأ في اسم الحساب ', 'danger')
  }
  
}

  searchCode(codeSe){
    this.showSklt()
    let fl= this.sub_account.filter(x=>x.sub_code == codeSe)
    //console.log(fl);
    if (fl.length > 0) {
    this.selectedAccount = {
      id:fl[0]['id'],
      ac_id:fl[0]['ac_id'],
      sub_name:fl[0]['sub_name'],
      sub_type:fl[0]['sub_type'],
      sub_code:fl[0]['sub_code'], 
      store_id:fl[0]['store_id'],
      sub_balance:fl[0]['sub_balance'] ,
      cat_id:fl[0]['cat_id'] ,
      cat_name:fl[0]['cat_name'] ,
      ac_behavior:fl[0]['ac_behavior']   ,
      phone:fl[0]['phone'] ,
      address:fl[0]['address'] 
    }
     //console.log( this.selectedAccount);
     this.payInvo = this.selectedAccount
     this.status = 'edit' 

  }else{
    this.presentToast('خطأ , لا يوجد حساب بهذا الرمز ', 'danger')
  }
  }

  
  searchId(codeSe){
    this.showSklt()
    let fl= this.sub_account.filter(x=>x.id == codeSe)
    //console.log(fl);
    if (fl.length > 0) {
    this.selectedAccount = {
      id:fl[0]['id'],
      ac_id:fl[0]['ac_id'],
      sub_name:fl[0]['sub_name'],
      sub_type:fl[0]['sub_type'],
      sub_code:fl[0]['sub_code'], 
      store_id:fl[0]['store_id'],
      sub_balance:fl[0]['sub_balance'] ,
      cat_id:fl[0]['cat_id'] ,
      cat_name:fl[0]['cat_name'] ,
      ac_behavior:fl[0]['ac_behavior']  ,
      phone:fl[0]['phone'] ,
      address:fl[0]['address']  
    }
     //console.log( this.selectedAccount);
     this.payInvo = this.selectedAccount
     this.status = 'edit' 

  }else{
    this.presentToast('خطأ , لا يوجد حساب بهذا الرقم ', 'danger')
  }
  }

  pickAccountCategory(ev,cat?){
    let evVal 
    if(cat){
     evVal = ev
    }else{
    evVal = ev.target.value
    }
    //console.log('evVal',evVal);

    
    let fl= this.account_category.filter(x=>x.cat_name == evVal)
    //console.log(fl);
    if (fl.length > 0) {
    this.selectedCategory = {
      id:fl[0]['id'],
      cat_name:fl[0]['cat_name'] 
    }
    this.selectedAccount.cat_id =  fl[0]['cat_id'] 
    this.selectedAccount.cat_name =  fl[0]['cat_name']
    this.payInvo.cat_id = this.selectedCategory.id 
    this.payInvo.cat_name = this.selectedCategory.cat_name 
  }else{
    this.presentToast(' خطأ في اسم التصنيف ', 'danger')   
  }
  }
  
  showSklt(){
    this.sklton  = true
    setTimeout(() => {
    this.sklton  = false
      
    }, 3000);
  }

  pickMainAccount(ev , cust?){
    let evVal 
    if(cust){
     evVal = ev
    }else{
    evVal = ev.target.value
    }
    //console.log('evVal',evVal); 
    let fl= this.main_account.filter(x=>x.ac_name == evVal)
    //console.log(fl);  
    if (fl.length > 0) {
    this.selectedMainAccount = {
      ac_id:fl[0]['ac_id'],
      ac_name:fl[0]['ac_name'],
      actype_id:fl[0]['actype_id'],
      ac_code:fl[0]['ac_code'],
      eng_name:fl[0]['eng_name'], 
      ac_type:fl[0]['ac_type'] 
    }
     //console.log( this.selectedMainAccount);
    this.payInvo.ac_id = this.selectedMainAccount.ac_id
    this.payInvo.sub_type = this.selectedMainAccount.ac_type
    this.payInvo.store_id = this.store_info.id
    this.payInvo.ac_behavior= this.selectedMainAccount.ac_type
  //  this.setFocusOnInput()
  }else{
    this.presentToast('خطأ في اسم الحساب ', 'danger') 
  }
  }


  getAppInfo() { 
    this.storage.get('USER_INFO').then((response) => {
      if (response) {
        this.user_info = response;
      }
    });
    
    this.storage.get('year').then((response) => {
      if (response) {
        this.year = response;
      } 
    });
    
    this.storage.get('STORE_INFO').then((response) => {
      if (response) {
        this.store_info = response;
        this.loadAccountsWithPagination();
      }
    });
  }


 prepareInvo(){ 
  this.selectedAccount = {id:"" ,ac_id:"",sub_name:"",sub_type:"",sub_code:"",sub_balance:"",store_id:this.store_info.id ,cat_id:"" ,cat_name:"",ac_behavior:"",phone:"",address:""};
  this.selectedCategory = {id:"" ,cat_name:""};
  this.payInvo = {id:"" ,ac_id:"",sub_name:"",sub_type:"",sub_code:"",sub_balance:"",store_id:this.store_info.id,cat_id:"",cat_name:"",ac_behavior:"",phone:"",address:""};
  this.selectedMainAccount = {ac_id:"" ,actype_id:"",ac_name:"",ac_code:"",eng_name:"",ac_type:""};
  this.status = 'save'
}


  refresh(){
   // this.presentLoadingWithOptions("...")
   this.showSklt()
    this.prepareInvo()
  }



  // New method for paginated account loading with balance calculations
  loadAccountsWithPagination(loadMore = false) {
    if (loadMore) {
      this.loadingMore = true;
      // Increment page for next batch
      this.currentPage++;
    } else {
      this.loading = true;
      this.currentPage = 1;
      this.displayedAccounts = [];
      this.filteredAccounts = [];
    }

    // Choose the appropriate API endpoint based on filters
    console.log('API call with params:', {
      store_id: this.store_info.id,
      year_id: this.year.id,
      page: this.currentPage,
      pageSize: this.pageSize,
      searchTerm: this.currentSearchTerm,
      filters: this.filters
    });
    
    // Use separate endpoint for positive balance filter
    let apiCall;
    if (this.filters.has_balance) {
      console.log('Using positive balance endpoint');
      // Create filters without has_balance since the endpoint is specifically for positive balance
      const filtersWithoutHasBalance = {
        cat_name: this.filters.cat_name,
        balance_type: this.filters.balance_type,
        sub_type: this.filters.sub_type
      };
      apiCall = this.api.getAccountsWithPositiveBalance(this.store_info.id, this.year.id, this.currentPage, this.pageSize, this.currentSearchTerm, filtersWithoutHasBalance);
    } else {
      console.log('Using regular endpoint');
      apiCall = this.api.getAccountsWithBalance(this.store_info.id, this.year.id, this.currentPage, this.pageSize, this.currentSearchTerm, this.filters);
    }
    
    apiCall.subscribe(
      (data: any) => {
        const newAccounts = data['data'] || [];
        
        console.log(`Loading page ${this.currentPage}: Got ${newAccounts.length} accounts`);
        console.log(`Load more: ${loadMore}, Current displayed: ${this.displayedAccounts.length}`);
        
        if (loadMore) {
          this.displayedAccounts = [...this.displayedAccounts, ...newAccounts];
        } else {
          this.displayedAccounts = newAccounts;
        }
        
        // Since search is now handled by backend, filteredAccounts should always match displayedAccounts
        this.filteredAccounts = [...this.displayedAccounts];
        
        // Apply sorting to filtered accounts
        this.applySorting();
        
        // Check if there are more accounts to load
        this.hasMoreAccounts = newAccounts.length === this.pageSize;
        
        console.log(`Total displayed: ${this.displayedAccounts.length}, Has more: ${this.hasMoreAccounts}`);
        
        // Balance is now calculated by the API, no need for client-side calculation
        
        this.loading = false;
        this.loadingMore = false;
        
        // Load supporting data on first load
        if (!loadMore) {
          this.getMainAccount();
          this.loadCategories();
        }
      },
      (err) => {
        console.error('Error loading accounts:', err);
        this.loading = false;
        this.loadingMore = false;
        // Reset page on error
        if (loadMore) {
          this.currentPage--;
        }
        this.presentToast('خطأ في تحميل الحسابات', 'danger');
      }
    );
  }

  // Legacy method for backward compatibility
  getAllAccount() {
    this.loadAccountsWithPagination();
  }

  // Balance is now calculated by the API endpoint, no need for client-side calculation

  // Load more accounts
  loadMoreAccounts() {
    if (this.hasMoreAccounts && !this.loadingMore) {
      this.loadAccountsWithPagination(true);
    }
  }

  // Backend search functionality with debouncing
  private searchTimeout: any;
  private currentSearchTerm: string = '';
  
  // Filter properties
  filters: {
    cat_name: string;
    balance_type: string;
    sub_type: string;
    has_balance: boolean;
  } = {
    cat_name: '',
    balance_type: '',
    sub_type: '',
    has_balance: false
  };
  
  activeFilters: {
    cat_name: boolean;
    balance_type: boolean;
    sub_type: boolean;
    has_balance: boolean;
  } = {
    cat_name: false,
    balance_type: false,
    sub_type: false,
    has_balance: false
  };
  
  // Filter popover states
  showCategoryFilter: boolean = false;
  showBalanceTypeFilter: boolean = false;
  showSubTypeFilter: boolean = false;
  
  // Categories for filter dropdown
  categories: Array<any> = [];
  
  searchAccounts(event: any) {
    console.log('Search input changed, this.searchTerm:', this.searchTerm);
    
    // Clear previous timeout
    if (this.searchTimeout) {
      clearTimeout(this.searchTimeout);
    }
    
    // Debounce all search requests (including empty ones)
    this.searchTimeout = setTimeout(() => {
      console.log('Performing search with this.searchTerm:', this.searchTerm);
      this.currentSearchTerm = this.searchTerm || '';
      console.log('Updated currentSearchTerm to:', this.currentSearchTerm);
      this.performSearch();
    }, 300); // 300ms delay for all searches
  }
  
  performSearch() {
    console.log('performSearch called with currentSearchTerm:', this.currentSearchTerm);
    // Reset pagination and reload accounts with current search term
    this.currentPage = 1;
    this.hasMoreAccounts = true;
    this.loadAccountsWithPagination(false);
  }

  // Clear search functionality
  clearSearch() {
    this.searchTerm = '';
    this.currentSearchTerm = '';
    // Clear any pending search timeout
    if (this.searchTimeout) {
      clearTimeout(this.searchTimeout);
    }
    // Reload accounts without search term
    this.performSearch();
  }
  
  // Filter methods
  toggleCategoryFilter() {
    this.showCategoryFilter = !this.showCategoryFilter;
  }
  
  toggleBalanceTypeFilter() {
    this.showBalanceTypeFilter = !this.showBalanceTypeFilter;
  }
  
  toggleHasBalanceFilter() {
    this.filters.has_balance = !this.filters.has_balance;
    this.activeFilters.has_balance = this.filters.has_balance;
    this.applyFilters();
  }
  
  toggleSubTypeFilter() {
    this.showSubTypeFilter = !this.showSubTypeFilter;
  }
  
  selectCategoryFilter(category: string) {
    this.filters.cat_name = category;
    this.activeFilters.cat_name = category !== '';
    this.showCategoryFilter = false;
    this.applyFilters();
  }
  
  selectBalanceTypeFilter(balanceType: string) {
    this.filters.balance_type = balanceType;
    this.activeFilters.balance_type = balanceType !== '';
    this.showBalanceTypeFilter = false;
    this.applyFilters();
  }
  
  selectSubTypeFilter(subType: string) {
    this.filters.sub_type = subType;
    this.activeFilters.sub_type = subType !== '';
    this.showSubTypeFilter = false;
    this.applyFilters();
  }
  
  clearAllFilters() {
    this.filters = {
      cat_name: '',
      balance_type: '',
      sub_type: '',
      has_balance: false
    };
    this.activeFilters = {
      cat_name: false,
      balance_type: false,
      sub_type: false,
      has_balance: false
    };
    this.applyFilters();
  }
  
  hasActiveFilters(): boolean {
    return Object.values(this.activeFilters).some(active => active);
  }
  
  applyFilters() {
    // Reset pagination and reload accounts with filters
    this.currentPage = 1;
    this.hasMoreAccounts = true;
    this.loadAccountsWithPagination(false);
  }

  // Open create page
  openCreateModal() {
    this.router.navigate(['/account-modal'], {
      queryParams: {
        mode: 'create'
      }
    });
  }

  // Present actions popover
  presentActionsPopover(event: any, account: any) {
    this.selectedAccount = account;
    this.isActionsPopoverOpen = true;
    
    if (this.actionsPopover) {
      this.actionsPopover.event = event;
    }
  }

  // Dismiss popover properly
  async dismissActionsPopover() {
    if (this.actionsPopover) {
      await this.actionsPopover.dismiss();
    }
    this.isActionsPopoverOpen = false;
  }

  // Edit account
  async editAccount(account: any) {
    // Dismiss the popover first
    await this.dismissActionsPopover();
    
    // Navigate to edit modal
    this.router.navigate(['/account-modal'], {
      queryParams: {
        mode: 'edit',
        account: JSON.stringify(account)
      }
    });
  }


  // Format balance display
  formatBalance(balance: number): string {
    if (!balance && balance !== 0) return '0.00';
    return new Intl.NumberFormat('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(balance);
  }

  // Get balance color
  getBalanceColor(balance: number): string {
    if (!balance && balance !== 0) return 'medium';
    return balance >= 0 ? 'success' : 'danger';
  }

getAccountCategory () {
  this.api.getAccountCategory(this.store_info.id).subscribe(data => {
    //console.log(data)
    let res = data
    this.account_category = res['data'] 
    //console.log(this.account_category)
  }, (err) => {
    //console.log(err);
  })
 }

 loadCategories() {
   this.api.getAccountCategory(this.store_info.id).subscribe(data => {
     let res = data
     this.categories = res['data'] || []
     console.log('Categories loaded:', this.categories)
   }, (err) => {
     console.log('Error loading categories:', err);
   })
 }

 getMainAccount() {
  this.api.getMainAccounts().subscribe(data => {
    //console.log(data)
    let res = data
    this.main_account = res['data'] 
    this.getAccountCategory()
  }, (err) => {
    //console.log(err);
  })
 }

  async presentLoadingWithOptions(msg?) {
    const loading = await this.loadingController.create({
      spinner: 'bubbles',
      mode:'ios',
      duration: 5000,
      message: msg,
      translucent: true,
     // cssClass: 'custom-class custom-loading',
      backdropDismiss: false
    });
    await loading.present();
  
    const { role, data } = await loading.onDidDismiss();
    //console.log('Loading dismissed with role:', role);
  }

  save(){
    if (this.validate() == true) {
      this.presentLoadingWithOptions('جاري حفظ البيانات ...')
      let accountList : Array<any> = []
      accountList.push(this.payInvo)
    this.api.createMultiAccount(accountList).subscribe(data => {
      //console.log(data)
      if (data['message'] != 'Post Not Created') {
       this.prepareInvo()
       this.presentToast('تم الحفظ بنجاح' , "success")
       this.getAllAccount()
      } else {
         this.presentToast('لم يتم انشاء حساب للعميل , خطا في الإتصال حاول مرة اخري' , 'danger')
      } 
        }, (err) => {
      //console.log(err);
      this.presentToast('لم يتم انشاء حساب للعميل , خطا في الإتصال حاول مرة اخري' , 'danger')
       },()=>{
       this.loadingController.dismiss()
       })

      }
  }

  update(){
    if (this.validate() == true) {
      this.presentLoadingWithOptions('جاري حفظ البيانات ...')
    this.api.updateSubAccount(this.payInvo).subscribe(data => {
      //console.log(data)
      if (data['message'] != 'Post Not Created') {
       this.prepareInvo()
       this.presentToast('تم التعديل بنجاح' , "success")
       this.getAllAccount()
      } else {
         this.presentToast('لم يتم انشاء حساب للعميل , خطا في الإتصال حاول مرة اخري' , 'danger')
      } 
        }, (err) => {
      //console.log(err);
      this.presentToast('لم يتم انشاء حساب للعميل , خطا في الإتصال حاول مرة اخري' , 'danger')
       },()=>{
       this.loadingController.dismiss()
       })

      }
  }

  validate():boolean{
    let fl :any =[]
    if (this.sub_account) {
       fl = this.sub_account.filter(x=>x.sub_name == this.payInvo.sub_name )
       if(fl.length>0 && this.status != 'edit'){
        this.presentToast('تطابق في اسم الحساب مع حساب موجود مسبقا   ','danger') 
       }
    }

    let fl2 :any =[]
    if (this.sub_account) {
       fl2 = this.sub_account.filter(x=>x.sub_code == this.payInvo.sub_code )
       if(fl2.length>0 && this.status != 'edit'){
        this.presentToast('تطابق في رمز الحساب مع حساب موجود مسبقا   ','danger') 
       }
    }

   

    if (this.payInvo.sub_name == "") {
      this.presentToast('الرجاء ادخال اسم الحساب ','danger')
      return false
    }else if( this.payInvo.sub_type == "" ) {
      this.presentToast(' الرجاء اختيار طبيعة الحساب','danger')
      return false
    } else if( this.selectedMainAccount.ac_id == "" || this.selectedMainAccount.ac_name == "" ) {
      this.presentToast(' الرجاء اختيار الحساب الرئيسي','danger')
      return false
    }  else {
      return true
    }
  }

  // Apply sorting to filtered accounts
  applySorting() {
    if (this.currentSort) {
      this.sortedAccounts = this.sortingService.sortData(
        this.filteredAccounts, 
        this.currentSort.column, 
        this.currentSort.direction
      );
    } else {
      this.sortedAccounts = [...this.filteredAccounts];
    }
  }

  // Handle column sort
  sortBy(column: string) {
    const direction = this.sortingService.getNextSortDirection(column, this.currentSort);
    this.currentSort = { column, direction };
    this.applySorting();
  }

  // Get sort icon for column
  getSortIcon(column: string): string {
    return this.sortingService.getSortIcon(column, this.currentSort);
  }

  // Export functionality
  async exportToPDF(): Promise<void> {
    if (!this.filteredAccounts || this.filteredAccounts.length === 0) {
      await this.presentToast('لا توجد بيانات للتصدير', 'warning');
      return;
    }

    const config: ExportConfig = {
      title: this.exportService.generateDynamicTitle('sub-account2'),
      subtitle: this.generateSubtitle(),
      fileName: `sub-accounts-${this.datePipe.transform(new Date(), 'yyyy-MM-dd')}`,
      data: this.filteredAccounts,
      columns: this.getExportColumns(),
      userName: this.user_info?.full_name || this.user_info?.user_name || 'مستخدم غير معروف',
      pageType: 'sub-account2',
      currentDate: this.datePipe.transform(new Date(), 'yyyy-MM-dd') || ''
    };

    await this.exportService.exportToPDF(config);
  }

  async exportToExcel(): Promise<void> {
    if (!this.filteredAccounts || this.filteredAccounts.length === 0) {
      await this.presentToast('لا توجد بيانات للتصدير', 'warning');
      return;
    }

    const config: ExportConfig = {
      title: this.exportService.generateDynamicTitle('sub-account2'),
      subtitle: this.generateSubtitle(),
      fileName: `sub-accounts-${this.datePipe.transform(new Date(), 'yyyy-MM-dd')}`,
      data: this.filteredAccounts,
      columns: this.getExportColumns(),
      userName: this.user_info?.full_name || this.user_info?.user_name || 'مستخدم غير معروف',
      pageType: 'sub-account2',
      currentDate: this.datePipe.transform(new Date(), 'yyyy-MM-dd') || ''
    };

    await this.exportService.exportToExcel(config);
  }

  private generateSubtitle(): string {
    let subtitle = '';
    
    // Add search term if present
    if (this.currentSearchTerm && this.currentSearchTerm.trim() !== '') {
      subtitle = `البحث: ${this.currentSearchTerm}`;
    }
    
    // Add active filters
    const activeFilterTexts: string[] = [];
    
    if (this.filters.cat_name && this.filters.cat_name !== '') {
      activeFilterTexts.push(`التصنيف: ${this.filters.cat_name}`);
    }
    
    if (this.filters.balance_type && this.filters.balance_type !== '') {
      const balanceTypeText = this.filters.balance_type === 'debit' ? 'مدين' : 'دائن';
      activeFilterTexts.push(`نوع الرصيد: ${balanceTypeText}`);
    }
    
    if (this.filters.sub_type && this.filters.sub_type !== '') {
      const subTypeText = this.filters.sub_type === 'debit' ? 'مدين' : 'دائن';
      activeFilterTexts.push(`طبيعة الحساب: ${subTypeText}`);
    }
    
    if (this.filters.has_balance) {
      activeFilterTexts.push('الحسابات ذات الرصيد فقط');
    }
    
    if (activeFilterTexts.length > 0) {
      const filtersText = activeFilterTexts.join(' - ');
      subtitle = subtitle ? `${subtitle} | ${filtersText}` : filtersText;
    }
    
    return subtitle;
  }

  private getExportColumns(): ExportColumn[] {
    return [
      { key: 'sub_code', title: 'كود الحساب', width: 15, type: 'text' },
      { key: 'sub_name', title: 'اسم الحساب', width: 30, type: 'text' },
      { key: 'sub_type', title: 'نوع الحساب', width: 15, type: 'text' },
      { key: 'cat_name', title: 'التصنيف', width: 20, type: 'text' },
      { key: 'current_balance', title: 'الرصيد الحالي', width: 20, type: 'currency' }
    ];
  }

  // Get current currency symbol for headers
  getCurrencySymbol(): string {
    return this.currencyService.getCurrentCurrencySymbol();
  }

}
