import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 
import { IonicModule } from '@ionic/angular'; 
import { TswiaPageRoutingModule } from './tswia-routing.module'; 
import { TswiaPage } from './tswia.page';
import { ShareModule } from '../shareModule/share-module/share-module.module';
import { SharedModule } from '../module/shared/shared.module';
import { SelectionActionPanelModule } from '../components/selection-action-panel/selection-action-panel.module';

@NgModule({
  imports: [
    TranslateModule,
    CommonModule,
    FormsModule,
    ShareModule,
    SharedModule,
    IonicModule,
    TswiaPageRoutingModule,
    SelectionActionPanelModule
  ],
  declarations: [TswiaPage]
})
export class TswiaPageModule {}
