import { Component, OnInit } from '@angular/core';
import { EficaciaCanalRelatorio } from '../eficacia-canal-relatorio';
import { EficaciaCanaisService }  from '../eficacia-canais.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-relatorio-lista',
  templateUrl: './relatorio-lista.component.html',
  styleUrls: ['./relatorio-lista.component.css']
})
export class RelatorioListaComponent implements OnInit {
  eficaciaCanalRelatorioLista$: Observable<EficaciaCanalRelatorio[]>;
  constructor(private service: EficaciaCanaisService) { }

  ngOnInit() {
    this.eficaciaCanalRelatorioLista$ = this.service.obterRelatorios();
  }

}
