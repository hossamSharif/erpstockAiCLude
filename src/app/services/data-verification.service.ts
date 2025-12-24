import { Injectable } from '@angular/core';
import { ServicesService } from '../stockService/services.service';
import { Observable, forkJoin, of } from 'rxjs';
import { map, catchError, switchMap } from 'rxjs/operators';

export interface VerificationResult {
  invoiceRef: string;
  date: string;
  customerName: string;
  storedTotal: number;
  calculatedTotal: number;
  difference: number;
  status: 'OK' | 'ERROR';
  details: any[];
  invoiceData: any;
}

export interface VerificationSummary {
  totalInvoices: number;
  errorCount: number;
  okCount: number;
  accuracy: number;
  results: VerificationResult[];
  hasMore?: boolean;
  currentBatch?: number;
  totalBatches?: number;
}

@Injectable({
  providedIn: 'root'
})
export class DataVerificationService {

  constructor(private servicesService: ServicesService) { }

  /**
   * Verify a single sales invoice with invoice header data
   */
  verifySalesInvoice(pay_ref: string, store_id: number, yearId: number, invoiceHeader?: any): Observable<VerificationResult> {
    return this.servicesService.getPayInvoDetail(store_id, pay_ref, yearId).pipe(
      map((result: any) => {
        const details = result.data || [];

        // Calculate the sum of all item totals by multiplying quantity × pay_price
        // For SALES invoices, use pay_price (selling price)
        const calculatedGrossTotal = details.reduce((sum: number, item: any) => {
          const quantity = parseFloat(item.quantity) || 0;
          const price = parseFloat(item.pay_price) || 0;
          const itemTotal = quantity * price;
          return sum + itemTotal;
        }, 0);

        // Use invoice header data if provided, otherwise try to get from details
        const invoiceData = invoiceHeader || (details.length > 0 ? details[0] : null);
        const tot_pr = invoiceData ? parseFloat(invoiceData.tot_pr || 0) : 0;
        const discount = invoiceData ? parseFloat(invoiceData.discount || 0) : 0;

        // Apply discount to BOTH sides for fair comparison
        // Stored side: tot_pr - discount
        const storedTotalAfterDiscount = tot_pr - discount;
        // Calculated side: SUM(quantity × price) - discount
        const calculatedTotalAfterDiscount = calculatedGrossTotal - discount;

        // Calculate signed difference: stored - calculated
        // Positive = stored > calculated (stored has extra)
        // Negative = stored < calculated (stored is missing amount)
        const difference = storedTotalAfterDiscount - calculatedTotalAfterDiscount;

        return {
          invoiceRef: pay_ref,
          date: invoiceData?.pay_date || '',
          customerName: invoiceData?.sub_name || 'Unknown',
          storedTotal: storedTotalAfterDiscount,  // Show net total after discount
          calculatedTotal: calculatedTotalAfterDiscount,  // Show net total after discount
          difference: difference,
          status: (Math.abs(difference) < 0.01 ? 'OK' : 'ERROR') as 'OK' | 'ERROR', // Allow 0.01 difference for rounding
          details: details,
          invoiceData: invoiceData
        };
      }),
      catchError(error => {
        console.error(`Error verifying sales invoice ${pay_ref}:`, error);
        return of({
          invoiceRef: pay_ref,
          date: '',
          customerName: 'Error',
          storedTotal: 0,
          calculatedTotal: 0,
          difference: 0,
          status: 'ERROR' as 'ERROR',
          details: [],
          invoiceData: null
        });
      })
    );
  }

