import { Component, HostListener, OnInit,ViewChild ,ElementRef} from '@angular/core';
import { ServicesService } from "../stockService/services.service";
import { Observable, Subscription } from 'rxjs';
import { AlertController, IonInput, LoadingController, ModalController, ToastController } from '@ionic/angular';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { DatePipe } from '@angular/common';
import { ItemModalPage } from '../item-modal/item-modal.page';
import { Storage } from '@ionic/storage';
import * as XLSX from 'xlsx'; 
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import * as momentObj from 'moment';
import { StockServiceService } from '../syncService/stock-service.service';
import domtoimage from 'dom-to-image';
import { FileOpener } from '@ionic-native/file-opener/ngx';
import { File, IWriteOptions } from '@ionic-native/file/ngx'; 
import { NavigationExtras, Router } from '@angular/router'; // Add 
import { stat } from 'fs';
@Component({
  selector: 'app-item-stock',
  templateUrl: './item-stock.page.html',
  styleUrls: ['./item-stock.page.scss'],
})
export class ItemStockPage implements OnInit {
  @HostListener('document:keydown.escape', ['$event']) onKeydownHandler(event: KeyboardEvent) {
    this.hideMe('3')
}  

 @ViewChild('actionPopover') actionPopover;
  isActionPopoverOpen = false;
  selectedActionItem: any = null;

  @ViewChild('popoverNotif33') popoverNotif33;
isOpen = false; 
subiscribtionItem:Subscription
subiscribtionNotif:Subscription
 isClearing = false;
notifArr:Array<any> =[]
showNotif = false
LogHistoryLocalArr:Array<any> =[]
logHistoryArr:Array<any>=[];
isOpenNotif = false ; 
newNotif = false ; 
// New sorting system
currentSort: {column: string, direction: 'asc' | 'desc' | null} = {column: '', direction: null}
items:Array<any> =[]
itemsAll:Array<any> =[]
  searcResult:Array<any> =[]
  searchMode :boolean = false
  searchTerm :any =""
  selectedItem : {id:any ,item_name:any ,model:any ,part_no:any  ,min_qty:any ,brand:any,pay_price:any,perch_price:any,item_unit:any,item_desc:any,item_parcode:any,aliasEn:any};
  firstq : {id:any ,item_id:any , store_id:any , quantity :any ,	fq_year:any ,	pay_price:any ,	perch_price:any }
 isCreatingSales = false;
  store_info : {id:any , location :any ,store_name:any , store_ref:any }
  user_info : {id:any ,user_name:any ,store_id :any,full_name:any,password:any}
  itemSstock : {id:any ,item_id:any , store_id:any , quantity :any }
  store_tot :any = 0
  cost_tot :any = 0
  store_fltTot :any = 0
  loading:boolean = false
  loadingTot:boolean = false
  partnoFilterArray:Array<any> = [];
  filterArrayOrign:Array<any> = [];
  sortingArrayOrign:Array<any> = [];
  filterArray:Array<any> = [];
  brandFilterArray:Array<any> = [];
  brandList:Array<any>=[];
  modelList:Array<any> =[];
  itemsLocal : Array<any> = [] ;
  showMe = null
  filterMode :boolean = false
  exportMode :boolean = false
  showBrand:boolean = false
  showMdel:boolean = false
  selectedItem2 : {id:any ,item_name:any ,model:any ,part_no:any  ,min_qty:any ,brand:any,pay_price:any,perch_price:any,item_unit:any,item_desc:any,item_parcode:any,aliasEn:any , quantity?:any};
  colSetting : {id:any ,item_name:any ,model:any ,part_no:any  ,min_qty:any ,brand:any,pay_price:any,perch_price:any,item_unit:any,item_desc:any,item_parcode:any,profit:any,instock:any,total:any,lastSold:any,edit:any,delete:any,aliasEn:any};
  year : {id:any ,yearDesc:any ,yearStart :any,yearEnd:any}
   selectedItemsList: Array<any> = [];
  logHistoryObj : {id:any,	logRef:any,	userId:any,	typee:any,	datee:any,	logStatus:any,	logToken:any,	yearId:any,	store_id:any}
  fileName= 'items.xlsx'; 
  @ViewChild('exceltable') exceltable !: ElementRef; 
  currentPage: number = 1;
  itemsPerPage: number = 20; // Default items per page
  totalItems: number = 0;
  totalPages: number = 0;
  pageSizeOptions: number[] = [10, 20, 50, 100];
  //
    // Filter state management
  filterState: {
    brand: {
      isActive: boolean,
      isVisible: boolean,
      selectedBrands: string[]
    },
    model: {
      isActive: boolean,
      isVisible: boolean,
      selectedModels: string[]
    },
    quantity: {
      isActive: boolean,
      isVisible: boolean,
      minQuantity: number,
      maxQuantity: number,
      filterType: string // 'range', 'min', 'max', 'exact'
    }
  }

  // Available filter options
  availableBrands: Array<{brand: string, selected: boolean, count?: number}> = [];
  availableModels: Array<{model: string, selected: boolean, count?: number}> = [];
  filteredAvailableBrands: Array<{brand: string, selected: boolean, count?: number}> = [];
  filteredAvailableModels: Array<{model: string, selected: boolean, count?: number}> = [];
  brandSearchTerm: string = '';
  modelSearchTerm: string = '';

  
  // Pagination properties
  paginatedItems: any[] = [];
  paginationCurrentPage: number = 1;
  paginationPageSize: number = 20;
  paginationHasMore: boolean = false;
  paginationLoading: boolean = false;
  paginationSearchTerm: string = '';
  paginationFilters: any = {};
  private searchSubject = new Subject<string>();
  showPaginatedView: boolean = false;
  paginationStockTotals: any = { store_tot: 0, cost_tot: 0, items_count: 0 };
  
  // All Items view variables
  showAllItemsView: boolean = false;
  allItemsData: any[] = [];
  loadingAllItems: boolean = false;
  allItemsStockTotals: any = { store_tot: 0, cost_tot: 0, items_count: 0 };
  
  // Search functionality variables
  showSearchView: boolean = false;
  searchData: any[] = [];
  loadingSearch: boolean = false;
  searchStockTotals: any = { store_tot: 0, cost_tot: 0, items_count: 0 };
  currentSearchTerm: string = '';
  
  // New separate totals variables
  stockValuePayPrice: number = 0;
  stockValuePerchPrice: number = 0;
  loadingStockTotals: boolean = false;
  constructor(private router:Router ,private file: File, private fileOpener: FileOpener,private behavApi:StockServiceService,private storage: Storage,private alertController: AlertController,private modalController: ModalController,private loadingController:LoadingController, private datePipe:DatePipe,private api:ServicesService,private toast :ToastController) { 
    this.store_info = {id:"" ,store_ref:"" , store_name:"" , location :"" }
    this.selectedItem = {id:null ,item_name:"" ,model:"" ,part_no:""  ,min_qty:0 ,brand:"",pay_price:0,perch_price:0,item_unit:"",item_desc:"",item_parcode:"",aliasEn:""};
    this.selectedItem2 = {id:null ,item_name:"" ,model:"" ,part_no:""  ,min_qty:0 ,brand:"",pay_price:0,perch_price:0,item_unit:"",item_desc:"",item_parcode:"",aliasEn:""};
    this.colSetting = {id:true ,item_name:true ,model:true ,part_no:true  ,min_qty:true ,brand:true,pay_price:true,perch_price:true,item_unit:true,item_desc:true,item_parcode:true,profit:true,instock:true,total:true,lastSold:true,edit:true,delete:true,aliasEn:true};
    this.getAppInfo()
       // Initialize filter state
    this.filterState = {
      brand: {
        isActive: false,
        isVisible: false,
        selectedBrands: []
      },
      model: {
        isActive: false,
        isVisible: false,
        selectedModels: []
      },
      quantity: {
        isActive: false,
        isVisible: false,
        minQuantity: 0,
        maxQuantity: 0,
        filterType: 'range'
      }
    }
    
    // Initialize search debouncing
    this.searchSubject.pipe(
      debounceTime(300),
      distinctUntilChanged()
    ).subscribe(searchTerm => {
      this.paginationSearchTerm = searchTerm;
      this.resetPaginationAndReload();
    });
  }
 


  ///

  



///

 toggleItemSelection(item: any, event: any) {
    if (event.detail.checked) {
      if (!this.isItemSelected(item)) {
        this.selectedItemsList.push(item);
      }
    } else {
      this.selectedItemsList = this.selectedItemsList.filter(selectedItem => selectedItem.id !== item.id);
    }
  }

  isItemSelected(item: any): boolean {
    return this.selectedItemsList.some(selectedItem => selectedItem.id === item.id);
  }

  toggleSelectAll(event: any) {
    const currentData = this.getCurrentViewData();
    
    if (event.detail.checked) {
      // Select all items in current view
      currentData.forEach(item => {
        if (!this.isItemSelected(item)) {
          this.selectedItemsList.push(item);
        }
      });
    } else {
      // Deselect all items in current view
      currentData.forEach(item => {
        this.selectedItemsList = this.selectedItemsList.filter(selectedItem => selectedItem.id !== item.id);
      });
    }
  }

  isAllSelected(): boolean {
    const currentData = this.getCurrentViewData();
    return currentData.length > 0 && currentData.every(item => this.isItemSelected(item));
  }

  isSomeSelected(): boolean {
    const currentData = this.getCurrentViewData();
    const selectedInCurrentView = currentData.filter(item => this.isItemSelected(item));
    return selectedInCurrentView.length > 0 && selectedInCurrentView.length < currentData.length;
  }

  // For filtered items
  toggleSelectAllFiltered(event: any) {
    if (event.detail.checked) {
      this.filterArray.forEach(item => {
        if (!this.isItemSelected(item)) {
          this.selectedItemsList.push(item);
        }
      });
    } else {
      this.filterArray.forEach(item => {
        this.selectedItemsList = this.selectedItemsList.filter(selectedItem => selectedItem.id !== item.id);
      });
    }
  }

  isAllFilteredSelected(): boolean {
    return this.filterArray.length > 0 && this.filterArray.every(item => this.isItemSelected(item));
  }

