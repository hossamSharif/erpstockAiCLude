import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Storage } from '@ionic/storage';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TranslationServiceCustom {
  // State Management
  private currentLanguage = new BehaviorSubject<string>('ar'); // Default: Arabic
  private currentDirection = new BehaviorSubject<string>('rtl'); // Default: RTL

  constructor(
    private translate: TranslateService,
    private storage: Storage
  ) {}

  /**
   * Get current language as Observable
   */
  getCurrentLanguage(): Observable<string> {
    return this.currentLanguage.asObservable();
  }

  /**
   * Get current direction (rtl/ltr) as Observable
   */
  getCurrentDirection(): Observable<string> {
    return this.currentDirection.asObservable();
  }

  /**
   * Get current language value directly
   */
  getCurrentLanguageValue(): string {
    return this.currentLanguage.value;
  }

  /**
   * Get current direction value directly
   */
  getCurrentDirectionValue(): string {
    return this.currentDirection.value;
  }

  /**
   * Set language and update direction
   * @param lang - Language code (ar, en)
   */
  async setLanguage(lang: string): Promise<void> {
    this.currentLanguage.next(lang);
    this.translate.use(lang);

    // Update direction based on language
    const direction = lang === 'ar' ? 'rtl' : 'ltr';
    this.currentDirection.next(direction);

    // Update HTML element attributes
    document.documentElement.setAttribute('dir', direction);
    document.documentElement.setAttribute('lang', lang);

    // Persist to storage
    await this.storage.set('selectedLanguage', lang);
  }

  /**
   * Initialize language from storage or default
   */
  async initializeLanguage(): Promise<void> {
    try {
      await this.storage.create();
      const savedLanguage = await this.storage.get('selectedLanguage');

      if (savedLanguage && (savedLanguage === 'ar' || savedLanguage === 'en')) {
        await this.setLanguage(savedLanguage);
      } else {
        // Default to Arabic
        await this.setLanguage('ar');
      }
    } catch (error) {
      console.error('Error initializing language:', error);
      // Fallback to Arabic
      await this.setLanguage('ar');
    }
  }

  /**
   * Get available languages
   */
  getAvailableLanguages(): { code: string; name: string; nativeName: string }[] {
    return [
      { code: 'ar', name: 'Arabic', nativeName: 'العربية' },
      { code: 'en', name: 'English', nativeName: 'English' }
    ];
  }

  /**
   * Check if current language is RTL
   */
  isRTL(): boolean {
    return this.getCurrentDirectionValue() === 'rtl';
  }

  /**
   * Get translation for a key instantly (synchronous)
   * @param key - Translation key
   * @param params - Optional parameters for interpolation
   */
  instant(key: string | string[], params?: any): string {
    return this.translate.instant(key, params);
  }

  /**
   * Get translation for a key (asynchronous)
   * @param key - Translation key
   * @param params - Optional parameters for interpolation
   */
  get(key: string | string[], params?: any): Observable<string | any> {
    return this.translate.get(key, params);
  }
}