  /**
   * Verify a single purchase invoice with invoice header data
   */
  verifyPurchaseInvoice(pay_ref: string, store_id: number, yearId: number, invoiceHeader?: any): Observable<VerificationResult> {
    return this.servicesService.getPerchInvoDetail(store_id, pay_ref, yearId).pipe(
      map((result: any) => {
        const details = result.data || [];

        // Calculate the sum of all item totals by multiplying quantity × perch_price
        // For PURCHASE invoices, use perch_price (purchase price)
        const calculatedGrossTotal = details.reduce((sum: number, item: any) => {
          const quantity = parseFloat(item.quantity) || 0;
          const price = parseFloat(item.perch_price) || 0;
          const itemTotal = quantity * price;
          return sum + itemTotal;
        }, 0);

        // Use invoice header data if provided, otherwise try to get from details
        const invoiceData = invoiceHeader || (details.length > 0 ? details[0] : null);
        const tot_pr = invoiceData ? parseFloat(invoiceData.tot_pr || 0) : 0;
        const discount = invoiceData ? parseFloat(invoiceData.discount || 0) : 0;

        // Apply discount to BOTH sides for fair comparison
        // Stored side: tot_pr - discount
        const storedTotalAfterDiscount = tot_pr - discount;
        // Calculated side: SUM(quantity × price) - discount
        const calculatedTotalAfterDiscount = calculatedGrossTotal - discount;

        // Calculate signed difference: stored - calculated
        // Positive = stored > calculated (stored has extra)
        // Negative = stored < calculated (stored is missing amount)
        const difference = storedTotalAfterDiscount - calculatedTotalAfterDiscount;

        return {
          invoiceRef: pay_ref,
          date: invoiceData?.pay_date || '',
          customerName: invoiceData?.sub_name || 'Unknown',
          storedTotal: storedTotalAfterDiscount,  // Show net total after discount
          calculatedTotal: calculatedTotalAfterDiscount,  // Show net total after discount
          difference: difference,
          status: (Math.abs(difference) < 0.01 ? 'OK' : 'ERROR') as 'OK' | 'ERROR',
          details: details,
          invoiceData: invoiceData
        };
      }),
      catchError(error => {
        console.error(`Error verifying purchase invoice ${pay_ref}:`, error);
        return of({
          invoiceRef: pay_ref,
          date: '',
          customerName: 'Error',
          storedTotal: 0,
          calculatedTotal: 0,
          difference: 0,
          status: 'ERROR' as 'ERROR',
          details: [],
          invoiceData: null
        });
      })
    );
  }

  /**
   * Verify invoices in batches to avoid server overload
   */
  verifyInvoicesBatch(
    store_id: number,
    yearId: number,
    type: 'sales' | 'purchase',
    batchNumber: number = 0,
    batchSize: number = 20
  ): Observable<VerificationSummary> {
    // Get all invoices
    const invoicesObservable = type === 'sales'
      ? this.servicesService.getTopSales(store_id, yearId)
      : this.servicesService.getTopPerch(store_id, yearId);

    return invoicesObservable.pipe(
      map((response: any) => {
        // Handle the "No record Found" message from the API
        if (response.message === 'No record Found' || !response.data) {
          return [];
        }
        return response.data || [];
      }),
      catchError(error => {
        console.error('Error fetching invoices:', error);
        return of([]);
      }),
      switchMap(allInvoices => {
        // If no invoices, return empty results
        if (!allInvoices || allInvoices.length === 0) {
          return of({
            totalInvoices: 0,
            errorCount: 0,
            okCount: 0,
            accuracy: 100,
            results: [],
            hasMore: false,
            currentBatch: 0,
            totalBatches: 0
          });
        }

        // Calculate batch info
        const totalBatches = Math.ceil(allInvoices.length / batchSize);
        const startIndex = batchNumber * batchSize;
        const endIndex = Math.min(startIndex + batchSize, allInvoices.length);
        const batchInvoices = allInvoices.slice(startIndex, endIndex);
        const hasMore = endIndex < allInvoices.length;

        // If no invoices in this batch
        if (batchInvoices.length === 0) {
          return of({
            totalInvoices: allInvoices.length,
            errorCount: 0,
            okCount: 0,
            accuracy: 100,
            results: [],
            hasMore: false,
            currentBatch: batchNumber,
            totalBatches: totalBatches
          });
        }

        // Create an array of verification observables for this batch
        // Pass the invoice header data to each verification call
        const verificationObservables = batchInvoices.map((invoice: any) => {
          const pay_ref = invoice.pay_ref;
          return type === 'sales'
            ? this.verifySalesInvoice(pay_ref, store_id, yearId, invoice)
            : this.verifyPurchaseInvoice(pay_ref, store_id, yearId, invoice);
        });

        // Execute all verifications in this batch
        return forkJoin(verificationObservables).pipe(
          map((results: VerificationResult[]) => {
            const errorCount = results.filter(r => r.status === 'ERROR').length;
            const okCount = results.filter(r => r.status === 'OK').length;
            const accuracy = results.length > 0 ? (okCount / results.length) * 100 : 100;

            return {
              totalInvoices: allInvoices.length,
              errorCount: errorCount,
              okCount: okCount,
              accuracy: accuracy,
              results: results,
              hasMore: hasMore,
              currentBatch: batchNumber,
              totalBatches: totalBatches
            };
          })
        );
      })
    );
  }

