import { Component, OnInit } from '@angular/core';
import { EficaciaCanalRelatorio } from '../models/eficacia-canal-relatorio.model';
import { EficaciaCanaisService }  from '../eficacia-canais.service';
import { AuthService } from '../../auth/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-relatorio-lista',
  templateUrl: './relatorio-lista.component.html',
  styleUrls: ['./relatorio-lista.component.css']
})
export class RelatorioListaComponent implements OnInit {
  eficaciaCanalRelatorioLista$: Observable<EficaciaCanalRelatorio[]>;
  constructor(private service: EficaciaCanaisService,public authService: AuthService) { }

  ngOnInit() {
    this.eficaciaCanalRelatorioLista$ = this.service.obterRelatorios();
  }
  
  obterNomePagina(){
    return "Relatórios Disponíveis";
  }

  obterCaminho(){
    return ['Home','Eficácia dos Canais'];
  }
}


