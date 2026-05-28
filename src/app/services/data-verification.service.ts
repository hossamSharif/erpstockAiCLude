import { Injectable } from '@angular/core';
import { ServicesService } from '../stockService/services.service';
import { Observable, forkJoin, of, from } from 'rxjs';
import { map, catchError, switchMap, concatMap } from 'rxjs/operators';

export interface VerificationResult {
  invoiceRef: string;
  date: string;
  customerName: string;
  userName: string;
  storedTotal: number;
  calculatedTotal: number;
  difference: number;
  discount: number;
  totPrFormat: 'gross' | 'net' | 'unknown';
  status: 'OK' | 'ERROR';
  details: any[];
  invoiceData: any;
}

export interface VerificationProgress {
  totalInvoices: number;
  processedCount: number;
  errorCount: number;
  okCount: number;
  currentBatchIndex: number;
  totalBatches: number;
  isComplete: boolean;
  results: VerificationResult[];
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

        // Calculate gross total from items: SUM(quantity × pay_price)
        const grossFromItems = details.reduce((sum: number, item: any) => {
          const quantity = parseFloat(item.quantity) || 0;
          const price = parseFloat(item.pay_price) || 0;
          return sum + (quantity * price);
        }, 0);

        const invoiceData = invoiceHeader || (details.length > 0 ? details[0] : null);
        const tot_pr = invoiceData ? parseFloat(invoiceData.tot_pr || 0) : 0;
        const discount = invoiceData ? parseFloat(invoiceData.discount || 0) : 0;

        // Multi-format detection for discount handling:
        // Format 1: tot_pr = SUM(items) — no discount or discount stored separately
        // Format 2: tot_pr = SUM(items) - discount — tot_pr is net
        // Format 3: tot_pr - discount = SUM(items) — tot_pr is gross, items have discount distributed
        let status: 'OK' | 'ERROR' = 'ERROR';
        let totPrFormat: 'gross' | 'net' | 'unknown' = 'unknown';
        let difference = tot_pr - grossFromItems;

        // Check 1: tot_pr == SUM(items)
        if (Math.abs(tot_pr - grossFromItems) < 0.01) {
          status = 'OK';
          totPrFormat = 'gross';
          difference = 0;
        }
        // Check 2: tot_pr == SUM(items) - discount — tot_pr stored as net
        else if (discount > 0 && Math.abs(tot_pr - (grossFromItems - discount)) < 0.01) {
          status = 'OK';
          totPrFormat = 'net';
          difference = 0;
        }
        // Check 3: tot_pr - discount == SUM(items) — tot_pr is gross, items adjusted for discount
        else if (discount > 0 && Math.abs((tot_pr - discount) - grossFromItems) < 0.01) {
          status = 'OK';
          totPrFormat = 'gross';
          difference = 0;
        }

        // For genuine errors with discount, calculate difference including discount
        if (status === 'ERROR' && discount > 0) {
          const d1 = tot_pr - grossFromItems;
          const d2 = tot_pr - (grossFromItems - discount);
          const d3 = (tot_pr - discount) - grossFromItems;
          // Use the smallest absolute difference as the real discrepancy
          difference = [d1, d2, d3].reduce((best, curr) =>
            Math.abs(curr) < Math.abs(best) ? curr : best
          );
        }

