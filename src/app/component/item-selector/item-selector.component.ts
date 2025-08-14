import { Component, OnInit, OnDestroy, ViewChild, Input, Output, EventEmitter, ElementRef, HostListener, ChangeDetectorRef } from '@angular/core';
import { ServicesService } from "../../stockService/services.service";
import { Storage } from '@ionic/storage';
import { AlertController, LoadingController, ToastController } from '@ionic/angular';
import { FilterPipe } from './pipe';
import { ModalController } from '@ionic/angular';
import { ItemModalPage } from '../../item-modal/item-modal.page';
import { DatePipe } from '@angular/common';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-item-selector',
  templateUrl: './item-selector.component.html',
  styleUrls: ['./item-selector.component.scss'],
})
export class ItemSelectorComponent implements OnInit {
  @ViewChild('searchInput', { static: false }) searchInput: ElementRef;
  @ViewChild('inputWrapper', { static: false }) inputWrapper: ElementRef;
  @ViewChild('qtyId') qtyId;
  
  // Dropdown state
  showDropdown: boolean = false;
  highlightedIndex: number = -1;
  loadingQty: boolean = false;
  updateSuccess: boolean = false;
  
  // Legacy compatibility properties (for remaining old code)
  selectedIndex: number = -1;
  isOpen: boolean = false;
  popoverSize: any = {};
  triggerElement: any;
  @ViewChild('popover') popover: any;
  @ViewChild('popInput') popInput: any;
  @Input() items: Array<any> = [];
  @Input() loadingItems: boolean = false;
  @Input() searchLang: number = 0;
  @Input() store_info: any;
  @Input() year: any;
  @Input() payRef: string = '';
  @Input() showQuantityInput: boolean = true;
  @Input() showPriceInput: boolean = true;
  @Input() showPerchPriceInput: boolean = true;
  @Input() placeholder: string = 'اختر الصنف';

  
  
  
  
  // Dropdown positioning
  dropdownPosition = { top: '0px', left: '0px', width: '250px' };
  
  // Price update properties
  @Input() enablePriceUpdateConfirmation: boolean = true;
  private originalPayPrice: number = 0;
  private originalPerchPrice: number = 0;
  private pricesChanged: boolean = false;
  @Output() itemSelected = new EventEmitter<any>();
  @Output() itemAdded = new EventEmitter<any>();
  @Output() refreshItems = new EventEmitter<void>();
  
  // Component properties
  @Input() parentPage: string = '';
  private payPriceInputElement: HTMLElement | null = null;
  showQtyWarning: boolean = false;
  searchTerm: string = "";
  availQty: number = 0;
  
  // Focus tracking
  private componentHasFocus: boolean = false;
  
  // Quantity calculation properties
  payTotQty: number = 0;
  perchTotQty: number = 0;
  firstQty: number = 0;
  qtyReal: number = 0;
  
  // Error handling
  qtyError: boolean = false;
  qtyErrorMsg: string = '';

  selectedItem: {
    id: any,
    pay_ref: any,
    item_name: any,
    pay_price: any,
    perch_price: any,
    item_unit: any,
    item_desc: any,
    parcode: any,
    qty: any,
    tot: any,
    dateCreated: any,
    availQty: any,
    aliasEn: any, 
  };

  

user_info: {id:any ,user_name:any ,store_id :any,full_name:any,password:any};
firstq: {id:any ,item_id:any , store_id:any , quantity :any ,	fq_year:any ,	pay_price:any ,	perch_price:any ,item_name:any};
logHistoryArr: Array<any> = [];
getItemLoader: boolean = false;
  constructor(
    private alertController: AlertController,
    private router: Router, 
    private api: ServicesService,
    private storage: Storage,
    private toast: ToastController,
    private modalController: ModalController,
    private loadingController: LoadingController,
    private datePipe: DatePipe,
    private cdr: ChangeDetectorRef
  ) {
    this.initializeSelectedItem();
  }

  ngOnInit() {
    this.getAppInfo();
  }

  ngOnChanges() {
    console.log('📊 ITEMS CHANGED - ngOnChanges triggered');
    console.log('New items count:', this.items.length);
  }



  // Calculate dropdown position
  calculateDropdownPosition() {
    // Use the inner div wrapper for positioning (this is our reference element)
    const elementToUse = this.inputWrapper?.nativeElement || this.searchInput?.nativeElement;
    
    if (elementToUse) {
      const rect = elementToUse.getBoundingClientRect();
      
      this.dropdownPosition = {
        top: (rect.bottom + 4) + 'px',
        left: rect.left + 'px',
        width: rect.width + 'px'
      };
      
      console.log('Dropdown position calculated:', this.dropdownPosition);
      console.log('Element used for positioning:', elementToUse.tagName, elementToUse.className);
    } else {
      console.warn('Could not find element for dropdown positioning');
    }
  }

  
  
  // Reset all fields and selection when input is cleared
  resetAllFieldsAndSelection() {
    console.log('🔄 Starting resetAllFieldsAndSelection...');
    
    // Use the existing initialization method
    this.initializeSelectedItem();
    
    // Reset additional states not covered in initializeSelectedItem
    this.loadingQty = false;
    this.updateSuccess = false;
    
    // Reset price change tracking
    this.pricesChanged = false;
    this.originalPayPrice = 0;
    this.originalPerchPrice = 0;
    
    // Reset any warning states
    this.showQtyWarning = false;
    
    // Clear search term completely
    this.searchTerm = '';
    
    // Reset dropdown state
    this.showDropdown = false;
    this.highlightedIndex = -1;
    
    // Force update of all input field displays
    setTimeout(() => {
      // Clear the search input field
      if (this.searchInput && this.searchInput.nativeElement) {
        console.log('📝 Clearing search input field');
        this.searchInput.nativeElement.value = '';
      }
      
      // Clear quantity input field if exists
      if (this.qtyId && this.qtyId.nativeElement) {
        console.log('📝 Clearing quantity input field');
        this.qtyId.nativeElement.value = '0';
      }
      
      // Force change detection to update all bindings
      this.cdr.detectChanges();
      console.log('🔄 Change detection forced');
    }, 10);
    
    // Emit null selection to parent components
    this.itemSelected.emit(null);
    console.log('📤 Emitted null selection to parent');
    
    console.log('✅ resetAllFieldsAndSelection completed');
    console.log('Final values - qty:', this.selectedItem.qty, 'pay_price:', this.selectedItem.pay_price, 'availQty:', this.availQty);
  }
  