  isSomeFilteredSelected(): boolean {
    return this.selectedItemsList.length > 0 && !this.isAllFilteredSelected();
  }

  // For search results
  toggleSelectAllSearch(event: any) {
    const searchResults = this.itemsAll.filter(item => 
      item.item_name?.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      item.item_desc?.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      item.part_no?.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      item.brand?.toLowerCase().includes(this.searchTerm.toLowerCase())
    );

    if (event.detail.checked) {
      searchResults.forEach(item => {
        if (!this.isItemSelected(item)) {
          this.selectedItemsList.push(item);
        }
      });
    } else {
      searchResults.forEach(item => {
        this.selectedItemsList = this.selectedItemsList.filter(selectedItem => selectedItem.id !== item.id);
      });
    }
  }

  isAllSearchSelected(): boolean {
    const searchResults = this.itemsAll.filter(item => 
      item.item_name?.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      item.item_desc?.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      item.part_no?.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      item.brand?.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
    return searchResults.length > 0 && searchResults.every(item => this.isItemSelected(item));
  }

  isSomeSearchSelected(): boolean {
    return this.selectedItemsList.length > 0 && !this.isAllSearchSelected();
  }

  clearSelection() {
    this.selectedItemsList = [];
  }

  // Helper method to get current view's data array
  getCurrentViewData(): any[] {
    if (this.showSearchView) {
      return this.searchData || [];
    } else if (this.showAllItemsView) {
      return this.allItemsData || [];
    } else if (this.filterMode || this.hasActiveFilters()) {
      return this.filterArray || [];
    } else if (this.paginatedItems && this.paginatedItems.length > 0) {
      // Pagination view
      return this.paginatedItems;
    } else {
      // Fallback to items array if pagination is not loaded yet
      return this.items || [];
    }
  }
  
  clearSelectionWithAnimation() {
    this.isClearing = true;
    
    // Add fade-out class for smooth transition
    const selectedBar = document.querySelector('.selected-items-bar');
    if (selectedBar) {
      selectedBar.classList.add('fade-out');
    }
    
    // Clear selection after animation
    setTimeout(() => {
      this.selectedItemsList = [];
      this.isClearing = false;
    }, 300);
  }

  async createPurchaseFromSelected() {
    if (this.selectedItemsList.length === 0) {
      // Show toast message
      const toast = await this.toast.create({
        message: 'يرجى تحديد عناصر أولاً',
        duration: 2000,
        color: 'warning'
      });
      toast.present();
      return;
    }

    // Prepare items for purchase invoice
    const purchaseItems = this.selectedItemsList.map(item => ({
      id: item.id,
      item_name: item.item_name,
      item_desc: item.item_desc,
      part_no: item.part_no,
      brand: item.brand,
      model: item.model,
      item_unit: item.item_unit,
      perch_price: item.perch_price || 0,
      pay_price: item.pay_price || 0,
      qty: item.quantity < 0 ? Math.abs(item.quantity) : (item.quantity === 0 ? 1 : item.quantity),
      tot: item.perch_price || 0,
      availQty: item.quantity || 0,
      aliasEn: item.aliasEn
    }));


    
    // Navigate to purchase page with selected items
    this.router.navigate(['folder/purchase'], {
      queryParams: {
        status: 'newInvoFromItemsPage',
        selectedItemsList: JSON.stringify(purchaseItems)
      }
    });
    // Clear selection after navigation
    this.clearSelection();
  }


   async createTsiaFromSelected() {
    if (this.selectedItemsList.length === 0) {
      const toast = await this.toast.create({
        message: 'يرجى تحديد عناصر أولاً',
        duration: 2000,
        color: 'warning',
        cssClass: 'warning-toast'
      });
      toast.present();
      return;
    }

    // Set loading state
   


     const salesItems = this.selectedItemsList.map(item => ({
        id: item.id,
      item_name: item.item_name,
      item_desc: item.item_desc,
      part_no: item.part_no,
      brand: item.brand,
      model: item.model,
      item_unit: item.item_unit,
      perch_price: item.perch_price || 0,
      pay_price: item.pay_price || 0,
      qty: item.quantity,
      tot: item.pay_price || 0,
      availQty: item.quantity || 0,
      aliasEn: item.aliasEn
      }));

      // Navigate to sales page
      await this.router.navigate(['folder/tswia'], {
        queryParams: {
          status: 'newInvoFromItemsPage',
          selectedItemsList: JSON.stringify(salesItems)
        }
      });
    
      // Clear selection
        this.clearSelection();
    // Show loading
     
  }

  async createSalesFromSelected() {
    if (this.selectedItemsList.length === 0) {
      const toast = await this.toast.create({
        message: 'يرجى تحديد عناصر أولاً',
        duration: 2000,
        color: 'warning',
        cssClass: 'warning-toast'
      });
      toast.present();
      return;
    }

    // Set loading state
   


     const salesItems = this.selectedItemsList.map(item => ({
      id: item.id,
      item_name: item.item_name,
      item_desc: item.item_desc,
      part_no: item.part_no,
      brand: item.brand,
      model: item.model,
      item_unit: item.item_unit,
      perch_price: item.perch_price || 0,
      pay_price: item.pay_price || 0,
      qty: item.quantity < 0 ? Math.abs(item.quantity) : (item.quantity === 0 ? 1 : item.quantity),
      tot: item.pay_price || 0,
      availQty: item.quantity || 0,
      aliasEn: item.aliasEn
      }));

      // Navigate to sales page
      await this.router.navigate(['folder/sales'], {
        queryParams: {
          status: 'newInvoFromItemsPage',
          selectedItemsList: JSON.stringify(salesItems)
        }
      });
    
        // Clear selection
        this.clearSelection();
        // Show loading
     
  }


  ///


 async presentActionPopover(event: any, item: any) {
    // Debug logging
    console.log('presentActionPopover called with item:', item);
    console.log('item.id in presentActionPopover:', item?.id);
    
    this.selectedActionItem = item;
    this.actionPopover.event = event;
    this.isActionPopoverOpen = true;
  }


  viewItemReport(item: any) {
    this.isActionPopoverOpen = false; 
    let navigationExtras: NavigationExtras = {
      queryParams: {
        item: JSON.stringify(item)
      }
    };
   
      this.router.navigate(['folder/items-report'], navigationExtras); 
  }

   editItem(item: any) {
    this.isActionPopoverOpen = false;
    
    // Debug logging to identify the issue
    console.log('editItem called with item:', item);
    console.log('item.id:', item?.id);
    
    // Check if item exists and has an id
    if (!item) {
      this.presentToast('لم يتم العثور على العنصر المحدد', 'danger');
      return;
    }
    
    const itemId = item.id || item.item_id;
    
    if (!itemId) {
      console.error('Item ID not found. Item properties:', Object.keys(item));
      this.presentToast('معرف العنصر غير موجود', 'danger');
      return;
    }
    
    this.presentModal(itemId, 'edit');
  }

   async deleteItemPop(item: any) {
    this.isActionPopoverOpen = false;
    // Add your delete logic here
    // For example:
    const alert = await this.alertController.create({
      header: 'تأكيد الحذف',
      message: 'هل أنت متأكد من حذف هذا العنصر؟',
      buttons: [
        {
          text: 'إلغاء',
          role: 'cancel'
        },
        {
          text: 'حذف',
          handler: () => {
            this.deleteItem(item);
            console.log('Delete item:', item);
          }
        }
      ]
    });
    await alert.present();
  }

    deleteItem(item) {
      //console.log(item)
      this.selectedItem = item
    if (item.salesQuantity > 0 || item.perchQuantity > 0) {
      this.presentToast('لا يمكن حذف الصنف , توجد كميات في المخزون    ' , 'danger')
    } else {
      this.delete()
    }
    }

 
delete(){ 
  this.presentLoadingWithOptions('جاري حذف البيانات ...')
 this.api.deleteItems(this.selectedItem.id).subscribe(data => {
   //console.log(data)
   if (data['message'] != 'Post Not Deleted') {
    this.presentToast('تم الحذف بنجاح' , 'success')
    this.updateItemArrays(this.selectedItem.id , 'delete')
    // this.saveLogHistory(this.selectedItem , undefined ,'delete')  
   // this.getAllStockItems() //this.getStockItems() 
   }else{
    this.presentToast('لم يتم حذف البيانات , خطا في الإتصال حاول مرة اخري' , 'danger') 
   }
  
 },(err) => {
   //console.log(err);
   this.presentToast('لم يتم حذف البيانات , خطا في الإتصال حاول مرة اخري' , 'danger')
   
  },() => {
    this.loadingController.dismiss()
  }) 
}





  //
 
    // Helper function to find item across all table view arrays
    findItemById(id: any): any {
      console.log('findItemById called with id:', id);
      console.log('Current view states:', {
        showSearchView: this.showSearchView,
        showAllItemsView: this.showAllItemsView,
        filterMode: this.filterMode,
        hasActiveFilters: this.hasActiveFilters()
      });
      
      // Try to find in current view first
      if (this.showSearchView && this.searchData && this.searchData.length > 0) {
        console.log('Searching in searchData, length:', this.searchData.length);
        const found = this.searchData.find(x => x.id == id);
        if (found) {
          console.log('Found in searchData:', found);
          return found;
        }
      }
      
      if (this.showAllItemsView && this.allItemsData && this.allItemsData.length > 0) {
        console.log('Searching in allItemsData, length:', this.allItemsData.length);
        const found = this.allItemsData.find(x => x.id == id);
        if (found) {
          console.log('Found in allItemsData:', found);
          return found;
        }
      }
      
      if ((this.filterMode || this.hasActiveFilters()) && this.filterArray && this.filterArray.length > 0) {
        console.log('Searching in filterArray, length:', this.filterArray.length);
        const found = this.filterArray.find(x => x.id == id);
        if (found) {
          console.log('Found in filterArray:', found);
          return found;
        }
      }
      
      if (this.paginatedItems && this.paginatedItems.length > 0) {
        console.log('Searching in paginatedItems, length:', this.paginatedItems.length);
        const found = this.paginatedItems.find(x => x.id == id);
        if (found) {
          console.log('Found in paginatedItems:', found);
          return found;
        }
      }
      
      // Fallback to main arrays
      if (this.items && this.items.length > 0) {
        console.log('Searching in items, length:', this.items.length);
        const found = this.items.find(x => x.id == id);
        if (found) {
          console.log('Found in items:', found);
          return found;
        }
      }
      
      if (this.itemsAll && this.itemsAll.length > 0) {
        console.log('Searching in itemsAll, length:', this.itemsAll.length);
        const found = this.itemsAll.find(x => x.id == id);
        if (found) {
          console.log('Found in itemsAll:', found);
          return found;
        }
      }
      
      console.log('Item not found in any array');
      return null;
    }

    async presentModal(id?, status?) {
      if (id !='null' && status == 'edit') {
         const foundItem = this.findItemById(id);
         
         if (!foundItem) {
           this.presentToast('لم يتم العثور على العنصر المحدد', 'danger');
           return;
         }
         
      //console.log(foundItem);
      this.selectedItem = {
        id: foundItem.id,
        item_desc: foundItem.item_desc,
        model: foundItem.model,
        item_name: foundItem.item_name,
        min_qty: foundItem.min_qty,
        part_no: foundItem.part_no,
        brand: foundItem.brand,
        item_unit: foundItem.item_unit,
        item_parcode: foundItem.item_parcode,
        pay_price: foundItem.pay_price,
        perch_price: foundItem.perch_price,
        aliasEn: foundItem.aliasEn,
      }
      
      // Create firstq object for the modal
      this.firstq = {
        id: foundItem.id,
        item_id: foundItem.id,
        store_id: this.store_info?.id,
        quantity: foundItem.firstQuantity || 0,
        fq_year: this.year?.id,
        pay_price: foundItem.pay_price,
        perch_price: foundItem.perch_price
      }   
      }
     
      
      const modal = await this.modalController.create({
        component: ItemModalPage ,
        componentProps: {
          "item": this.selectedItem,
          "firstq": this.firstq,
          "colSetting": this.colSetting, 
          "filterArrayOrign": this.filterArrayOrign, 
          "filterArray": this.filterArray, 
          "brandList": this.brandList, 
          "modelList": this.modelList,  
          "status": status
        }
      });
      
      modal.onDidDismiss().then((dataReturned) => {
        if (dataReturned !== null) {
          //console.log(dataReturned )
          this.doAfterDissmiss(dataReturned)
        }
      });
   
      return await modal.present(); 
    }


    didDissmis(){
      this.isOpenNotif = false
      //console.log('dismissOver')
    }

    presentPopover(e?: Event) {
      //console.log('preent me', e)
       this.popoverNotif33.event = e;
       this.isOpenNotif = true;  
       this.showNotif = false
     }
   
    prClick(i , item){ 
      if(this.showMe == i){
        console.log(i)
      }else{ 
         this.showMe = i
        this.selectedItem2 = {id:item.id ,item_name:item.item_name ,model:item.model ,part_no:item.part_no  ,min_qty:item.min_qty ,brand:item.brand,pay_price:item.pay_price,perch_price:item.perch_price,item_unit:item.item_unit,item_desc:item.item_desc,item_parcode:item.item_parcode,aliasEn:item.aliasEn , quantity:item.firstQuantity};
      } 
    }
  
    hideMe(i){
      this.showMe = null 
     this.selectedItem2 = {id: null ,item_name:"" ,model:"" ,part_no:""  ,min_qty:0 ,brand:"",pay_price:0,perch_price:0,item_unit:"",item_desc:"",item_parcode:"",aliasEn:"", quantity:0};
    }
 

    update(mdata){ 
       this.presentLoadingWithOptions('جاري تعديل البيانات ...')
       // Remove imageUrl and tax from update data while keeping category_id
       const updateData = { ...mdata[0] } as any;
       if ('imageUrl' in updateData) delete updateData.imageUrl;
       if ('tax' in updateData) delete updateData.tax;
       this.api.updateItem(updateData).subscribe(data => {
       //console.log(data)
       if (data['message'] != 'Post Not Updated') {
        this.presentToast('تم التعديل بنجاح' , 'success')
        this.saveLogHistory(mdata[0] , undefined ,'update') 

            this.resetPaginationAndReload() 
         
       }else{
       this.presentToast('لم يتم حفظ البيانات , خطا في الإتصال حاول مرة اخري' , 'danger') 
       }
      
     }, (err) => {
       //console.log(err);
       this.presentToast('لم يتم حفظ البيانات , خطا في الإتصال حاول مرة اخري' , 'danger')
     },() => {
      this.loadingController.dismiss()
    }) 
    }

  


  doit(){
    //console.log('hi man ')
  }
  
    editCell(i , item){
      this.presentLoadingWithOptions('جاري تعديل البيانات ...')
      
      // Validate input data
      if(this.selectedItem2.perch_price > 0 && this.selectedItem2.pay_price > 0 && this.selectedItem2.item_name != ""){
        
        // Update the item via API
        // Remove imageUrl and tax from inline edit data while keeping category_id
        const editData = { ...this.selectedItem2 } as any;
        if ('imageUrl' in editData) delete editData.imageUrl;
        if ('tax' in editData) delete editData.tax;
        this.api.updateItem(editData).subscribe(data => {
          //console.log(data)
          let res = data 
          if (data['message'] != 'Post Not Updated') { 
            this.updateFirstq(item) 
            this.loadingController.dismiss()
            this.presentToast('تم التعديل بنجاح' , 'success') 
          }else{ 
            this.presentToast('لم يتم  تعديل البيانات , خطا في الإتصال حاول مرة اخري' , 'danger') 
            this.loadingController.dismiss()
          }
          this.hideMe(i)
        }, (err) => {
        //console.log(err);
        this.presentToast('لم يتم حفظ البيانات , خطا في الإتصال حاول مرة اخري' , 'danger')
        this.loadingController.dismiss()
        this.hideMe(i)
      } ,
        ()=>{
        this.hideMe(i)
        this.loadingController.dismiss()
      }
        )   
      }else{
        this.presentToast("خطأ في الإدخال ", "danger")
        this.loadingController.dismiss()
      } 
    }

updateFirstq(item){
  console.log(item) 
  let ft = {
    "item_id":item.id, 
    "quantity":this.selectedItem2.quantity,
    "pay_price":item.pay_price, 
    "perch_price":item.perch_price,
    "store_id":this.store_info.id 
  }
  this.api.updatfiratqtynew(ft).subscribe(data => {
  //console.log(data)
  if (data['message'] != 'Post Not Updated') { 
    this.updateItemArrays(item.id);
  }else{
  this.presentToast('لم يتم تعديل الكمية الإفتتاحية , خطا في الإتصال حاول مرة اخري' , 'danger') 
  this.loadingController.dismiss()
  }
 // this.getAllStockItems() //this.getStockItems() 
}, (err) => {
  //console.log(err);
  this.presentToast('لم يتم حفظ البيانات , خطا في الإتصال حاول مرة اخري' , 'danger')
},() => {
 this.loadingController.dismiss()
})  
}

payChange(i , item){
  console.log(item  )
  this.selectedItem2.perch_price = +item.pay_price - (.15 * +item.pay_price)  
}

updateItemArrays(itemId,status?) {
 // this.presentLoadingWithOptions('جاري تحديث البيانات ...') 
  // Fetch the updated item from the backend
  if(status == 'delete'){
    // splice the item from all arrays 
    const itemIndex = this.items.findIndex(item => item.id === itemId);
    if (itemIndex !== -1) {
      this.items.splice(itemIndex, 1);
    }

    const itemAllIndex = this.itemsAll.findIndex(item => item.id === itemId);
    if (itemAllIndex !== -1) {
      this.itemsAll.splice(itemAllIndex, 1);
    }

    // Update pagination items if exists
    if (this.paginatedItems && this.paginatedItems.length > 0) {
      const paginatedIndex = this.paginatedItems.findIndex(item => item.id === itemId);
      if (paginatedIndex !== -1) {
        this.paginatedItems.splice(paginatedIndex, 1);
      }
    }

    // Update search data if exists  
    if (this.searchData && this.searchData.length > 0) {
      const searchIndex = this.searchData.findIndex(item => item.id === itemId);
      if (searchIndex !== -1) {
        this.searchData.splice(searchIndex, 1);
      }
    }

    // Update all items data if exists
    if (this.allItemsData && this.allItemsData.length > 0) {
      const allItemsIndex = this.allItemsData.findIndex(item => item.id === itemId);
      if (allItemsIndex !== -1) {
        this.allItemsData.splice(allItemsIndex, 1);
      }
    }

    // Update filter array if exists
    if (this.filterArray && this.filterArray.length > 0) {
      const filterIndex = this.filterArray.findIndex(item => item.id === itemId);
      if (filterIndex !== -1) {
        this.filterArray.splice(filterIndex, 1);
      }
    }

    this.storage.set('itemsLocal' , this.items).then((response) => {
      // Storage updated
    }); 

  }else {

 this.api.getItemById(itemId).subscribe(
    (data) => {
      console.log('data in updateItemArrays',data)
      if (data) {
         console.log(data['data']['0'] ,' emArrays')
        const updatedItem = data['data']['0']; 
        
        // Update item in all arrays that contain it
        // Update items array
        const itemIndex = this.items.findIndex(item => item.id === itemId);
        if (itemIndex !== -1) {
          this.items[itemIndex] = { ...this.items[itemIndex], ...updatedItem };
        } 
        
        // Update itemsAll array
        const itemAllIndex = this.itemsAll.findIndex(item => item.id === itemId);
        if (itemAllIndex !== -1) {
          this.itemsAll[itemAllIndex] = { ...this.itemsAll[itemAllIndex], ...updatedItem };
        }

        // Update pagination items if exists
        if (this.paginatedItems && this.paginatedItems.length > 0) {
          const paginatedIndex = this.paginatedItems.findIndex(item => item.id === itemId);
          if (paginatedIndex !== -1) {
            this.paginatedItems[paginatedIndex] = { ...this.paginatedItems[paginatedIndex], ...updatedItem };
          }
        }

        // Update search data if exists  
        if (this.searchData && this.searchData.length > 0) {
          const searchIndex = this.searchData.findIndex(item => item.id === itemId);
          if (searchIndex !== -1) {
            this.searchData[searchIndex] = { ...this.searchData[searchIndex], ...updatedItem };
          }
        }

        // Update all items data if exists
        if (this.allItemsData && this.allItemsData.length > 0) {
          const allItemsIndex = this.allItemsData.findIndex(item => item.id === itemId);
          if (allItemsIndex !== -1) {
            this.allItemsData[allItemsIndex] = { ...this.allItemsData[allItemsIndex], ...updatedItem };
          }
        }

        // Update filter array if exists
        if (this.filterArray && this.filterArray.length > 0) {
          const filterIndex = this.filterArray.findIndex(item => item.id === itemId);
          if (filterIndex !== -1) {
            this.filterArray[filterIndex] = { ...this.filterArray[filterIndex], ...updatedItem };
          }
        }

        this.calculateTotalValue(this.itemsAll)
       console.log(this.itemsAll , 'all items')
        this.storage.set('itemsLocal' , this.itemsAll).then((response) => {
          // Storage updated         
        }); 
       // this.presentToast('تم تحديث البيانات بنجاح', 'success');
      } else {
        //this.presentToast('لم يتم العثور على البيانات المحدثة', 'danger');
      }
    },
    (err) => {
      console.error(err);
      //this.presentToast('حدث خطأ أثناء تحديث البيانات', 'danger');
    },
    () => {
      this.loadingController.dismiss();
    }
  );
  }
 
}





    doAfterDissmiss(data){
      if (data.role == 'edit' ) {
        //console.log('edit' ,data.data)
         this.update(data.data)
      } else if(data.role == 'save') {
        //console.log('save')
        this.save(data.data )  
      }else if(data.role == 'dele') {
        //console.log('dele') 
         this.delete()   
      }else if(data.role == 'price' && data.data.status == 'plus') {
        //console.log('plus') 
        this.incresePrice(data.data) 
      }else if(data.role == 'price' && data.data.status == 'minus') {
        //console.log('plus') 
        this.decreasePrice(data.data) 
      } else if(data.role == 'settings' ) {
        //console.log('settings' , data.data) 
        this.setColSetting(data.data)
     //   this.decreasePrice(data.data) 
      } 
      else if(data.role == 'filter' ) {
        if(data.data[4] == 'filter'){
          //console.log('filter' , data.data) 
          this.applyFilter(data.data)
          this.filterArray = data.data[1]
          this.store_fltTot =  data.data[1].reduce( (acc, obj)=> { return acc + (+obj.perch_price * +obj.quantity ); }, 0);
        }else if(data.data[4] == 'clear'){
          this.removeFilter()
        }   
      } 
    }

      ngOnInit() {
   //   this.loading = true 
      }

    initializeFilterOptions() {
    if (this.filterArrayOrign && this.filterArrayOrign.length > 0) {
      // Extract unique brands
      const uniqueBrands = Array.from(new Set(this.filterArrayOrign.map(item => item.brand)));
      this.availableBrands = uniqueBrands.map(brand => ({
        brand: brand,
        selected: false
      }));

      // Extract unique models
      const uniqueModels = Array.from(new Set(this.filterArrayOrign.map(item => item.model)));
      this.availableModels = uniqueModels.map(model => ({
        model: model,
        selected: false
      }));
    }
  }


  // Brand filter methods
  onBrandSelectionChange(brand: any) {
    if (brand.selected) {
      if (!this.filterState.brand.selectedBrands.includes(brand.brand)) {
        this.filterState.brand.selectedBrands.push(brand.brand);
      }
    } else {
      const index = this.filterState.brand.selectedBrands.indexOf(brand.brand);
      if (index > -1) {
        this.filterState.brand.selectedBrands.splice(index, 1);
      }
    }
    this.updateFilterState();
  }

  toggleBrandSelection(brand: any) {
    brand.selected = !brand.selected;
    this.onBrandSelectionChange(brand);
  }

  applyBrandFilter() {
    this.filterState.brand.isActive = this.filterState.brand.selectedBrands.length > 0;
    this.filterState.brand.isVisible = false;
    this.applyAllFilters();
  }

  clearBrandFilter() {
    this.availableBrands.forEach(brand => brand.selected = false);
    this.filterState.brand.selectedBrands = [];
    this.filterState.brand.isActive = false;
    this.filterState.brand.isVisible = false;
    this.applyAllFilters();
  }

  // Model filter methods
  onModelSelectionChange(model: any) {
    if (model.selected) {
      if (!this.filterState.model.selectedModels.includes(model.model)) {
        this.filterState.model.selectedModels.push(model.model);
      }
    } else {
      const index = this.filterState.model.selectedModels.indexOf(model.model);
      if (index > -1) {
        this.filterState.model.selectedModels.splice(index, 1);
      }
    }
    this.updateFilterState();
  }

  toggleModelSelection(model: any) {
    model.selected = !model.selected;
    this.onModelSelectionChange(model);
  }

  applyModelFilter() {
    this.filterState.model.isActive = this.filterState.model.selectedModels.length > 0;
    this.filterState.model.isVisible = false;
    this.applyAllFilters();
  }

  clearModelFilter() {
    this.availableModels.forEach(model => model.selected = false);
    this.filterState.model.selectedModels = [];
    this.filterState.model.isActive = false;
    this.filterState.model.isVisible = false;
    this.applyAllFilters();
  }

  // Quantity filter methods
  onQuantityFilterTypeChange(event: any) {
    this.filterState.quantity.filterType = event.target.value;
  }

  selectQuantityFilter(type: string) {
    this.filterState.quantity.filterType = type;
    this.filterState.quantity.isActive = true;
    this.updateFilterState();
  }

  applyQuantityFilter() {
    this.filterState.quantity.isActive = true;
    this.filterState.quantity.isVisible = false;
    this.applyAllFilters();
  }

  clearQuantityFilter() {
    this.filterState.quantity.isActive = false;
    this.filterState.quantity.isVisible = false;
    this.filterState.quantity.minQuantity = 0;
    this.filterState.quantity.maxQuantity = 0;
    this.applyAllFilters();
  }

  // Apply all active filters - now uses backend filtering
  applyAllFilters() {
    // Check if any filters are active
    const hasActiveFilters = this.filterState.brand.isActive || 
                           this.filterState.model.isActive || 
                           this.filterState.quantity.isActive;
    
    if (hasActiveFilters) {
      // Use backend filtering
      this.loadFilteredItems();
      this.filterMode = true;
    } else {
      // No filters active, show original data
      if (this.filterArrayOrign && Array.isArray(this.filterArrayOrign)) {
        this.filterArray = [...this.filterArrayOrign];
      } else {
        this.filterArray = [];
      }
      this.filterMode = false;
    }
  }

  // Clear all filters
  clearAllFilters() {
    this.clearBrandFilter();
    this.clearModelFilter();
    this.clearQuantityFilter();
    this.hideAllFilters();
  }

  // Update filter state
  updateFilterState() {
    this.filterState.brand.isActive = this.filterState.brand.selectedBrands.length > 0;
    this.filterState.model.isActive = this.filterState.model.selectedModels.length > 0;
  }

  // Check if any filter is active
  hasActiveFilters(): boolean {
    return this.filterState.brand.isActive || 
           this.filterState.model.isActive || 
           this.filterState.quantity.isActive;
  }


      ionViewDidEnter(){
       
      } 

    ionViewDidLeave(){
      
    } 

    getAppInfo(){ 
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
      this.loading = true
       if (response) {
          this.store_info = response
          //console.log(response)
          //console.log(this.store_info) 
         // Use pagination method directly for initial data loading
        this.showPaginatedView = true;
        this.loadItemsWithPagination();
        this.loadStockTotals(); // Load totals on page load
        
        // Load filter options from backend
        this.loadBrandsFromBackend();
        this.loadModelsFromBackend();
       }
     });

     
    //  this.storage.get('itemsLocal').then((response) => {
    //   if (response) {
    //      this.items = response  
    //     // this.initializeFilterOptions()  
    //   }
    // });
     
