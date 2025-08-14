import { Injectable } from '@angular/core';
import { BehaviorSubject, from, Observable } from 'rxjs';
import { HttpClient, HttpHeaders , HttpParams } from '@angular/common/http';
import { Platform } from '@ionic/angular';
import { Storage } from '@ionic/storage';
//import { environment } from '../environments/environment';
import { map, switchMap, tap } from 'rxjs/operators';
//import { Storage } from '@ionic/storage';


@Injectable({
  providedIn: 'root'
})


 export class ServicesService {
//  api = 'http://localhost/myapi/myapi/api/'
    //api :any =  'https://retail3.gvstech.net/myapi/api/'
    //   api :any =  'https://erpagric.gvstech.net/myapiAi/api/'
     //  api :any =  'https://erp.gvstech.net/myapi/api/'
    api :any =  'https://erp.gvstech.net/myapiAi/api/' // Default API endpoint
//  api :any =  'https://retail.gvstech.net/myapiAi/api/'
  currentEndpoint: string = '' // Current selected endpoint from category
  categories: any[] = [] // Cached categories
  selectedCategory: any = null // Currently selected category
  year : {id:any ,yearDesc:any ,yearStart :any,yearEnd:any}
  folderNo:any=''
  public Notifications: BehaviorSubject<Array<any>> = new BehaviorSubject([]);
  public EndpointChanged: BehaviorSubject<string> = new BehaviorSubject('');

  constructor(private storage: Storage,public http: HttpClient ) {
    //  this.api = 'https://erp.hosamdev.com/myapi'+ this.folderNo +'/api/'
     // this.setCurrentYear()
    console.log('ServicesService constructor - Initial API:', this.api);
    this.initializeEndpoint();
   }


  async setCurrentYear(){
    await this.storage.create(); 
    this.storage.get('year').then((response) => {
      if (response) {
        this.year = response 
        if(this.year.id == 1){
          this.folderNo = ''
          this.api = 'https://erp.hosamdev.com/myapi'+ this.folderNo +'/api/' 
        }else{
          this.folderNo = '23'
          this.api = 'https://erp.hosamdev.com/myapi'+ this.folderNo +'/api/'
        }
      }
    });
    }
 // Category Management Methods - Enhanced for endpoint switching
 getCategories(store_id?: any) {
  let params = new HttpParams()
  if (store_id) {
    params = params.append('store_id', store_id)
  }
  console.log('getCategories API URL:', this.api + 'item_categories/read.php');
  return this.http.get(this.api + 'item_categories/read.php', {params: params})
}

// Initialize endpoint from local storage
async initializeEndpoint() {
  await this.storage.create();
  
  // Check if default category is set in local storage
  const savedCategoryId = await this.storage.get('SELECTED_CATEGORY_ID');
  const savedCategories = await this.storage.get('CACHED_CATEGORIES');
  const savedEndpoint = await this.storage.get('SELECTED_ENDPOINT');
  
  if (savedCategories) {
    this.categories = savedCategories;
  }
  
  if (savedCategoryId && savedEndpoint) {
    // Validate and format endpoint URL
    let endpointUrl = savedEndpoint.trim();
    
    // Check if it's a valid URL
    if (endpointUrl.startsWith('http://') || endpointUrl.startsWith('https://')) {
      // Ensure endpoint URL ends with a slash
      if (!endpointUrl.endsWith('/')) {
        endpointUrl += '/';
      }
      
      this.currentEndpoint = endpointUrl;
      this.api = this.currentEndpoint;
      console.log('API endpoint initialized to:', this.api);
      this.selectedCategory = this.categories.find(cat => cat.id == savedCategoryId);
      this.EndpointChanged.next(this.currentEndpoint);
    }
  } else {
    // If no category is set, fetch categories from backend
    this.fetchAndCacheCategories();
  }
}

// Fetch categories and save to local storage
fetchAndCacheCategories(store_id?: any): Promise<any[]> {
  return new Promise((resolve, reject) => {
    this.getCategories(store_id).subscribe(
      data => {
        if (data && data['data']) {
          this.categories = data['data'];
          this.storage.set('CACHED_CATEGORIES', this.categories);
          resolve(this.categories);
        } else {
          this.categories = [];
          resolve([]);
        }
      },
      error => {
        console.error('Error fetching categories:', error);
        this.categories = [];
        resolve([]);
      }
    );
  });
}

// Get cached categories from local storage
async getCachedCategories() {
  await this.storage.create();
  const cachedCategories = await this.storage.get('CACHED_CATEGORIES');
  if (cachedCategories) {
    this.categories = cachedCategories;
    return cachedCategories;
  }
  return [];
}

// Set current endpoint based on category
async setEndpointFromCategory(categoryId: any) {
  await this.storage.create();
  
  // Make sure we have categories loaded
  if (this.categories.length === 0) {
    await this.getCachedCategories();
  }
  
  const category = this.categories.find(cat => cat.id == categoryId);
  if (category && category.category_desc) {
    // Validate and format endpoint URL
    let endpointUrl = category.category_desc.trim();
    
    // Check if it's a valid URL
    if (!endpointUrl.startsWith('http://') && !endpointUrl.startsWith('https://')) {
      return {
        success: false,
        message: 'Endpoint URL must start with http:// or https://'
      };
    }
    
    // Ensure endpoint URL ends with a slash
    if (!endpointUrl.endsWith('/')) {
      endpointUrl += '/';
    }
    
    this.currentEndpoint = endpointUrl;
    this.api = this.currentEndpoint;
    console.log('API endpoint set to:', this.api);
    this.selectedCategory = category;
    
    // Save to local storage
    await this.storage.set('SELECTED_CATEGORY_ID', categoryId);
    await this.storage.set('SELECTED_ENDPOINT', this.currentEndpoint);
    await this.storage.set('SELECTED_CATEGORY', category);
    
    // Emit endpoint change event
    this.EndpointChanged.next(this.currentEndpoint);
    
    return {
      success: true,
      endpoint: this.currentEndpoint,
      category: category
    };
  }
  
  return {
    success: false,
    message: 'Category not found or no endpoint URL specified'
  };
}

// Get current endpoint
getCurrentEndpoint(): string {
  return this.currentEndpoint || this.api;
}

// Get selected category
getSelectedCategory(): any {
  return this.selectedCategory;
}

// Clear endpoint and reset to default
async clearEndpoint() {
  await this.storage.create();
  
  // Remove from local storage
  await this.storage.remove('SELECTED_CATEGORY_ID');
  await this.storage.remove('SELECTED_ENDPOINT');
  await this.storage.remove('SELECTED_CATEGORY');
  
  // Reset to default
  this.currentEndpoint = '';
  this.api = 'https://erp.gvstech.net/myapiAi/api/';
  this.selectedCategory = null;
  
  // Emit endpoint change event
  this.EndpointChanged.next('');
}

// Reload application after endpoint change
reloadApplication() {
  window.location.reload();
}

  getPayNotif(store_id){ 
    let params = new HttpParams() 
    params=params.append('store_id' , store_id)
    return this.http.get(this.api+'pay/paynotif.php',{params: params})
  }

  getFirstQty(store_id){
    let params = new HttpParams() 
    params=params.append('store_id' , store_id)
    return this.http.get(this.api+'firstq/readByStore.php',{params: params})
  }

  getItems(){
    return this.http.get(this.api+'items/read.php')
  }

  getStores(){
    return this.http.get(this.api+'store/read.php')
  }

  getCompany(){
    return this.http.get(this.api+'company/read.php')
  }


  getBrands(){
    return this.http.get(this.api+'items/readBrand.php')
  }

  getAllLogHistory(store_id , yearId ){ 
    let params = new HttpParams() 
    params=params.append('store_id' , +store_id)
    params=params.append('yearId' , +yearId) 
    return this.http.get(this.api+'logHistory/readAllByStore.php',{params: params})
  }
  
  truncateItems(){
    return this.http.get(this.api+'items/truncateItems.php')
  }

  // stockItems(store_id , yearId){ 
  //   let params = new HttpParams() 
  //   params=params.append('store_id' , store_id) 
  //   params=params.append('yearId' , yearId)

  //   return this.http.get(this.api+'items/readStock.php',{params: params})
  // }

   stockItems(store_id , yearId){ 
    let params = new HttpParams() 
    params=params.append('store_id' , store_id) 
    params=params.append('yearId' , yearId)
    return this.http.get(this.api+'items/itemsView.php')
  }

  getAllStockItemsWithouteCounts(store_id , yearId){ 
     let params = new HttpParams() 
     params=params.append('store_id' , store_id) 
     params=params.append('yearId' , yearId)
    return this.http.get(this.api+'items/readAllStockItems.php',{params: params})
  }

  readStockInrange( startrange ,endrange){ 
    let params = new HttpParams() 
    params = params.append('endrange' , endrange)
    params = params.append('startrange' , startrange)
    return this.http.get(this.api+'items/readStockInrange.php',{params: params})
  }

  readStockInRangeForStoretot( startrange ,endrange){ 
    let params = new HttpParams() 
    params = params.append('endrange' , endrange)
    params = params.append('startrange' , startrange)
    return this.http.get(this.api+'items/readStockInRangeForStoretot.php',{params: params})
  }

  stockItems2(store_id ,yearId){ 
    let params = new HttpParams() 
    params=params.append('store_id' , store_id)
    params=params.append('yearId' , yearId)
    return this.http.get('https://erp.hosamdev.com/myapi23/api/items/readStock.php',{params: params})
  }
  
  getToptswia(store_id,yearId){ 
    let params = new HttpParams() 
    params=params.append('store_id' , store_id)
    params=params.append('yearId' , yearId)
    return this.http.get(this.api+'tswia/getTopSales.php',{params: params})
  }

  getTopSales(store_id,yearId){ 
    let params = new HttpParams() 
    params=params.append('store_id' , store_id)
    params=params.append('yearId' , yearId)
    return this.http.get(this.api+'pay/getTopSales.php',{params: params})
  }

  
  getTopSalesInit(store_id){ 
    let params = new HttpParams() 
    params=params.append('store_id' , store_id)
    return this.http.get(this.api+'payinit/getTopSales.php',{params: params})
  }

  getItemPaysByItemIdBydate(store_id , item_id,from,yearId){ 
    let params = new HttpParams() 
    params=params.append('store_id' , store_id)
    params=params.append('item_id' , item_id)
    params=params.append('from' , from)
    params=params.append('yearId' , yearId)
    return this.http.get(this.api+'pay_details/readAllByItemIdDate.php',{params: params})
  }

  getItemPaysBydate(store_id ,from,yearId){ 
    let params = new HttpParams() 
    params=params.append('store_id' , store_id) 
    params=params.append('from' , from)
    params=params.append('yearId' , yearId)
    return this.http.get(this.api+'pay_details/readAllByDate.php',{params: params})
  }
  
  
  getItemPaysByItemId(store_id , item_id,yearId){ 
    let params = new HttpParams() 
    params=params.append('store_id' , store_id)
    params=params.append('item_id' , item_id) 
    params=params.append('yearId' , yearId) 
    return this.http.get(this.api+'pay_details/readAllByItemId.php',{params: params})
  }

  getItemQtyPaysByItemId(store_id , item_id,yearId){ 
    let params = new HttpParams() 
    params=params.append('store_id' , store_id)
    params=params.append('item_id' , item_id) 
    params=params.append('yearId' , yearId) 
    return this.http.get(this.api+'pay_details/readQtyByItemId.php',{params: params})
  }

   readItemByIdQty(store_id , item_id,yearId){ 
    let params = new HttpParams() 
    params=params.append('store_id' , store_id)
    params=params.append('id' , item_id) 
    return this.http.get(this.api+'items/readItemByIdQty.php',{params: params})
  }
 
  
  getItemPaysByItemIdBy2date(store_id , item_id ,from ,to,yearId){ 
    let params = new HttpParams() 
    params=params.append('store_id' , store_id)
    params=params.append('item_id' , item_id) 
    params=params.append('from' , from) 
    params=params.append('to' , to) 
    params=params.append('yearId' , yearId)

    return this.http.get(this.api+'pay_details/readAllByItemId2Date.php',{params: params})
  }

  //purch
  getItemTswiaByItemIdBy2date(store_id , item_id ,from ,to,yearId){ 
    let params = new HttpParams() 
    params=params.append('store_id' , store_id)
    params=params.append('item_id' , item_id) 
    params=params.append('from' , from) 
    params=params.append('to' , to) 
    params=params.append('yearId' , yearId) 
    return this.http.get(this.api+'tswia_details/readAllByItemId2Date.php',{params: params})
  }
  //purch
  getItemPurchByItemIdBy2date(store_id , item_id ,from ,to,yearId){ 
    let params = new HttpParams() 
    params=params.append('store_id' , store_id)
    params=params.append('item_id' , item_id) 
    params=params.append('from' , from) 
    params=params.append('to' , to) 
    params=params.append('yearId' , yearId) 
    return this.http.get(this.api+'perch_details/readAllByItemId2Date.php',{params: params})
  }


  getItemPurchByItemId(store_id , item_id,yearId){ 
    let params = new HttpParams() 
    params=params.append('store_id' , store_id)
    params=params.append('item_id' , item_id) 
    params=params.append('yearId' , yearId)

    return this.http.get(this.api+'perch_details/readAllByItemId.php',{params: params})
  }

  getQtyPurchByItemId(store_id , item_id,yearId){ 
    let params = new HttpParams() 
    params=params.append('store_id' , store_id)
    params=params.append('item_id' , item_id) 
    params=params.append('yearId' , yearId) 
    return this.http.get(this.api+'perch_details/readQtyByItemId.php',{params: params})
  }


  getQtyTswiaByItemId(store_id , item_id,yearId){ 
    let params = new HttpParams() 
    params=params.append('store_id' , store_id)
    params=params.append('item_id' , item_id) 
    params=params.append('yearId' , yearId) 
    return this.http.get(this.api+'tswia_details/readQtyByItemId.php',{params: params})
  }

  getItemTswiaByItemId(store_id , item_id,yearId){ 
    let params = new HttpParams() 
    params=params.append('store_id' , store_id)
    params=params.append('item_id' , item_id) 
    params=params.append('yearId' , yearId) 
    return this.http.get(this.api+'tswia_details/readAllByItemId.php',{params: params})
  }


  getItemPurchsByItemIdBydate(store_id , item_id,from ,yearId){ 
    let params = new HttpParams() 
    params=params.append('store_id' , store_id)
    params=params.append('item_id' , item_id)
    params=params.append('from' , from)
    params=params.append('yearId' , yearId)

    return this.http.get(this.api+'perch_details/readAllByItemIdDate.php',{params: params})
  }

  getItemPurchsBydate(store_id ,from ,yearId){ 
    let params = new HttpParams() 
    params=params.append('store_id' , store_id) 
    params=params.append('from' , from)
    params=params.append('yearId' , yearId) 
    return this.http.get(this.api+'perch_details/readAllByDate.php',{params: params})
  }

  getItemTswiasByItemIdBydate(store_id , item_id,from ,yearId){ 
    let params = new HttpParams() 
    params=params.append('store_id' , store_id)
    params=params.append('item_id' , item_id)
    params=params.append('from' , from)
    params=params.append('yearId' , yearId)
    return this.http.get(this.api+'tswia_details/readAllByItemIdDate.php',{params: params})
  }
  getItemTswiasBydate(store_id ,  from ,yearId){ 
    let params = new HttpParams() 
    params=params.append('store_id' , store_id) 
    params=params.append('from' , from)
    params=params.append('yearId' , yearId)
    return this.http.get(this.api+'tswia_details/readAllByDate.php',{params: params})
  }

  getTopInvoice(store_id ,yearId){ 
    let params = new HttpParams() 
    params=params.append('store_id' , store_id)
    params=params.append('yearId' , yearId)
    return this.http.get(this.api+'invoices/getTopSales.php',{params: params})
  }

  getInvoiceByDate(store_id,from ,yearId){ 
    let params = new HttpParams() 
    params=params.append('store_id' , store_id)
    params=params.append('from' , from)
    params=params.append('yearId' , yearId)
    return this.http.get(this.api+'invoices/getSalesByDate.php',{params: params})
  }

  getInvoice2Date(store_id,from,to,yearId){ 
    let params = new HttpParams() 
    params=params.append('store_id' , store_id)
    params=params.append('from' , from)
    params=params.append('to' , to)
    params=params.append('yearId' , yearId)
    return this.http.get(this.api+'invoices/getSales2Date.php',{params: params})
  }


  ////
  
  getTopJournale(store_id,yearId){ 
    let params = new HttpParams() 
    params=params.append('store_id' , store_id)
  params=params.append('yearId' , yearId) 

    return this.http.get(this.api+'journal/getTopSales.php',{params: params})
  }

  getJournaleByDate(store_id,from,yearId){ 
    let params = new HttpParams() 
    params=params.append('store_id' , store_id)
    params=params.append('from' , from)
  params=params.append('yearId' , yearId) 

    return this.http.get(this.api+'journal/getSalesByDate.php',{params: params})
  }

  getJournale2Date(store_id,from,to,yearId){ 
    let params = new HttpParams() 
    params=params.append('store_id' , store_id)
    params=params.append('from' , from)
    params=params.append('to' , to)
  params=params.append('yearId' , yearId) 

    return this.http.get(this.api+'journal/getSales2Date.php',{params: params})
  }
///
getTopJfrom(store_id ,yearId){ 
  let params = new HttpParams() 
  params=params.append('store_id' , store_id)
  params=params.append('yearId' , yearId) 

  return this.http.get(this.api+'jdetails_from/getTopSales.php',{params: params})
}

getJFromByDate(store_id,from ,yearId){ 
  let params = new HttpParams() 
  params=params.append('store_id' , store_id)
  params=params.append('from' , from)
  params=params.append('yearId' , yearId) 

  return this.http.get(this.api+'jdetails_from/getSalesByDate.php',{params: params})
}

getJFrom2Date(store_id,from,to,yearId){ 
  let params = new HttpParams() 
  params=params.append('store_id' , store_id)
  params=params.append('from' , from)
  params=params.append('to' , to)
  params=params.append('yearId' , yearId) 

  return this.http.get(this.api+'jdetails_from/getSales2Date.php',{params: params})
}
  ///
  
getTopJTo(store_id,yearId){ 
  let params = new HttpParams() 
  params=params.append('store_id' , store_id)
  params=params.append('yearId' , yearId) 
  return this.http.get(this.api+'jdetails_to/getTopSales.php',{params: params})
}

getJToByDate(store_id,from,yearId){ 
  let params = new HttpParams() 
  params=params.append('store_id' , store_id)
  params=params.append('from' , from)
  params=params.append('yearId' , yearId) 

  return this.http.get(this.api+'jdetails_to/getSalesByDate.php',{params: params})
}

getJTo2Date(store_id,from,to ,yearId){ 
  let params = new HttpParams() 
  params=params.append('store_id' , store_id)
  params=params.append('from' , from)
  params=params.append('to' , to)
  params=params.append('yearId' , yearId) 
  return this.http.get(this.api+'jdetails_to/getSales2Date.php',{params: params})
}
///

getTswiaByDate(store_id,from ,yearId){ 
  let params = new HttpParams() 
  params=params.append('store_id' , store_id)
  params=params.append('from' , from)
  params=params.append('yearId' , yearId) 

  return this.http.get(this.api+'tswia/getSalesByDate.php',{params: params})
}
  getSalesByDate(store_id,from ,yearId){ 
    let params = new HttpParams() 
    params=params.append('store_id' , store_id)
    params=params.append('from' , from)
    params=params.append('yearId' , yearId) 

    return this.http.get(this.api+'pay/getSalesByDate.php',{params: params})
  }
  
  getTswia2Date(store_id,from,to ,yearId){ 
    let params = new HttpParams() 
    params=params.append('store_id' , store_id)
    params=params.append('from' , from)
    params=params.append('to' , to)
    params=params.append('yearId' , yearId)  
    return this.http.get(this.api+'tswia/getSales2Date.php',{params: params})
  }

  getSales2Date(store_id,from,to ,yearId){ 
    let params = new HttpParams() 
    params=params.append('store_id' , store_id)
    params=params.append('from' , from)
    params=params.append('to' , to)
    params=params.append('yearId' , yearId) 

    return this.http.get(this.api+'pay/getSales2Date.php',{params: params})
  }

  getTopPerch(store_id ,yearId){ 
    let params = new HttpParams() 
     params=params.append('store_id' , store_id)
    params=params.append('yearId' , yearId) 

    return this.http.get(this.api+'perch/getTopSales.php',{params: params})
  }
  getTopOrderPerch(store_id){ 
    let params = new HttpParams() 
    params=params.append('store_id' , store_id)
    return this.http.get(this.api+'perchOrder/getTopSales.php',{params: params})
  }


  
  getBalanceSubAccount(store_id,yearId){ 
    let params = new HttpParams() 
    params=params.append('store_id' , store_id)
    params=params.append('yearId' , yearId)
    return this.http.get(this.api+'sub_accounts/balanceSheetByStore.php',{params: params})
  }

  // New comprehensive balance sheet API
  getComprehensiveBalanceSheet(store_id: any, year_id: any) {
    let params = new HttpParams()
    params = params.append('store_id', store_id)
    params = params.append('year_id', year_id)
    return this.http.get(this.api + 'sub_accounts/getComprehensiveBalanceSheet.php', {params: params})
  }


  getPerchByDate(store_id,from ,yearId){ 
    let params = new HttpParams() 
    params=params.append('store_id' , store_id)
    params=params.append('from' , from)
    params=params.append('yearId' , yearId) 
    return this.http.get(this.api+'perch/getSalesByDate.php',{params: params})
  }


  getPerch2Date(store_id,from,to ,yearId){ 
    let params = new HttpParams() 
    params=params.append('store_id' , store_id)
    params=params.append('from' , from)
     params=params.append('to' , to)
    params=params.append('yearId' , yearId) 
    return this.http.get(this.api+'perch/getSales2Date.php',{params: params})
  }
  
  getPayInvoDetail(store_id,pay_ref,yearId){ 
    let params = new HttpParams() 
    params=params.append('store_id' , store_id)
    params=params.append('yearId' , yearId)
    params=params.append('pay_ref' , pay_ref)
    return this.http.get(this.api+'pay_details/readByStoreByRef.php',{params: params})
  }

  getTswiaInvoDetail(store_id,pay_ref,yearId){ 
    let params = new HttpParams() 
    params=params.append('store_id' , store_id)
    params=params.append('yearId' , yearId)
    params=params.append('pay_ref' , pay_ref)
    return this.http.get(this.api+'tswia_details/readByStoreByRef.php',{params: params})
  }

  getPayInvoDetailinit(store_id,pay_ref){ 
    let params = new HttpParams() 
    params=params.append('store_id' , store_id)
    params=params.append('pay_ref' , pay_ref)
    return this.http.get(this.api+'payinit_details/readByStoreByRef.php',{params: params})
  }
  
  getPerchInvoDetail(store_id,pay_ref ,yearId){ 
    let params = new HttpParams() 
    params=params.append('store_id' , store_id)
    params=params.append('pay_ref' , pay_ref)
    params=params.append('yearId' , yearId)
    return this.http.get(this.api+'perch_details/readByStoreByRef.php',{params: params})
  }

  getPerchOrderInvoDetail(store_id,pay_ref){ 
    let params = new HttpParams() 
    params=params.append('store_id' , store_id)
    params=params.append('pay_ref' , pay_ref) 
    return this.http.get(this.api+'perchOrder_details/readByStoreByRef.php',{params: params})
  }
  getAllPerchDetail(store_id , yearId){ 
    let params = new HttpParams() 
    params=params.append('store_id' , store_id)
    params=params.append('yearId' , yearId)
    return this.http.get(this.api+'perch_details/readAllByStore.php',{params: params})
  }
  getAllTswiaDetail(store_id , yearId){ 
    let params = new HttpParams() 
    params=params.append('store_id' , store_id)
    params=params.append('yearId' , yearId)
    return this.http.get(this.api+'tswia_details/readAllByStore.php',{params: params})
  }

  getAllSalesDetail(store_id, yearId){ 
    let params = new HttpParams() 
    params=params.append('yearId' , yearId)
    params=params.append('store_id' , store_id)
    return this.http.get(this.api+'pay_details/readAllByStore.php',{params: params})
  }



  getExpnsesAccounts(store_id , yearId){ 
    let ac_id = 3
    let params = new HttpParams() 
    params=params.append('store_id' , store_id)
    params= params.append('ac_id' , ac_id) 
    params= params.append('yearId' , yearId) 
    return this.http.get(this.api+'sub_accounts/readByStore.php',{params: params})
  }



  getMainAccounts( ){   
    return this.http.get(this.api+'accounts/readByStore.php' )
  }

  getAllAccounts(store_id ,yearId){  
    let params = new HttpParams() 
    params=params.append('store_id' , store_id) 
    params=params.append('yearId' , yearId) 
    return this.http.get(this.api+'sub_accounts/readAllStore.php',{params: params})
  }

  // Get accounts with pagination and balance calculations
  getAccountsWithBalance(store_id: any, yearId: any, page: number = 1, pageSize: number = 20, searchTerm: string = '', filters: any = {}): Observable<any> {
    let params = new HttpParams() 
    params = params.append('store_id', store_id) 
    params = params.append('yearId', yearId) 
    params = params.append('page', page.toString()) 
    params = params.append('pageSize', pageSize.toString())
    
    console.log('Service getAccountsWithBalance called with searchTerm:', searchTerm);
    console.log('Service getAccountsWithBalance called with filters:', filters);
    
    if (searchTerm && searchTerm.trim() !== '') {
      params = params.append('search', searchTerm.trim())
      console.log('Added search parameter:', searchTerm.trim());
    } else {
      console.log('No search parameter added (empty or null search term)');
    }
    
    // Add filter parameters
    if (filters.cat_name && filters.cat_name.trim() !== '') {
      params = params.append('cat_name', filters.cat_name.trim());
      console.log('Added cat_name filter:', filters.cat_name.trim());
    }
    
    if (filters.balance_type && filters.balance_type.trim() !== '') {
      params = params.append('balance_type', filters.balance_type.trim());
      console.log('Added balance_type filter:', filters.balance_type.trim());
    }
    
    if (filters.sub_type && filters.sub_type.trim() !== '') {
      params = params.append('sub_type', filters.sub_type.trim());
      console.log('Added sub_type filter:', filters.sub_type.trim());
    }
    
    if (filters.has_balance === true) {
      params = params.append('has_balance', '1');
      console.log('Added has_balance filter: true');
    }
    
    console.log('Final API URL:', this.api+'sub_accounts/readWithBalance.php');
    console.log('Final params:', params.toString());
    
    return this.http.get(this.api+'sub_accounts/readWithBalance.php', {params: params})
  }

  // Get accounts with POSITIVE balance only - separate endpoint for cleaner logic
  getAccountsWithPositiveBalance(store_id: any, yearId: any, page: number = 1, pageSize: number = 20, searchTerm: string = '', filters: any = {}): Observable<any> {
    let params = new HttpParams() 
    params = params.append('store_id', store_id) 
    params = params.append('yearId', yearId) 
    params = params.append('page', page.toString()) 
    params = params.append('pageSize', pageSize.toString())
    
    console.log('Service getAccountsWithPositiveBalance called with searchTerm:', searchTerm);
    console.log('Service getAccountsWithPositiveBalance called with filters:', filters);
    
    if (searchTerm && searchTerm.trim() !== '') {
      params = params.append('search', searchTerm.trim())
      console.log('Added search parameter:', searchTerm.trim());
    }
    
    // Add filter parameters (excluding has_balance since this endpoint is specifically for positive balance)
    if (filters.cat_name && filters.cat_name.trim() !== '') {
      params = params.append('cat_name', filters.cat_name.trim());
      console.log('Added cat_name filter:', filters.cat_name.trim());
    }
    
    if (filters.balance_type && filters.balance_type.trim() !== '') {
      params = params.append('balance_type', filters.balance_type.trim());
      console.log('Added balance_type filter:', filters.balance_type.trim());
    }
    
    if (filters.sub_type && filters.sub_type.trim() !== '') {
      params = params.append('sub_type', filters.sub_type.trim());
      console.log('Added sub_type filter:', filters.sub_type.trim());
    }
    
    console.log('Final API URL:', this.api+'sub_accounts/readWithBalancePositive.php');
    console.log('Final params:', params.toString());
    
    return this.http.get(this.api+'sub_accounts/readWithBalancePositive.php', {params: params})
  }

  // Get detailed balance for a specific account
  getAccountBalance(account_id: any, store_id: any, yearId: any): Observable<any> {
    let params = new HttpParams() 
    params = params.append('account_id', account_id) 
    params = params.append('store_id', store_id) 
    params = params.append('yearId', yearId) 
    return this.http.get(this.api+'sub_accounts/getAccountBalance.php', {params: params})
  }
  
  getAccountCategory(store_id){  
    let params = new HttpParams() 
    params=params.append('store_id' , store_id) 
    return this.http.get(this.api+'account_category/readByStore.php',{params: params})
  }

  getJournalType(store_id){  
    let params = new HttpParams() 
    params=params.append('store_id' , store_id) 
    return this.http.get(this.api+'j_type/readByStore.php',{params: params})
  }

  getJournalTypeDetails(store_id){  
    let params = new HttpParams() 
    params=params.append('store_id' , store_id) 
    return this.http.get(this.api+'j_typeDetails/readByStoreByRef.php',{params: params})
  }

  getSalesAccounts(store_id ,yearId){ 
    let ac_id = 1
    let params = new HttpParams() 
    params=params.append('store_id' , store_id)
    params= params.append('ac_id' , ac_id) 
    params= params.append('yearId' , yearId) 
    return this.http.get(this.api+'sub_accounts/readByStore.php',{params: params})
  }

  getPerchAccounts(store_id,yearId){ 
    let ac_id = 2
    let params = new HttpParams() 
    params=params.append('store_id' , store_id)
    params= params.append('ac_id' , ac_id) 
    params= params.append('yearId' , yearId) 
    return this.http.get(this.api+'sub_accounts/readByStore.php',{params: params})
  }

  getAllCustomerSupplierAccounts(store_id, yearId) {
    let params = new HttpParams()
    params = params.append('store_id', store_id)
    params = params.append('yearId', yearId)
    const fullUrl = this.api + 'sub_accounts/getAllCustomerSupplier.php';
    console.log('getAllCustomerSupplierAccounts URL:', fullUrl);
    console.log('Current API base:', this.api);
    return this.http.get(fullUrl, {params: params})
  }

  getYear( ){  
    return this.http.get(this.api+'year/readByStoreByRef.php')
  }


  login(user){ 
    //console.log(user)
    let params = new HttpParams() 
    params= params.append('user_name' , user.user_name )
    params= params.append('password' , user.password)
    params=params.append('store_id' , user.store_id)
    params=params.append('level' , 'user')
    return this.http.get(this.api+'users/login.php',{params: params})
  }

  saveTswiaInvo(payInvo){
    return this.http.post(this.api+'tswia/create.php', 
     payInvo
     )
  }


  saveSalesInvo(payInvo){
    return this.http.post(this.api+'pay/create.php', 
     payInvo
     )
  }
  saveSalesInvoInit(payInvo){
    return this.http.post(this.api+'payinit/create.php', 
     payInvo
     )
  }

  uploadItems(file){
    //console.log(file)
    return this.http.post(this.api+'uploadXsl.php', 
     file
     )
  }

  uploadFq(file){
    //console.log(file)
    return this.http.post(this.api+'uploadXslFristq.php', 
     file
     )
  }

  upload2(file):Observable<any> {
  
    // Create form data
    const formData = new FormData(); 
      
    // Store form name as "file" with file data
    formData.append("file", file, file.name);
      
    // Make http post request over api
    // with formData as req
    return this.http.post(this.api+'uploadXsl.php', formData)
}
 

  saveExpenseInvo(payInvo){
    return this.http.post(this.api+'invoices/create.php', 
     payInvo
     )
  }

  saveJournal(payInvo){
    return this.http.post(this.api+'journal/create.php', 
     payInvo
     )
  }
  updateTswiaInvo(payInvo){
    return this.http.post(this.api+'tswia/update.php', 
     payInvo
     )
  }
  updateSalesInvo(payInvo){
    return this.http.post(this.api+'pay/update.php', 
     payInvo
     )
  }

  updateInitSalesInvo(payInvo){
    return this.http.post(this.api+'payinit/update.php', 
     payInvo
     )
  }

  deleteTswiaInvo(pay_id){
    let params = new HttpParams() 
    params= params.append('pay_id' , pay_id )
      return this.http.delete(this.api+'tswia/delete.php', {params: params})
  }

  deleteSalesInvo(pay_id){
    let params = new HttpParams() 
    params= params.append('pay_id' , pay_id )
      return this.http.delete(this.api+'pay/delete.php', {params: params})
    }

    deleteSalesInvoInit(pay_id){
      let params = new HttpParams() 
      params= params.append('pay_id' , pay_id )
        return this.http.delete(this.api+'payinit/delete.php', {params: params})
      }
    deleteJournal(j_ref){
      let params = new HttpParams() 
      params= params.append('j_ref' , j_ref )
        return this.http.delete(this.api+'journal/deleteMultiServices.php', {params: params})
      }

    deleteFristq(store_id,fq_year){
      let params = new HttpParams() 
      params= params.append('store_id' , store_id )
      params= params.append('fq_year' , fq_year )
        return this.http.delete(this.api+'firstq/deleteByStore.php', {params: params})
      }

    savePerchInvo(payInvo){
      return this.http.post(this.api+'perch/create.php', 
       payInvo
       )
    }
    savePerchOrderInvo(payInvo){
      return this.http.post(this.api+'perchOrder/create.php', 
       payInvo
       )
    }
  
    updatePerchInvo(payInvo){
      return this.http.post(this.api+'perch/update.php', 
       payInvo
       )
    }
  
     deletePerchInvo(pay_id){
      let params = new HttpParams() 
      params= params.append('pay_id' , pay_id )
        return this.http.delete(this.api+'perch/delete.php', {params: params})
      }

      updatePerchOrderInvo(payInvo){
        return this.http.post(this.api+'perchOrder/update.php', 
         payInvo
         )
      }
    
       deletePerchOrderInvo(pay_id){
        let params = new HttpParams() 
        params= params.append('pay_id' , pay_id )
          return this.http.delete(this.api+'perchOrder/delete.php', {params: params})
        }
    
  

  saveSubAccount(sub_account){
    return this.http.post(this.api+'sub_accounts/create.php', 
      sub_account
     )
  }

  updateSubAccount(payInvo){
    return this.http.post(this.api+'sub_accounts/update.php', 
     payInvo
     )
  }

  deleteSubAccont(id){ 
    let params = new HttpParams() 
    params=params.append('id' , id)
    return this.http.get(this.api+'sub_accounts/delete.php',{params: params})
  }
  
  checkAccountUsage(account_id){ 
    let params = new HttpParams() 
    params=params.append('account_id' , account_id)
    return this.http.get(this.api+'sub_accounts/checkUsage.php',{params: params})
  }

  getStatementWithBalance(store_id: any, year_id: any, account_id: any, options: any = {}) {
    let params = new HttpParams()
    params = params.append('store_id', store_id)
    params = params.append('year_id', year_id)
    params = params.append('account_id', account_id)
    
    // Add optional search parameters (no filters)
    if (options.search_type !== undefined) {
      params = params.append('search_type', options.search_type.toString())
    }
    if (options.start_date) {
      params = params.append('start_date', options.start_date)
    }
    if (options.end_date) {
      params = params.append('end_date', options.end_date)
    }
    if (options.page) {
      params = params.append('page', options.page.toString())
    }
    if (options.limit) {
      params = params.append('limit', options.limit.toString())
    }
    
    return this.http.get(this.api+'sub_accounts/getStatementWithBalance.php', {params: params})
  }

  createMultiAccount(accountList){
    accountList= JSON.stringify(accountList) 
    return this.http.post(this.api+'sub_accounts/createMulti.php',
    accountList
    )
  }

  createAccount(accountList){ 
    return this.http.post(this.api+'sub_accounts/create.php',
    accountList
    )
  }

  
  saveItem(item){
    return this.http.post(this.api+'items/create.php', 
     item
     )
  }
  

  getItemById(id) {
  let params = new HttpParams()
  params = params.append('id', id)
  return this.http.get(this.api + 'items/getItemById.php', { params: params })
  }

  saveitemMulti(item){
    let itemarr:any = []
    itemarr.push(item)
    itemarr = JSON.stringify(itemarr) 
    return this.http.post(this.api+'items/createMulti.php',
    itemarr
    )
  }

  saveLogHistoryMulti(item ,firstq ,role){
    let itemarr:any = []
    if(role == 'insert'){
      itemarr.push(item ,firstq)
    }else{
      itemarr.push(item) 
    } 
    
    itemarr = JSON.stringify(itemarr) 
    return this.http.post(this.api+'logHistory/createMulti.php',
    itemarr
    )
  }

  saveLogHistoryMultiSales(invo ,cust ,role){
    let itemarr:any = []
    if(role == 'new account'){
      itemarr.push(invo ,cust)
    }else{
      itemarr.push(invo) 
    }

    itemarr = JSON.stringify(itemarr) 
    return this.http.post(this.api+'logHistory/createMulti.php',
    itemarr
    )
  }

  saveFirstQty(firstq){
    return this.http.post(this.api+'firstq/createf.php', 
    firstq
     )
  }

  updatfiratqty(item){
    return this.http.post(this.api+'firstq/updateQty.php', 
     item
     )
  }

  updatfiratqtynew(item){
    console.log(item)
    return this.http.post(this.api+'firstq/update.php', 
     item
     )
  }

  saveItemStock(itemSstock){
    return this.http.post(this.api+'stock/create.php', 
    itemSstock
     )
  }
  

  deleteTswiaitemList(pay_ref){
    let params = new HttpParams() 
    params= params.append('pay_ref' , pay_ref )
      return this.http.delete(this.api+'tswia_details/deleteMultiServices.php', {params: params})
    }
 deleteSalesitemList(pay_ref){
  let params = new HttpParams() 
  params= params.append('pay_ref' , pay_ref )
    return this.http.delete(this.api+'pay_details/deleteMultiServices.php', {params: params})
  }

  deleteSalesitemListInit(pay_ref){
    let params = new HttpParams() 
    params= params.append('pay_ref' , pay_ref )
      return this.http.delete(this.api+'payinit_details/deleteMultiServices.php', {params: params})
  }

  deleteJFrom(j_ref){
    let params = new HttpParams() 
    params= params.append('j_ref' , j_ref )
      return this.http.delete(this.api+'jdetails_from/deleteMultiServices.php', {params: params})
    }
    deleteJto(j_ref){
      let params = new HttpParams() 
      params= params.append('j_ref' , j_ref )
        return this.http.delete(this.api+'jdetails_to/deleteMultiServices.php', {params: params})
      }

  deletePerchitemList(pay_ref){
    let params = new HttpParams() 
    params= params.append('pay_ref' , pay_ref )
      return this.http.delete(this.api+'perch_details/deleteMultiServices.php', {params: params})
    }

    deletePerchOrderitemList(pay_ref){
      let params = new HttpParams() 
      params= params.append('pay_ref' , pay_ref )
        return this.http.delete(this.api+'perchOrder_details/deleteMultiServices.php', {params: params})
      }

      saveTswiaitemList(itemList){
        itemList= JSON.stringify(itemList) 
        return this.http.post(this.api+'tswia_details/createMulti.php',
          itemList
        )
      }

  saveSalesitemList(itemList){
    itemList= JSON.stringify(itemList) 
    return this.http.post(this.api+'pay_details/createMulti.php',
      itemList
    )
  }



  saveSalesitemListInit(itemList){
    itemList= JSON.stringify(itemList) 
    return this.http.post(this.api+'payinit_details/createMulti.php',
      itemList
    )
  }

  // New optimized methods for combined invoice and items saving
  saveSalesInvoWithItems(invoiceData){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.post(this.api+'pay/createWithItems.php', 
      invoiceData, httpOptions
    )
  }

  // New optimized methods for combined invoice and items saving
  saveSalesInvoInitWithItems(invoiceData){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.post(this.api+'payinit/createWithItems.php', 
      invoiceData, httpOptions
    )
  }

  // New optimized methods for combined invoice and items saving
  savePerchInvoWithItems(invoiceData){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.post(this.api+'perch/createWithItems.php', 
      invoiceData, httpOptions
    )
  }

  // Update sales invoice with items in single API call
  updateSalesInvoWithItems(invoiceData){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.post(this.api+'pay/updateWithItems.php', 
      invoiceData, httpOptions
    )
  }

   // Update purchase invoice with items in single API call
   updatePerchInvoWithItems(invoiceData){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.post(this.api+'perch/updateWithItems.php', 
      invoiceData, httpOptions
    )
  }

  // Save initial invoice with items and delete final invoice in single API call (for edit-sales)
  saveSalesInvoInitWithItemsAndDeletePay(invoiceData){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.post(this.api+'payinit/saveWithItemsAndDeletePay.php', 
      invoiceData, httpOptions
    )
  }

  // Delete initial invoice with items in single API call (for sales page)
  deleteSalesInvoInitWithItems(deletionData){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.post(this.api+'payinit/deleteWithItems.php', 
      deletionData, httpOptions
    )
  }

  // Delete sales invoice with items in single API call (for edit-sales page)
  deleteSalesInvoWithItems(deletionData){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.post(this.api+'pay/deleteWithItems.php', 
      deletionData, httpOptions
    )
  }

  // Delete purchase invoice with items in single API call (for edit-perch page)
  deletePerchInvoWithItems(deletionData){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.post(this.api+'perch/deleteWithItems.php', 
      deletionData, httpOptions
    )
  }

  createMultiSales(accountList){
    accountList= JSON.stringify(accountList) 
    return this.http.post(this.api+'pay/createMulti.php',
    accountList
    )
  }

  createMultiPurch(accountList){
    accountList= JSON.stringify(accountList) 
    return this.http.post(this.api+'perch/createMulti.php',
    accountList
    )
  }

  saveJournalFrom(itemList){
    itemList= JSON.stringify(itemList) 
    return this.http.post(this.api+'jdetails_from/createMulti.php',
      itemList
    )
  }
 
  saveJournalTo(itemList){
    itemList= JSON.stringify(itemList) 
    return this.http.post(this.api+'jdetails_to/createMulti.php',
      itemList
    )
  }

  savePerchitemList(itemList){
    itemList= JSON.stringify(itemList) 
    return this.http.post(this.api+'perch_details/createMulti.php',
      itemList
    )
  }
  savePerchOrderitemList(itemList){
    itemList= JSON.stringify(itemList) 
    return this.http.post(this.api+'perchOrder_details/createMulti.php',
      itemList
    )
  }


  updateItem(item){
    return this.http.post(this.api+'items/update.php', 
     item
     )
  }

   updatePayPrice(item){
    return this.http.post(this.api+'items/updatePayPrice.php', 
     item
     )
  }

   updateFirstQ(item){
    return this.http.post(this.api+'firstq/updateF.php', 
     item
     )
  }

  updatePrices(item){
    return this.http.post(this.api+'items/updatePrices.php', 
     item
     )
  }
  
  increasePrice(payval,perchval){
    let item ={payval:payval ,perchval:perchval}
    return this.http.post(this.api+'items/increasePrice.php', 
    item
     )
  }

  decreasePrice(payval,perchval){
    let item ={payval:payval ,perchval:perchval}
    return this.http.post(this.api+'items/decreasePrice.php', 
     item
     )
  }

  deleteItems(id){ 
    let params = new HttpParams() 
    params=params.append('id' , id)
    return this.http.get(this.api+'items/delete.php',{params: params})
  }

  // New methods for edit journal functionality
  getJournalById(journalId){
    let params = new HttpParams() 
    params=params.append('j_id' , journalId)
    return this.http.get(this.api+'journal/read_single.php',{params: params})
  }

  getJFromByJournalId(journalId){
    let params = new HttpParams() 
    params=params.append('j_id' , journalId)
    return this.http.get(this.api+'jdetails_from/readByJournalId.php',{params: params})
  }

  getJToByJournalId(journalId){
    let params = new HttpParams() 
    params=params.append('j_id' , journalId)
    return this.http.get(this.api+'jdetails_to/readByJournalId.php',{params: params})
  }

  updateJournal(journal){
    return this.http.post(this.api+'journal/update.php', 
     journal
     )
  }

  updateJFrom(jdetailFrom){
    return this.http.post(this.api+'jdetails_from/update.php', 
     jdetailFrom
     )
  }

  updateJTo(jdetailTo){
    return this.http.post(this.api+'jdetails_to/update.php', 
     jdetailTo
     )
  }

 

  createCategory(category) {
    return this.http.post(this.api+'item_categories/create.php', category)
  }

  updateCategory(category) {
    return this.http.post(this.api+'item_categories/update.php', category)
  }

  deleteCategory(id) {
    return this.http.post(this.api+'item_categories/delete.php', {id: id})
  }

  getCategoryById(id) {
    let params = new HttpParams()
    params = params.append('id', id)
    return this.http.get(this.api+'item_categories/read_single.php', {params: params})
  }

  // Updated stock items method to support category filtering
  stockItemsWithCategory(store_id, yearId, category_id?: any) { 
    let params = new HttpParams() 
    params = params.append('store_id', store_id) 
    params = params.append('yearId', yearId)
    if (category_id && category_id !== 'all') {
      params = params.append('category_id', category_id)
    }
    return this.http.get(this.api+'items/readStock.php', {params: params})
  }

  // Get paginated stock items (no filters or search)
  getStockItemsWithPagination(store_id: any, page: number = 1, pageSize: number = 20, categoryId: string = 'all'): Observable<any> {
    let params = new HttpParams() 
    params = params.append('store_id', store_id) 
    params = params.append('page', page.toString()) 
    params = params.append('pageSize', pageSize.toString())
    
    if (categoryId && categoryId !== 'all') {
      params = params.append('category_id', categoryId);
    }
    
    return this.http.get(this.api+'items/readStockWithPagination.php', {params: params})
  }

  // Get all stock items without pagination
  getAllStockItems(store_id: any, categoryId: string = 'all'): Observable<any> {
    let params = new HttpParams() 
    params = params.append('store_id', store_id) 
    
    if (categoryId && categoryId !== 'all') {
      params = params.append('category_id', categoryId);
    }
    
    return this.http.get(this.api+'items/readAllStock.php', {params: params})
  }

  // Search stock items without pagination
  searchStockItems(store_id: any, searchTerm: string, categoryId: string = 'all'): Observable<any> {
    let params = new HttpParams() 
    params = params.append('store_id', store_id) 
    params = params.append('search', searchTerm.trim())
    
    if (categoryId && categoryId !== 'all') {
      params = params.append('category_id', categoryId);
    }
    
    return this.http.get(this.api+'items/searchStock.php', {params: params})
  }

  // Get stock totals by category only
  getStockTotals(store_id: any, yearId: any, categoryId: string = 'all'): Observable<any> {
    let params = new HttpParams() 
    params = params.append('store_id', store_id) 
    params = params.append('yearId', yearId)
    
    if (categoryId && categoryId !== 'all') {
      params = params.append('category_id', categoryId);
    }
    
    return this.http.get(this.api+'items/readStockTotals.php', {params: params})
  }

  // Get filtered stock items without pagination (no search)
  getFilteredStockItems(store_id: any, yearId: any, filters: any = {}): Observable<any> {
    let params = new HttpParams() 
    params = params.append('store_id', store_id) 
    params = params.append('yearId', yearId)
    
    // Add filter parameters only (no search)
    if (filters.category_id && filters.category_id !== 'all') {
      params = params.append('category_id', filters.category_id);
    }
    
    if (filters.brand && filters.brand.trim() !== '') {
      params = params.append('brand', filters.brand.trim());
    }
    
    if (filters.model && filters.model.trim() !== '') {
      params = params.append('model', filters.model.trim());
    }
    
    if (filters.quantity_filter && filters.quantity_filter.trim() !== '') {
      params = params.append('quantity_filter', filters.quantity_filter.trim());
    }
    
    return this.http.get(this.api+'items/readStockFiltered.php', {params: params})
  }

  // Get unique brands for filter dropdown
  getUniqueBrands(store_id: any, yearId: any): Observable<any> {
    let params = new HttpParams() 
    params = params.append('store_id', store_id) 
    params = params.append('yearId', yearId)
    
    return this.http.get(this.api+'items/readUniqueBrands.php', {params: params})
  }

  // Get unique models for filter dropdown (optionally filtered by brand)
  getUniqueModels(store_id: any, yearId: any, brand: string = ''): Observable<any> {
    let params = new HttpParams() 
    params = params.append('store_id', store_id) 
    params = params.append('yearId', yearId)
    
    if (brand && brand.trim() !== '') {
      params = params.append('brand', brand.trim());
    }
    
    return this.http.get(this.api+'items/readUniqueModels.php', {params: params})
  }

  // Validate stock quantities for sales
  validateStockQuantity(store_id: any, itemList: any[]): Observable<any> {
    const requestData = {
      store_id: store_id,
      itemList: itemList
    };
    
    return this.http.post(this.api+'items/validateStockQuantity.php', requestData)
  }

}
