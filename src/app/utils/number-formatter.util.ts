/**
 * Utility functions for formatting numbers consistently across the application
 * Ensures English numerals are used everywhere instead of Arabic numerals
 */

export class NumberFormatterUtil {
  
  /**
   * Formats a number with English numerals and proper decimal places
   * @param value - The number to format
   * @param decimalPlaces - Number of decimal places (default: 2)
   * @returns Formatted string with English numerals
   */
  static formatNumber(value: number, decimalPlaces: number = 2): string {
    if (!value && value !== 0) return '0.00';
    if (isNaN(value)) return '0.00';
    
    return new Intl.NumberFormat('en-US', {
      minimumFractionDigits: decimalPlaces,
      maximumFractionDigits: decimalPlaces
    }).format(value);
  }

  /**
   * Formats a currency amount with English numerals
   * @param value - The amount to format
   * @param currency - Currency code (optional)
   * @returns Formatted currency string with English numerals
   */
  static formatCurrency(value: number, currency?: string): string {
    if (!value && value !== 0) return '0.00';
    if (isNaN(value)) return '0.00';
    
    const formatted = new Intl.NumberFormat('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(value);
    
    if (currency) {
      const symbols = {
        'SDG': 'ج.س',
        'USD': '$',
        'AED': 'د.إ',
        'SAR': 'ر.س'
      };
      return `${formatted} ${symbols[currency] || currency}`;
    }
    
    return formatted;
  }

  /**
   * Formats a date with English numerals
   * @param date - Date to format
   * @param locale - Locale to use (default: 'en-US')
   * @returns Formatted date string with English numerals
   */
  static formatDate(date: Date, locale: string = 'en-US'): string {
    return date.toLocaleDateString(locale);
  }

  /**
   * Formats a date and time with English numerals
   * @param date - Date to format
   * @param locale - Locale to use (default: 'en-US')
   * @returns Formatted date and time string with English numerals
   */
  static formatDateTime(date: Date, locale: string = 'en-US'): string {
    return date.toLocaleString(locale);
  }

  /**
   * Converts Arabic-Indic digits to Western Arabic numerals
   * @param text - Text containing Arabic-Indic digits
   * @returns Text with Western Arabic numerals
   */
  static convertArabicNumeralsToEnglish(text: string): string {
    if (!text) return text;
    
    const arabicNumerals = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];
    const englishNumerals = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    
    let result = text;
    for (let i = 0; i < arabicNumerals.length; i++) {
      result = result.replace(new RegExp(arabicNumerals[i], 'g'), englishNumerals[i]);
    }
    
    return result;
  }

  /**
   * Ensures a number input is displayed with English numerals
   * @param value - The number value
   * @returns String representation with English numerals
   */
  static ensureEnglishNumerals(value: any): string {
    if (value === null || value === undefined) return '0';
    
    const stringValue = value.toString();
    return this.convertArabicNumeralsToEnglish(stringValue);
  }
}