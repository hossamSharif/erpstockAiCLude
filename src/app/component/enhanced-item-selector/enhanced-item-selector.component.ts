import { Component, OnInit, OnDestroy, ViewChild, Input, Output, EventEmitter, ElementRef, HostListener, ChangeDetectorRef, Renderer2 } from '@angular/core';
import { ServicesService } from "../../stockService/services.service";
import { Storage } from '@ionic/storage';
import { AlertController, LoadingController, ToastController } from '@ionic/angular';
import { FilterPipe } from '../item-selector/pipe';
import { DatePipe } from '@angular/common';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-enhanced-item-selector',
  templateUrl: './enhanced-item-selector.component.html',
  styleUrls: ['./enhanced-item-selector.component.scss']
})
export class EnhancedItemSelectorComponent implements OnInit, OnDestroy {
  @ViewChild('searchInput', { static: false }) searchInput: ElementRef;
  @ViewChild('inputWrapper', { static: false }) inputWrapper: ElementRef;
  
  // Input properties
  @Input() placeholder: string = 'اختر الصنف';
  @Input() searchLang: number = 0;
  @Input() showQuantityDisplay: boolean = false;
  @Input() parentPage: string = 'items-report';
  
  // Output events
  @Output() itemSelected = new EventEmitter<any>();
  @Output() refreshRequested = new EventEmitter<void>();
  
  // Dropdown state
  showDropdown: boolean = false;
  highlightedIndex: number = -1;
  
  // Component properties
  searchTerm: string = "";
  items: Array<any> = [];
  loadingItems: boolean = false;
  loadingQty: boolean = false;
  qtyError: boolean = false;
  qtyErrorMsg: string = "";
  
  // Store and user info
  store_info: any;
  user_info: any;
  year: any;
  
