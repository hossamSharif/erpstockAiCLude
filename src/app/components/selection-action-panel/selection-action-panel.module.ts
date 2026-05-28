import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { SelectionActionPanelComponent } from './selection-action-panel.component';

@NgModule({
  declarations: [SelectionActionPanelComponent],
  imports: [CommonModule, IonicModule],
  exports: [SelectionActionPanelComponent]
})
export class SelectionActionPanelModule {}
