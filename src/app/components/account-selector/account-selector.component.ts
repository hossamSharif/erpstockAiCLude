import { Component, Input, Output, EventEmitter, OnInit, OnChanges, OnDestroy, forwardRef, ViewChild, ElementRef, ChangeDetectorRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { ServicesService } from '../../stockService/services.service';
import { AccountCommunicationService } from '../../services/account-communication.service';
import { Subscription } from 'rxjs';

export interface AccountSelectorData {
  id: any;
  ac_id: any;
  sub_name: string;
  sub_type: string;
  sub_code: string;
  sub_balance: any;
  store_id: any;
  cat_name: string;
  cat_id: any;
  phone: string;
  address: string;
}

export interface AccountBalance {
  current_balance: number;
  status: string;
  invoice_amount?: number;
}

@Component({
  selector: 'app-account-selector',
  templateUrl: './account-selector.component.html',
  styleUrls: ['./account-selector.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AccountSelectorComponent),
      multi: true
    }
  ]
})
export class AccountSelectorComponent implements OnInit, OnChanges, OnDestroy, ControlValueAccessor {
  @ViewChild('searchInput', { static: false }) searchInput: ElementRef;
  @ViewChild('inputWrapper', { static: false }) inputWrapper: ElementRef;

  @Input() accountType: 'customer' | 'supplier' = 'customer'; // customer = ac_id 1, supplier = ac_id 2
  @Input() placeholder: string = 'اختر الحساب';
  @Input() label: string = 'الحساب';
  @Input() store_info: any = null;
  @Input() year: any = null;
  @Input() showAddButton: boolean = true;
  @Input() disabled: boolean = false;

  @Output() accountSelected = new EventEmitter<AccountSelectorData>();
  @Output() balanceLoaded = new EventEmitter<AccountBalance>();
  @Output() addAccountClicked = new EventEmitter<void>();

  // Component state
  accounts: AccountSelectorData[] = [];
  filteredAccounts: AccountSelectorData[] = [];
  selectedAccount: AccountSelectorData | null = null;
  accountBalance: AccountBalance | null = null;
  
  searchTerm: string = '';
  showDropdown: boolean = false;
  loadingAccounts: boolean = false;
  loadingBalance: boolean = false;

  // Keyboard navigation
  highlightedIndex: number = -1;

  // Dropdown positioning
  dropdownPosition = { top: '0px', left: '0px', width: '250px' };

  // Service subscription
  private newAccountSubscription: Subscription;

  // ControlValueAccessor implementation
  private onChange = (value: any) => {};
  private onTouched = () => {};

  constructor(
    private api: ServicesService,
    private navController: NavController,
    private accountCommunicationService: AccountCommunicationService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    // Ensure we start with no selection
    this.selectedAccount = null;
    this.accountBalance = null;
    this.loadingBalance = false;
    
    this.loadAccounts();
    this.subscribeToNewAccount();
  }

  ngOnDestroy() {
    if (this.newAccountSubscription) {
      this.newAccountSubscription.unsubscribe();
    }
  }

  // Subscribe to new account creation
  private subscribeToNewAccount() {
    this.newAccountSubscription = this.accountCommunicationService.newAccount$.subscribe(newAccount => {
      if (newAccount) {
        console.log('AccountSelector: Received new account:', newAccount);
        
        // Add to accounts list
        this.accounts.push(newAccount);
        this.filteredAccounts = [...this.accounts];
        
        // Select the new account
        this.selectAccount(newAccount);
        
        // Clear the service data
        this.accountCommunicationService.clearNewAccount();
        
        console.log('AccountSelector: New account added and selected');
      }
    });
  }

  ngOnChanges() {
    // Reload accounts if store_info or year changes
    if (this.store_info && this.year) {
      this.loadAccounts();
    }
  }

