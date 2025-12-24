import { Pipe } from '@angular/core';

@Pipe({ name: 'filterByExpense', pure: true })
export class FilterPipe {
  transform(record: any[], args: any): any {
    let filter = args.toString().toLowerCase();
    if (filter !== undefined && filter.length !== null) {
      if (filter.length === 0 || record.length === 0) {
        return record;
      } else {
        return filter ? record.filter(item =>
          (item.description && item.description.toLowerCase().indexOf(filter) != -1) ||
          (item.vendor_name && item.vendor_name.toLowerCase().indexOf(filter) != -1) ||
          (item.category_name && item.category_name.toLowerCase().indexOf(filter) != -1) ||
          (item.notes && item.notes.toLowerCase().indexOf(filter) != -1) ||
          (item.expense_ref && item.expense_ref.toLowerCase().indexOf(filter) != -1)
        ) : record;
      }
    }
  }
}
