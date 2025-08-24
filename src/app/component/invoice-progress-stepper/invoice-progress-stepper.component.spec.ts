import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InvoiceProgressStepperComponent } from './invoice-progress-stepper.component';

describe('InvoiceProgressStepperComponent', () => {
  let component: InvoiceProgressStepperComponent;
  let fixture: ComponentFixture<InvoiceProgressStepperComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ InvoiceProgressStepperComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InvoiceProgressStepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize steps correctly', () => {
    component.invoiceType = 'sales';
    component.ngOnInit();
    expect(component.steps.length).toBe(4);
    expect(component.steps[0].id).toBe('prepare');
    expect(component.steps[1].id).toBe('save');
    expect(component.steps[2].id).toBe('journal');
    expect(component.steps[3].id).toBe('print');
  });

  it('should calculate progress percentage correctly', () => {
    component.currentStep = 'save';
    component.ngOnInit();
    const progress = component.getProgressPercentage();
    expect(progress).toBeGreaterThan(0);
    expect(progress).toBeLessThanOrEqual(100);
  });

  it('should handle optional journal step correctly', () => {
    component.showJournalStep = false;
    component.ngOnInit();
    const journalStep = component.steps.find(step => step.id === 'journal');
    expect(journalStep?.status).toBe('skipped');
  });
});