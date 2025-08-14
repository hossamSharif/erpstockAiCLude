# Account Selector Integration Guide

## Overview
This guide shows how to integrate the AccountSelectorComponent with pages that have `payInvo` objects to automatically set the `cust_id` when accounts are selected.

## Integration Steps

### 1. Import the Service
```typescript
import { AccountCommunicationService } from '../services/account-communication.service';
```

### 2. Inject in Constructor
```typescript
constructor(
  // ... other services
  private accountCommunicationService: AccountCommunicationService
) {}
```

### 3. Subscribe to Customer Selection
```typescript
private customerSubscription: Subscription;

ngOnInit() {
  // Subscribe to customer selection events
  this.customerSubscription = this.accountCommunicationService.customerSelected$.subscribe(
    ({id, account}) => {
      if (id && this.payInvo) {
        console.log('Customer selected, setting cust_id:', id);
        this.payInvo.cust_id = id;
        this.payInvo.sub_name = account.sub_name;
        
        // Update selectedAccount if your page uses it
        this.selectedAccount = account;
        
        console.log('PayInvo updated:', this.payInvo);
      }
    }
  );
}

ngOnDestroy() {
  if (this.customerSubscription) {
    this.customerSubscription.unsubscribe();
  }
}
```

## Complete Example for Sales Page

```typescript
import { AccountCommunicationService } from '../services/account-communication.service';
import { Subscription } from 'rxjs';

export class SalesPage implements OnInit, OnDestroy {
  // ... existing properties
  private customerSubscription: Subscription;

  constructor(
    // ... existing services
    private accountCommunicationService: AccountCommunicationService
  ) {}

  ngOnInit() {
    // ... existing ngOnInit code
    
    // Subscribe to customer selection
    this.customerSubscription = this.accountCommunicationService.customerSelected$.subscribe(
      ({id, account}) => {
        if (id && this.payInvo) {
          console.log('Customer selected in sales, setting cust_id:', id);
          this.payInvo.cust_id = id;
          this.payInvo.sub_name = account.sub_name;
          this.selectedAccount = account;
          console.log('Sales payInvo updated:', this.payInvo);
        }
      }
    );
  }

  ngOnDestroy() {
    if (this.customerSubscription) {
      this.customerSubscription.unsubscribe();
    }
  }

  // ... rest of your methods
}
```

## When This Gets Triggered

1. **Account Selection**: When user selects an account from dropdown
2. **New Account Creation**: When user creates a new account and returns to the page
3. **Automatic Setting**: The `payInvo.cust_id` gets set automatically without additional code

## Benefits

- **Automatic**: No manual event handling needed
- **Consistent**: Same behavior across all pages
- **Real-time**: Immediate updates when accounts are selected
- **New Account Support**: Works with newly created accounts

## Pages That Should Implement This

- Sales Page (`/sales`)
- Purchase Page (`/purchase`) 
- Edit Sales Page (`/edit-sales`)
- Edit Purchase Page (`/edit-perch`)
- Any page with `payInvo` object and account selection