      this.storage.get('colSetting').then((response) => {
       if (response) {
         this.colSetting = response;
         // Category functionality removed
       }
       }); 
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

    
    
    createPdf() {
      this.exportMode = true
      let pdfBlock: any = document.getElementById('exceltable');
      let options = {
        background: 'white',
        height: pdfBlock.clientWidth,
        width: pdfBlock.clientHeight,
      };
      domtoimage
        .toPng(pdfBlock, options)
        .then((fileUrl) => {
          var doc = new jsPDF('p', 'mm', 'a4');
          doc.addImage(fileUrl, 'PNG', 10, 10, 240, 180);
          doc.save('items.pdf');

          // let docRes = doc.output();
          // let buffer = new ArrayBuffer(docRes.length);
          // let array = new Uint8Array(buffer);
          // for (var i = 0; i < docRes.length; i++) {
          //   array[i] = docRes.charCodeAt(i);
          // }
          // const directory = this.file.dataDirectory;
          // const fileName = 'user-data.pdf';
          // let options: IWriteOptions = {
          //   replace: true,
          // };
          // this.file
          //   .checkFile(directory, fileName)
          //   .then((res) => {
          //     this.file
          //       .writeFile(directory, fileName, buffer, options)
          //       .then((res) => {
          //         //console.log('File generated' + JSON.stringify(res));
          //         this.fileOpener
          //           .open(this.file.dataDirectory + fileName, 'application/pdf')
          //           .then(() => //console.log('File is exported'))
          //           .catch((e) => //console.log(e));
          //       })
          //       .catch((error) => {
          //         //console.log(JSON.stringify(error));
          //       });
          //   })
          //   .catch((error) => {
          //     this.file
          //       .writeFile(directory, fileName, buffer)
          //       .then((res) => {
          //         //console.log('File generated' + JSON.stringify(res));
          //         this.fileOpener
          //           .open(this.file.dataDirectory + fileName, 'application/pdf')
          //           .then(() => //console.log('File exported'))
          //           .catch((e) => //console.log(e));
          //       })
          //       .catch((error) => {
          //         //console.log(JSON.stringify(error));
          //       });
          //   });
        })
        .catch(function (error) {
          console.error(error);
        });
    }