  // Selected item
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
    tax: any,
    imageUrl: any
  };
  
  // Dropdown positioning
  dropdownPosition = { top: '0px', left: '0px', width: '250px' };
  
  // Focus tracking
  private componentHasFocus: boolean = false;
  
  // Portal dropdown element
  private portalDropdownElement: HTMLElement | null = null;
  
  constructor(
    private alertController: AlertController,
    private router: Router, 
    private api: ServicesService,
    private storage: Storage,
    private toast: ToastController,
    private loadingController: LoadingController,
    private datePipe: DatePipe,
    private cdr: ChangeDetectorRef,
    private renderer: Renderer2
  ) {
    this.initializeSelectedItem();
  }

  ngOnInit() {
    this.getAppInfo();
    this.loadItemsFromBackend();
  }

  ngOnDestroy() {
    // Cleanup portal dropdown
    this.destroyPortalDropdown();
  }

  initializeSelectedItem() {
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
      availQty: 0,
      aliasEn: "",
      tax: 0,
      imageUrl: ""
    };
  }

  getAppInfo() {
    this.storage.get('USER_INFO').then((response) => {
      if (response) {
        this.user_info = response;
      }
    });

    this.storage.get('STORE_INFO').then((response) => {
      if (response) {
        this.store_info = response;
        this.loadItemsFromBackend();
      }
    });

    this.storage.get('year').then((response) => {
      if (response) {
        this.year = response;
        this.loadItemsFromBackend();
      }
    });
  }

  loadItemsFromBackend() {
    if (!this.store_info || !this.year) {
      return;
    }

    console.log('Loading items from backend...');
    this.loadingItems = true;
    
    this.api.getAllStockItemsWithouteCounts(this.store_info.id, this.year.id).subscribe(
      data => {
        console.log('Items loaded successfully:', data);
        let res = data;
        this.items = res['data'] || [];
        this.loadingItems = false;
        
        // Store items locally for offline use
        this.storage.set('itemsLocal', this.items).then(() => {
          console.log('Items stored locally');
        });
      },
      (err) => {
        console.error('Error loading items:', err);
        this.loadingItems = false;
        this.loadItemsFromStorage();
        this.presentToast('خطأ في تحميل الأصناف، تم التحميل من البيانات المحفوظة', 'warning');
      },
      () => {
        this.loadingItems = false;
      }
    );
  }

  loadItemsFromStorage() {
    this.storage.get('itemsLocal').then((response) => {
      if (response) {
        this.items = response;
        console.log('Items loaded from storage:', this.items.length);
      } else {
        this.items = [];
        this.presentToast('لا توجد أصناف محفوظة', 'warning');
      }
    });
  }

  // Create portal dropdown attached to document.body
  createPortalDropdown() {
    if (this.portalDropdownElement) {
      this.destroyPortalDropdown();
    }

    const elementToUse = this.inputWrapper?.nativeElement || this.searchInput?.nativeElement;
    if (!elementToUse) return;

    const rect = elementToUse.getBoundingClientRect();
    
    // Create dropdown container
    this.portalDropdownElement = this.renderer.createElement('div');
    this.renderer.addClass(this.portalDropdownElement, 'portal-dropdown-container');
    
    // Apply positioning styles
    this.renderer.setStyle(this.portalDropdownElement, 'position', 'fixed');
    this.renderer.setStyle(this.portalDropdownElement, 'top', `${rect.bottom + 4}px`);
    this.renderer.setStyle(this.portalDropdownElement, 'left', `${rect.left}px`);
    this.renderer.setStyle(this.portalDropdownElement, 'width', `${rect.width}px`);
    this.renderer.setStyle(this.portalDropdownElement, 'z-index', '2147483647');
    this.renderer.setStyle(this.portalDropdownElement, 'background', 'white');
    this.renderer.setStyle(this.portalDropdownElement, 'border', '1px solid #ccc');
    this.renderer.setStyle(this.portalDropdownElement, 'border-radius', '8px');
    this.renderer.setStyle(this.portalDropdownElement, 'box-shadow', '0 8px 24px rgba(0, 0, 0, 0.2)');
    this.renderer.setStyle(this.portalDropdownElement, 'max-height', '300px');
    this.renderer.setStyle(this.portalDropdownElement, 'overflow-y', 'auto');
    this.renderer.setStyle(this.portalDropdownElement, 'min-width', '250px');
    
    // Create dropdown content
    this.createDropdownContent();
    
    // Append to document body
    this.renderer.appendChild(document.body, this.portalDropdownElement);
    
    console.log('Portal dropdown created at:', { top: rect.bottom + 4, left: rect.left, width: rect.width });
  }

  // Create dropdown content dynamically - OPTIMIZED VERSION
  createDropdownContent() {
    if (!this.portalDropdownElement) return;

    const filteredItems = this.getFilteredItems();
    
    if (filteredItems.length === 0) {
      // No results
      const noResultsDiv = this.renderer.createElement('div');
      this.renderer.setStyle(noResultsDiv, 'padding', '12px');
      this.renderer.setStyle(noResultsDiv, 'text-align', 'center');
      this.renderer.setStyle(noResultsDiv, 'color', '#666');
      this.renderer.setStyle(noResultsDiv, 'font-style', 'italic');
      
      const noResultsText = this.renderer.createText('لا توجد نتائج مطابقة');
      this.renderer.appendChild(noResultsDiv, noResultsText);
      this.renderer.appendChild(this.portalDropdownElement, noResultsDiv);
      return;
    }

    // Create items list - ONLY CREATE ONCE
    filteredItems.forEach((item, index) => {
      const itemDiv = this.renderer.createElement('div');
      this.renderer.addClass(itemDiv, 'portal-dropdown-item');
      this.renderer.setAttribute(itemDiv, 'data-index', index.toString());
      
      // Base styles
      this.renderer.setStyle(itemDiv, 'padding', '12px');
      this.renderer.setStyle(itemDiv, 'border-bottom', '1px solid #eee');
      this.renderer.setStyle(itemDiv, 'cursor', 'pointer');
      this.renderer.setStyle(itemDiv, 'direction', 'rtl');
      this.renderer.setStyle(itemDiv, 'text-align', 'right');
      this.renderer.setStyle(itemDiv, 'transition', 'background-color 0.2s ease');
      
      // Item name
      const nameDiv = this.renderer.createElement('div');
      this.renderer.setStyle(nameDiv, 'font-size', '14px');
      this.renderer.setStyle(nameDiv, 'font-weight', '500');
      this.renderer.setStyle(nameDiv, 'color', '#333');
      this.renderer.setStyle(nameDiv, 'margin-bottom', '4px');
      const nameText = this.renderer.createText(item.item_name);
      this.renderer.appendChild(nameDiv, nameText);
      this.renderer.appendChild(itemDiv, nameDiv);
      
      // Prices
      const pricesDiv = this.renderer.createElement('div');
      this.renderer.setStyle(pricesDiv, 'display', 'flex');
      this.renderer.setStyle(pricesDiv, 'gap', '12px');
      this.renderer.setStyle(pricesDiv, 'font-size', '11px');
      
      const salePrice = this.renderer.createElement('span');
      this.renderer.setStyle(salePrice, 'color', '#10dc60');
      this.renderer.setStyle(salePrice, 'font-weight', '600');
      const salePriceText = this.renderer.createText(`بيع: ${item.pay_price}`);
      this.renderer.appendChild(salePrice, salePriceText);
      this.renderer.appendChild(pricesDiv, salePrice);
      
      const purchasePrice = this.renderer.createElement('span');
      this.renderer.setStyle(purchasePrice, 'color', '#f04141');
      this.renderer.setStyle(purchasePrice, 'font-weight', '600');
      const purchasePriceText = this.renderer.createText(`شراء: ${item.perch_price}`);
      this.renderer.appendChild(purchasePrice, purchasePriceText);
      this.renderer.appendChild(pricesDiv, purchasePrice);
      
      this.renderer.appendChild(itemDiv, pricesDiv);
      
      // OPTIMIZED EVENT LISTENERS - NO RECREATING DROPDOWN
      this.renderer.listen(itemDiv, 'mousedown', (event) => {
        // Prevent input blur from hiding dropdown before click is processed
        event.preventDefault();
      });
      
      this.renderer.listen(itemDiv, 'click', (event) => {
        console.log('Item clicked:', item.item_name);
        event.stopPropagation();
        this.componentHasFocus = true; // Keep focus to prevent blur hiding
        this.selectItem(item);
      });
      
      this.renderer.listen(itemDiv, 'mouseenter', () => {
        this.componentHasFocus = true; // Maintain focus when hovering over dropdown
        this.updateHighlighting(index); // EFFICIENT highlighting update
      });
      
      this.renderer.appendChild(this.portalDropdownElement, itemDiv);
    });
    
    // Apply initial highlighting
    this.updateHighlighting(this.highlightedIndex);
  }

  // OPTIMIZED: Update highlighting without recreating dropdown
  updateHighlighting(newHighlightedIndex: number) {
    if (!this.portalDropdownElement) return;
    
    this.highlightedIndex = newHighlightedIndex;
    
    // Get all dropdown items
    const items = this.portalDropdownElement.querySelectorAll('.portal-dropdown-item');
    
    // Update highlighting efficiently - only change styles, don't recreate
    items.forEach((item, index) => {
      const element = item as HTMLElement;
      if (index === this.highlightedIndex) {
        // Highlight this item
        this.renderer.setStyle(element, 'background-color', 'rgba(74, 144, 226, 0.1)');
        this.renderer.setStyle(element, 'border-left', '3px solid #4A90E2');
      } else {
        // Remove highlight from this item
        this.renderer.removeStyle(element, 'background-color');
        this.renderer.removeStyle(element, 'border-left');
      }
    });
  }

  // LEGACY: Keep for search term changes only
  updatePortalDropdown() {
    if (!this.portalDropdownElement) return;
    
    // Only recreate when search term changes (not for highlighting)
    while (this.portalDropdownElement.firstChild) {
      this.renderer.removeChild(this.portalDropdownElement, this.portalDropdownElement.firstChild);
    }
    
    this.createDropdownContent();
  }

  // Destroy portal dropdown
  destroyPortalDropdown() {
    if (this.portalDropdownElement) {
      this.renderer.removeChild(document.body, this.portalDropdownElement);
      this.portalDropdownElement = null;
    }
  }

  // Calculate dropdown position - LEGACY METHOD (kept for compatibility)
  calculateDropdownPosition() {
    // This method is kept for compatibility but not used with portal approach
    const elementToUse = this.inputWrapper?.nativeElement || this.searchInput?.nativeElement;
    
    if (elementToUse) {
      const rect = elementToUse.getBoundingClientRect();
      
      this.dropdownPosition = {
        top: (rect.bottom + 4) + 'px',
        left: rect.left + 'px',
        width: rect.width + 'px'
      };
    }
  }

  // Get filtered items for display
  getFilteredItems() {
    if (!this.items || this.items.length === 0) {
      return [];
    }

    if (this.searchTerm && this.searchTerm.trim() !== '') {
      const searchValue = this.searchTerm.toLowerCase();
      return this.items.filter(item => 
        item.item_name.toLowerCase().includes(searchValue) ||
        (item.item_desc && item.item_desc.toLowerCase().includes(searchValue)) ||
        (item.aliasEn && item.aliasEn.toLowerCase().includes(searchValue))
      );
    }
    
    return this.items;
  }

  // Handle input focus - show dropdown
  onInputFocus() {
    console.log('Input focused, items:', this.items.length);
    this.componentHasFocus = true;
    this.highlightedIndex = -1;
    
    if (this.items.length > 0) {
      setTimeout(() => {
        this.showDropdown = true;
        this.createPortalDropdown();
      }, 10);
    } else {
      console.warn('No items available to show in dropdown');
    }
  }

  // Handle input blur - hide dropdown with delay
  onInputBlur() {
    console.log('Input blur triggered');
    this.componentHasFocus = false;
    
    setTimeout(() => {
      if (!this.componentHasFocus) {
        console.log('Hiding dropdown after blur delay');
        this.showDropdown = false;
        this.highlightedIndex = -1;
        this.destroyPortalDropdown();
      }
    }, 300); // Increased delay to allow click events to register
  }

  // Listen for scroll events to reposition dropdown
  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    if (this.showDropdown && this.portalDropdownElement) {
      this.createPortalDropdown(); // Recreate portal with updated position
    }
  }

  // Listen for resize events to reposition dropdown
  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    if (this.showDropdown && this.portalDropdownElement) {
      this.createPortalDropdown(); // Recreate portal with updated position
    }
  }

  // Listen for clicks outside the component to hide dropdowns
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event) {
    const target = event.target as HTMLElement;
    if (!target) return;
    
    const componentElement = this.inputWrapper?.nativeElement || this.searchInput?.nativeElement;
    
    let isClickInsideComponent = false;
    let isClickInsidePortalDropdown = false;
    
    if (componentElement) {
      isClickInsideComponent = componentElement.contains(target) || 
                              target.closest('.item-selector-wrapper') !== null;
    }
    
    // Check if click is inside portal dropdown
    if (this.portalDropdownElement) {
      isClickInsidePortalDropdown = this.portalDropdownElement.contains(target) ||
                                   target.closest('.portal-dropdown-container') !== null ||
                                   target.closest('.portal-dropdown-item') !== null;
    }
    
    console.log('Document click detected:', {
      isClickInsideComponent,
      isClickInsidePortalDropdown,
      targetClass: target.className,
      showDropdown: this.showDropdown
    });
    
    if (!isClickInsideComponent && !isClickInsidePortalDropdown) {
      if (this.showDropdown) {
        console.log('Hiding dropdown due to outside click');
        this.showDropdown = false;
        this.highlightedIndex = -1;
        this.componentHasFocus = false;
        this.destroyPortalDropdown();
      }
    }
  }

  // Handle search input changes
  onSearchInput(event: any) {
    const searchValue = event.target.value || event.detail.value;
    this.searchTerm = searchValue || '';
    
    console.log('Search term changed to:', this.searchTerm);
    
    if (this.searchTerm.length === 0) {
      console.log('Input field cleared - resetting selection');
      this.resetSelection();
    }
    
    // Reset highlighting when search changes
    this.highlightedIndex = -1;
    
    if (this.searchTerm.length > 0 || this.items.length > 0) {
      if (!this.showDropdown) {
        this.showDropdown = true;
        this.createPortalDropdown();
      } else if (this.portalDropdownElement) {
        this.updatePortalDropdown(); // Update existing dropdown
      }
      console.log('Showing dropdown with', this.getFilteredItems().length, 'filtered items');
    } else {
      this.showDropdown = false;
      this.destroyPortalDropdown();
    }
  }

  // Handle clear button click
  onInputClear(event: any) {
    console.log('Clear button clicked');
    this.searchTerm = '';
    this.resetSelection();
    this.showDropdown = false;
    this.highlightedIndex = -1;
    this.destroyPortalDropdown();
  }

  // Handle model changes
  onModelChange(newValue: string) {
    console.log('Model changed to:', newValue);
    this.searchTerm = newValue || '';
    
    if (!newValue || newValue.length === 0) {
      console.log('Model change detected empty value - resetting component');
      this.resetSelection();
    }
    
    this.highlightedIndex = -1;
    
    if (this.searchTerm.length > 0 || this.getFilteredItems().length > 0) {
      if (!this.showDropdown) {
        this.showDropdown = true;
        this.calculateDropdownPosition();
      }
    } else {
      this.showDropdown = false;
    }
  }

  // Reset selection
  resetSelection() {
    this.initializeSelectedItem();
    this.searchTerm = '';
    this.showDropdown = false;
    this.highlightedIndex = -1;
    this.itemSelected.emit(null);
    this.destroyPortalDropdown();
    
    // Clear the search input field
    if (this.searchInput && this.searchInput.nativeElement) {
      this.searchInput.nativeElement.value = '';
    }
    
    this.cdr.detectChanges();
  }

  // Toggle dropdown visibility
  toggleDropdown() {
    console.log('Toggle dropdown clicked, items:', this.items.length);
    if (this.items.length > 0) {
      this.showDropdown = !this.showDropdown;
      if (this.showDropdown) {
        this.calculateDropdownPosition();
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

  // Handle keyboard navigation - OPTIMIZED
  onKeyDown(event: KeyboardEvent) {
    if (!this.showDropdown || this.getFilteredItems().length === 0) {
      if (event.key === 'ArrowDown' && this.getFilteredItems().length > 0) {
        event.preventDefault();
        this.showDropdown = true;
        this.createPortalDropdown();
        this.updateHighlighting(0);
      }
      return;
    }

    switch (event.key) {
      case 'ArrowDown':
        event.preventDefault();
        const newDownIndex = Math.min(this.highlightedIndex + 1, this.getFilteredItems().length - 1);
        this.updateHighlighting(newDownIndex); // FAST highlighting update
        this.scrollHighlightedItemIntoView();
        break;

      case 'ArrowUp':
        event.preventDefault();
        const newUpIndex = Math.max(this.highlightedIndex - 1, -1);
        this.updateHighlighting(newUpIndex); // FAST highlighting update
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
        this.destroyPortalDropdown();
        break;

      case 'Tab':
        this.showDropdown = false;
        this.highlightedIndex = -1;
        this.destroyPortalDropdown();
        break;
    }
  }

  scrollHighlightedItemIntoView() {
    if (this.highlightedIndex >= 0 && this.portalDropdownElement) {
      // Use direct query selector for efficiency
      const highlightedItem = this.portalDropdownElement.querySelector(`[data-index="${this.highlightedIndex}"]`) as HTMLElement;
      
      if (highlightedItem) {
        const containerRect = this.portalDropdownElement.getBoundingClientRect();
        const itemRect = highlightedItem.getBoundingClientRect();
        
        if (itemRect.bottom > containerRect.bottom) {
          this.portalDropdownElement.scrollTop += (itemRect.bottom - containerRect.bottom + 10);
        } else if (itemRect.top < containerRect.top) {
          this.portalDropdownElement.scrollTop -= (containerRect.top - itemRect.top + 10);
        }
      }
    }
  }

  // Select item
  selectItem(item: any) {
    console.log('✅ selectItem called with:', item.item_name);
    
    this.selectedItem = {
      id: item.id,
      dateCreated: item.dateCreated,
      pay_ref: "",
      item_desc: item.item_desc,
      item_name: item.item_name,
      item_unit: item.item_unit,
      parcode: item.parcode,
      pay_price: item.pay_price,
      perch_price: item.perch_price,
      qty: "",
      tot: item.pay_price,
      availQty: item.quantity || item.availQty,
      aliasEn: item.aliasEn,
      tax: item.tax || 0,
      imageUrl: item.imageUrl || ""
    };
    
    this.searchTerm = item.item_name;
    this.showDropdown = false;
    this.highlightedIndex = -1;
    this.componentHasFocus = false;
    this.destroyPortalDropdown();
    
    console.log('✅ Item selection completed, emitting event');
    
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
    console.log('✅ Item selected and emitted:', this.selectedItem.item_name);
  }

  // Refresh items
  refreshItems() {
    console.log('Refreshing items...');
    this.loadItemsFromBackend();
    this.refreshRequested.emit();
  }

  // Performance optimization
  trackByItemId(index: number, item: any): any {
    return item.id || index;
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

  // Additional methods to match the original item-selector functionality
  refreshQuantity() {
    // Placeholder for quantity refresh logic
    console.log('Refresh quantity called');
  }

  viewSelectedItemReport() {
    // Navigate to item report with selected item
    if (this.selectedItem && this.selectedItem.id) {
      const navigationExtras: NavigationExtras = {
        queryParams: {
          item: JSON.stringify(this.selectedItem)
        }
      };
      this.router.navigate(['/items-report'], navigationExtras);
    }
  }

  viewSelectedItemDetails() {
    // Placeholder for viewing item details
    console.log('View item details called for:', this.selectedItem);
    // You can implement modal or navigation logic here
  }
}