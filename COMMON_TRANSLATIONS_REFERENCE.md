# Common Translations Quick Reference

Use this as a quick lookup when updating pages.

## Page Titles

| Arabic | English | Translation Key |
|--------|---------|----------------|
| فاتورة مبيعات | Sales Invoice | `SALES.TITLE` |
| سجل المبيعات | Sales Record | `SALES.RECORD_TITLE` |
| تقرير المبيعات | Sales Report | `SALES.REPORT_TITLE` |
| فاتورة مشتريات | Purchase Invoice | `PURCHASE.TITLE` |
| سجل المشتريات | Purchase Record | `PURCHASE.RECORD_TITLE` |
| تقرير المشتريات | Purchase Report | `PURCHASE.REPORT_TITLE` |
| طلبات الشراء | Purchase Orders | `PURCHASE.ORDER_TITLE` |
| الأصنــاف | Items | `INVENTORY.ITEM_STOCK.TITLE` |
| المخزن | Stock | `INVENTORY.STOCK_TITLE` |
| تحليل الأصناف | Item Analytics | `MENU.ITEM_ANALYTICS` |
| السندات | Vouchers | `MENU.VOUCHERS` |
| كشف حساب | Account Statement | `MENU.ACCOUNT_STATEMENT` |
| الأرصدة | Balances | `MENU.BALANCES` |
| المصروفات | Expenses | `MENU.EXPENSES_SECTION` |
| التقرير اليومي | Daily Report | `MENU.DAILY_REPORT` |
| إدارة العملات | Currency Management | `CURRENCY.TITLE` |
| التحقق من البيانات | Data Verification | `DATA_VERIFICATION.TITLE` |
| الإعدادات والضبط | Settings | `SETTINGS.TITLE` |
| لوحة التحليلات | Analytics Dashboard | `ANALYTICS.TITLE` |
| المساعد الذكي | AI Assistant | `AI_ASSISTANT.TITLE` |

## Common Labels

| Arabic | English | Translation Key |
|--------|---------|----------------|
| حساب العميل | Customer Account | `SALES.LABEL.CUSTOMER_ACCOUNT` |
| اختر حساب العميل | Select Customer Account | `SALES.LABEL.SELECT_CUSTOMER` |
| حساب المورد | Supplier Account | `PURCHASE.LABEL.SUPPLIER_ACCOUNT` |
| اختر حساب المورد | Select Supplier Account | `PURCHASE.LABEL.SELECT_SUPPLIER` |
| نوع الفاتورة | Invoice Type | `SALES.LABEL.INVOICE_TYPE` |
| مبدئية | Preliminary | `SALES.LABEL.PRELIMINARY` |
| نهائية | Final | `SALES.LABEL.FINAL` |
| ملاحظة | Note | `SALES.LABEL.COMMENT` or `PURCHASE.LABEL.COMMENT` |
| التاريخ | Date | `COMMON.LABEL.DATE` |
| الوقت | Time | `COMMON.LABEL.TIME` |
| الإجمالي | Total | `COMMON.LABEL.TOTAL` |
| الخصم | Discount | `COMMON.LABEL.DISCOUNT` |
| الكمية | Quantity | `COMMON.LABEL.QUANTITY` |
| السعر | Price | `COMMON.LABEL.PRICE` |
| المبلغ | Amount | `COMMON.LABEL.AMOUNT` |
| البيان | Description | `COMMON.LABEL.DESCRIPTION` |
| الحساب | Account | `COMMON.LABEL.ACCOUNT` |
| النوع | Type | `COMMON.LABEL.TYPE` |
| الحالة | Status | `COMMON.LABEL.STATUS` |
| الإسم | Name | `COMMON.LABEL.NAME` |

## Common Placeholders

| Arabic | English | Translation Key |
|--------|---------|----------------|
| أكتب تعليقا | Write a comment | `SALES.LABEL.WRITE_COMMENT` or `PURCHASE.LABEL.WRITE_COMMENT` |
| اختر الصنف | Select Item | `PURCHASE.LABEL.SELECT_ITEM` |
| بحــث | Search | `INVENTORY.ITEM_STOCK.LABEL.SEARCH` or `COMMON.PLACEHOLDER.SEARCH` |
| اختر... | Select... | `COMMON.PLACEHOLDER.SELECT` |
| أدخل... | Enter... | `COMMON.PLACEHOLDER.ENTER` |
| البحث... | Search... | `COMMON.PLACEHOLDER.SEARCH` |

## Common Buttons

| Arabic | English | Translation Key |
|--------|---------|----------------|
| حفظ | Save | `COMMON.BUTTON.SAVE` |
| إلغاء | Cancel | `COMMON.BUTTON.CANCEL` |
| حذف | Delete | `COMMON.BUTTON.DELETE` |
| تعديل | Edit | `COMMON.BUTTON.EDIT` |
| إضافة | Add | `COMMON.BUTTON.ADD` |
| بحث | Search | `COMMON.BUTTON.SEARCH` |
| تصفية | Filter | `COMMON.BUTTON.FILTER` |
| طباعة | Print | `COMMON.BUTTON.PRINT` |
| إغلاق | Close | `COMMON.BUTTON.CLOSE` |
| تأكيد | Confirm | `COMMON.BUTTON.CONFIRM` |
| موافق | OK | `COMMON.BUTTON.OK` |
| نعم | Yes | `COMMON.BUTTON.YES` |
| لا | No | `COMMON.BUTTON.NO` |
| مسح | Clear | `COMMON.BUTTON.CLEAR` |
| صنف جديد | New Item | `INVENTORY.ITEM_STOCK.LABEL.NEW_ITEM` |
| إخفاء الأعمدة | Hide Columns | `INVENTORY.ITEM_STOCK.LABEL.HIDE_COLUMNS` |
| تعديل الأسعار | Edit Prices | `INVENTORY.ITEM_STOCK.LABEL.EDIT_PRICES` |

