import {
  Component,
  OnInit,
  OnChanges,
  SimpleChanges,
  ViewChild,
  Input,
  Output,
  EventEmitter,
  ElementRef,
  HostListener,
  ChangeDetectorRef,
} from '@angular/core';
import { IonInput } from '@ionic/angular';

@Component({
  selector: 'app-account-dropdown-selector',
  templateUrl: './account-dropdown-selector.component.html',
  styleUrls: ['./account-dropdown-selector.component.scss'],
})
export class AccountDropdownSelectorComponent implements OnInit, OnChanges {
  @ViewChild('searchInput', { static: false }) searchInput: IonInput;
  @ViewChild('inputWrapper', { static: false }) inputWrapper: ElementRef;

  @Input() accounts: Array<any> = [];
  @Input() loadingAccounts: boolean = false;
  @Input() selectedId: any = null;
  @Input() placeholder: string = 'اختر الحساب';
  @Input() label: string = '';
  @Input() disabled: boolean = false;

  @Output() accountSelected = new EventEmitter<any>();
  @Output() selectedIdChange = new EventEmitter<any>();
  @Output() refreshAccounts = new EventEmitter<void>();
  @Output() addAccountClicked = new EventEmitter<void>();

  searchTerm: string = '';
  showDropdown: boolean = false;
  highlightedIndex: number = -1;
  dropdownPosition = { top: '0px', left: '0px', width: '250px' };

  private componentHasFocus: boolean = false;

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.syncSelectedToSearchTerm();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['selectedId'] || changes['accounts']) {
      this.syncSelectedToSearchTerm();
    }
  }

  private syncSelectedToSearchTerm() {
    if (this.selectedId && this.accounts && this.accounts.length > 0) {
      const match = this.accounts.find((a) => a.id == this.selectedId);
      if (match) {
        this.searchTerm = match.sub_name || '';
      }
    } else if (!this.selectedId) {
      this.searchTerm = '';
    }
  }

  trackById(index: number, acc: any) {
    return acc?.id ?? index;
  }

  getFilteredAccounts() {
    if (!this.accounts || this.accounts.length === 0) return [];
    if (this.searchTerm && this.searchTerm.trim() !== '') {
      const searchWords = this.searchTerm.toLowerCase().trim().split(/\s+/);
      const scored: Array<{ acc: any; matchCount: number }> = [];
      for (const acc of this.accounts) {
        const searchable = [acc.sub_name, acc.sub_code, acc.cat_name, acc.phone]
          .filter(Boolean)
          .join(' ')
          .toLowerCase();
        const matchCount = searchWords.filter((w) => searchable.includes(w)).length;
        if (matchCount > 0) {
          scored.push({ acc, matchCount });
        }
      }
      scored.sort((a, b) => b.matchCount - a.matchCount);
      return scored.map((s) => s.acc);
    }
    return [...this.accounts].slice(0, 50);
  }

  calculateDropdownPosition() {
    const el = this.inputWrapper?.nativeElement;
    if (el) {
      const rect = el.getBoundingClientRect();
      this.dropdownPosition = {
        top: rect.bottom + 4 + 'px',
        left: rect.left + 'px',
        width: rect.width + 'px',
      };
    }
  }

  onInputFocus() {
    this.componentHasFocus = true;
    this.highlightedIndex = -1;
    if (this.accounts && this.accounts.length > 0) {
      setTimeout(() => {
        this.calculateDropdownPosition();
        this.showDropdown = true;
      }, 10);
    }
  }

  onInputBlur() {
    this.componentHasFocus = false;
    setTimeout(() => {
      if (!this.componentHasFocus) {
        this.showDropdown = false;
        this.highlightedIndex = -1;
      }
    }, 150);
  }

  onSearchInput(event: any) {
    const value = event?.target?.value ?? event?.detail?.value ?? '';
    this.searchTerm = value || '';
    this.highlightedIndex = -1;
    if (!this.searchTerm) {
      this.selectedId = null;
      this.selectedIdChange.emit(null);
      this.accountSelected.emit(null);
    }
    if (!this.showDropdown && this.accounts.length > 0) {
      this.calculateDropdownPosition();
      this.showDropdown = true;
    }
  }

  onInputClear() {
    this.searchTerm = '';
    this.selectedId = null;
    this.selectedIdChange.emit(null);
    this.accountSelected.emit(null);
    this.showDropdown = false;
    this.highlightedIndex = -1;
    setTimeout(() => {
      if (this.searchInput) {
        this.searchInput.setFocus().catch(() => {});
      }
    }, 50);
  }

  onKeyDown(event: KeyboardEvent) {
    const filtered = this.getFilteredAccounts();
    if (event.key === 'ArrowDown') {
      event.preventDefault();
      if (!this.showDropdown) {
        this.calculateDropdownPosition();
        this.showDropdown = true;
      }
      if (filtered.length > 0) {
        this.highlightedIndex = (this.highlightedIndex + 1) % filtered.length;
      }
    } else if (event.key === 'ArrowUp') {
      event.preventDefault();
      if (filtered.length > 0) {
        this.highlightedIndex =
          this.highlightedIndex <= 0 ? filtered.length - 1 : this.highlightedIndex - 1;
      }
    } else if (event.key === 'Enter') {
      event.preventDefault();
      if (this.showDropdown && this.highlightedIndex >= 0 && filtered[this.highlightedIndex]) {
        this.selectAccount(filtered[this.highlightedIndex]);
      }
    } else if (event.key === 'Escape') {
      this.showDropdown = false;
      this.highlightedIndex = -1;
    } else if (event.key === 'Tab') {
      this.showDropdown = false;
      this.highlightedIndex = -1;
    }
  }

  selectAccount(acc: any) {
    if (!acc) return;
    this.selectedId = acc.id;
    this.searchTerm = acc.sub_name || '';
    this.showDropdown = false;
    this.highlightedIndex = -1;
    this.componentHasFocus = false;

    this.selectedIdChange.emit(acc.id);
    this.accountSelected.emit(acc);

    this.cdr.detectChanges();

    if (this.searchInput) {
      setTimeout(async () => {
        try {
          const el = await this.searchInput.getInputElement();
          if (el) el.value = acc.sub_name || '';
        } catch {}
      }, 10);
    }
  }

  refresh() {
    this.refreshAccounts.emit();
  }

  onAddClicked() {
    this.addAccountClicked.emit();
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event) {
    const target = event.target as HTMLElement;
    if (!target) return;

    const componentEl = this.inputWrapper?.nativeElement;
    const dropdownEls = document.querySelectorAll('.account-dropdown-container');

    let insideComponent = false;
    let insideDropdown = false;

    if (componentEl) {
      insideComponent =
        componentEl.contains(target) ||
        target.closest('.account-selector-wrapper') !== null;
    }

    dropdownEls.forEach((d) => {
      if (d.contains(target)) insideDropdown = true;
    });

    if (!insideComponent && !insideDropdown) {
      if (this.showDropdown) {
        this.showDropdown = false;
        this.highlightedIndex = -1;
        this.componentHasFocus = false;
      }
    }
  }
}
