import { Pipe} from '@angular/core';
@Pipe({ name: 'filterByName', pure: true })
export class FilterPipe{
  transform(items: any[], args: any): any {
    let filter = args.toString();
    if(filter !== undefined && filter.length !== null){
        if(filter.length === 0 || items.length ===0){
            return items;
        }else{
         /// old way   return filter ? items.filter(item=> item.item_name.toLocaleLowerCase().indexOf(filter) != -1 ) : items;
         return filter ? items.filter(item => {
              filter = filter.toLocaleLowerCase();
              // Search across multiple attributes
              return (
                (item.item_name && item.item_name.toLocaleLowerCase().indexOf(filter) !== -1) || 
                (item.brand && item.brand.toLocaleLowerCase().indexOf(filter) !== -1) || 
                (item.pay_price && item.pay_price.toLocaleLowerCase().indexOf(filter) !== -1) || 
                (item.perch_price && item.perch_price.toLocaleLowerCase().indexOf(filter) !== -1) || 
                (item.model && item.model.toLocaleLowerCase().indexOf(filter) !== -1) ||
                (item.parcode && item.parcode.toLocaleLowerCase().indexOf(filter) !== -1) ||
                (item.part_no && item.part_no.toLocaleLowerCase().indexOf(filter) !== -1) ||
                (item.item_desc && item.item_desc.toLocaleLowerCase().indexOf(filter) !== -1) ||
                (item.aliasEn && item.aliasEn.toLocaleLowerCase().indexOf(filter) !== -1)
              );
            }) : items;
        }
        
    }
  } 
}