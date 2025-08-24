import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InvoiceJournalEntryComponent } from './invoice-journal-entry.component';

describe('InvoiceJournalEntryComponent', () => {
  let component: InvoiceJournalEntryComponent;
  let fixture: ComponentFixture<InvoiceJournalEntryComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ InvoiceJournalEntryComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InvoiceJournalEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});