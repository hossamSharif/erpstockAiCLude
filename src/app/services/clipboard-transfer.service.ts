import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClipboardTransferService {

  storeItems(items: any[]): string {
    const key = 'invoice_clipboard_' + Date.now();
    localStorage.setItem(key, JSON.stringify(items));
    return key;
  }

  retrieveAndClear(key: string): any[] {
    const data = localStorage.getItem(key);
    localStorage.removeItem(key);
    return data ? JSON.parse(data) : [];
  }
}
