import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { AiAssistantPageRoutingModule } from './ai-assistant-routing.module';
import { AiAssistantPage } from './ai-assistant.page';

// Import shared pipes module
import { PipesModule } from '../pipes/pipes.module';

@NgModule({
  imports: [
    TranslateModule,
    CommonModule,
    FormsModule,
    IonicModule,
    AiAssistantPageRoutingModule,
    PipesModule
  ],
  declarations: [AiAssistantPage]
})
export class AiAssistantPageModule {}
