import { Component, OnInit, OnDestroy, HostListener, ElementRef, ViewChild, Renderer2 } from '@angular/core';
import { CurrencyService } from '../../services/currency.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-currency-switcher',
  templateUrl: './currency-switcher.component.html',
  styleUrls: ['./currency-switcher.component.scss']
})
export class CurrencySwitcherComponent implements OnInit, OnDestroy {
  selectedCurrency: string = 'SDG';
  supportedCurrencies: any[] = [];
  isDropdownOpen: boolean = false;
  private subscription: Subscription = new Subscription();
  private dropdownElement: HTMLElement | null = null;
  
  @ViewChild('selectTrigger', { static: false }) selectTrigger!: ElementRef;
  
  constructor(
    private currencyService: CurrencyService,
    private renderer: Renderer2,
    private el: ElementRef
  ) {}
  
  ngOnInit() {
    // Load supported currencies
    this.loadSupportedCurrencies();
    
    // Subscribe to currency changes
    this.subscription.add(
      this.currencyService.getCurrentCurrency().subscribe(currency => {
        this.selectedCurrency = currency;
      }, error => {
        console.error('Error subscribing to currency changes:', error);
        this.selectedCurrency = 'SDG'; // Fallback
      })
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.destroyDropdown();
  }

  private loadSupportedCurrencies() {
    this.subscription.add(
      this.currencyService.getActiveCurrencies().subscribe(response => {
        if (response && response.data) {
          this.supportedCurrencies = response.data;
        }
      }, error => {
        console.error('Error loading currencies:', error);
        // Fallback currencies
        this.supportedCurrencies = [
          { currency_code: 'SDG', currency_name_ar: 'جنيه سوداني', currency_symbol: 'ج.س' },
          { currency_code: 'USD', currency_name_ar: 'دولار أمريكي', currency_symbol: '$' },
          { currency_code: 'AED', currency_name_ar: 'درهم إماراتي', currency_symbol: 'د.إ' },
          { currency_code: 'SAR', currency_name_ar: 'ريال سعودي', currency_symbol: 'ر.س' }
        ];
      })
    );
  }
  
  toggleDropdown(event: Event) {
    event.stopPropagation();
    
    if (this.isDropdownOpen) {
      this.closeDropdown();
    } else {
      this.openDropdown();
    }
  }

  private openDropdown() {
    if (!this.selectTrigger) return;
    
    this.isDropdownOpen = true;
    this.createBodyLevelDropdown();
  }

  private closeDropdown() {
    this.isDropdownOpen = false;
    this.destroyDropdown();
  }

  private createBodyLevelDropdown() {
    if (this.dropdownElement) {
      this.destroyDropdown();
    }

    const trigger = this.selectTrigger.nativeElement;
    const rect = trigger.getBoundingClientRect();
    
    // Create dropdown container
    this.dropdownElement = this.renderer.createElement('div');
    this.renderer.addClass(this.dropdownElement, 'currency-dropdown-portal');
    
    // Apply styles for positioning and appearance
    this.renderer.setStyle(this.dropdownElement, 'position', 'fixed');
    this.renderer.setStyle(this.dropdownElement, 'z-index', '10000');
    this.renderer.setStyle(this.dropdownElement, 'background', '#ffffff');
    this.renderer.setStyle(this.dropdownElement, 'border', '1px solid #e5e7eb');
    this.renderer.setStyle(this.dropdownElement, 'border-radius', '12px');
    this.renderer.setStyle(this.dropdownElement, 'box-shadow', '0 15px 35px rgba(0, 0, 0, 0.15)');
    this.renderer.setStyle(this.dropdownElement, 'max-height', '300px');
    this.renderer.setStyle(this.dropdownElement, 'overflow-y', 'auto');
    this.renderer.setStyle(this.dropdownElement, 'min-width', '200px');
    
    // Position the dropdown
    this.positionDropdown(rect);
    
    // Create currency options
    this.createCurrencyOptions();
    
    // Append to body
    this.renderer.appendChild(document.body, this.dropdownElement);
    
    // Add entrance animation
    setTimeout(() => {
      if (this.dropdownElement) {
        this.renderer.setStyle(this.dropdownElement, 'opacity', '1');
        this.renderer.setStyle(this.dropdownElement, 'transform', 'translateY(0)');
      }
    }, 10);
  }

  private positionDropdown(triggerRect: DOMRect) {
    if (!this.dropdownElement) return;
    
    const viewportHeight = window.innerHeight;
    const dropdownHeight = 300;
    const spaceBelow = viewportHeight - triggerRect.bottom;
    const spaceAbove = triggerRect.top;
    
    // Set initial opacity and transform for animation
    this.renderer.setStyle(this.dropdownElement, 'opacity', '0');
    this.renderer.setStyle(this.dropdownElement, 'transform', 'translateY(-10px)');
    this.renderer.setStyle(this.dropdownElement, 'transition', 'all 0.3s ease');
    
    // Position horizontally
    this.renderer.setStyle(this.dropdownElement, 'left', triggerRect.left + 'px');
    this.renderer.setStyle(this.dropdownElement, 'width', Math.max(triggerRect.width, 200) + 'px');
    
    // Position vertically
    if (spaceBelow >= dropdownHeight || spaceBelow >= spaceAbove) {
      this.renderer.setStyle(this.dropdownElement, 'top', (triggerRect.bottom + 4) + 'px');
    } else {
      this.renderer.setStyle(this.dropdownElement, 'bottom', (viewportHeight - triggerRect.top + 4) + 'px');
    }
  }

  private createCurrencyOptions() {
    if (!this.dropdownElement) return;
    
    this.supportedCurrencies.forEach(currency => {
      const optionElement = this.renderer.createElement('div');
      this.renderer.addClass(optionElement, 'currency-option-portal');
      
      // Apply option styles
      this.renderer.setStyle(optionElement, 'display', 'flex');
      this.renderer.setStyle(optionElement, 'align-items', 'center');
      this.renderer.setStyle(optionElement, 'gap', '12px');
      this.renderer.setStyle(optionElement, 'padding', '12px 16px');
      this.renderer.setStyle(optionElement, 'cursor', 'pointer');
      this.renderer.setStyle(optionElement, 'transition', 'background-color 0.2s ease');
      this.renderer.setStyle(optionElement, 'border-bottom', '1px solid #f3f4f6');
      
      // Selected state styling
      if (currency.currency_code === this.selectedCurrency) {
        this.renderer.setStyle(optionElement, 'background', 'linear-gradient(135deg, #eff6ff, #dbeafe)');
      }
      
      // Create symbol circle
      const symbolElement = this.renderer.createElement('div');
      this.renderer.setStyle(symbolElement, 'width', '36px');
      this.renderer.setStyle(symbolElement, 'height', '36px');
      this.renderer.setStyle(symbolElement, 'border-radius', '50%');
      this.renderer.setStyle(symbolElement, 'display', 'flex');
      this.renderer.setStyle(symbolElement, 'align-items', 'center');
      this.renderer.setStyle(symbolElement, 'justify-content', 'center');
      this.renderer.setStyle(symbolElement, 'font-weight', 'bold');
      this.renderer.setStyle(symbolElement, 'font-size', '13px');
      
      if (currency.currency_code === this.selectedCurrency) {
        this.renderer.setStyle(symbolElement, 'background', 'var(--ion-color-primary, #3880ff)');
        this.renderer.setStyle(symbolElement, 'color', 'white');
      } else {
        this.renderer.setStyle(symbolElement, 'background', '#f1f5f9');
        this.renderer.setStyle(symbolElement, 'color', '#475569');
      }
      
      const symbolText = this.renderer.createText(currency.currency_symbol);
      this.renderer.appendChild(symbolElement, symbolText);
      
      // Create text container
      const textContainer = this.renderer.createElement('div');
      this.renderer.setStyle(textContainer, 'flex', '1');
      this.renderer.setStyle(textContainer, 'text-align', 'right');
      
      const nameElement = this.renderer.createElement('div');
      this.renderer.setStyle(nameElement, 'font-size', '14px');
      this.renderer.setStyle(nameElement, 'font-weight', '500');
      this.renderer.setStyle(nameElement, 'color', currency.currency_code === this.selectedCurrency ? 'var(--ion-color-primary, #3880ff)' : '#374151');
      this.renderer.setStyle(nameElement, 'line-height', '1.3');
      const nameText = this.renderer.createText(currency.currency_name_ar);
      this.renderer.appendChild(nameElement, nameText);
      
      const codeElement = this.renderer.createElement('div');
      this.renderer.setStyle(codeElement, 'font-size', '12px');
      this.renderer.setStyle(codeElement, 'color', '#6b7280');
      this.renderer.setStyle(codeElement, 'font-weight', '500');
      const codeText = this.renderer.createText(currency.currency_code);
      this.renderer.appendChild(codeElement, codeText);
      
      this.renderer.appendChild(textContainer, nameElement);
      this.renderer.appendChild(textContainer, codeElement);
      
      // Add checkmark for selected currency
      if (currency.currency_code === this.selectedCurrency) {
        const checkElement = this.renderer.createElement('div');
        this.renderer.setStyle(checkElement, 'color', '#10b981');
        this.renderer.setStyle(checkElement, 'font-size', '18px');
        const checkText = this.renderer.createText('✓');
        this.renderer.appendChild(checkElement, checkText);
        this.renderer.appendChild(optionElement, checkElement);
      }
      
      // Add hover effect
      this.renderer.listen(optionElement, 'mouseenter', () => {
        if (currency.currency_code !== this.selectedCurrency) {
          this.renderer.setStyle(optionElement, 'background', '#f8fafc');
        }
      });
      
      this.renderer.listen(optionElement, 'mouseleave', () => {
        if (currency.currency_code !== this.selectedCurrency) {
          this.renderer.setStyle(optionElement, 'background', 'transparent');
        }
      });
      
      // Add click handler
      this.renderer.listen(optionElement, 'click', (event) => {
        event.stopPropagation();
        this.selectCurrency(currency, event);
      });
      
      this.renderer.appendChild(optionElement, symbolElement);
      this.renderer.appendChild(optionElement, textContainer);
      this.renderer.appendChild(this.dropdownElement!, optionElement);
    });
  }

  private destroyDropdown() {
    if (this.dropdownElement) {
      this.renderer.removeChild(document.body, this.dropdownElement);
      this.dropdownElement = null;
    }
  }

  selectCurrency(currency: any, event: Event) {
    event.stopPropagation();
    this.selectedCurrency = currency.currency_code;
    this.currencyService.setCurrency(this.selectedCurrency);
    this.closeDropdown();
  }

  getSelectedCurrency() {
    return this.supportedCurrencies.find(c => c.currency_code === this.selectedCurrency);
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event) {
    // Close dropdown if clicking outside the component
    if (!event.target || !(event.target as HTMLElement).closest('.custom-select-container')) {
      this.closeDropdown();
    }
  }

  @HostListener('window:resize')
  onWindowResize() {
    if (this.isDropdownOpen && this.selectTrigger) {
      const rect = this.selectTrigger.nativeElement.getBoundingClientRect();
      this.positionDropdown(rect);
    }
  }

  @HostListener('window:scroll')
  onWindowScroll() {
    if (this.isDropdownOpen && this.selectTrigger) {
      const rect = this.selectTrigger.nativeElement.getBoundingClientRect();
      this.positionDropdown(rect);
    }
  }

  getCurrencyDisplayText(currency: any): string {
    return `${currency.currency_name_ar} (${currency.currency_code})`;
  }
}