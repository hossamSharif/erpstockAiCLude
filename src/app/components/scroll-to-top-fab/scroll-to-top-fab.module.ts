import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ScrollToTopFabComponent } from './scroll-to-top-fab.component';

@NgModule({
  declarations: [ScrollToTopFabComponent],
  imports: [CommonModule, IonicModule],
  exports: [ScrollToTopFabComponent],
})
export class ScrollToTopFabModule {}