     openPDF(): void {
      this.exportMode = true
      let DATA: any = document.getElementById('exceltable');
      //console.log(DATA.width)
      html2canvas(DATA).then((canvas) => { 
        let fileWidth = 208;
        let fileHeight = (canvas.height * fileWidth) / canvas.width;
        const FILEURI = canvas.toDataURL('image/png');
        let PDF = new jsPDF('l', 'mm', 'a4');
        let position = 0;
        PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight);
        PDF.save('items.pdf');
        this.exportMode = false
      });
    }


        exportexcel(): void 
        {
          this.exportMode = true
          /* table id is passed over here */   
          let element = document.getElementById('exceltable'); 
          const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);

          /* generate workbook and add the worksheet */
          const wb: XLSX.WorkBook = XLSX.utils.book_new();
          XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

          /* save to file */
          XLSX.writeFile(wb, this.fileName);
          this.exportMode = false
        }
 
  
  getStockItems(){
        console.log('data inrange')
        this.loading = true
        const startRange = (this.currentPage - 1) * this.itemsPerPage + 1;
        const endRange = this.currentPage * this.itemsPerPage; 
        this.api.readStockInrange(startRange,endRange).subscribe(data =>{
          console.log('data inrange',data)
          let res = data
          this.items = res['data'] 
          this.totalItems = this.items[0]['totalCount']
          this.sortingArrayOrign = this.items
         this.totalPages = Math.ceil(this.totalItems / this.itemsPerPage);
      this.prepareFilters()
    // this.store_tot = 0
    // this.store_tot = this.items.reduce( (acc, obj)=> { return acc + (+obj.perch_price * +obj.quantity ); }, 0);
     if(this.colSetting){

     }else{
      this.setColSetting()
     }
        }, (err) => {
        //console.log(err);
      } ,
        ()=>{
        this.loading = false
      }
    )  
   

    //     this.api.getAllStockItemsWithouteCounts(this.store_info.id ,this.year.id).subscribe(data =>{
    //       console.log('data inrange',data)
    //       let res = data
    //       let items = res['data']  
    //       this.storage.set('itemsLocal' , items).then((response) => {
                 
    //       }); 
      
    //   this.prepareFilters()
    //   this.setSortArayy()
    //  this.store_tot = 0
    //  this.store_tot = this.items.reduce( (acc, obj)=> { return acc + (+obj.perch_price * +obj.quantity ); }, 0);
    //  if(this.colSetting){

    //  }else{
    //   this.setColSetting()
    //  }
    //     }, (err) => {
    //     //console.log(err);
    //   } ,
    //     ()=>{
    //     this.loading = false
    //   }
    //     ) 
      
      }

 

