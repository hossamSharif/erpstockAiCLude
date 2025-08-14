import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditJournalPageRoutingModule } from './edit-journal-routing.module';

import { EditJournalPage } from './edit-journal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditJournalPageRoutingModule
  ],
  declarations: [EditJournalPage]
})
export class EditJournalPageModule {}
