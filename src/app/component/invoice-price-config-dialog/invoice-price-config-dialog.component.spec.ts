import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InvoicePriceConfigDialogComponent } from './invoice-price-config-dialog.component';

describe('InvoicePriceConfigDialogComponent', () => {
  let component: InvoicePriceConfigDialogComponent;
  let fixture: ComponentFixture<InvoicePriceConfigDialogComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ InvoicePriceConfigDialogComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InvoicePriceConfigDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});