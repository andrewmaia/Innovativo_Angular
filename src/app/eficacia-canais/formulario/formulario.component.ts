import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Cliente } from '../../cliente/models/cliente.model';
import { ClienteService} from '../../cliente/cliente.service';
import { EficaciaCanaisService} from '../eficacia-canais.service';
import { Router} from '@angular/router';
import { EficaciaCanais } from '../models/eficacia-canais.model';
import { numberValidator,requiredTextValidator } from '../../shared/validators.directive';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  form = new FormGroup({
    cliente: new FormControl('',Validators.required),
    descricao: new FormControl('',requiredTextValidator()),
    dataInicial: new FormControl('',Validators.required),
    dataFinal: new FormControl('',Validators.required),
    diretoVisitantes: new FormControl('',numberValidator()),
    buscaPagaVisitantes: new FormControl('',numberValidator()),
    organicoVisitantes: new FormControl('',numberValidator()),
    emailVisitantes: new FormControl('',numberValidator()),
    referenciaVisitantes: new FormControl('',numberValidator()),
    diretoLeads: new FormControl('',numberValidator()),
    buscaPagaLeads: new FormControl('',numberValidator()),
    organicoLeads: new FormControl('',numberValidator()),
    emailLeads: new FormControl('',numberValidator()),
    referenciaLeads: new FormControl('',numberValidator()),  
    diretoOportunidades: new FormControl('',numberValidator()),
    buscaPagaOportunidades: new FormControl('',numberValidator()),
    organicoOportunidades: new FormControl('',numberValidator()),
    emailOportunidades: new FormControl('',numberValidator()),
    referenciaOportunidades: new FormControl('',numberValidator()),  
    diretoVendas: new FormControl('',numberValidator()),
    buscaPagaVendas: new FormControl('',numberValidator()),
    organicoVendas: new FormControl('',numberValidator()),
    emailVendas: new FormControl('',numberValidator()),
    referenciaVendas: new FormControl('',numberValidator())    
  });

  clientes: Cliente[]; 
  titulo='Novo';

  constructor(
    private clienteService: ClienteService,
    private eficaciaCanaisService: EficaciaCanaisService,
    private router: Router
  ) { }

  obterNomePagina(){
    return this.titulo;
  }

  obterCaminho(){
    return ['Home','Eficácia dos Canais'];
  }  

  ngOnInit() {
    this.clienteService.obterClientes().subscribe(clientes=>this.clientes=clientes);
  }

  onSubmit({ value }: { value: EficaciaCanais}) {
    this.eficaciaCanaisService.inserirRelatorio(value)
      .subscribe(
        () => this.router.navigate(['/eficacia-canais/relatorio']) 
      );
  }


}

