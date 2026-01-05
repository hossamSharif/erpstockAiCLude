# Quick Translation Guide - Daily Reference
## ERP Multi-Language Implementation

**Quick access guide for daily migration tasks**

---

## 🚀 Quick Start

### Starting a New Page Migration

1. **Pick a page from the plan** (`MULTI_LANGUAGE_IMPLEMENTATION_PLAN.md`)
2. **Follow the 3-file pattern**:
   - `page.html` - Template
   - `page.ts` - Component
   - `page.module.ts` - Module

---

## 📝 Migration Checklist (Copy for Each Page)

```markdown
Page: _______________

- [ ] Extract Arabic text from HTML
- [ ] Extract Arabic text from TypeScript
- [ ] Create translation keys
- [ ] Add keys to ar.json
- [ ] Add keys to en.json
- [ ] Update HTML template
- [ ] Update TypeScript component
- [ ] Update module imports
- [ ] Test in Arabic
- [ ] Test in English
- [ ] Build test passes
```

---

## 💻 Code Templates

### 1. HTML Template

```html
<!-- Text -->
<h3>{{ 'MODULE.COMPONENT.TITLE' | translate }}</h3>

<!-- Label -->
<ion-label>{{ 'MODULE.COMPONENT.LABEL.FIELD_NAME' | translate }}</ion-label>

<!-- Placeholder - USE PROPERTY BINDING -->
<ion-input [placeholder]="'MODULE.COMPONENT.PLACEHOLDER.FIELD_NAME' | translate"></ion-input>

<!-- Button -->
<ion-button>{{ 'COMMON.BUTTON.SAVE' | translate }}</ion-button>
```

### 2. TypeScript Component

```typescript
// Imports
import { TranslateService } from '@ngx-translate/core';

// Constructor
constructor(
  // ... other services
  private translate: TranslateService
) { }

// Toast method
async presentToast(translationKey: string, color?: string) {
  const message = this.translate.instant(translationKey);
  const toast = await this.toast.create({
    message: message,
    duration: 2000,
    color: color,
    cssClass: 'cust_Toast',
    mode: 'ios',
    position: 'top'
  });
  toast.present();
}

// Usage
this.presentToast('COMMON.MESSAGE.SUCCESS', 'success');
this.presentToast('MODULE.COMPONENT.MESSAGE.ERROR', 'danger');

// Alert/Confirm
const alert = await this.alertController.create({
  header: this.translate.instant('COMMON.BUTTON.CONFIRM'),
  message: this.translate.instant('COMMON.MESSAGE.CONFIRM_DELETE'),
  buttons: [
    this.translate.instant('COMMON.BUTTON.CANCEL'),
    this.translate.instant('COMMON.BUTTON.OK')
  ]
});
await alert.present();
```

### 3. Module File

```typescript
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    YourPageRoutingModule,
    TranslateModule  // ADD THIS
  ],
  declarations: [YourPage]
})
export class YourPageModule {}
```

### 4. Translation JSON

```json
// ar.json
{
  "MODULE": {
    "COMPONENT": {
      "TITLE": "العنوان بالعربية",
      "LABEL": {
        "FIELD_NAME": "اسم الحقل"
      },
      "PLACEHOLDER": {
        "FIELD_NAME": "أدخل القيمة"
      },
      "MESSAGE": {
        "SUCCESS": "تمت العملية بنجاح",
        "ERROR": "حدث خطأ"
      }
    }
  }
}

// en.json - MUST HAVE SAME KEYS
{
  "MODULE": {
    "COMPONENT": {
      "TITLE": "English Title",
      "LABEL": {
        "FIELD_NAME": "Field Name"
      },
      "PLACEHOLDER": {
        "FIELD_NAME": "Enter value"
      },
      "MESSAGE": {
        "SUCCESS": "Operation successful",
        "ERROR": "An error occurred"
      }
    }
  }
}
```

---

## 🔑 Common Translation Keys (Reuse These!)

### Buttons
```
COMMON.BUTTON.SAVE
COMMON.BUTTON.CANCEL
COMMON.BUTTON.DELETE
COMMON.BUTTON.EDIT
COMMON.BUTTON.ADD
COMMON.BUTTON.SEARCH
COMMON.BUTTON.PRINT
COMMON.BUTTON.CLOSE
COMMON.BUTTON.CONFIRM
COMMON.BUTTON.OK
COMMON.BUTTON.YES
COMMON.BUTTON.NO
```

### Messages
```
COMMON.MESSAGE.SUCCESS
COMMON.MESSAGE.ERROR
COMMON.MESSAGE.LOADING
COMMON.MESSAGE.SAVED_SUCCESSFULLY
COMMON.MESSAGE.DELETED_SUCCESSFULLY
COMMON.MESSAGE.UPDATED_SUCCESSFULLY
COMMON.MESSAGE.CONFIRM_DELETE
COMMON.MESSAGE.CONNECTION_ERROR
```

### Labels
```
COMMON.LABEL.DATE
COMMON.LABEL.TIME
COMMON.LABEL.TOTAL
COMMON.LABEL.AMOUNT
COMMON.LABEL.DESCRIPTION
COMMON.LABEL.QUANTITY
COMMON.LABEL.PRICE
COMMON.LABEL.ACCOUNT
COMMON.LABEL.TYPE
COMMON.LABEL.STATUS
COMMON.LABEL.NAME
```

### Validation
```
COMMON.VALIDATION.REQUIRED
COMMON.VALIDATION.INVALID_EMAIL
COMMON.VALIDATION.PLEASE_SELECT
COMMON.VALIDATION.PLEASE_ENTER
```

---

## ⚡ Quick Commands

