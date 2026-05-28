import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { HttpClientModule  } from '@angular/common/http'; 
import { DatePipe } from '@angular/common';
import { AuthGaurdService} from './auth/auth-gaurd.service';
import { AuthServiceService } from './auth/auth-service.service';
import { IonicStorageModule  } from '@ionic/storage-angular';
import { SelectAllDirective } from './select-all.directive';
import { CommonModule } from '@angular/common';
import { ShareModule } from './shareModule/share-module/share-module.module';
import { FileOpener } from '@ionic-native/file-opener/ngx';
import { File } from '@ionic-native/file/ngx';
import { QRCodeModule } from 'angularx-qrcode';
import { UserActionsPopoverComponent } from './component/user-actions-popover/user-actions-popover.component';
import { CategorySwitcherPopoverComponent } from './component/category-switcher-popover/category-switcher-popover.component';
import { UpdateNotificationModalComponent } from './components/update-notification-modal/update-notification-modal.component';
import { AiChatWidgetComponent } from './components/ai-chat-widget/ai-chat-widget.component';
import { BulkPriceUpdateModalComponent } from './components/bulk-price-update-modal/bulk-price-update-modal.component';
import { UpdateService } from './services/update.service';
import { PipesModule } from './pipes/pipes.module';
import { FormsModule } from '@angular/forms';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';

// Factory function for TranslateLoader
export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [AppComponent, SelectAllDirective, UserActionsPopoverComponent, CategorySwitcherPopoverComponent, UpdateNotificationModalComponent, AiChatWidgetComponent, BulkPriceUpdateModalComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    CommonModule,
    ShareModule,
    HttpClientModule,
    FormsModule,
    PipesModule,
    IonicModule.forRoot(),
    IonicStorageModule.forRoot(),
    TranslateModule.forRoot({
      defaultLanguage: 'ar',
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },DatePipe,AuthServiceService,AuthGaurdService,FileOpener ,File,UpdateService],
  bootstrap: [AppComponent],
   schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