// Go to next page
nextPage() {
  if (this.currentPage < this.totalPages) {
    this.currentPage++;
    this.loadItemsWithPagination();
  }
}

// Go to previous page
prevPage() {
  if (this.currentPage > 1) {
    this.currentPage--;
    this.loadItemsWithPagination();
  }
}

// Go to specific page
goToPage(page: number) {
  if (page >= 1 && page <= this.totalPages) {
    this.currentPage = page;
    this.loadItemsWithPagination();
  }
}

// Change items per page
changeItemsPerPage(event) {
  this.itemsPerPage = parseInt(event.detail.value);
  this.currentPage = 1; // Reset to first page
  this.resetPaginationAndReload();
}

// Get page numbers for pagination controls
getPageNumbers(): number[] {
  const pageNumbers = [];
  const maxPagesToShow = 5;
  
  let startPage = Math.max(1, this.currentPage - Math.floor(maxPagesToShow / 2));
  let endPage = startPage + maxPagesToShow - 1;
  
  if (endPage > this.totalPages) {
    endPage = this.totalPages;
    startPage = Math.max(1, endPage - maxPagesToShow + 1);
  }
  
  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }
  
  return pageNumbers;
}


refresh() {
  this.resetPaginationAndReload()
}

// Comprehensive refresh to initial state
refreshToInitialState() {
  // Category functionality removed
  
  // Clear search terms
  this.searchTerm = '';
  this.paginationSearchTerm = '';
  this.brandSearchTerm = '';
  this.modelSearchTerm = '';
  this.searchMode = false;
  
  // Clear all filters
  this.clearAllFilters();
  
  // Reset filter state
  this.filterState = {
    brand: {
      isActive: false,
      isVisible: false,
      selectedBrands: []
    },
    model: {
      isActive: false,
      isVisible: false,
      selectedModels: []
    },
    quantity: {
      isActive: false,
      isVisible: false,
      minQuantity: 0,
      maxQuantity: 0,
      filterType: 'range'
    }
  };
  
  // Reset available filters
  this.availableBrands = [];
  this.availableModels = [];
  this.filteredAvailableBrands = [];
  this.filteredAvailableModels = [];
  
  // Clear selected items
  this.selectedItemsList = [];
  
  // Reset pagination filters
  this.paginationFilters = {};
  this.filterMode = false;
  
  // Reset arrays
  this.searcResult = [];
  this.filterArray = [];
  
  // Reset all items view
  this.showAllItemsView = false;
  this.allItemsData = [];
  this.allItemsStockTotals = { store_tot: 0, cost_tot: 0, items_count: 0 };
  
  // Reset search view
  this.showSearchView = false;
  this.searchData = [];
  this.searchStockTotals = { store_tot: 0, cost_tot: 0, items_count: 0 };
  this.currentSearchTerm = '';
  
  // Reset pagination and reload with totals (for category change)
  this.resetPaginationAndReloadWithTotals();
  
  // Show success message
  this.presentToast('تم إعادة تعيين جميع الإعدادات', 'success');
}



   getAllStockItems(){
          console.log('getAllStockItems')
          this.itemsAll = []
          this.loadingTot = true 
          
          // Category filtering removed - load all items directly
          
          this.api.getAllStockItemsWithouteCounts(this.store_info.id ,this.year.id).subscribe(data =>{
          console.log('data inrange',data)
          let res = data
          let items = res['data']  
          this.itemsAll = items
            
            this.itemsAll.forEach(element => {
              if ((+element.availQty - +element.qtyReal) < 0) {
                element.perchQuantity = +element.perchQuantity + Math.abs((+element.availQty - +element.qtyReal))
              } else if ((+element.availQty - +element.qtyReal) > 0) {
                element.salesQuantity = +element.salesQuantity + (+element.availQty - +element.qtyReal)
              }
              element.quantity = +element.firstQuantity + +element.perchQuantity - +element.salesQuantity
              element.stockValuePayPrice = +element.quantity * +element.pay_price
              element.stockValuePerchPrice = +element.quantity * +element.perch_price
            }) ;

            // this.itemsAll = this.itemsAll.filter(item => item.quantity > 0 || item.quantity < 0); 

             this.calculateTotalValue(this.itemsAll) 
            
              this.storage.set('itemsLocal' , items).then((response) => {
                 
              }); 
       this.loadingTot = true
       this.items = this.itemsAll 
      this.filterArray = this.itemsAll
      this.filterArrayOrign = this.itemsAll 
       this.sortingArrayOrign = this.itemsAll
       
       // Apply current sort if any
       if (this.currentSort.column && this.currentSort.direction) {
         this.filterArray = this.sortArray([...this.filterArray], this.currentSort.column, this.currentSort.direction);
         this.items = this.sortArray([...this.items], this.currentSort.column, this.currentSort.direction);
       }
      //this.prepareFilters()
        
        this.initializeFilterOptions()
   //  this.store_tot = this.items.reduce( (acc, obj)=> { return acc + (+obj.perch_price * +obj.quantity ); }, 0);
     if(this.colSetting){

     }else{
      this.setColSetting()
     }
        }, (err) => {
        //console.log(err);
        this.loadingTot = false
      } ,
        ()=>{
        this.loadingTot = false
      }
        )  
   }

   calculateTotalValue(item) {
     
              
              this.store_tot = item.reduce( (acc, obj)=> { return acc + + Math.abs(obj.stockValuePayPrice) ; }, 0);
              
              this.cost_tot = item.reduce( (acc, obj)=> { return acc + + Math.abs(obj.stockValuePerchPrice) ; }, 0);
              
   }


 

 
