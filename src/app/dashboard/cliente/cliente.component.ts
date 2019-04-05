import { Component, OnInit } from '@angular/core';
import { EficaciaCanaisService } from '../../eficacia-canais/eficacia-canais.service';
import { EficaciaCanais } from 'src/app/eficacia-canais/models/eficacia-canais.model';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit  {
  constructor(private eficaciaCanaisService: EficaciaCanaisService) { }
  efc: EficaciaCanais;
  carregando: boolean;
  buscaPagaCor: string= "#009e60";
  diretaCor: string="#745af2";
  emailCor: string="#26c6da";
  referenciaCor: string="#7FFF00";      
  organicaCor: string="#bb3385";        


  ngOnInit() {
    this.carregando=true;
    this.eficaciaCanaisService.obterUltimo().subscribe(efc=>{
      this.efc=efc;
      this.carregando = false;      
    });
  }
  obterNomePagina(){
    return "Dashboard";
  }

  obterCaminho(){
    return ['Home','Dashboard'];
  }

}
