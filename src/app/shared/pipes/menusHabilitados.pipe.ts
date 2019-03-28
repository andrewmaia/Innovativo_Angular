import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'menusHabilitados' })
export class MenusHabilitadosPipe implements PipeTransform {
    transform(items: any[], papel: string) {    
    return items.filter(menu => menu.papeis.includes(papel));
  }
}