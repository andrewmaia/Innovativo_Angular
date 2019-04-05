import { Component, OnInit,Input } from '@angular/core';
import { EficaciaCanais } from 'src/app/eficacia-canais/models/eficacia-canais.model';

@Component({
  selector: 'app-eficacia-canais-pizza',
  templateUrl: './eficacia-canais-pizza.component.html',
  styleUrls: ['./eficacia-canais-pizza.component.css']
})
export class EficaciaCanaisPizzaComponent implements OnInit {
  @Input() efc: EficaciaCanais;
  @Input() buscaPagaCor: string;
  @Input() diretaCor: string;
  @Input() emailCor: string;
  @Input() referenciaCor: string;
  @Input() organicaCor: string;        

  constructor() { }

  ngOnInit() {
  }
}
