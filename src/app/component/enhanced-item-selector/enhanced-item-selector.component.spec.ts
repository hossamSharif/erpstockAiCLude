import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EnhancedItemSelectorComponent } from './enhanced-item-selector.component';

describe('EnhancedItemSelectorComponent', () => {
  let component: EnhancedItemSelectorComponent;
  let fixture: ComponentFixture<EnhancedItemSelectorComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EnhancedItemSelectorComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EnhancedItemSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});