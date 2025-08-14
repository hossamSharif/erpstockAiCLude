import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PriceAdjustmentDialogComponent } from './price-adjustment-dialog.component';

describe('PriceAdjustmentDialogComponent', () => {
  let component: PriceAdjustmentDialogComponent;
  let fixture: ComponentFixture<PriceAdjustmentDialogComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PriceAdjustmentDialogComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PriceAdjustmentDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});