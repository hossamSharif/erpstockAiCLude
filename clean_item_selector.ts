import { Component, OnInit, ViewChild, Input, Output, EventEmitter, ElementRef, HostListener, ChangeDetectorRef } from '@angular/core';
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
  standalone: false
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

  // Category filter properties - dropdown style like account-selector
  categories: any[] = [];
  filteredCategories: any[] = [];
  selectedCategory: any = null;
  selectedCategoryId: any = 'all';
  
  // Category dropdown state
  showCategoryDropdown: boolean = false;
  categorySearchTerm: string = 'الكل';
  categoryHighlightedIndex: number = -1;
  
  // Dropdown positioning
  dropdownPosition = { top: '0px', left: '0px', width: '250px' };
  categoryDropdownPosition = { top: '0px', left: '0px', width: '250px' };
  
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
  filteredItems: Array<any> = [];
  availQty: number = 0;
  
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
    this.filteredItems = this.items;
    this.getCategories();
    this.applyFilters();
    this.getAppInfo();
  }

  ngOnChanges() {
    this.filteredItems = this.items;
    this.applyFilters();
  }

  // Category filter methods - dropdown style like account-selector
  getCategories() {
    this.api.getCategories().subscribe(
      data => {
        this.categories = data['data'] || [];
        console.log('Categories loaded:', this.categories.length, 'categories');
        
        // Add "All" option at the beginning
        this.categories.unshift({ id: 'all', category_name: 'الكل' });
        this.filteredCategories = [...this.categories];
        
        // Set default to 'all'
        this.selectedCategory = this.categories[0];
        this.selectedCategoryId = 'all';
        this.categorySearchTerm = 'الكل';
      },
      error => {
        console.error('Error loading categories:', error);
        this.categories = [{ id: 'all', category_name: 'الكل' }];
        this.filteredCategories = [...this.categories];
      }
    );
  }

  // Rest of the methods will be the clean versions...
  // I'll continue with the other methods in the next part