```bash
# Start dev server
npm start

# Build and check for errors
npm run build

# If build fails, check:
# 1. Missing TranslateModule in module file
# 2. Missing translation keys
# 3. Typos in translation keys
```

---

## 🎯 Key Naming Pattern

```
MODULE.COMPONENT.TYPE.KEY

Examples:
SALES.INVOICE.TITLE               → "فاتورة مبيعات" / "Sales Invoice"
SALES.INVOICE.LABEL.CUSTOMER      → "حساب العميل" / "Customer Account"
SALES.INVOICE.PLACEHOLDER.SELECT  → "اختر..." / "Select..."
SALES.INVOICE.MESSAGE.SAVED       → "تم الحفظ" / "Saved"
```

---

## ⚠️ Common Mistakes to Avoid

### ❌ DON'T
```html
<!-- DON'T use attribute binding for placeholders -->
<ion-input placeholder="{{ 'KEY' | translate }}"></ion-input>

<!-- DON'T keep dir="rtl" -->
<ion-grid dir="rtl">

<!-- DON'T hardcode text -->
<ion-button>حفظ</ion-button>
```

### ✅ DO
```html
<!-- DO use property binding for placeholders -->
<ion-input [placeholder]="'KEY' | translate"></ion-input>

<!-- DO remove dir attribute -->
<ion-grid>

<!-- DO use translation keys -->
<ion-button>{{ 'COMMON.BUTTON.SAVE' | translate }}</ion-button>
```

---

## 🐛 Troubleshooting

### Problem: "KEY" shows instead of text
**Fix**: Check translation key exists in both ar.json and en.json

### Problem: Pipe 'translate' not found
**Fix**: Add `TranslateModule` to page module imports

### Problem: Direction not changing
**Fix**: Remove `dir="rtl"` from templates

### Problem: Language not persisting
**Fix**: Check `initializeLanguage()` is called in app.component.ts

---

## 📊 Progress Tracking

After completing each page, update:
1. `MULTI_LANGUAGE_IMPLEMENTATION_PLAN.md` - Check off completed tasks
2. Test the page in both languages
3. Run build test

---

## 🎨 Example: Complete Page Migration

**Before** (`sales.page.html`):
```html
<ion-header>
  <ion-toolbar>
    <ion-title>فاتورة مبيعات</ion-title>
  </ion-toolbar>
</ion-header>

<ion-content dir="rtl">
  <ion-item>
    <ion-label>حساب العميل</ion-label>
    <ion-input placeholder="اختر حساب العميل"></ion-input>
  </ion-item>
  <ion-button (click)="save()">حفظ</ion-button>
</ion-content>
```

**After** (`sales.page.html`):
```html
<ion-header>
  <ion-toolbar>
    <ion-title>{{ 'SALES.INVOICE.TITLE' | translate }}</ion-title>
  </ion-toolbar>
</ion-header>

<ion-content>
  <ion-item>
    <ion-label>{{ 'SALES.INVOICE.LABEL.CUSTOMER_ACCOUNT' | translate }}</ion-label>
    <ion-input [placeholder]="'SALES.INVOICE.PLACEHOLDER.SELECT_CUSTOMER' | translate"></ion-input>
  </ion-item>
  <ion-button (click)="save()">{{ 'COMMON.BUTTON.SAVE' | translate }}</ion-button>
</ion-content>
```

**Before** (`sales.page.ts`):
```typescript
save() {
  if (!this.customer) {
    this.presentToast('الرجاء اختيار العميل', 'danger');
    return;
  }
  // save logic
  this.presentToast('تم حفظ الفاتورة بنجاح', 'success');
}

async presentToast(msg: string, color?: string) {
  const toast = await this.toast.create({
    message: msg,
    duration: 2000,
    color: color
  });
  toast.present();
}
```

**After** (`sales.page.ts`):
```typescript
import { TranslateService } from '@ngx-translate/core';

constructor(
  private toast: ToastController,
  private translate: TranslateService
) {}

save() {
  if (!this.customer) {
    this.presentToast('SALES.INVOICE.MESSAGE.SELECT_CUSTOMER', 'danger');
    return;
  }
  // save logic
  this.presentToast('COMMON.MESSAGE.SAVED_SUCCESSFULLY', 'success');
}

async presentToast(translationKey: string, color?: string) {
  const message = this.translate.instant(translationKey);
  const toast = await this.toast.create({
    message: message,
    duration: 2000,
    color: color
  });
  toast.present();
}
```

**Module** (`sales.module.ts`):
```typescript
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    // ... other imports
    TranslateModule
  ]
})
```

**Translation files**:
```json
// ar.json
{
  "SALES": {
    "INVOICE": {
      "TITLE": "فاتورة مبيعات",
      "LABEL": {
        "CUSTOMER_ACCOUNT": "حساب العميل"
      },
      "PLACEHOLDER": {
        "SELECT_CUSTOMER": "اختر حساب العميل"
      },
      "MESSAGE": {
        "SELECT_CUSTOMER": "الرجاء اختيار العميل"
      }
    }
  }
}

// en.json
{
  "SALES": {
    "INVOICE": {
      "TITLE": "Sales Invoice",
      "LABEL": {
        "CUSTOMER_ACCOUNT": "Customer Account"
      },
      "PLACEHOLDER": {
        "SELECT_CUSTOMER": "Select customer account"
      },
      "MESSAGE": {
        "SELECT_CUSTOMER": "Please select a customer"
      }
    }
  }
}
```

---

## ⏱️ Time Estimate Per Page

- Simple page (3-5 fields): 20-30 minutes
- Medium page (10-15 fields): 45-60 minutes
- Complex page (20+ fields, forms): 90-120 minutes

---

**Keep this file open while working for quick reference!**