  /**
   * Verify all invoices of a specific type (kept for backward compatibility)
   * @deprecated Use verifyInvoicesBatch instead
   */
  verifyAllInvoices(store_id: number, yearId: number, type: 'sales' | 'purchase'): Observable<VerificationSummary> {
    // Get all invoices
    const invoicesObservable = type === 'sales'
      ? this.servicesService.getTopSales(store_id, yearId)
      : this.servicesService.getTopPerch(store_id, yearId);

    return invoicesObservable.pipe(
      map((response: any) => {
        // Handle the "No record Found" message from the API
        if (response.message === 'No record Found' || !response.data) {
          return [];
        }
        return response.data || [];
      }),
      catchError(error => {
        console.error('Error fetching invoices:', error);
        return of([]);
      }),
      switchMap(invoices => {
        // If no invoices, return empty results
        if (!invoices || invoices.length === 0) {
          return of({
            totalInvoices: 0,
            errorCount: 0,
            okCount: 0,
            accuracy: 100,
            results: []
          });
        }

        // Create an array of verification observables
        // Pass the invoice header data to each verification call
        const verificationObservables = invoices.map((invoice: any) => {
          const pay_ref = invoice.pay_ref;
          return type === 'sales'
            ? this.verifySalesInvoice(pay_ref, store_id, yearId, invoice)
            : this.verifyPurchaseInvoice(pay_ref, store_id, yearId, invoice);
        });

        // Execute all verifications in parallel
        return forkJoin(verificationObservables).pipe(
          map((results: VerificationResult[]) => {
            const errorCount = results.filter(r => r.status === 'ERROR').length;
            const okCount = results.filter(r => r.status === 'OK').length;
            const accuracy = results.length > 0 ? (okCount / results.length) * 100 : 100;

            return {
              totalInvoices: results.length,
              errorCount: errorCount,
              okCount: okCount,
              accuracy: accuracy,
              results: results
            };
          })
        );
      })
    );
  }

  /**
   * Verify invoice item details (check if item.tot = item.pay_price * item.quantity)
   */
  verifyItemCalculations(details: any[]): { valid: boolean; errors: any[] } {
    const errors: any[] = [];

    details.forEach((item, index) => {
      const price = parseFloat(item.pay_price) || 0;
      const quantity = parseFloat(item.quantity) || 0;
      const storedTotal = parseFloat(item.tot) || 0;
      const calculatedTotal = price * quantity;
      const difference = Math.abs(storedTotal - calculatedTotal);

      if (difference >= 0.01) { // Allow 0.01 difference for rounding
        errors.push({
          itemIndex: index,
          itemName: item.item_name,
          price: price,
          quantity: quantity,
          storedTotal: storedTotal,
          calculatedTotal: calculatedTotal,
          difference: difference
        });
      }
    });

    return {
      valid: errors.length === 0,
      errors: errors
    };
  }
}