        return {
          invoiceRef: pay_ref,
          date: invoiceData?.pay_date || '',
          customerName: invoiceData?.sub_name || 'Unknown',
          userName: invoiceData?.user_name || '',
          storedTotal: tot_pr,
          calculatedTotal: grossFromItems,
          difference: difference,
          discount: discount,
          totPrFormat: totPrFormat,
          status: status,
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
          userName: '',
          storedTotal: 0,
          calculatedTotal: 0,
          difference: 0,
          discount: 0,
          totPrFormat: 'unknown' as 'unknown',
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

        // Calculate gross total from items: SUM(quantity × perch_price)
        const grossFromItems = details.reduce((sum: number, item: any) => {
          const quantity = parseFloat(item.quantity) || 0;
          const price = parseFloat(item.perch_price) || 0;
          return sum + (quantity * price);
        }, 0);

        const invoiceData = invoiceHeader || (details.length > 0 ? details[0] : null);
        const tot_pr = invoiceData ? parseFloat(invoiceData.tot_pr || 0) : 0;
        const discount = invoiceData ? parseFloat(invoiceData.discount || 0) : 0;

        // Multi-format detection for discount handling:
        // Format 1: tot_pr = SUM(items) — no discount or discount stored separately
        // Format 2: tot_pr = SUM(items) - discount — tot_pr is net
        // Format 3: tot_pr - discount = SUM(items) — tot_pr is gross, items have discount distributed
        let status: 'OK' | 'ERROR' = 'ERROR';
        let totPrFormat: 'gross' | 'net' | 'unknown' = 'unknown';
        let difference = tot_pr - grossFromItems;

        // Check 1: tot_pr == SUM(items)
        if (Math.abs(tot_pr - grossFromItems) < 0.01) {
          status = 'OK';
          totPrFormat = 'gross';
          difference = 0;
        }
        // Check 2: tot_pr == SUM(items) - discount — tot_pr stored as net
        else if (discount > 0 && Math.abs(tot_pr - (grossFromItems - discount)) < 0.01) {
          status = 'OK';
          totPrFormat = 'net';
          difference = 0;
        }
        // Check 3: tot_pr - discount == SUM(items) — tot_pr is gross, items adjusted for discount
        else if (discount > 0 && Math.abs((tot_pr - discount) - grossFromItems) < 0.01) {
          status = 'OK';
          totPrFormat = 'gross';
          difference = 0;
        }

        // For genuine errors with discount, calculate difference including discount
        if (status === 'ERROR' && discount > 0) {
          const d1 = tot_pr - grossFromItems;
          const d2 = tot_pr - (grossFromItems - discount);
          const d3 = (tot_pr - discount) - grossFromItems;
          // Use the smallest absolute difference as the real discrepancy
          difference = [d1, d2, d3].reduce((best, curr) =>
            Math.abs(curr) < Math.abs(best) ? curr : best
          );
        }

        return {
          invoiceRef: pay_ref,
          date: invoiceData?.pay_date || '',
          customerName: invoiceData?.sub_name || 'Unknown',
          userName: invoiceData?.user_name || '',
          storedTotal: tot_pr,
          calculatedTotal: grossFromItems,
          difference: difference,
          discount: discount,
          totPrFormat: totPrFormat,
          status: status,
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
          userName: '',
          storedTotal: 0,
          calculatedTotal: 0,
          difference: 0,
          discount: 0,
          totPrFormat: 'unknown' as 'unknown',
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
   * Verify all invoices sequentially in batches, emitting progress after each batch
   */
  verifyAllInvoicesSequential(
    store_id: number,
    yearId: number,
    type: 'sales' | 'purchase',
    batchSize: number = 20
  ): Observable<VerificationProgress> {
    const invoicesObservable = type === 'sales'
      ? this.servicesService.getTopSales(store_id, yearId)
      : this.servicesService.getTopPerch(store_id, yearId);

    return invoicesObservable.pipe(
      map((response: any) => {
        if (response.message === 'No record Found' || !response.data) {
          return [];
        }
        return response.data || [];
      }),
      catchError(error => {
        console.error('Error fetching invoices:', error);
        return of([]);
      }),
      switchMap((allInvoices: any[]) => {
        if (!allInvoices || allInvoices.length === 0) {
          return of({
            totalInvoices: 0,
            processedCount: 0,
            errorCount: 0,
            okCount: 0,
            currentBatchIndex: 0,
            totalBatches: 0,
            isComplete: true,
            results: []
          } as VerificationProgress);
        }

        const totalBatches = Math.ceil(allInvoices.length / batchSize);
        const batchIndices = Array.from({ length: totalBatches }, (_, i) => i);

        let cumulativeResults: VerificationResult[] = [];
        let cumulativeErrors = 0;
        let cumulativeOk = 0;

        // Process batches sequentially using from() + concatMap()
        return from(batchIndices).pipe(
          concatMap(batchIndex => {
            const start = batchIndex * batchSize;
            const end = Math.min(start + batchSize, allInvoices.length);
            const batchInvoices = allInvoices.slice(start, end);

            const verificationObservables = batchInvoices.map((invoice: any) => {
              const pay_ref = invoice.pay_ref;
              return type === 'sales'
                ? this.verifySalesInvoice(pay_ref, store_id, yearId, invoice)
                : this.verifyPurchaseInvoice(pay_ref, store_id, yearId, invoice);
            });

            return forkJoin(verificationObservables).pipe(
              map((batchResults: VerificationResult[]) => {
                cumulativeResults = [...cumulativeResults, ...batchResults];
                cumulativeErrors += batchResults.filter(r => r.status === 'ERROR').length;
                cumulativeOk += batchResults.filter(r => r.status === 'OK').length;

                return {
                  totalInvoices: allInvoices.length,
                  processedCount: cumulativeResults.length,
                  errorCount: cumulativeErrors,
                  okCount: cumulativeOk,
                  currentBatchIndex: batchIndex,
                  totalBatches: totalBatches,
                  isComplete: batchIndex === totalBatches - 1,
                  results: cumulativeResults
                } as VerificationProgress;
              })
            );
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