setColSetting(data?){
      if(data){
        this.colSetting = data
        //console.log("col",this.colSetting)
        this.storage.set('colSetting', this.colSetting).then((response) => {
          
        }); 
      }   
  }

   prepareFilters(){
      const idsbrand = this.items.map(o => o.brand)
      //console.log(idsbrand)
      const filtered = this.items.filter(({brand}, index) => !idsbrand.includes(brand, index + 1))
      //console.log(filtered)
     for (let index = 0; index < filtered.length; index++) {
      const element = filtered[index];
      if (element.brand !="") {
        this.brandList.push({
        "brand":element.brand,
        "selected": false 
       }) 
       this.availableBrands.push({
        "brand":element.brand,
        "selected": false 
       }) 
      }
     }
     //console.log(this.brandList)


      const idsm = this.items.map(o => o.model)
      //console.log(idsm)
      const filteredm = this.items.filter(({model}, index) => !idsm.includes(model, index + 1))
      //console.log(filteredm)
      for (let index = 0; index < filteredm.length; index++) {
        const element = filteredm[index];
        if (element.model !="") { 
        this.modelList.push({
          "model":element.model,
          "selected": false 
        })

        this.availableModels.push({
          "model":element.model,
          "selected": false 
        })
      }
       } 
     //console.log(this.modelList) 
     this.filterArrayOrign = this.items
     this.filterArray = this.filterArrayOrign
     //console.log(this.filterArray ,  this.filterArrayOrign)

   }

 
 
  // New efficient sorting system
  sortData(column: string) {
    // Toggle sort direction
    if (this.currentSort.column === column) {
      this.currentSort.direction = this.currentSort.direction === 'asc' ? 'desc' : 'asc';
    } else {
      this.currentSort.column = column;
      this.currentSort.direction = 'asc';
    }

    // Apply sort to all table views
    this.applySortToAllViews(column, this.currentSort.direction);
  }

  private applySortToAllViews(column: string, direction: 'asc' | 'desc') {
    // Sort the main items array (used by older tables)
    if (this.items && this.items.length > 0) {
      this.items = this.sortArray([...this.items], column, direction);
    }

    // Sort pagination items
    if (this.paginatedItems && this.paginatedItems.length > 0) {
      this.paginatedItems = this.sortArray([...this.paginatedItems], column, direction);
    }

    // Sort all items view
    if (this.allItemsData && this.allItemsData.length > 0) {
      this.allItemsData = this.sortArray([...this.allItemsData], column, direction);
    }

    // Sort search results
    if (this.searchData && this.searchData.length > 0) {
      this.searchData = this.sortArray([...this.searchData], column, direction);
    }

    // Sort filtered items
    if (this.filterArray && this.filterArray.length > 0) {
      this.filterArray = this.sortArray([...this.filterArray], column, direction);
    }
  }

  private sortArray(array: any[], column: string, direction: 'asc' | 'desc'): any[] {
    return array.sort((a, b) => {
      let valueA = this.getSortValue(a, column);
      let valueB = this.getSortValue(b, column);

      // Handle null/undefined values
      if (valueA == null) valueA = '';
      if (valueB == null) valueB = '';

      // Handle numeric columns
      if (this.isNumericColumn(column)) {
        valueA = +valueA || 0;
        valueB = +valueB || 0;
      } else {
        // String comparison
        valueA = String(valueA).toLowerCase();
        valueB = String(valueB).toLowerCase();
      }

      if (valueA < valueB) {
        return direction === 'asc' ? -1 : 1;
      }
      if (valueA > valueB) {
        return direction === 'asc' ? 1 : -1;
      }
      return 0;
    });
  }

  private getSortValue(item: any, column: string): any {
    switch (column) {
      case 'id': return item.id;
      case 'item_name': return item.item_name;
      case 'item_desc': return item.item_desc;
      case 'aliasEn': return item.aliasEn;
      case 'model': return item.model;
      case 'part_no': return item.part_no;
      case 'brand': return item.brand;
      case 'min_qty': return item.min_qty;
      case 'item_unit': return item.item_unit;
      case 'perch_price': return item.perch_price;
      case 'pay_price': return item.pay_price;
      case 'profit': return this.calculateProfit(item);
      case 'quantity': return item.quantity;
      case 'total': return item.stockValuePayPrice;
      case 'lastSold': return item.lastSoldDate;
      default: return '';
    }
  }

  private isNumericColumn(column: string): boolean {
    const numericColumns = ['id', 'min_qty', 'perch_price', 'pay_price', 'profit', 'quantity', 'total'];
    return numericColumns.includes(column);
  }

  calculateProfit(item: any): number {
    const payPrice = +item.pay_price;
    const perchPrice = +item.perch_price;
    
    if (!payPrice || !perchPrice || perchPrice === 0) {
      return 0;
    }
    
    return ((payPrice - perchPrice) / perchPrice) * 100;
  }

  getSortIcon(column: string): string {
    if (this.currentSort.column !== column) {
      return 'swap-vertical-outline';
    }
    return this.currentSort.direction === 'asc' ? 'chevron-up-outline' : 'chevron-down-outline';
  }


  applyFilter(data){
    this.filterMode = true
    this.modelList = data[2]
    this.brandList = data[3]
    //console.log( this.modelList , this.brandList ,data )
    this.modelList.forEach(element => {
      if (element.selected== true){
        this.showMdel = true
      }
    });

    this.brandList.forEach(element => {
      if (element.selected== true){
        this.showBrand = true
      }
    });
   }
 
  setFilter(){
    this.filterArray = this.items
    let flt :Array<any> = []
    for (let index = 0; index < this.brandList.length; index++) {
      const element = this.brandList[index];
      if (element.selected == true) {
        let fltbre:Array<any>= [] 
        fltbre =   this.filterArray.filter(x=> x.brand == element.brand)
        if(fltbre.length>0){
          fltbre.forEach(element => {
            flt.push(element)
          });
        }

      } 
    }


    for (let index = 0; index < this.modelList.length; index++) {
      const element = this.modelList[index];
      if (element.selected == true) {
        let fltbre:Array<any>= [] 
        fltbre =   this.filterArray.filter(x=> x.model == element.model)
        if(fltbre.length>0){
          fltbre.forEach(element => {
            flt.push(element)
          });
        }
      }
    }
    this.filterArray = flt
    
    // Apply current sort if any
    if (this.currentSort.column && this.currentSort.direction) {
      this.filterArray = this.sortArray([...this.filterArray], this.currentSort.column, this.currentSort.direction);
    }
    
    this.store_fltTot = flt.reduce( (acc, obj)=> { return acc + (+obj.perch_price * +obj.quantity ); }, 0);
    //console.log( 'store_fltTot',this.store_fltTot)
  }

   removeFilter(type?){
   this.presentLoadingWithOptions('....')
     if (type =='model') {
      this.modelList.forEach(element => {
        element.selected = false
      });
       this.setFilter()
     }else if(type =='brand'){
      this.brandList.forEach(element => {
        element.selected = false
      });
      this.setFilter()
     }else{
      this.modelList.forEach(element => {
        element.selected = false
      });
      this.brandList.forEach(element => {
        element.selected = false
      });
      this.setFilter()
     }

    
     let bl = 0 
     for (let index = 0; index < this.brandList.length; index++) {
      const element = this.brandList[index];
      if (element.selected== true){
       bl = bl+1
      }
     }
     if (bl>0) {
      this.showBrand = true
     }else{
      this.showBrand = false 
     }

     let bl2 = 0 
     for (let index = 0; index < this.modelList.length; index++) {
      const element = this.modelList[index];
      if (element.selected== true){
       bl2 = bl2+1
      }
     }
     if (bl2>0) {
      this.showMdel = true
     }else{
      this.showMdel = false 
     }

     if (bl == 0 && bl2 == 0){
      this.filterArray = this.items
      this.filterMode = false
     }

     // Apply current sort if any
     if (this.currentSort.column && this.currentSort.direction) {
       this.filterArray = this.sortArray([...this.filterArray], this.currentSort.column, this.currentSort.direction);
     }

     this.store_fltTot = this.filterArray.reduce( (acc, obj)=> { return acc + (+obj.perch_price * +obj.quantity ); }, 0);
     //console.log( 'store_fltTot',this.store_fltTot)

   this.loadingController.dismiss()
   }

   filterItems(searchTerm) {
     //console.log(searchTerm)  
     this.searcResult = this.itemsAll.filter(item => item.item_name.toLowerCase().includes(searchTerm.toLowerCase())) 
     //console.log(this.searcResult) 
    }

   searching($event){
    if (this.searchTerm.length > 0) {
      this.searchMode = true
      console.log($event , this.itemsAll) 
    } else{
      this.searchMode = false
      
    }
   }
    
  // clearSearch(){
  //    //console.log('clear')
  //    this.searchMode = false
  //   // this.searcResult = []
  //  }
 
