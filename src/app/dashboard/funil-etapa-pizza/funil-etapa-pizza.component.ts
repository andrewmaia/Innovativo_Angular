import { Component, OnInit,AfterViewInit,Input } from '@angular/core';
declare var c3;

@Component({
  selector: 'app-funil-etapa-pizza',
  templateUrl: './funil-etapa-pizza.component.html',
  styleUrls: ['./funil-etapa-pizza.component.css']
})
export class FunilEtapaPizzaComponent  implements OnInit,AfterViewInit  {
  
  constructor() { }
  @Input() id: string;
  @Input() titulo: string;
  @Input() buscaPaga: number;
  @Input() direta: number;
  @Input() email: number;
  @Input() referencia: number;
  @Input() organica: number;
  @Input() buscaPagaCor: string;
  @Input() diretaCor: string;
  @Input() emailCor: string;
  @Input() referenciaCor: string;
  @Input() organicaCor: string;      
  

  ngOnInit() {
  }

  ngAfterViewInit() {
    c3.generate({

      bindto: '#' + this.id,
      data: {
          columns: [
              ['Busca Paga', this.buscaPaga],
              ['Direta', this.direta],
              ['Email', this.email],
              ['Referência',this.referencia],
              ['Orgânica', this.organica],
          ],

          type: 'donut',
      },
      donut: {
          label: {
              show: false
          },
          title: this.titulo,
          width: 20,

      },
      legend: {
          hide: true
      },
      color: {
          pattern: [this.buscaPagaCor, this.diretaCor, this.emailCor, this.referenciaCor, this.organicaCor]
      }
  });
  }

}
