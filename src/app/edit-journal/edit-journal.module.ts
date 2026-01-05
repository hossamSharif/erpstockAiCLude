import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';

import { EditJournalPageRoutingModule } from './edit-journal-routing.module';

import { EditJournalPage } from './edit-journal.page';
import { SharedModule } from '../module/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditJournalPageRoutingModule,
    SharedModule,
    TranslateModule
  ],
  declarations: [EditJournalPage]
})
export class EditJournalPageModule {}
