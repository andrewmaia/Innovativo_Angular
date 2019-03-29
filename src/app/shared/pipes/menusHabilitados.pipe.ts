import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'menusHabilitados' })
export class MenusHabilitadosPipe implements PipeTransform {
  transform(todosMenus: any[], papeis: string[]) {    
    let menusDisponiveis: string[]=[];
    papeis.forEach(papel => {
      let menusPapel=todosMenus.filter(menu => menu.papeis.includes(papel));
      menusPapel.forEach(menu=>{
        if (!menusDisponiveis.includes(menu))
          menusDisponiveis.push(menu);
      });
    });
    return menusDisponiveis;
  }
}