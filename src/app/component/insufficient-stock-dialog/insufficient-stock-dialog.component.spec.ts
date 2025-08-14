import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InsufficientStockDialogComponent } from './insufficient-stock-dialog.component';

describe('InsufficientStockDialogComponent', () => {
  let component: InsufficientStockDialogComponent;
  let fixture: ComponentFixture<InsufficientStockDialogComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ InsufficientStockDialogComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InsufficientStockDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});