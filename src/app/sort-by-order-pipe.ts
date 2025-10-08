import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortByOrder'
})
export class SortByOrderPipe implements PipeTransform {

  transform(products: any[], order: 'asc' | 'desc' = 'asc'): any[] {
    if (!products || products.length === 0) {
      return [];
    }
    return products.sort((a, b) => {
      const priceA = a.price || 0;
      const priceB = b.price || 0;
      return order === 'asc' ? priceA - priceB : priceB - priceA;
    });
  }

}
