import { Component, Input, Output, EventEmitter } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-selection-action-panel',
  templateUrl: './selection-action-panel.component.html',
  styleUrls: ['./selection-action-panel.component.scss'],
  animations: [
    trigger('slideUp', [
      transition(':enter', [
        style({ transform: 'translateX(-50%) translateY(100px)', opacity: 0 }),
        animate('300ms ease-out', style({ transform: 'translateX(-50%) translateY(0)', opacity: 1 }))
      ]),
      transition(':leave', [
        animate('200ms ease-in', style({ transform: 'translateX(-50%) translateY(100px)', opacity: 0 }))
      ])
    ])
  ]
})
export class SelectionActionPanelComponent {
  @Input() selectedCount: number = 0;
  @Input() totalCount: number = 0;
  @Input() isVisible: boolean = false;
  @Input() showBulkPriceUpdate: boolean = true;
  @Input() mode: 'sales' | 'purchase' = 'sales';

  @Output() bulkDelete = new EventEmitter<void>();
  @Output() bulkPriceUpdate = new EventEmitter<void>();
  @Output() bulkCopy = new EventEmitter<void>();
  @Output() bulkCut = new EventEmitter<void>();
  @Output() clearSelection = new EventEmitter<void>();
  @Output() selectAll = new EventEmitter<void>();

  onBulkDelete() {
    this.bulkDelete.emit();
  }

  onBulkPriceUpdate() {
    this.bulkPriceUpdate.emit();
  }

  onBulkCopy() {
    this.bulkCopy.emit();
  }

  onBulkCut() {
    this.bulkCut.emit();
  }

  onClearSelection() {
    this.clearSelection.emit();
  }

  onSelectAll() {
    this.selectAll.emit();
  }
}