//  FocusSearch(){
//     //console.log('FocusSearch')
//     this.searchMode = true 
//     this.searcResult = []
// }	

    cancelSearch(){
      //console.log('cancelSearch' ,this.items)
      this.searchMode = false
      this.searcResult = []
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

   save(mdata){ 
       this.presentLoadingWithOptions('جاري حفظ البيانات ...')
       // Remove imageUrl and tax from save data while keeping category_id
       const saveData = { ...mdata[0] } as any;
       if ('imageUrl' in saveData) delete saveData.imageUrl;
       if ('tax' in saveData) delete saveData.tax;
       this.api.saveItem(saveData).subscribe(data => {
        //console.log(data)
        if (data['message'] != 'Post Not Created') { 
          this.firstq = {id:null ,item_id:data['message'] , store_id:this.store_info.id , quantity :mdata[1].quantity ,pay_price:mdata[0].pay_price,perch_price:mdata[0].perch_price ,fq_year:'2022'}
          this.saveFierstQty(mdata[0])
        }else{
          this.presentToast('لم يتم حفظ البيانات , خطا في الإتصال حاول مرة اخري' , 'danger') 
        }
       
      }, (err) => {
        //console.log(err);
        this.presentToast('لم يتم حفظ البيانات , خطا في الإتصال حاول مرة اخري' , 'danger')
      }) 
   }

  async saveFierstQty(itemData){  
    this.api.saveFirstQty(this.firstq).subscribe(data=>{ 
      //console.log(data)  
      if (data['message'] != 'Post Not Created') { 
        this.firstq.id = data['message']
      }
      this.saveLogHistory(itemData , this.firstq ,'insert')
      this.presentToast('تم الحفظ','success')

    }, (err) => {
      //console.log(err);
      this.presentToast('1لم يتم حفظ البيانات , خطا في الإتصال حاول مرة اخري' , 'danger')
     
      this.loadingController.dismiss()
   
    }, () => {
      this.loadingController.dismiss()
    }
    )      
  }

  generateRandom(role):any{
    let da = new Date 
    //console.log(da)
    let randomsNumber = da.getMonth().toString() + da.getDay().toString() + da.getHours().toString()+ da.getMinutes().toString()+da.getSeconds().toString()+da.getMilliseconds().toString() + role
    return this.store_info.store_ref + randomsNumber 
  }

    prepareLogHistory(itemData , firstq , role){
     this.logHistoryArr = []
    let dt = new Date()
    let typee = "" 
      if(role == 'insert'){
        typee = "insert firstq"
          itemData.id = firstq.item_id
        this.logHistoryArr.push(
          {
            "id":this.firstq.id,
            "logRef":this.generateRandom(typee),
            "userId": this.user_info.id,
            "typee":typee,
            "datee": momentObj(dt).locale('en').format('YYYY-MM-DD HH:mm:ss'),
            "logStatus":0,
            "logToken": JSON.stringify(firstq)  ,
            "yearId": this.year.id,
            "store_id" :this.store_info.id
          }
          )

          typee = "insert item"
          this.logHistoryArr.push(
            {
              "id":null,
              "logRef":this.generateRandom(typee),
              "userId":this.user_info.id,
              "typee":typee,
              "datee": momentObj(dt).locale('en').format('YYYY-MM-DD HH:mm:ss'),
              "logStatus":0,
              "logToken":JSON.stringify(itemData)  ,
              "yearId":this.year.id,
              "store_id":this.store_info.id
            }
            )
      } else {
       // typee = "insert firstq"
        // firstq.item_id =  itemData.id 
        // this.logHistoryArr.push(
        //   {
        //     "id":this.firstq.id,
        //     "logRef":this.generateRandom(),
        //     "userId": this.user_info.id,
        //     "typee":typee,
        //     "datee": momentObj(dt).locale('en').format('YYYY-MM-DD HH:mm:ss'),
        //     "logStatus":0,
        //     "logToken": JSON.stringify(firstq)  ,
        //     "yearId": this.year.id,
        //     "store_id" :this.store_info.id
        //   }
        //   )
        if(role == 'update' ){
          typee = "update item" 
        }else if(role == 'delete' ){
          typee = "delete item" 
        }
          this.logHistoryArr.push(
            {
              "id":null,
              "logRef":this.generateRandom(typee),
              "userId":this.user_info.id,
              "typee":typee,
              "datee": momentObj(dt).locale('en').format('YYYY-MM-DD HH:mm:ss'),
              "logStatus":0,
              "logToken":JSON.stringify(itemData)  ,
              "yearId":this.year.id,
              "store_id":this.store_info.id
            }
            )
          }
        return this.logHistoryArr
       }

   saveLogHistory(itemData , firstq , role){  
    let mdata =  this.prepareLogHistory(itemData , firstq , role) 
    //console.log('mdata',mdata)
    this.api.saveLogHistoryMulti(mdata[0] ,mdata[1],role).subscribe(data => {
     //console.log(data)
     if (data['message'] != 'Post Not Created') { 
       this.resetPaginationAndReload()
       this.logHistoryArr =[]
     }else{
       this.presentToast('لم يتم حفظ البيانات , خطا في الإتصال حاول مرة اخري' , 'danger') 
     } 
   }, (err) => {
     //console.log(err);
     this.presentToast('لم يتم حفظ البيانات , خطا في الإتصال حاول مرة اخري' , 'danger')
   }) 
   }


  async saveItemStock(){  
    this.api.saveItemStock(this.itemSstock).subscribe(data=>{ 
      //console.log(data)  
     // this.getAllStockItems() //this.getStockItems()
      this.presentToast('تم الحفظ بنجاح' , 'success')
    }, (err) => {
      //console.log(err);
      this.presentToast('لم يتم حفظ البيانات , خطا في الإتصال حاول مرة اخري' , 'danger')
    }, () => {
      this.loadingController.dismiss()
    }
    )      
  }





incresePrice(data){ 
  this.presentLoadingWithOptions('جاري تعديل الأسعار ...')
 this.api.increasePrice(data.payval,data.perchval).subscribe(data => {
   //console.log(data)
   if (data['message'] != 'Post Not Updated') {
    this.presentToast('تم التعديل بنجاح' , 'success') 
    //this.getAllStockItems() //this.getStockItems()
   }else{
   this.presentToast('لم يتم حفظ البيانات , خطا في الإتصال حاول مرة اخري' , 'danger') 

   } 
 }, (err) => {
   //console.log(err);
   this.presentToast('لم يتم حفظ البيانات , خطا في الإتصال حاول مرة اخري' , 'danger')
 },() => {
  this.loadingController.dismiss()
}) 
}

  decreasePrice(data){ 
  this.presentLoadingWithOptions('جاري تعديل الأسعار ...')
  this.api.decreasePrice(data.payval,data.perchval).subscribe(data => {
    //console.log(data)
    if (data['message'] != 'Post Not Updated') {
      this.presentToast('تم التعديل بنجاح' , 'success') 
      this.resetPaginationAndReload()
    }else{
    this.presentToast('لم يتم حفظ البيانات , خطا في الإتصال حاول مرة اخري' , 'danger') 

    }
  }, (err) => {
    //console.log(err);
    this.presentToast('لم يتم حفظ البيانات , خطا في الإتصال حاول مرة اخري' , 'danger')
  },() => {
    this.loadingController.dismiss()
  }) 
  }




  calculateTotals() {
    this.store_tot = 0;
    this.cost_tot = 0; 
    this.itemsAll.forEach(element => {
      this.store_tot += element.stockValuePayPrice;
      this.cost_tot += element.stockValuePerchPrice;
    });
  }

  // Pagination methods
  loadItemsWithPagination() {
    console.log('loadItemsWithPagination')
    if (this.paginationLoading) return; 
    this.paginationLoading = true;
    this.loadingTot = true; 
    
    console.log('loadItemsWithPagination - no filters applied');
    
    this.api.getStockItemsWithPagination(
      this.store_info.id,
      this.paginationCurrentPage,
      this.paginationPageSize
    ).subscribe(
      data => {
        console.log('Paginated items response:', data); 
        if (data && data.data) {
          if (this.paginationCurrentPage === 1) {
            // First page - replace existing items
            this.paginatedItems = data.data;
          } else {
            // Subsequent pages - append to existing items
            this.paginatedItems = [...this.paginatedItems, ...data.data];
          }
          
          // Apply current sort to new data (only for first page to maintain sort order)
          if (this.paginationCurrentPage === 1 && this.currentSort.column && this.currentSort.direction) {
            this.paginatedItems = this.sortArray([...this.paginatedItems], this.currentSort.column, this.currentSort.direction);
          }
          
          // Update pagination info
          this.paginationHasMore = data.pagination?.hasMore || false;
          
          // Update stock totals if provided
          if (data.totals) {
            this.paginationStockTotals = data.totals;
          }
        }
        
        this.paginationLoading = false;
        this.loadingTot = false;
      },
      error => {
        console.error('Error loading paginated items:', error);
        this.presentToast('خطأ في تحميل البيانات', 'danger');
        this.paginationLoading = false;
        this.loadingTot = false;
      }
    );
  }
   
  loadMoreItems() {
    if (this.paginationHasMore && !this.paginationLoading) {
      this.paginationCurrentPage++;
      this.loadItemsWithPagination();
    }
  }
  
  resetPaginationAndReload() {
    this.paginationCurrentPage = 1;
    this.paginatedItems = [];
    this.paginationHasMore = false;
    this.loadItemsWithPagination();
    // Note: totals are only loaded on category changes, not on search/filter resets
  }

  // Reset pagination and reload totals (for category changes)
  resetPaginationAndReloadWithTotals() {
    this.paginationCurrentPage = 1;
    this.paginatedItems = [];
    this.paginationHasMore = false;
    this.loadItemsWithPagination();
    this.loadStockTotals(); // Load totals when category changes
  }
  
  onPaginationSearchChange(event: any) {
    const searchTerm = event.target.value || '';
    this.searchSubject.next(searchTerm);
  }
  
  setPaginationFilter(filterType: string, filterValue: any) {
    this.paginationFilters[filterType] = filterValue;
    this.resetPaginationAndReload();
  }
  
  clearPaginationFilters() {
    this.paginationFilters = {};
    this.resetPaginationAndReload();
  }
  
  togglePaginatedView() {
    this.showPaginatedView = !this.showPaginatedView;
    
    if (this.showPaginatedView) {
      // Switch to paginated view
      this.resetPaginationAndReload();
    } else {
      // Switch back to regular view
      this.resetPaginationAndReload();
    }
  }

  // Load stock totals separately
  loadStockTotals() {
    console.log('Loading stock totals...');
    if (this.loadingStockTotals) return;
    
    this.loadingStockTotals = true;

    this.api.getStockTotals(
      this.store_info.id,
      this.year.id
    ).subscribe(
      data => {
        console.log('Stock totals response:', data);
        if (data && data.data) {
          this.stockValuePayPrice = parseFloat(data.data.stockValuePayPrice) || 0;
          this.stockValuePerchPrice = parseFloat(data.data.stockValuePerchPrice) || 0;
        } else {
          this.stockValuePayPrice = 0;
          this.stockValuePerchPrice = 0;
        }
        this.loadingStockTotals = false;
      },
      error => {
        console.error('Error loading stock totals:', error);
        this.presentToast('خطأ في تحميل إجمالي المخزون', 'danger');
        this.loadingStockTotals = false;
        this.stockValuePayPrice = 0;
        this.stockValuePerchPrice = 0;
      }
    );
  }
  

  // Load filtered items without pagination
  loadFilteredItems() {
    console.log('loadFilteredItems');
    this.loading = true;
    
    // Prepare filters for API call
    const filters = {
      brand: this.filterState.brand.selectedBrands.join(',') || '',
      model: this.filterState.model.selectedModels.join(',') || '',
      quantity_filter: this.filterState.quantity.isActive ? this.filterState.quantity.filterType : ''
    };
    
    console.log('loadFilteredItems - filters:', filters);
    
    this.api.getFilteredStockItems(
      this.store_info.id,
      this.year.id,
      filters
    ).subscribe(
      data => {
        console.log('Filtered items response:', data);
        if (data && data.data) {
          // Use filterArray for filtered results (this will display in filter mode)
          this.filterArray = data.data;
          
          // Apply current sort if any
          if (this.currentSort.column && this.currentSort.direction) {
            this.filterArray = this.sortArray([...this.filterArray], this.currentSort.column, this.currentSort.direction);
          }
          
          // Calculate totals for filtered items
          this.store_tot = 0;
          this.cost_tot = 0;
          this.filterArray.forEach(element => {
            this.store_tot += element.stockValuePayPrice || 0;
            this.cost_tot += element.stockValuePerchPrice || 0;
          });
        } else {
          this.filterArray = [];
          this.store_tot = 0;
          this.cost_tot = 0;
        }
        
        this.loading = false;
      },
      error => {
        console.error('Error loading filtered items:', error);
        this.presentToast('خطأ في تحميل البيانات المفلترة', 'danger');
        this.loading = false;
        this.filterArray = [];
        this.store_tot = 0;
        this.cost_tot = 0;
      }
    );
  }

  // Load brands and models from backend
  loadBrandsFromBackend() {
    if (!this.store_info?.id || !this.year?.id) {
      console.log('Store info or year not available yet');
      return;
    }
    
    this.api.getUniqueBrands(this.store_info.id, this.year.id).subscribe(
      data => {
        if (data && data.data) {
          this.availableBrands = data.data.map((brand: any) => ({
            brand: brand.brand,
            selected: false,
            count: brand.count || 0
          }));
          this.filteredAvailableBrands = [...this.availableBrands];
        }
      },
      error => {
        console.error('Error loading brands:', error);
      }
    );
  }

  loadModelsFromBackend() {
    if (!this.store_info?.id || !this.year?.id) {
      console.log('Store info or year not available yet');
      return;
    }
    
    // Load models optionally filtered by selected brands
    const selectedBrands = this.filterState.brand.selectedBrands.join(',');
    this.api.getUniqueModels(this.store_info.id, this.year.id, selectedBrands).subscribe(
      data => {
        if (data && data.data) {
          this.availableModels = data.data.map((model: any) => ({
            model: model.model,
            selected: false,
            count: model.count || 0
          }));
          this.filteredAvailableModels = [...this.availableModels];
        }
      },
      error => {
        console.error('Error loading models:', error);
      }
    );
  }

  // Brand search functionality
  onBrandSearchInput(event: any) {
    const searchTerm = event.target.value.toLowerCase();
    this.brandSearchTerm = searchTerm;
    
    if (!searchTerm.trim()) {
      this.filteredAvailableBrands = [...this.availableBrands];
    } else {
      this.filteredAvailableBrands = this.availableBrands.filter(brand =>
        brand.brand.toLowerCase().includes(searchTerm)
      );
    }
  }

  // Model search functionality
  onModelSearchInput(event: any) {
    const searchTerm = event.target.value.toLowerCase();
    this.modelSearchTerm = searchTerm;
    
    if (!searchTerm.trim()) {
      this.filteredAvailableModels = [...this.availableModels];
    } else {
      this.filteredAvailableModels = this.availableModels.filter(model =>
        model.model.toLowerCase().includes(searchTerm)
      );
    }
  }

  // Filter toggle methods
  toggleBrandFilter() {
    this.hideAllFilters();
    this.filterState.brand.isVisible = !this.filterState.brand.isVisible;
    if (this.filterState.brand.isVisible) {
      this.loadBrandsFromBackend();
    }
  }

  toggleModelFilter() {
    this.hideAllFilters();
    this.filterState.model.isVisible = !this.filterState.model.isVisible;
    if (this.filterState.model.isVisible) {
      this.loadModelsFromBackend();
    }
  }

  toggleQuantityFilter() {
    this.hideAllFilters();
    this.filterState.quantity.isVisible = !this.filterState.quantity.isVisible;
  }

  hideBrandFilter() {
    this.filterState.brand.isVisible = false;
  }

  hideModelFilter() {
    this.filterState.model.isVisible = false;
  }

  hideQuantityFilter() {
    this.filterState.quantity.isVisible = false;
  }

  hideAllFilters() {
    this.filterState.brand.isVisible = false;
    this.filterState.model.isVisible = false;
    this.filterState.quantity.isVisible = false;
  }

  // Quantity filter radio group change handler
  onQuantityFilterChange(event: any) {
    this.filterState.quantity.filterType = event.detail.value;
  }

  // All Items functionality
  toggleAllItemsView() {
    this.showAllItemsView = !this.showAllItemsView;
    
    if (this.showAllItemsView) {
      // Reset filters and search before showing all items
      this.resetFiltersAndSearch();
      this.loadAllItems();
    } else {
      // Return to pagination view
      this.showPaginatedView = true;
    }
  }

  private resetFiltersAndSearch() {
    // Clear any active filters
    if (this.hasActiveFilters()) {
      this.clearAllFilters();
    }
    
    // Clear any active search
    if (this.showSearchView || this.searchTerm) {
      this.clearSearch();
    }

    // Reset filter mode
    this.filterMode = false;
    
    // Ensure we're in a clean state
    this.showSearchView = false;
    this.showPaginatedView = false; // Will be set to true in loadAllItems if needed
  }

  loadAllItems() {
    if (!this.store_info?.id) {
      this.presentToast('معلومات المتجر غير متوفرة', 'danger');
      return;
    }

    this.loadingAllItems = true;
    this.allItemsData = [];
    
    this.api.getAllStockItems(this.store_info.id).subscribe({
      next: (data: any) => {
        console.log('All items data:', data);
        
        if (data && data.data) {
          this.allItemsData = data.data;
          
          // Process each item (same as existing logic)
          this.allItemsData.forEach(element => {
            if ((+element.availQty - +element.qtyReal) < 0) {
              element.perchQuantity = +element.perchQuantity + Math.abs((+element.availQty - +element.qtyReal));
            } else if ((+element.availQty - +element.qtyReal) > 0) {
              element.salesQuantity = +element.salesQuantity + (+element.availQty - +element.qtyReal);
            }
            element.quantity = +element.firstQuantity + +element.perchQuantity - +element.salesQuantity;
            element.stockValuePayPrice = +element.quantity * +element.pay_price;
            element.stockValuePerchPrice = +element.quantity * +element.perch_price;
          });
          
          // Set totals
          this.allItemsStockTotals = data.totals || { store_tot: 0, cost_tot: 0, items_count: 0 };
          
          // Apply current sort if any
          if (this.currentSort.column && this.currentSort.direction) {
            this.allItemsData = this.sortArray([...this.allItemsData], this.currentSort.column, this.currentSort.direction);
          }
          
          this.presentToast(`تم تحميل ${this.allItemsData.length} صنف بنجاح`, 'success');
        } else {
          this.allItemsData = [];
          this.allItemsStockTotals = { store_tot: 0, cost_tot: 0, items_count: 0 };
          this.presentToast('لا توجد أصناف', 'warning');
        }
        
        this.loadingAllItems = false;
      },
      error: (err) => {
        console.error('Error loading all items:', err);
        this.loadingAllItems = false;
        this.presentToast('خطأ في تحميل الأصناف', 'danger');
      }
    });
  }

  // Return to pagination view
  returnToPaginationView() {
    this.showAllItemsView = false;
    this.showPaginatedView = true;
    this.allItemsData = [];
    this.allItemsStockTotals = { store_tot: 0, cost_tot: 0, items_count: 0 };
  }

  // Search functionality
  onSearchChange(event: any) {
    const searchTerm = event.detail.value || event.target.value;
    this.searchTerm = searchTerm;
    
    if (searchTerm && searchTerm.trim().length >= 2) {
      this.performSearch(searchTerm.trim());
    } else if (searchTerm.trim().length === 0) {
      this.clearSearch();
    }
  }

  performSearch(searchTerm: string) {
    if (!this.store_info?.id || !searchTerm || searchTerm.trim().length < 2) {
      return;
    }

    console.log('Starting search for:', searchTerm);
    
    // Clear other views and set search view
    this.showSearchView = true;
    this.showAllItemsView = false;
    this.showPaginatedView = false;
    this.searchMode = false; // Clear any existing search mode
    
    // Set loading and search states
    this.loadingSearch = true;
    this.currentSearchTerm = searchTerm;
    this.searchData = [];
    
    console.log('Search view state:', {
      showSearchView: this.showSearchView,
      showAllItemsView: this.showAllItemsView,
      showPaginatedView: this.showPaginatedView,
      searchMode: this.searchMode
    });
    
    this.api.searchStockItems(this.store_info.id, searchTerm).subscribe({
      next: (data: any) => {
        console.log('Search results:', data);
        
        if (data && data.data) {
          this.searchData = data.data;
          
          // Process each item (same as existing logic)
          this.searchData.forEach(element => {
            if ((+element.availQty - +element.qtyReal) < 0) {
              element.perchQuantity = +element.perchQuantity + Math.abs((+element.availQty - +element.qtyReal));
            } else if ((+element.availQty - +element.qtyReal) > 0) {
              element.salesQuantity = +element.salesQuantity + (+element.availQty - +element.qtyReal);
            }
            element.quantity = +element.firstQuantity + +element.perchQuantity - +element.salesQuantity;
            element.stockValuePayPrice = +element.quantity * +element.pay_price;
            element.stockValuePerchPrice = +element.quantity * +element.perch_price;
          });
          
          // Set totals
          this.searchStockTotals = data.totals || { store_tot: 0, cost_tot: 0, items_count: 0 };
          
          // Apply current sort if any
          if (this.currentSort.column && this.currentSort.direction) {
            this.searchData = this.sortArray([...this.searchData], this.currentSort.column, this.currentSort.direction);
          }
          
          if (this.searchData.length > 0) {
            this.presentToast(`تم العثور على ${this.searchData.length} صنف`, 'success');
          } else {
            this.presentToast(`لا توجد نتائج للبحث عن "${searchTerm}"`, 'warning');
          }
        } else {
          this.searchData = [];
          this.searchStockTotals = { store_tot: 0, cost_tot: 0, items_count: 0 };
          this.presentToast(`لا توجد نتائج للبحث عن "${searchTerm}"`, 'warning');
        }
        
        this.loadingSearch = false;
        console.log('Search completed. Final state:', {
          showSearchView: this.showSearchView,
          searchDataLength: this.searchData.length,
          loadingSearch: this.loadingSearch
        });
      },
      error: (err) => {
        console.error('Error searching items:', err);
        this.loadingSearch = false;
        this.presentToast('خطأ في البحث', 'danger');
      }
    });
  }

  clearSearch() {
    console.log('Clearing search...');
    this.showSearchView = false;
    this.showPaginatedView = true;
    this.searchData = [];
    this.searchStockTotals = { store_tot: 0, cost_tot: 0, items_count: 0 };
    this.currentSearchTerm = '';
    this.searchTerm = '';
    console.log('Search cleared. New state:', {
      showSearchView: this.showSearchView,
      showPaginatedView: this.showPaginatedView
    });
  }

}