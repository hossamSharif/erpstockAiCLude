import { Component, Input, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ModalController, ToastController } from '@ionic/angular';
import { ServicesService } from '../../stockService/services.service';

@Component({
  selector: 'app-add-expense-category-modal',
  templateUrl: './add-expense-category-modal.component.html',
  styleUrls: ['./add-expense-category-modal.component.scss']
})
export class AddExpenseCategoryModalComponent implements OnInit {
  @Input() store_info: any;

  newCategory = {
    category_name: '',
    category_desc: '',
    store_id: null
  };

  isSaving = false;

  constructor(
    private modalController: ModalController,
    private toastController: ToastController,
    private api: ServicesService,
    private translate: TranslateService
  ) {}

  ngOnInit() {
    if (this.store_info) {
      this.newCategory.store_id = this.store_info.id;
    }
  }

  async saveCategory() {
    if (!this.newCategory.category_name.trim()) {
      this.presentToast('يرجى إدخال اسم التصنيف', 'warning');
      return;
    }

    this.isSaving = true;

    const categoryData = {
      category_name: this.newCategory.category_name,
      category_desc: this.newCategory.category_desc,
      store_id: this.newCategory.store_id
    };

    this.api.createExpenseCategory(categoryData).subscribe(
      (data: any) => {
        this.isSaving = false;
        // Return the created category
        const createdCategory = {
          id: data.message, // API returns the new ID in message field
          category_name: this.newCategory.category_name,
          category_desc: this.newCategory.category_desc,
          store_id: this.newCategory.store_id
        };

        this.modalController.dismiss({
          created: true,
          category: createdCategory
        });
      },
      error => {
        console.error('Error creating expense category:', error);
        this.isSaving = false;
        this.presentToast('خطأ في إضافة التصنيف', 'danger');
      }
    );
  }

  cancel() {
    this.modalController.dismiss({
      created: false
    });
  }

  async presentToast(translationKey: string, color: string) {
    const message = this.translate.instant(translationKey);
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      color: color,
      position: 'top'
    });
    toast.present();
  }
}