  // Load all accounts (both customers and suppliers)
  loadAccounts() {
    if (!this.store_info || !this.year) {
      console.warn('Account Selector: store_info or year not provided');
      return;
    }

    this.loadingAccounts = true;
    console.log('Loading accounts for store:', this.store_info.id, 'year:', this.year.id);
    
    // Load all accounts with ac_id = 1 (customers) and ac_id = 2 (suppliers)
    this.api.getAllCustomerSupplierAccounts(this.store_info.id, this.year.id).subscribe(
      (response: any) => {
        this.loadingAccounts = false;
        console.log('Accounts response:', response);
        
        if (response && response.data) {
          this.accounts = response.data;
          this.filteredAccounts = [...this.accounts];
          console.log('Loaded', this.accounts.length, 'accounts');
        } else {
          console.warn('No accounts data in response');
          this.accounts = [];
          this.filteredAccounts = [];
        }
      },
      (error) => {
        this.loadingAccounts = false;
        console.error('Error loading accounts:', error);
        this.accounts = [];
        this.filteredAccounts = [];
      }
    );
  }

  // Handle search input
  onSearchInput(event: any) {
    this.searchTerm = event.target.value; // Keep original case
    console.log('Search term:', this.searchTerm);
    console.log('Total accounts:', this.accounts.length);
    
    // Clear selected account if user is typing something different
    if (this.selectedAccount && this.searchTerm !== this.selectedAccount.sub_name) {
      console.log('Clearing selectedAccount because search term changed');
      this.selectedAccount = null;
      this.accountBalance = null; // Also clear balance
      this.loadingBalance = false; // Stop any loading
      // Force change detection
      this.cdr.detectChanges();
    }
    
    this.filterAccounts();
    this.highlightedIndex = -1; // Reset highlight when user types
    
    // Show dropdown when user starts typing or when there are accounts
    if (this.searchTerm.length > 0 || this.accounts.length > 0) {
      // Calculate position if dropdown is not already shown
      if (!this.showDropdown) {
        this.calculateDropdownPosition();
      }
      this.showDropdown = true;
      console.log('Showing dropdown with', this.filteredAccounts.length, 'filtered accounts');
    } else {
      this.showDropdown = false;
      this.filteredAccounts = [...this.accounts];
    }
  }

  // Filter accounts based on search term
  filterAccounts() {
    if (this.searchTerm.trim() === '') {
      this.filteredAccounts = [...this.accounts];
    } else {
      this.filteredAccounts = this.accounts.filter(account =>
        account.sub_name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        (account.sub_code && account.sub_code.toLowerCase().includes(this.searchTerm.toLowerCase()))
      );
    }
  }

  // Handle input focus
  onInputFocus() {
    console.log('Input focused, accounts:', this.accounts.length);
    console.log('Current searchTerm:', this.searchTerm);
    console.log('Selected account:', this.selectedAccount);
    
    this.highlightedIndex = -1; // Reset highlight on focus
    
    // Show dropdown when focused if we have accounts
    if (this.accounts.length > 0) {
      // Calculate position before showing
      setTimeout(() => {
        this.calculateDropdownPosition();
        this.showDropdown = true;
      }, 10);
      
      // If the current search term matches selected account name exactly, show all accounts
      // This handles the case where user clicks on input after selecting an account
      if (this.selectedAccount && this.searchTerm === this.selectedAccount.sub_name) {
        this.filteredAccounts = [...this.accounts];
      } else if (this.searchTerm.length === 0) {
        // If no search term, show all accounts
        this.filteredAccounts = [...this.accounts];
      } else {
        // Otherwise filter based on search term
        this.filteredAccounts = this.accounts.filter(account =>
          account.sub_name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
          (account.sub_code && account.sub_code.toLowerCase().includes(this.searchTerm.toLowerCase()))
        );
      }
    }
  }

  // Handle input blur with delay to allow item click
  onInputBlur() {
    console.log('Input blur triggered');
    setTimeout(() => {
      console.log('Hiding dropdown after blur delay');
      this.showDropdown = false;
      this.highlightedIndex = -1; // Reset highlight when dropdown closes
    }, 200); // Delay to allow click events on dropdown items
  }

