import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';

import { EditPerchPageRoutingModule } from './edit-perch-routing.module';

import { EditPerchPage } from './edit-perch.page';
import { ShareModule } from '../shareModule/share-module/share-module.module';
import { SharedModule } from '../module/shared/shared.module';
import { SelectionActionPanelModule } from '../components/selection-action-panel/selection-action-panel.module';
import { ScrollToTopFabModule } from '../components/scroll-to-top-fab/scroll-to-top-fab.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ShareModule,
    SharedModule,
    IonicModule,
    EditPerchPageRoutingModule,
    TranslateModule,
    SelectionActionPanelModule,
    ScrollToTopFabModule
  ],
  declarations: [EditPerchPage]
})
export class EditPerchPageModule {}
