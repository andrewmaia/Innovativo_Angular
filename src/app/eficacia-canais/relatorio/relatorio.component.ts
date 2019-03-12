import { Component, OnInit } from '@angular/core';
import { EficaciaCanais } from '../eficacia-canais';
import { EficaciaCanaisService } from '../eficacia-canais.service';
import { ActivatedRoute , ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';


@Component({
  selector: 'app-relatorio',
  templateUrl: './relatorio.component.html',
  styleUrls: ['./relatorio.component.css']
})

export class RelatorioComponent implements OnInit {
  ec$: Observable<EficaciaCanais>;  

  constructor(private eficaciaCanaisService: EficaciaCanaisService,private route: ActivatedRoute) { }

  ngOnInit() {
    this.obterRelatorio();    
  }

  obterNomePagina(){
    return "Eficácia dos Canais de Aquisição";
  }

  obterCaminho(){
    return ['Home','Eficácia dos Canais'];
  }  

  obterRelatorio():void{
    this.ec$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.eficaciaCanaisService.obterRelatorio(params.get('id')))
    );    
  }

}
