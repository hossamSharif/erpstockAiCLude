import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-export-buttons',
  templateUrl: './export-buttons.component.html',
  styleUrls: ['./export-buttons.component.scss']
})
export class ExportButtonsComponent {
  @Input() hasData: boolean = false;
  @Input() isLoading: boolean = false;
  @Input() disabled: boolean = false;
  
  @Output() exportPDF = new EventEmitter<void>();
  @Output() exportExcel = new EventEmitter<void>();

  onExportPDF(): void {
    if (this.hasData && !this.isLoading && !this.disabled) {
      this.exportPDF.emit();
    }
  }

  onExportExcel(): void {
    if (this.hasData && !this.isLoading && !this.disabled) {
      this.exportExcel.emit();
    }
  }
}