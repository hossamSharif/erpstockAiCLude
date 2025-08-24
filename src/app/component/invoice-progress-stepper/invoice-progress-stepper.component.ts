import { Component, Input, OnInit } from '@angular/core';

export interface ProgressStep {
  id: string;
  title: string;
  description: string;
  icon: string;
  status: 'pending' | 'active' | 'completed' | 'skipped';
  optional?: boolean;
}

@Component({
  selector: 'app-invoice-progress-stepper',
  templateUrl: './invoice-progress-stepper.component.html',
  styleUrls: ['./invoice-progress-stepper.component.scss']
})
export class InvoiceProgressStepperComponent implements OnInit {
  @Input() currentStep: string = 'prepare';
  @Input() invoiceType: 'sales' | 'purchase' = 'sales';
  @Input() showJournalStep: boolean = true;

  steps: ProgressStep[] = [];

  ngOnInit() {
    this.initializeSteps();
  }

  ngOnChanges() {
    this.updateStepsStatus();
  }

  private initializeSteps() {
    const isS = this.invoiceType === 'sales';
    
    this.steps = [
      {
        id: 'prepare',
        title: 'إعداد الفاتورة',
        description: isS ? 'إضافة الأصناف والعميل' : 'إضافة الأصناف والمورد',
        icon: 'create-outline',
        status: 'pending'
      },
      {
        id: 'save',
        title: 'حفظ الفاتورة',
        description: isS ? 'حفظ فاتورة المبيعات' : 'حفظ فاتورة المشتريات',
        icon: 'save-outline',
        status: 'pending'
      },
      {
        id: 'journal',
        title: 'قيد يومية',
        description: isS ? 'تحصيل مبلغ الفاتورة' : 'دفع مبلغ الفاتورة',
        icon: 'document-text-outline',
        status: 'pending',
        optional: true
      },
      {
        id: 'print',
        title: 'طباعة',
        description: 'طباعة الفاتورة',
        icon: 'print-outline',
        status: 'pending'
      }
    ];

    this.updateStepsStatus();
  }

  private updateStepsStatus() {
    if (!this.steps.length) return;

    const stepOrder = ['prepare', 'save', 'journal', 'print'];
    const currentIndex = stepOrder.indexOf(this.currentStep);

    this.steps.forEach((step, index) => {
      // If journal step should be hidden, skip it
      if (step.id === 'journal' && !this.showJournalStep) {
        step.status = 'skipped';
        return;
      }

      const stepIndex = stepOrder.indexOf(step.id);
      
      if (stepIndex < currentIndex) {
        step.status = 'completed';
      } else if (stepIndex === currentIndex) {
        step.status = 'active';
      } else {
        step.status = 'pending';
      }
    });
  }

  getStepClass(step: ProgressStep): string {
    return `step-${step.status}`;
  }

  getConnectorClass(index: number): string {
    const currentStep = this.steps[index];
    const nextStep = this.steps[index + 1];
    
    if (!nextStep) return '';
    
    if (currentStep.status === 'completed' && nextStep.status !== 'skipped') {
      return 'connector-completed';
    } else if (currentStep.status === 'skipped' || nextStep.status === 'skipped') {
      return 'connector-skipped';
    }
    
    return 'connector-pending';
  }

  isStepVisible(step: ProgressStep): boolean {
    return step.id !== 'journal' || this.showJournalStep;
  }

  getProgressPercentage(): number {
    const visibleSteps = this.steps.filter(step => this.isStepVisible(step));
    const completedSteps = visibleSteps.filter(step => step.status === 'completed');
    const activeSteps = visibleSteps.filter(step => step.status === 'active');
    
    const progress = (completedSteps.length + (activeSteps.length * 0.5)) / visibleSteps.length;
    return Math.round(progress * 100);
  }
}