import { Component, OnInit,AfterViewInit } from '@angular/core';
import { EficaciaCanais } from '../../eficacia-canais/models/eficacia-canais.model';
import { EficaciaCanaisService } from '../../eficacia-canais/eficacia-canais.service';
declare function init():any;
declare var c3;

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit,AfterViewInit  {
  titulo;
  constructor(private eficaciaCanaisService: EficaciaCanaisService) { }

  ngOnInit() {

  }
  obterNomePagina(){
    return "Dashboard";
  }

  obterCaminho(){
    return ['Home','Dashboard'];
  }
  ngAfterViewInit() {
    this.eficaciaCanaisService.obterUltimo().subscribe(efc=>{
        if (efc==null)
        {
            this.titulo="Nenhum gráfico disponível.";
            return;
        }
        this.titulo= efc.descricao;
        c3.generate({

            bindto: '#visitantes',
            data: {
                columns: [
                    ['Busca Paga', efc.buscaPagaVisitantes],
                    ['Direta', efc.diretoVisitantes],
                    ['Email', efc.emailVisitantes],
                    ['Referência', efc.referenciaVisitantes],
                    ['Orgânica', efc.organicoVisitantes],                    
                ],
      
                type: 'donut',
                onclick: function(d, i) { console.log("onclick", d, i); },
                onmouseover: function(d, i) { console.log("onmouseover", d, i); },
                onmouseout: function(d, i) { console.log("onmouseout", d, i); }
            },
            donut: {
                label: {
                    show: false
                },
                title: "Visitantes",
                width: 20,
      
            },
      
            legend: {
                hide: true
                    //or hide: 'data1'
                    //or hide: ['data1', 'data2']
            },
            color: {
                pattern: ['#009e60', '#745af2', '#26c6da', '#7FFF00', '#bb3385']
            }
        });
        c3.generate({
            bindto: '#leads',
            data: {
                columns: [
                    ['Busca Paga', efc.buscaPagaLeads],
                    ['Direta', efc.diretoLeads],
                    ['Email', efc.emailLeads],
                    ['Referência', efc.referenciaLeads],
                    ['Orgânica', efc.organicoLeads],                    
                ],
      
                type: 'donut',
                onclick: function(d, i) { console.log("onclick", d, i); },
                onmouseover: function(d, i) { console.log("onmouseover", d, i); },
                onmouseout: function(d, i) { console.log("onmouseout", d, i); }
            },
            donut: {
                label: {
                    show: false
                },
                title: "Leads",
                width: 20,
      
            },
      
            legend: {
                hide: true
                    //or hide: 'data1'
                    //or hide: ['data1', 'data2']
            },
            color: {
                pattern: ['#009e60', '#745af2', '#26c6da', '#7FFF00', '#bb3385']
            }
        });
        c3.generate({
            bindto: '#oportunidades',
            data: {
                columns: [
                    ['Busca Paga', efc.buscaPagaOportunidades],
                    ['Direta', efc.diretoOportunidades],
                    ['Email', efc.emailOportunidades],
                    ['Referência', efc.referenciaOportunidades],
                    ['Orgânica', efc.organicoOportunidades],                    
                ],
      
                type: 'donut',
                onclick: function(d, i) { console.log("onclick", d, i); },
                onmouseover: function(d, i) { console.log("onmouseover", d, i); },
                onmouseout: function(d, i) { console.log("onmouseout", d, i); }
            },
            donut: {
                label: {
                    show: false
                },
                title: "Oportunidades",
                width: 20,
      
            },
      
            legend: {
                hide: true
                    //or hide: 'data1'
                    //or hide: ['data1', 'data2']
            },
            color: {
                pattern: ['#009e60', '#745af2', '#26c6da', '#7FFF00', '#bb3385']
            }
        });  
        c3.generate({
            bindto: '#vendas',
            data: {
                columns: [
                    ['Busca Paga', efc.buscaPagaVendas],
                    ['Direta', efc.diretoVendas],
                    ['Email', efc.emailVendas],
                    ['Referência', efc.referenciaVendas],
                    ['Orgânica', efc.organicoVendas],                    
                ],
      
                type: 'donut',
                onclick: function(d, i) { console.log("onclick", d, i); },
                onmouseover: function(d, i) { console.log("onmouseover", d, i); },
                onmouseout: function(d, i) { console.log("onmouseout", d, i); }
            },
            donut: {
                label: {
                    show: false
                },
                title: "Vendas",
                width: 20,
      
            },
      
            legend: {
                hide: true
                    //or hide: 'data1'
                    //or hide: ['data1', 'data2']
            },
            color: {
                pattern: ['#009e60', '#745af2', '#26c6da', '#7FFF00', '#bb3385']
            }
        });                         
    });     

 }  


}
