import { Injectable } from '@angular/core';

export interface SortConfig {
  column: string;
  direction: 'asc' | 'desc';
}

@Injectable({
  providedIn: 'root'
})
export class SortingService {

  constructor() { }

  // Arabic-aware string comparison
  private compareStrings(a: string, b: string): number {
    if (!a && !b) return 0;
    if (!a) return -1;
    if (!b) return 1;
    
    return a.localeCompare(b, 'ar', { 
      numeric: true,
      sensitivity: 'base',
      caseFirst: 'lower'
    });
  }

  // Number comparison
  private compareNumbers(a: number, b: number): number {
    const numA = parseFloat(a?.toString()) || 0;
    const numB = parseFloat(b?.toString()) || 0;
    return numA - numB;
  }

  // Date comparison
  private compareDates(a: string | Date, b: string | Date): number {
    const dateA = new Date(a);
    const dateB = new Date(b);
    return dateA.getTime() - dateB.getTime();
  }

  // Generic sorting function
  sortData<T>(data: T[], column: string, direction: 'asc' | 'desc'): T[] {
    if (!data || data.length === 0) return data;

    const sortedData = [...data].sort((a: any, b: any) => {
      let result = 0;
      const valueA = a[column];
      const valueB = b[column];

      // Handle null/undefined values
      if (valueA == null && valueB == null) return 0;
      if (valueA == null) return direction === 'asc' ? -1 : 1;
      if (valueB == null) return direction === 'asc' ? 1 : -1;

      // Determine comparison type based on column name and value type
      if (this.isDateColumn(column) || this.isDateValue(valueA)) {
        result = this.compareDates(valueA, valueB);
      } else if (this.isNumericColumn(column) || this.isNumericValue(valueA)) {
        result = this.compareNumbers(valueA, valueB);
      } else {
        // String comparison (Arabic-aware)
        result = this.compareStrings(String(valueA), String(valueB));
      }

      return direction === 'desc' ? -result : result;
    });

    return sortedData;
  }

  // Check if column is a date column
  private isDateColumn(column: string): boolean {
    const dateColumns = ['j_date', 'pay_date', 'date', 'created_at', 'updated_at'];
    return dateColumns.includes(column);
  }

  // Check if value looks like a date
  private isDateValue(value: any): boolean {
    if (typeof value === 'string') {
      // Check for date patterns like YYYY-MM-DD or DD/MM/YYYY
      const datePattern = /^\d{4}-\d{2}-\d{2}$|^\d{2}\/\d{2}\/\d{4}$/;
      return datePattern.test(value) || !isNaN(Date.parse(value));
    }
    return value instanceof Date;
  }

  // Check if column contains numeric data
  private isNumericColumn(column: string): boolean {
    const numericColumns = [
      'amount', 'total', 'balance', 'price', 'quantity', 'qty',
      'tot_pr', 'discount', 'pay', 'changee', 'sub_balance',
      'current_balance', 'opening_balance', 'debit', 'credit',
      'j_pay', 'perch_price', 'pay_price', 'id'
    ];
    return numericColumns.some(col => column.toLowerCase().includes(col));
  }

  // Check if value is numeric
  private isNumericValue(value: any): boolean {
    return !isNaN(parseFloat(value)) && isFinite(value);
  }

  // Get sort icon based on current sort state
  getSortIcon(column: string, currentSort: SortConfig | null): string {
    if (!currentSort || currentSort.column !== column) {
      return 'swap-vertical-outline';
    }
    return currentSort.direction === 'asc' ? 'chevron-up-outline' : 'chevron-down-outline';
  }

  // Get next sort direction
  getNextSortDirection(column: string, currentSort: SortConfig | null): 'asc' | 'desc' {
    if (!currentSort || currentSort.column !== column) {
      return 'asc';
    }
    return currentSort.direction === 'asc' ? 'desc' : 'asc';
  }
}