  applyFilters() {
    // No category filtering - items are used directly in templates
    // Search filtering is handled by the getFilteredItems method
  }

  // Get filtered items for display (search filtering only)
  getFilteredItems() {
    if (!this.items || this.items.length === 0) {
      return [];
    }

    // Apply search filter if search term exists
    if (this.searchTerm && this.searchTerm.trim() !== '') {
      const searchValue = this.searchTerm.toLowerCase();
      return this.items.filter(item => 
        item.item_name.toLowerCase().includes(searchValue) ||
        (item.item_desc && item.item_desc.toLowerCase().includes(searchValue))
      );
    }
    
    // Return all items if no search term
    return this.items;
  }

 
  getAppInfo() {
    this.storage.get('USER_INFO').then((response) => {
      if (response) {
        this.user_info = response;
        console.log(this.user_info);
      }
    });
  }
  // drop down 

  // Add this method to your component
viewItemReport(item: any) {
  if (!item || !item.id) {
    this.presentToast('يرجى اختيار صنف أولاً', 'warning');
    return;
  }

  let navigationExtras: NavigationExtras = {
    queryParams: {
      item: JSON.stringify(item)
    }
  };
 
  this.router.navigate(['folder/items-report'], navigationExtras); 
}

// Add this method to handle button click from popover
viewSelectedItemReport() {
  if (this.selectedItem && this.selectedItem.id) {
    this.viewItemReport(this.selectedItem);
  } else {
    this.presentToast('يرجى اختيار صنف أولاً', 'warning');
  }
}

  
 
  async presentModal2() {
    const modal = await this.modalController.create({
      component: ItemModalPage,
      componentProps: {
        "item": this.selectedItem,
        "status": 'save'
      }
    });
    
    modal.onDidDismiss().then((dataReturned) => {
      if (dataReturned !== null) {
        console.log(dataReturned);
        this.doAfterDismiss(dataReturned);
      }
    });

    return await modal.present(); 
  }


  // Add this method to present item details modal
async presentModal(id?, status?) {
  if (!id || id === 'null') {
    this.presentToast('يرجى اختيار صنف أولاً', 'warning');
    return;
  }

  let selectedItemForModal;
  
  if (status === 'edit') {
    // Find item from items array
    let fl = this.items.filter(x => x.id == id);
    if (fl.length === 0) {
      this.presentToast('لم يتم العثور على بيانات الصنف', 'danger');
      return;
    }
    
    selectedItemForModal = {
      id: fl[0]['id'],
      item_desc: fl[0]['item_desc'],
      model: fl[0]['model'],
      item_name: fl[0]['item_name'],
      min_qty: fl[0]['min_qty'],
      part_no: fl[0]['part_no'],
      brand: fl[0]['brand'],
      item_unit: fl[0]['item_unit'],
      item_parcode: fl[0]['item_parcode'],
      pay_price: fl[0]['pay_price'],
      perch_price: fl[0]['perch_price'],
      aliasEn: fl[0]['aliasEn']
    };
  }

  const modal = await this.modalController.create({
    component: ItemModalPage,
    componentProps: {
      "item": selectedItemForModal,
      "colSetting":   {}, 
      "filterArrayOrign": this.items, 
      "filterArray": this.items,   
      "status": status
    }
  });
  
  modal.onDidDismiss().then((dataReturned) => {
    if (dataReturned !== null) {
      console.log('Modal dismissed with data:', dataReturned);
      this.doAfterDismiss(dataReturned);
    }
  });

  return await modal.present(); 
}

  

  doAfterDismiss(data) {
  if (data.role === 'edit') {
    console.log('Item edited:', data.data);
    // Handle item edit if needed
   this.update(data.data);
  } else if (data.role === 'save') {
    console.log('Item saved:', data.data);
      this.saveItem(data.data);  
    // Handle item save if needed
  }else if(data.role == 'dele') {
        console.log('dele') 
         this.delete()   
      }
  // Add other handlers as needed
}

  handleItemUpdate(updatedData) {
    console.log('Received updated data:', updatedData);
    
      const updatedItem = updatedData; 
      // Update the selected item if it matches
      console.log('Updated Item:', updatedItem);
      if (this.selectedItem.id === updatedItem.id) {
        this.selectedItem = {
          ...this.selectedItem,
          item_name: updatedItem.item_name,
          item_desc: updatedItem.item_desc,
          pay_price: updatedItem.pay_price,
          perch_price: updatedItem.perch_price 
        }; 
        // Update original prices
        this.originalPayPrice = updatedItem.pay_price;
        this.originalPerchPrice = updatedItem.perch_price;

      }
      
      // Update items array
      const itemIndex = this.items.findIndex(item => item.id === updatedItem.id);
      if (itemIndex !== -1) {
        this.items[itemIndex] = { ...this.items[itemIndex], ...updatedItem };
      }
      
      // Update search results
      const searchIndex = this.items.findIndex(item => item.id === updatedItem.id);
      if (searchIndex !== -1) {
        this.items[searchIndex] = { ...this.items[searchIndex], ...updatedItem };
      }
      
      this.presentToast('تم تحديث بيانات الصنف', 'success');
    
  }