  // Handle keyboard navigation
  onKeyDown(event: KeyboardEvent) {
    if (!this.showDropdown || this.filteredAccounts.length === 0) {
      // If dropdown is not shown, down arrow should open it
      if (event.key === 'ArrowDown' && this.filteredAccounts.length > 0) {
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
        this.highlightedIndex = Math.min(this.highlightedIndex + 1, this.filteredAccounts.length - 1);
        this.scrollHighlightedItemIntoView();
        break;

      case 'ArrowUp':
        event.preventDefault();
        this.highlightedIndex = Math.max(this.highlightedIndex - 1, -1);
        this.scrollHighlightedItemIntoView();
        break;

      case 'Enter':
        event.preventDefault();
        if (this.highlightedIndex >= 0 && this.highlightedIndex < this.filteredAccounts.length) {
          this.selectAccount(this.filteredAccounts[this.highlightedIndex]);
        }
        break;

      case 'Escape':
        event.preventDefault();
        this.showDropdown = false;
        this.highlightedIndex = -1;
        break;

      case 'Tab':
        // Allow tab to close dropdown and move to next field
        this.showDropdown = false;
        this.highlightedIndex = -1;
        break;
    }
  }

  // Scroll highlighted item into view
  private scrollHighlightedItemIntoView() {
    if (this.highlightedIndex >= 0) {
      // Find the dropdown container and highlighted item
      setTimeout(() => {
        const dropdownContainer = document.querySelector('.dropdown-container');
        const highlightedItem = document.querySelector('.account-item.highlighted');
        
        if (dropdownContainer && highlightedItem) {
          const containerRect = dropdownContainer.getBoundingClientRect();
          const itemRect = highlightedItem.getBoundingClientRect();
          
          if (itemRect.bottom > containerRect.bottom) {
            // Item is below visible area, scroll down
            dropdownContainer.scrollTop += (itemRect.bottom - containerRect.bottom + 10);
          } else if (itemRect.top < containerRect.top) {
            // Item is above visible area, scroll up
            dropdownContainer.scrollTop -= (containerRect.top - itemRect.top + 10);
          }
        }
      }, 10);
    }
  }

  // Calculate dropdown position
  calculateDropdownPosition() {
    // Try to use the input wrapper first, fallback to search input
    const elementToUse = this.inputWrapper?.nativeElement || this.searchInput?.nativeElement;
    
    if (elementToUse) {
      const rect = elementToUse.getBoundingClientRect();
      
      console.log('Dropdown position calculation:');
      console.log('Element used:', elementToUse.tagName, elementToUse.className);
      console.log('Element rect:', rect);
      console.log('Viewport size:', window.innerWidth, window.innerHeight);
      
      this.dropdownPosition = {
        top: (rect.bottom + 2) + 'px',
        left: rect.left + 'px',
        width: rect.width + 'px'
      };
      
      console.log('Calculated dropdown position:', this.dropdownPosition);
    } else {
      console.warn('Could not find element for dropdown positioning');
    }
  }

  // Toggle dropdown visibility
  toggleDropdown() {
    console.log('Toggle dropdown clicked, accounts:', this.accounts.length);
    if (this.accounts.length > 0) {
      this.showDropdown = !this.showDropdown;
      if (this.showDropdown) {
        // Calculate position before showing
        this.calculateDropdownPosition();
        // Show all accounts when dropdown is opened
        this.filteredAccounts = [...this.accounts];
        // Focus the input field
        if (this.searchInput) {
          setTimeout(() => {
            this.searchInput.nativeElement.focus();
          }, 100);
        }
      }
    } else {
      console.warn('No accounts loaded yet');
    }
  }

  // Select account from dropdown
  selectAccount(account: AccountSelectorData) {
    console.log('selectAccount called with:', account);
    console.log('Before - searchTerm:', this.searchTerm);
    
    this.selectedAccount = account;
    this.searchTerm = account.sub_name;
    this.showDropdown = false;
    this.highlightedIndex = -1; // Reset highlight after selection
    
    console.log('After - searchTerm:', this.searchTerm);
    console.log('After - selectedAccount:', this.selectedAccount);
    
    // Force change detection
    this.cdr.detectChanges();
    
    // Also try to manually update the input value
    if (this.searchInput && this.searchInput.nativeElement) {
      setTimeout(() => {
        // For ion-input, we need to set the value and trigger input event
        const ionInput = this.searchInput.nativeElement;
        ionInput.value = account.sub_name;
        
        // Trigger input event to ensure ion-input updates
        const inputEvent = new Event('input', { bubbles: true });
        ionInput.dispatchEvent(inputEvent);
      }, 10);
    }
    
    // Emit events
    this.accountSelected.emit(account);
    this.onChange(account);
    this.onTouched();
    
    // Notify pages about customer selection for payInvo.cust_id setting
    if (account && account.id) {
      this.accountCommunicationService.setCustomerSelected(account.id, account);
    }
    
    // Load account balance
    this.loadAccountBalance(account.id);
    
    console.log('Account selection completed');
  }

  // Load account balance
  loadAccountBalance(accountId: any) {
    if (!accountId || !this.store_info || !this.year) {
      return;
    }

    this.loadingBalance = true;
    this.accountBalance = null;

    this.api.getAccountBalance(accountId, this.store_info.id, this.year.id).subscribe(
      (response: any) => {
        this.loadingBalance = false;
        if (response.success) {
          this.accountBalance = response.data;
          this.balanceLoaded.emit(this.accountBalance);
        }
      },
      (error) => {
        this.loadingBalance = false;
        console.error('Error loading account balance:', error);
      }
    );
  }

  // Handle add account button click
  onAddAccount() {
    console.log('Add account button clicked');
    this.addAccountClicked.emit();
    
    // Navigate to account modal page
    this.navController.navigateForward('/account-modal', {
      queryParams: {
        mode: 'create'
      }
    });
  }

  // Clear selection
  clearSelection() {
    console.log('Clearing all selection data');
    this.selectedAccount = null;
    this.accountBalance = null;
    this.searchTerm = '';
    this.showDropdown = false;
    this.loadingBalance = false;
    this.highlightedIndex = -1; // Reset highlight on clear
    this.filteredAccounts = [...this.accounts];
    
    this.onChange(null);
    this.onTouched();
    this.accountSelected.emit(null);
  }

  // Format balance for display
  formatBalance(balance: AccountBalance): string {
    if (!balance) return '';
    
    const amount = Math.abs(balance.current_balance).toFixed(2);
    const status = balance.status === 'debit' ? 'مدين' : 'دائن';
    return `${amount} (${status})`;
  }

  // Get balance color
  getBalanceColor(balance: AccountBalance): string {
    if (!balance) return 'medium';
    return balance.status === 'debit' ? 'danger' : 'success';
  }

  // Refresh accounts (manual refresh with user feedback)
  refreshAccounts() {
    console.log('Manual refresh triggered by user');
    
    // Clear current data
    this.accounts = [];
    this.filteredAccounts = [];
    this.showDropdown = false;
    this.highlightedIndex = -1;
    
    // Clear selection if exists
    if (this.selectedAccount) {
      this.selectedAccount = null;
      this.accountBalance = null;
      this.searchTerm = '';
      this.onChange(null);
      this.accountSelected.emit(null);
    }
    
    // Reload accounts
    this.loadAccounts();
  }

  // Refresh accounts (internal method)
  refresh() {
    console.log('Internal refresh triggered');
    this.loadAccounts();
  }

  // Check if component is ready
  isReady(): boolean {
    return !this.loadingAccounts && this.accounts.length > 0;
  }

  // ControlValueAccessor implementation
  writeValue(value: any): void {
    if (value && typeof value === 'object') {
      this.selectedAccount = value;
      this.searchTerm = value.sub_name || '';
    } else {
      this.clearSelection();
    }
  }


  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}