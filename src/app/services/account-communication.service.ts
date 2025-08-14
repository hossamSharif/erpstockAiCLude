import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountCommunicationService {
  private newAccountSubject = new BehaviorSubject<any>(null);
  public newAccount$ = this.newAccountSubject.asObservable();

  // For notifying pages to set customer ID in their payInvo
  private customerSelectedSubject = new Subject<{id: any, account: any}>();
  public customerSelected$ = this.customerSelectedSubject.asObservable();

  constructor() { }

  // Set new account data (for account selector)
  setNewAccount(account: any) {
    console.log('AccountCommunicationService: Setting new account:', account);
    this.newAccountSubject.next(account);
    
    // Also emit customer selection event for pages to update their payInvo
    if (account && account.id) {
      this.customerSelectedSubject.next({id: account.id, account: account});
    }
  }

  // Emit customer selection (for pages to set cust_id)
  setCustomerSelected(accountId: any, account: any) {
    console.log('AccountCommunicationService: Customer selected with ID:', accountId);
    this.customerSelectedSubject.next({id: accountId, account: account});
  }

  // Clear the new account data
  clearNewAccount() {
    this.newAccountSubject.next(null);
  }

  // Get current value without subscription
  getCurrentAccount() {
    return this.newAccountSubject.value;
  }
}