## Common Messages

| Arabic | English | Translation Key |
|--------|---------|----------------|
| تمت العملية بنجاح | Operation completed successfully | `COMMON.MESSAGE.SUCCESS` |
| حدث خطأ ما | An error occurred | `COMMON.MESSAGE.ERROR` |
| جاري التحميل... | Loading... | `COMMON.MESSAGE.LOADING` |
| لا توجد بيانات | No data available | `COMMON.MESSAGE.NO_DATA` |
| هل أنت متأكد من الحذف؟ | Are you sure you want to delete? | `COMMON.MESSAGE.CONFIRM_DELETE` |
| الرجاء إعادة المحاولة | Please try again | `COMMON.MESSAGE.TRY_AGAIN` |
| جاري الحفظ... | Saving... | `COMMON.MESSAGE.SAVING` |
| تم الحفظ بنجاح | Saved successfully | `COMMON.MESSAGE.SAVED_SUCCESSFULLY` |
| تم الحذف بنجاح | Deleted successfully | `COMMON.MESSAGE.DELETED_SUCCESSFULLY` |
| تم التحديث بنجاح | Updated successfully | `COMMON.MESSAGE.UPDATED_SUCCESSFULLY` |
| فشلت العملية | Operation failed | `COMMON.MESSAGE.OPERATION_FAILED` |
| خطأ في الإتصال | Connection error | `COMMON.MESSAGE.CONNECTION_ERROR` |
| لا توجد بيانات للتصدير | No data to export | Multiple: `*.MESSAGE.NO_DATA_TO_EXPORT` |

## Template Patterns

### Basic Pattern:
```html
<!-- Static Text -->
<ion-title>{{ 'SECTION.TITLE' | translate }}</ion-title>
<ion-label>{{ 'SECTION.LABEL.FIELD_NAME' | translate }}</ion-label>

<!-- Dynamic Properties (use square brackets) -->
<ion-input [placeholder]="'SECTION.PLACEHOLDER.FIELD_NAME' | translate"></ion-input>
<ion-searchbar [placeholder]="'COMMON.PLACEHOLDER.SEARCH' | translate"></ion-searchbar>

<!-- With Interpolation -->
<ion-text>{{ 'COMMON.LABEL.TOTAL' | translate }}: {{totalAmount}}</ion-text>

<!-- In Attributes -->
<app-component
  [label]="'SECTION.LABEL.FIELD' | translate"
  [placeholder]="'SECTION.PLACEHOLDER.FIELD' | translate">
</app-component>
```

### Common Mistakes to Avoid:
```html
<!-- WRONG - Missing square brackets for properties -->
<ion-input placeholder="'COMMON.PLACEHOLDER.SEARCH' | translate">

<!-- CORRECT -->
<ion-input [placeholder]="'COMMON.PLACEHOLDER.SEARCH' | translate">

<!-- WRONG - Using quotes in interpolation -->
<ion-title>{{"'SECTION.TITLE'" | translate}}</ion-title>

<!-- CORRECT -->
<ion-title>{{ 'SECTION.TITLE' | translate }}</ion-title>
```

## Quick Search & Replace

Use these regex patterns in VS Code:

### Find Arabic Text in ion-title:
```regex
<ion-title>([^<]*[\u0600-\u06FF][^<]*)</ion-title>
```

### Find Arabic Text in Placeholders:
```regex
placeholder="([^"]*[\u0600-\u06FF][^"]*)"
```

### Find Arabic Text in Labels:
```regex
<ion-label[^>]*>([^<]*[\u0600-\u06FF][^<]*)</ion-label>
```

## Translation Structure in JSON Files

### Pattern:
```json
{
  "SECTION": {
    "TITLE": "Page Title",
    "SUBSECTION": {
      "TITLE": "Subsection Title"
    },
    "LABEL": {
      "FIELD_NAME": "Field Label"
    },
    "PLACEHOLDER": {
      "FIELD_NAME": "Field Placeholder"
    },
    "MESSAGE": {
      "MESSAGE_TYPE": "Message Text"
    }
  }
}
```

### Example for a New Page:
```json
{
  "NEW_PAGE": {
    "TITLE": "New Page Title",
    "LABEL": {
      "CUSTOMER_NAME": "Customer Name",
      "INVOICE_DATE": "Invoice Date",
      "TOTAL_AMOUNT": "Total Amount"
    },
    "PLACEHOLDER": {
      "ENTER_NAME": "Enter customer name",
      "SELECT_DATE": "Select date"
    },
    "MESSAGE": {
      "SAVE_SUCCESS": "Saved successfully",
      "VALIDATION_ERROR": "Please fill all required fields"
    }
  }
}
```

## Tips for Efficiency

1. **Start with page title** - easiest to identify and fix
2. **Then fix buttons** - highly visible to users
3. **Then labels** - important for understanding
4. **Finally placeholders** - less critical but needed

5. **Group similar pages** - update all sales pages together, all purchase pages together, etc.

6. **Use existing keys** - Before adding new keys, check if similar translation already exists

7. **Maintain consistency** - Use the same key for the same text across different pages

8. **Test frequently** - Switch language after every few pages to verify translations work

---

**Quick Workflow:**
1. Open page HTML file
2. Find all Arabic text
3. Check this reference for existing keys
4. If key doesn't exist, add to both en.json and ar.json
5. Update template with translation pipe
6. Save and test
7. Move to next page
