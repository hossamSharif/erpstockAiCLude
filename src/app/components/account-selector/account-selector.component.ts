import { Component, Input, Output, EventEmitter, OnInit, OnChanges, OnDestroy, forwardRef, ViewChild, ElementRef, ChangeDetectorRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { ServicesService } from '../../stockService/services.service';
import { AccountCommunicationService } from '../../services/account-communication.service';
import { OfflineDataService } from '../../services/offline-data.service';
import { NetworkService } from '../../services/network.service';
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
  current_balance?: any;
  balance_status?: string;
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
  @Input() showStatementButton: boolean = false;
  @Input() disabled: boolean = false;

  @Output() accountSelected = new EventEmitter<AccountSelectorData>();
  @Output() balanceLoaded = new EventEmitter<AccountBalance>();
  @Output() addAccountClicked = new EventEmitter<void>();
  @Output() viewStatementClicked = new EventEmitter<AccountSelectorData>();

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
    private cdr: ChangeDetectorRef,
    private offlineData: OfflineDataService,
    private networkService: NetworkService
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

  // Load all accounts (both customers and suppliers) — with offline fallback
  loadAccounts() {
    if (!this.store_info || !this.year) {
      console.warn('Account Selector: store_info or year not provided');
      return;
    }

    this.loadingAccounts = true;
    console.log('=== LOADING ACCOUNTS ===');
    console.log('Store ID:', this.store_info.id, 'Year ID:', this.year.id);

    // Use OfflineDataService for cache-through loading
    this.offlineData.getAllAccounts(this.store_info.id, this.year.id).then(
      (accounts: any[]) => {
        this.loadingAccounts = false;
        if (accounts && accounts.length > 0) {
          this.accounts = accounts;
          this.filteredAccounts = [...this.accounts];
          console.log('Successfully loaded', this.accounts.length, 'accounts');
        } else {
          this.accounts = [];
          this.filteredAccounts = [];
        }
      }
    ).catch(
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
      // CRITICAL FIX: Always recalculate position when user types to ensure dropdown stays aligned
      this.calculateDropdownPosition();
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
    console.log('=== INPUT FOCUS EVENT ===');
    console.log('Total accounts loaded:', this.accounts.length);
    console.log('Current searchTerm:', this.searchTerm);
    console.log('Selected account:', this.selectedAccount);
    console.log('Current filteredAccounts:', this.filteredAccounts.length);

    this.highlightedIndex = -1; // Reset highlight on focus

    // Show dropdown when focused if we have accounts
    if (this.accounts.length > 0) {
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

      console.log('Filtered accounts after focus:', this.filteredAccounts.length);

      // Calculate position before showing
      setTimeout(() => {
        this.calculateDropdownPosition();
        this.showDropdown = true;
        console.log('Dropdown should now be visible. showDropdown =', this.showDropdown);
        console.log('Dropdown position:', this.dropdownPosition);

        // Force change detection
        this.cdr.detectChanges();
      }, 10);
    } else {
      console.warn('NO ACCOUNTS LOADED - Cannot show dropdown');
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
    // CRITICAL: Must use the ION-ITEM element, which is the actual visible input boundary
    // This ensures we position right after the input field, NOT after the balance container
    let elementToUse = this.inputWrapper?.nativeElement || this.searchInput?.nativeElement;

    if (elementToUse) {
      // Find the ion-item that wraps the input - this is the ACTUAL visual boundary
      const ionItem = elementToUse.closest('ion-item.account-selector-wrapper');
      if (ionItem) {
        elementToUse = ionItem;
        console.log('✓ Using ion-item.account-selector-wrapper for positioning');
      } else {
        console.warn('Could not find ion-item, falling back to input element');
      }

      const rect = elementToUse.getBoundingClientRect();

      console.log('=== DROPDOWN POSITION CALCULATION ===');
      console.log('Element:', elementToUse.tagName, elementToUse.className);
      console.log('Rect top:', rect.top, 'bottom:', rect.bottom, 'height:', rect.height);
      console.log('Viewport size:', window.innerWidth, 'x', window.innerHeight);

      // Calculate dropdown position relative to viewport (for position: fixed)
      const viewportHeight = window.innerHeight;
      const dropdownMaxHeight = 200; // matches max-height in CSS
      const spaceBelow = viewportHeight - rect.bottom;
      const spaceAbove = rect.top;

      console.log('Space below input:', spaceBelow, 'Space above input:', spaceAbove);

      // Determine if dropdown should open upward or downward
      let top: number;
      if (spaceBelow >= dropdownMaxHeight || spaceBelow >= spaceAbove) {
        // Open downward (default)
        // Position with 2px overlap to ensure NO visible gap
        top = rect.bottom - 2; // Overlap to eliminate any gap
      } else {
        // Open upward if not enough space below
        top = rect.top - Math.min(dropdownMaxHeight, spaceAbove) + 2;
      }

      this.dropdownPosition = {
        top: top + 'px',
        left: rect.left + 'px',
        width: rect.width + 'px'
      };

      console.log('✓ Final dropdown position:', this.dropdownPosition);
      console.log('---');
    } else {
      console.error('✗ Could not find element for dropdown positioning');
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

  // Handle view statement button click
  onViewStatement() {
    if (this.selectedAccount) {
      this.viewStatementClicked.emit(this.selectedAccount);
    }
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

  // Format account balance from backend data for display
  formatAccountBalance(account: AccountSelectorData): string {
    if (!account || !account.current_balance) return '';
    
    const amount = Math.abs(account.current_balance).toFixed(2);
    const status = account.balance_status === 'debit' ? 'مدين' : 'دائن';
    return `${amount} (${status})`;
  }

  // Get balance color
  getBalanceColor(balance: AccountBalance): string {
    if (!balance) return 'medium';
    return balance.status === 'debit' ? 'danger' : 'success';
  }

  // Get account balance color from backend data
  getAccountBalanceColor(account: AccountSelectorData): string {
    if (!account || !account.balance_status) return 'medium';
    return account.balance_status === 'debit' ? 'danger' : 'success';
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