import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Cliente } from '../../cliente/cliente';
import { ClienteService} from '../../cliente/cliente.service';
import { EficaciaCanaisService} from '../eficacia-canais.service';
import { Router} from '@angular/router';
import { EficaciaCanais } from '../eficacia-canais';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  form = new FormGroup({
    cliente: new FormControl('',Validators.required),
    descricao: new FormControl('',Validators.required),
    dataInicial: new FormControl('',Validators.required),
    dataFinal: new FormControl('',Validators.required),
    diretoVisitantes: new FormControl('',Validators.required),
    buscaPagaVisitantes: new FormControl('',Validators.required),
    organicoVisitantes: new FormControl('',Validators.required),
    emailVisitantes: new FormControl('',Validators.required),
    referenciaVisitantes: new FormControl('',Validators.required),
    diretoLeads: new FormControl('',Validators.required),
    buscaPagaLeads: new FormControl('',Validators.required),
    organicoLeads: new FormControl('',Validators.required),
    emailLeads: new FormControl('',Validators.required),
    referenciaLeads: new FormControl('',Validators.required),  
    diretoOportunidades: new FormControl('',Validators.required),
    buscaPagaOportunidades: new FormControl('',Validators.required),
    organicoOportunidades: new FormControl('',Validators.required),
    emailOportunidades: new FormControl('',Validators.required),
    referenciaOportunidades: new FormControl('',Validators.required),  
    diretoVendas: new FormControl('',Validators.required),
    buscaPagaVendas: new FormControl('',Validators.required),
    organicoVendas: new FormControl('',Validators.required),
    emailVendas: new FormControl('',Validators.required),
    referenciaVendas: new FormControl('',Validators.required)    
  });

  clientes: Cliente[]; 
  titulo='Novo';

  constructor(
    private clienteService: ClienteService,
    private eficaciaCanaisService: EficaciaCanaisService,
    private router: Router
  ) { }

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