 update(mdata){ 
       this.presentLoadingWithOptions('جاري تعديل البيانات ...')
       this.api.updateItem(mdata[0]).subscribe(data => {
        console.log(data)
       if (data['message'] != 'Post Not Updated') {
        this.presentToast('تم التعديل بنجاح' , 'success')
        this.handleItemUpdate(mdata[0]); 
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

delete(){ 
  this.presentLoadingWithOptions('جاري حذف البيانات ...')
 this.api.deleteItems(this.selectedItem.id).subscribe(data => {
   //console.log(data)
   if (data['message'] != 'Post Not Deleted') {
    this.presentToast('تم الحذف بنجاح' , 'success')
  
   //delete selected_ item  from items array
    const itemIndex = this.items.findIndex(item => item.id === this.selectedItem.id);
    if (itemIndex !== -1) {
      this.items.splice(itemIndex, 1);
    }
    //delete selected_ item  from searchResult array
    const searchIndex = this.items.findIndex(item => item.id === this.selectedItem.id);
    if (searchIndex !== -1)
    {
      this.items.splice(searchIndex, 1);
    }
      this.initializeSelectedItem();
    //reset selected item object  n 
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




saveItem(mdata) {
  console.log('mdata[0]', mdata[0]);
  this.presentLoadingWithOptions('جاري حفظ البيانات ...');
  if ('imageUrl' in  mdata[0]) delete  mdata[0].imageUrl;
  if ('tax' in  mdata[0]) delete  mdata[0].tax;
  this.api.saveItem(mdata[0]).subscribe(data => {
    console.log(data);
    if (data['message'] != 'Post Not Created') {
      let item_id = data['message'];
      this.firstq = {
        id: null,
        item_id: item_id,
        store_id: this.store_info.id,
        quantity: mdata[1].quantity,
        pay_price: mdata[0].pay_price,
        perch_price: mdata[0].perch_price,
        fq_year: this.year.id,
        item_name: mdata[0].item_name
      };
      this.saveFierstQty(mdata);
    } else {
      this.presentToast('لم يتم حفظ البيانات , خطا في الإتصال حاول مرة اخري', 'danger');
    }
  }, (err) => {
    console.log(err);
    this.presentToast('لم يتم حفظ البيانات , خطا في الإتصال حاول مرة اخري', 'danger');
    this.loadingController.dismiss();
  });
}

async saveFierstQty(meta) {  
  this.api.saveFirstQty(this.firstq).subscribe(data => { 
    console.log(data); 
    // Update selected item from meta data 
    this.selectedItem = {
      id: this.firstq.item_id,
      dateCreated: "",
      pay_ref: this.payRef,
      item_desc: meta[0].item_desc,
      item_name: meta[0].item_name,
      item_unit: meta[0].item_unit,
      parcode: meta[0].parcode,
      pay_price: meta[0].pay_price,
      perch_price: meta[0].perch_price,
      qty: 1,
      tot: meta[0].perch_price,
      aliasEn: meta[0].aliasEn,
      availQty: meta[1].quantity
    };

    this.setFocusOnInput('qtyId');
    this.getItemLoader = true;
     
    // Push meta data to items array
    this.items.push({
      "aliasEn": meta[0].aliasEn,   
      "availQty": meta[1].quantity,
      "brand": meta[0].brand,
      "firstQuantity": meta[1].quantity,
      "id": this.firstq.item_id,
      "item_desc": meta[0].item_desc,
      "item_name": meta[0].item_name,
      "item_parcode": meta[0].item_parcode,
      "item_unit": meta[0].item_unit,
      "min_qty": meta[0].min_qty,
      "model": meta[0].model,
      "part_no": meta[0].part_no,
      "pay_price": meta[0].pay_price,
      "perch_price": meta[0].perch_price,
      "qtyReal": 0, 
      "salesQuantity": 0,
      "totalCount": 0,
      "tswiaQuantity": 0,
      "quantity": meta[1].quantity,
      "tax": meta[0].tax,
      "imageUrl": meta[0].imageUrl
    });
         
    // Items are now loaded directly without filtering
    console.log('Updated items', this.items);
    
    // Store items locally
    this.storage.set('itemsLocal', this.items).then((response) => {
      this.getItemLoader = false;
    });

    this.presentToast('تم حفظ الصنف بنجاح', 'success');
    
  }, (err) => {
    console.log(err);
    this.presentToast('لم يتم حفظ البيانات , خطا في الإتصال حاول مرة اخري', 'danger');
    this.loadingController.dismiss();
  }, () => {
    this.loadingController.dismiss();
  });      
}

 // Add this method to view selected item details
viewSelectedItemDetails() {
  if (this.selectedItem && this.selectedItem.id) {
    this.presentModal(this.selectedItem.id, 'edit');
  } else {
    this.presentToast('يرجى اختيار صنف أولاً', 'warning');
  }
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
  console.log('Loading dismissed with role:', role);
}




  initializeSelectedItem() {
    this.selectedItem = {
      id: undefined,
      dateCreated: "",
      pay_ref: this.payRef,
      item_desc: "",
      item_name: "",
      item_unit: "",
      parcode: 0,
      pay_price: 0,
      perch_price: 0,
      qty: 0,
      tot: 0,
      availQty: 0,
      aliasEn: ""
    };
    
    // Reset quantity calculation values
    this.resetQuantityValues();
  }

  resetQuantityValues() {
    this.availQty = 0;
    this.payTotQty = 0;
    this.perchTotQty = 0;
    this.firstQty = 0;
    this.qtyReal = 0;
    this.qtyError = false;
    this.qtyErrorMsg = '';
  }

// Removed duplicate implementation


// Removed duplicate implementation

// Removed duplicate implementation


// Removed duplicate implementations

/// Optimize search method
searchItem(ev) {
  const searchValue = ev.target.value || ev.detail.value;
  this.searchTerm = searchValue || '';
  this.highlightedIndex = -1;
}

// Handle input focus - show dropdown
onInputFocus() {
  console.log('Input focused, items:', this.items.length);
  this.componentHasFocus = true;
  this.highlightedIndex = -1;
  
  // Show dropdown when focused if we have items
  if (this.items.length > 0) {
    // Calculate position before showing
    setTimeout(() => {
      this.calculateDropdownPosition();
      this.showDropdown = true;
    }, 10);
    
    // If no search term, show all items (limited for performance)
    if (this.searchTerm.length === 0) {
      // Show first 50 items if no search term
      // All items are shown since no category filtering
    } else {
      // Items are used directly without filtering
    }
  } else {
    console.warn('No items available to show in dropdown');
  }
}

// Handle input blur - hide dropdown with delay
onInputBlur() {
  console.log('Input blur triggered');
  this.componentHasFocus = false;
  
  // Reduced timeout since we now have document click listener as backup
  setTimeout(() => {
    // Only hide if component doesn't have focus anymore
    if (!this.componentHasFocus) {
      console.log('Hiding dropdown after blur delay');
      this.showDropdown = false;
      this.highlightedIndex = -1;
    }
  }, 150); // Delay to allow click events
}

// Listen for clicks outside the component to hide dropdowns
@HostListener('document:click', ['$event'])
onDocumentClick(event: Event) {
  const target = event.target as HTMLElement;
  if (!target) return;
  
  const componentElement = this.inputWrapper?.nativeElement || this.searchInput?.nativeElement;
  
  // Get all relevant dropdown elements
  const dropdownElements = document.querySelectorAll('.dropdown-container, .category-dropdown-container');
  
  let isClickInsideComponent = false;
  let isClickInsideDropdown = false;
  
  // Check if click is inside the component input area
  if (componentElement) {
    isClickInsideComponent = componentElement.contains(target) || 
                            target.closest('.item-selector-wrapper') !== null;
  }
  
  // Check if click is inside any of the dropdown elements
  dropdownElements.forEach(dropdown => {
    if (dropdown.contains(target)) {
      isClickInsideDropdown = true;
    }
  });
  
  // Only hide dropdowns if click is completely outside both component and dropdowns
  if (!isClickInsideComponent && !isClickInsideDropdown) {
    if (this.showDropdown) {
      console.log('Hiding item dropdown due to outside click');
      this.showDropdown = false;
      this.highlightedIndex = -1;
      this.componentHasFocus = false;
    }
    
    // Category dropdown removed
  }
}

// Listen for focus changes to hide dropdowns when focus moves away
@HostListener('document:focusin', ['$event'])
onDocumentFocusIn(event: Event) {
  const target = event.target as HTMLElement;
  if (!target) return;
  
  const componentElement = this.inputWrapper?.nativeElement || this.searchInput?.nativeElement;
  
  // Check if focus moved to an element outside the component
  if (componentElement && !componentElement.contains(target)) {
    // Check if focus is not on dropdown elements either
    const dropdownElements = document.querySelectorAll('.dropdown-container, .category-dropdown-container');
    let isFocusInsideDropdown = false;
    
    dropdownElements.forEach(dropdown => {
      if (dropdown.contains(target)) {
        isFocusInsideDropdown = true;
      }
    });
    
    // If focus is completely outside component and dropdowns, hide them
    if (!isFocusInsideDropdown) {
      if (this.showDropdown) {
        console.log('Hiding item dropdown due to focus change');
        this.showDropdown = false;
        this.highlightedIndex = -1;
      }
      
      // Category dropdown removed
      
      this.componentHasFocus = false;
    }
  } else if (componentElement && componentElement.contains(target)) {
    // Focus is back on the component
    this.componentHasFocus = true;
  }
}

// Handle search input changes
onSearchInput(event: any) {
  const searchValue = event.target.value || event.detail.value;
  this.searchTerm = searchValue || '';
  
  console.log('Search term changed to:', this.searchTerm);
  
  // Check if input field was cleared - reset all fields and selection
  if (this.searchTerm.length === 0) {
    console.log('Input field cleared - resetting all fields and selection');
    this.resetAllFieldsAndSelection();
  }
  
  this.highlightedIndex = -1; // Reset highlight when user types
  
  // Show dropdown when user starts typing or when there are items
  if (this.searchTerm.length > 0 || this.items.length > 0) {
    // Calculate position if dropdown is not already shown
    if (!this.showDropdown) {
      this.calculateDropdownPosition();
    }
    this.showDropdown = true;
    console.log('Showing dropdown with', this.getFilteredItems().length, 'filtered items');
  } else {
    this.showDropdown = false;
  }
}

// Handle clear button click (X button on ion-input)
onInputClear(event: any) {
  console.log('🔴 CLEAR BUTTON CLICKED - ionClear event fired!');
  console.log('Event details:', event);
  console.log('Current searchTerm before clear:', this.searchTerm);
  console.log('Current selectedItem before clear:', this.selectedItem);
  
  // Immediately set search term to empty
  this.searchTerm = '';
  
  // Direct reset without relying on synthetic events
  this.resetAllFieldsAndSelection();
  
  // No filters to apply - all items shown
  
  // Hide dropdown
  this.showDropdown = false;
  this.highlightedIndex = -1;
  
  console.log('🟢 Clear button reset completed');
  console.log('searchTerm after clear:', this.searchTerm);
  console.log('selectedItem after clear:', this.selectedItem);
}

// Handle model changes (including clear button)
onModelChange(newValue: string) {
  console.log('🔄 Model changed from:', this.searchTerm, 'to:', newValue);
  
  // Update the search term
  this.searchTerm = newValue || '';
  
  // If the new value is empty, reset everything
  if (!newValue || newValue.length === 0) {
    console.log('🧽 Model change detected empty value - resetting component');
    this.resetAllFieldsAndSelection();
  }
  
  this.highlightedIndex = -1;
  
  // Show/hide dropdown based on content
  if (this.searchTerm.length > 0 || this.getFilteredItems().length > 0) {
    if (!this.showDropdown) {
      this.calculateDropdownPosition();
    }
    this.showDropdown = true;
  } else {
    this.showDropdown = false;
  }
}

// Reset fields and show dropdown after adding item to list
resetAfterAddingItem() {
  console.log('📦 Item added - resetting fields and showing dropdown');
  
  // Use the comprehensive reset method
  this.resetAllFieldsAndSelection();
  
  // Set pay_ref back since it should be preserved
  this.selectedItem.pay_ref = this.payRef;
  
  // Show dropdown automatically to allow quick selection of next item
  if (this.items.length > 0) {
    setTimeout(() => {
      // Calculate position and show dropdown
      this.calculateDropdownPosition();
      this.showDropdown = true;
      
      // Focus on the search input for immediate typing
      if (this.searchInput && this.searchInput.nativeElement) {
        this.searchInput.nativeElement.focus();
      }
      
      console.log('📦 Dropdown shown after item added - ready for next selection');
    }, 100); // Small delay to ensure DOM is updated
  }
}

// Toggle dropdown visibility
toggleDropdown() {
  console.log('Toggle dropdown clicked, items:', this.items.length);
  if (this.items.length > 0) {
    this.showDropdown = !this.showDropdown;
    if (this.showDropdown) {
      // Calculate position before showing
      this.calculateDropdownPosition();
      // Show all items when dropdown is opened
      // Items loaded directly without filtering
      // Focus the input field
      if (this.searchInput) {
        setTimeout(() => {
          this.searchInput.nativeElement.focus();
        }, 100);
      }
    }
    this.highlightedIndex = -1;
  } else {
    console.warn('No items loaded yet');
  }
}

// Add missing methods that are being called
presentDropdown(event?: Event) {
  this.highlightedIndex = -1;
  this.clearSearch();
  // Items loaded directly without filtering
  
  if (this.items.length > 0) {
    this.calculateDropdownPosition();
    this.showDropdown = true;
    
    // Focus input after short delay
    setTimeout(() => {
      if (this.searchInput) {
        this.searchInput.nativeElement.focus();
      }
    }, 100);
  }
}

clearSelection() {
  this.selectedItem = {
    id: undefined,
    dateCreated: "",
    pay_ref: this.payRef,
    item_desc: "",
    item_name: "",
    item_unit: "",
    parcode: 0,
    pay_price: 0,
    perch_price: 0,
    qty: 0,
    tot: 0,
    availQty: 0,
    aliasEn: ""
  };
  
  this.searchTerm = '';
  this.showDropdown = false;
  this.highlightedIndex = -1;
  // Items loaded directly without filtering
  
  this.itemSelected.emit(null);
}

onKeyDown(event: KeyboardEvent) {
  if (!this.showDropdown || this.getFilteredItems().length === 0) {
    if (event.key === 'ArrowDown' && this.getFilteredItems().length > 0) {
      event.preventDefault();
      this.showDropdown = true;
      this.highlightedIndex = 0;
      this.calculateDropdownPosition();
    }
    return;
  }

  switch (event.key) {
    case 'ArrowDown':
      event.preventDefault();
      this.highlightedIndex = Math.min(this.highlightedIndex + 1, this.getFilteredItems().length - 1);
      this.scrollHighlightedItemIntoView();
      break;

    case 'ArrowUp':
      event.preventDefault();
      this.highlightedIndex = Math.max(this.highlightedIndex - 1, -1);
      this.scrollHighlightedItemIntoView();
      break;

    case 'Enter':
      event.preventDefault();
      if (this.highlightedIndex >= 0 && this.highlightedIndex < this.getFilteredItems().length) {
        this.selectItem(this.getFilteredItems()[this.highlightedIndex]);
      }
      break;

    case 'Escape':
      event.preventDefault();
      this.showDropdown = false;
      this.highlightedIndex = -1;
      break;

    case 'Tab':
      this.showDropdown = false;
      this.highlightedIndex = -1;
      break;
  }
}

scrollHighlightedItemIntoView() {
  if (this.highlightedIndex >= 0) {
    setTimeout(() => {
      const dropdownContainer = document.querySelector('.dropdown-container');
      const highlightedItem = document.querySelector('.item-item.highlighted');
      
      if (dropdownContainer && highlightedItem) {
        const containerRect = dropdownContainer.getBoundingClientRect();
        const itemRect = highlightedItem.getBoundingClientRect();
        
        if (itemRect.bottom > containerRect.bottom) {
          dropdownContainer.scrollTop += (itemRect.bottom - containerRect.bottom + 10);
        } else if (itemRect.top < containerRect.top) {
          dropdownContainer.scrollTop -= (containerRect.top - itemRect.top + 10);
        }
      }
    }, 10);
  }
}

selectItem(item: any) {
  this.selectedItem = {
    id: item.id,
    dateCreated: item.dateCreated,
    pay_ref: this.payRef,
    item_desc: item.item_desc,
    item_name: item.item_name,
    item_unit: item.item_unit,
    parcode: item.parcode,
    pay_price: item.pay_price,
    perch_price: item.perch_price,
    qty: "",
    tot: item.pay_price,
    availQty: item.quantity,
    aliasEn: item.aliasEn
  };

  // Store original prices for comparison
  this.originalPayPrice = item.pay_price;
  this.originalPerchPrice = item.perch_price;
  this.pricesChanged = false;
  
  this.searchTerm = item.item_name;
  this.showDropdown = false;
  this.highlightedIndex = -1;
  
  // Force change detection
  this.cdr.detectChanges();
  
  // Update input value manually
  if (this.searchInput && this.searchInput.nativeElement) {
    setTimeout(() => {
      const ionInput = this.searchInput.nativeElement;
      ionInput.value = item.item_name;
      
      const inputEvent = new Event('input', { bubbles: true });
      ionInput.dispatchEvent(inputEvent);
    }, 10);
  }
  
  this.itemSelected.emit(this.selectedItem);
  
  // Load item quantity data
  if (this.selectedItem.id) {
    this.readItemByIdQty();
    setTimeout(() => {
      this.setFocusOnInput('qtyId');
    }, 200);
  }
}

reopenDropdown() {
  setTimeout(() => {
    this.highlightedIndex = -1;
    this.clearSearch();
    // Items loaded directly without filtering
    this.presentDropdown();
  }, 50);
}

clearSearch() {
  this.searchTerm = '';
  this.highlightedIndex = -1;
}

// Enhanced selection
selectFromPop(item) {
  this.selectedItem = {
    id: item.id,
    dateCreated: item.dateCreated,
    pay_ref: this.payRef,
    item_desc: item.item_desc,
    item_name: item.item_name,
    item_unit: item.item_unit,
    parcode: item.parcode,
    pay_price: item.pay_price,
    perch_price: item.perch_price,
    qty: "",
    tot: item.pay_price,
    availQty: item.quantity,
    aliasEn: item.aliasEn
     
  };

  // Store original prices for comparison
  this.originalPayPrice = item.pay_price;
  this.originalPerchPrice = item.perch_price;
  this.pricesChanged = false;
  
  this.searchTerm = item.item_name;
  this.itemSelected.emit(this.selectedItem);
  // Store original position before closing
  const originalEvent = this.popover.event;
  
  this.isOpen = false;
  
  // Focus on quantity input after selection
  setTimeout(() => {
    this.setFocusOnInput('qtyId');
  }, 200);
}


// Method to detect if prices have changed
checkPriceChanges(): boolean {
  const payPriceChanged = +this.selectedItem.pay_price !== +this.originalPayPrice;
  const perchPriceChanged = +this.selectedItem.perch_price !== +this.originalPerchPrice;
  
  this.pricesChanged = payPriceChanged || perchPriceChanged;
  return this.pricesChanged;
}

// Method to get changed prices info
getChangedPricesInfo(): string {
  let changes = [];
  
  if (+this.selectedItem.pay_price !== +this.originalPayPrice) {
    changes.push(`سعر البيع: ${this.originalPayPrice} ← ${this.selectedItem.pay_price}`);
  }
  
  if (+this.selectedItem.perch_price !== +this.originalPerchPrice) {
    changes.push(`سعر الشراء: ${this.originalPerchPrice} ← ${this.selectedItem.perch_price}`);
  }
  
  return changes.join('\n');
}

 updatePayPrice(item)  : Promise<boolean> {
  return new Promise((resolve, reject) => { 
  this.presentLoadingWithOptions('جاري تعديل البيانات ...')  
  this.api.updatePayPrice(item).subscribe(data => {
  //console.log(data)
  if (data['message'] != 'Post Not Updated') {
   this.presentToast('تم التعديل بنجاح' , 'success') 
   this.originalPayPrice = +this.selectedItem.pay_price;
          this.originalPerchPrice = +this.selectedItem.perch_price;
          this.pricesChanged = false;
           this.updateItemInArray();
         this.updateSuccess = true; // Set success flag
          // Update the item in the items array
          resolve(true);
         
  }else{
  this.presentToast('لم يتم حفظ البيانات , خطا في الإتصال حاول مرة اخري' , 'danger')
   resolve(false);
  } 
}, (err) => { 
  this.presentToast('لم يتم حفظ البيانات , خطا في الإتصال حاول مرة اخري' , 'danger')
  resolve(false);
},() => {
 this.loadingController.dismiss()
}) 
}
  );
}
  



// Method to update item in the items array
updateItemInArray() {
  const itemIndex = this.items.findIndex(item => item.id === this.selectedItem.id);
  if (itemIndex !== -1) {
    this.items[itemIndex].pay_price = this.selectedItem.pay_price;
    this.items[itemIndex].perch_price = this.selectedItem.perch_price;
  }
  
  // Update search results if needed
  const searchIndex = this.items.findIndex(item => item.id === this.selectedItem.id);
  if (searchIndex !== -1) {
    this.items[searchIndex].pay_price = this.selectedItem.pay_price;
    this.items[searchIndex].perch_price = this.selectedItem.perch_price;
  }

  
}

// Method to show price update confirmation dialog
async showPriceUpdateConfirmation(): Promise<boolean> {
  return new Promise(async (resolve) => {
    const changesInfo = this.getChangedPricesInfo();
    
    const alert = await this.alertController.create({
      cssClass: 'price-update-alert',
      header: 'تحديث الأسعار',
      mode: 'ios',
      message: `
        <div style="text-align: right; direction: rtl;">
          <p><strong>تم تغيير الأسعار للصنف:</strong></p>
          <p><strong>${this.selectedItem.item_name}</strong></p>
          <br>
          <p><strong>التغييرات:</strong></p>
          <p style="color: #3880ff; white-space: pre-line;">${changesInfo}</p>
          <br>
          <p>هل تريد حفظ الأسعار الجديدة؟</p>
        </div>
      `,
      buttons: [
        // {
        //   text: 'إلغاء',
        //   role: 'cancel',
        //   cssClass: 'secondary',
        //   handler: () => {
        //     // Reset prices to original values
        //     this.selectedItem.pay_price = this.originalPayPrice;
        //     this.selectedItem.perch_price = this.originalPerchPrice;
        //     this.pricesChanged = false;
        //     resolve(false);
        //   }
        // },
        {
          text: 'المتابعة بدون حفظ',
          cssClass: 'tertiary',
          handler: () => {
            // Continue without updating prices in database
            resolve(false);
          }
        },
        {
          text: 'حفظ وإضافة',
          cssClass: 'primary',
          handler: () => {
            // Update prices then continue
            resolve(true);
          }
        }
      ]
    });

    await alert.present();
  });
}


// Performance optimization
trackByItemId(index: number, item: any): any {
  return item.id || index;
}

 readItemByIdQty() {
  if (!this.selectedItem.id || !this.store_info || !this.year) return; 
  this.resetQuantityValues();
  this.loadingQty = true; // Add this line 
  this.api.readItemByIdQty(this.store_info.id, this.selectedItem.id, this.year.id).subscribe(data => {
    console.log('readItemByIdQty', data);
    let res = data;
    if (res['message'] != 'No record Found') {
      this.payTotQty = res['data'][0].salesQuantity;
      this.availQty = res['data'][0].availQty;
      this.qtyReal = res['data'][0].qtyReal;
      this.perchTotQty = res['data'][0].perchQuantity;
      this.firstQty = res['data'][0].firstQuantity;
      
      console.log('readItemByIdQty', this.payTotQty, this.availQty, this.qtyReal, this.perchTotQty, this.firstQty);
      this.getQtyTotalItemId();
      this.qtyError = false;
    } else {
      this.qtyError = true;
      this.qtyErrorMsg = 'لا توجد بيانات للصنف';
    }
    this.loadingQty = false; // Add this line
  }, (err) => {
    console.log(err);
    this.qtyError = true;
    this.qtyErrorMsg = 'خطأ في الإتصال';
    this.loadingQty = false; // Add this line
    this.presentToast('خطأ في الإتصال حاول مرة أخرى', 'danger');
  });
}


  getQtyTotalItemId() {
    console.log('perchTotQty', this.perchTotQty, this.payTotQty);
    
    // تجميع الكميات السالبة وتحويلها لموجب لإضافتها للمشتريات
    if ((+this.availQty - +this.qtyReal) < 0) { 
      this.perchTotQty = +this.perchTotQty + Math.abs((+this.availQty - +this.qtyReal));  
    } else if ((+this.availQty - +this.qtyReal) > 0) {
      this.payTotQty = +this.payTotQty + (+this.availQty - +this.qtyReal);  
    } 
    
    this.availQty = +this.firstQty + +this.perchTotQty - +this.payTotQty;
    this.selectedItem.availQty = this.availQty;
    
    console.log('Final availQty:', this.availQty);
  }

  refreshQuantity() {
    if (this.selectedItem.id) {
      this.readItemByIdQty();
    }
  }

  qtyChange(ev) {
   
     const isSalesPage = this.parentPage === 'sales' || this.parentPage === 'edit-sales';
     const isPurchasePage = this.parentPage === 'purchase' || this.parentPage === 'edit-perch';
      
     if(isSalesPage){
       this.selectedItem.tot = (this.selectedItem.qty * +this.selectedItem.pay_price).toFixed(2);
      const qtyExceedsAvailable = this.selectedItem.qty   > +this.availQty;
            if (qtyExceedsAvailable ) {
            // Show red border on pay_price input only for sales pages
             this.showPayPriceWarning();   
            }
      }
       if (isPurchasePage){
       this.selectedItem.tot = (this.selectedItem.qty * +this.selectedItem.perch_price).toFixed(2);
       // No quantity checking or warnings for purchase pages
       } 
  }

  onPayPriceChange(ev) {
    const isSalesPage = this.parentPage === 'sales' || this.parentPage === 'edit-sales';
     if (isSalesPage) {
    this.selectedItem.tot = (this.selectedItem.qty * +this.selectedItem.pay_price).toFixed(2);
   }
    if (this.enablePriceUpdateConfirmation) {
       this.checkPriceChanges();
      } 
}

  onPerchPriceChange(ev) {
     const isPurchasePage = this.parentPage === 'purchase' || this.parentPage === 'edit-perch';
     if (isPurchasePage) {
      this.selectedItem.tot = (this.selectedItem.qty * +this.selectedItem.perch_price).toFixed(2);
     }

      if (this.enablePriceUpdateConfirmation) {
       this.checkPriceChanges();
      }
  }

 
async   addToList() {
    // Check if this is a purchase page where quantity checking should be ignored
    const isPurchasePage = this.parentPage === 'purchase' || this.parentPage === 'edit-perch';
    const isSalesPage = this.parentPage === 'sales' || this.parentPage === 'edit-sales';

    // Show quantity warning for sales pages but don't prevent adding
    if (isSalesPage && (+this.selectedItem.qty > +this.availQty)) {
      this.presentToast('الكمية المطلوبة أكبر من المتوفر في المخزن', 'warning');
      // Continue execution - don't return, just show the warning
    }
    
    if (this.selectedItem.item_name == "" || this.selectedItem.id == "" || +this.selectedItem.qty == 0) {
      this.presentToast('الرجاء اختيار الصنف وتحديد الكمية', 'danger');
    } else { 
       // Check if prices have changed and confirmation is enabled
       // Check if prices have changed and confirmation is enabled
  if (this.enablePriceUpdateConfirmation && this.checkPriceChanges()) {
    const shouldContinue = await this.showPriceUpdateConfirmation();
    console.log('User chose not to save prices' ,shouldContinue);
    if (!shouldContinue) {
     
     
    } else {
       // If user chose to save prices, update them via API
    if (this.pricesChanged) {
      let item = {id : this.selectedItem.id, pay_price: this.selectedItem.pay_price, perch_price: this.selectedItem.perch_price};
      // Call the updatePayPrice method
        const updateSuccess =   await this.updatePayPrice(item);
      if (!updateSuccess) {
        // If update failed, ask user if they want to continue anyway
        const continueAnyway = await this.askContinueWithoutUpdate();
        if (!continueAnyway) {
          return;
        }
      }
     }
    }
    
   
  }


     // Emit the selected item to parent component
      this.itemAdded.emit({...this.selectedItem}); 
      
      // Reset all fields and show dropdown after adding item
      this.resetAfterAddingItem();
      
      this.setFocusOnInput('dstPop');


      // Store the original trigger element before reopening popover
    const originalTrigger = this.popover.event;
    
    // Close and reopen popover with proper positioning and focus
    this.isOpen = false;
     
    this.resetSelectedItem();
    setTimeout(() => {
      // Restore original trigger position
      this.popover.event = originalTrigger;
      this.isOpen = true;
      this.highlightedIndex = -1;
      this.clearSearch();
      // Items loaded directly without filtering
      this.resetSelectedItem();
      // Multiple focus attempts
      setTimeout(() => this.forceFocusOnPopInput(), 100);
      setTimeout(() => this.forceFocusOnPopInput(), 300);
      setTimeout(() => this.forceFocusOnPopInput(), 500);
      }, 50);
    }   
 }
// Helper method for continue without update confirmation
async askContinueWithoutUpdate(): Promise<boolean> {
  return new Promise(async (resolve) => {
    const alert = await this.alertController.create({
      header: 'فشل التحديث',
      mode: 'ios',
      message: 'فشل في تحديث الأسعار. هل تريد المتابعة بالأسعار الجديدة بدون حفظها؟',
      buttons: [
        {
          text: 'إلغاء',
          role: 'cancel',
          handler: () => resolve(false)
        },
        {
          text: 'متابعة',
          handler: () => resolve(true)
        }
      ]
    });
    await alert.present();
  });
}

// Helper method to reset selected item
resetSelectedItem() {
  this.selectedItem = {
    id: undefined,
    dateCreated: "",
    pay_ref: null,
    item_desc: "",
    item_name: "",
    item_unit: "",
    parcode: 0,
    pay_price: 0,
    perch_price: 0,
    qty: 0,
    tot: 0,
    availQty: 0,
    aliasEn: ""
  };
 
}

// Helper method to reopen popover



// Add this method to show pay_price input warning
showPayPriceWarning() {
  // Find the pay_price input element
  this.findPayPriceInput();
  
  if (this.payPriceInputElement) {
    // Add red border class
    this.payPriceInputElement.classList.add('qty-warning-border');
    
    // Remove the class after 3 seconds
    setTimeout(() => {
      if (this.payPriceInputElement) {
        this.payPriceInputElement.classList.remove('qty-warning-border');
      }
    }, 3000);
  }
  
  // Set warning flag
  this.showQtyWarning = true;
  setTimeout(() => {
    this.showQtyWarning = false;
  }, 3000);
}

// Method to find pay_price input element
findPayPriceInput() {
  // Try different selectors to find the pay_price input
  const selectors = [
    'ion-input[ng-reflect-model*="pay_price"] input',
    'ion-input[ng-reflect-model*="selectedItem.pay_price"] input',
    '.pay-price-input input',
    'ion-col:nth-child(3) ion-input input', // Assuming it's the 3rd column
  ];
  
  for (const selector of selectors) {
    const element = document.querySelector(selector) as HTMLElement;
    if (element) {
      this.payPriceInputElement = element;
      break;
    }
  }
  
  // Fallback: find by looking for input with pay_price value
  if (!this.payPriceInputElement) {
    const allInputs = document.querySelectorAll('ion-input input');
    allInputs.forEach((input: HTMLInputElement) => {
      if (input.value == this.selectedItem.pay_price.toString()) {
        this.payPriceInputElement = input;
      }
    });
  }
}




// Method to present dropdown from external call
  presentDropdownFromEvent(event: Event) {
    this.presentDropdown(event);
  }
  refresh() {
    this.refreshItems.emit();
  }

  // Refresh items (manual refresh with user feedback)
  refreshItemsList() {
    console.log('Manual refresh triggered by user');
    
    // Clear current data
    // Items cleared directly
    this.showDropdown = false;
    this.highlightedIndex = -1;
    
    // Clear selection if exists
    if (this.selectedItem && this.selectedItem.id) {
      this.clearSelection();
    }
    
    // Reload items
    this.refreshItems.emit();
  }

  setFocusOnInput(inputName: string) {
    if (inputName === 'dstPop' || inputName === 'searchInput') {
      if (this.searchInput) {
        this.searchInput.nativeElement.focus();
      }
      this.presentDropdown();
    } else if (inputName === 'qtyId') {
      if (this.qtyId) {
        this.qtyId.setFocus();
      }
    }
  }

  isFocused(event) {
    // Handle focus events if needed
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

  // Compatibility methods for remaining old code
  calculatePopoverSize() {
    // Legacy method - no longer needed
  }

  presentPopover(event?: Event) {
    // Redirect to new dropdown method
    this.presentDropdown(event);
  }

  didDismiss() {
    // Legacy method - handled by new dropdown logic
    this.showDropdown = false;
    this.highlightedIndex = -1;
    this.searchTerm = '';
  }

  onPopoverDidPresent() {
    // Legacy method - no longer needed
  }

  onPopoverKeyDown(event: KeyboardEvent) {
    // Redirect to new method
    this.onKeyDown(event);
  }

  scrollToSelected() {
    // Legacy method - replaced by scrollHighlightedItemIntoView
    this.scrollHighlightedItemIntoView();
  }

  fixPopoverPosition(event?: Event) {
    // Legacy method - no longer needed
  }

  setFocusOnPopInput() {
    // Legacy method - redirect to new input
    if (this.searchInput) {
      this.searchInput.nativeElement.focus();
    }
  }

  forceFocusOnPopInput() {
    // Legacy method - redirect to new input
    setTimeout(() => {
      if (this.searchInput) {
        this.searchInput.nativeElement.focus();
      }
    }, 100);
  }

  onWindowResize() {
    // Legacy method - no longer needed for dropdowns
  }

  onOrientationChange() {
    // Legacy method - no longer needed for dropdowns
  }

  reopenPopover() {
    // Legacy method - redirect to dropdown
    this.reopenDropdown();
  }

  reopenPopoverWithStoredPosition() {
    // Legacy method - redirect to dropdown
    this.presentDropdown();
  }
}
