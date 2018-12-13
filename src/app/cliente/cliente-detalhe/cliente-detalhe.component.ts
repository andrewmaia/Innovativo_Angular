import { Component, OnInit } from '@angular/core';
import { Cliente } from '../cliente';
import { Observable, of, observable } from 'rxjs';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ClienteService }  from '../cliente.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-cliente-detalhe',
  templateUrl: './cliente-detalhe.component.html',
  styleUrls: ['./cliente-detalhe.component.css']
})
export class ClienteDetalheComponent implements OnInit {
  cliente$: Observable<Cliente>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: ClienteService    
  ) {}

  ngOnInit() {
    this.cliente$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
       params.get('id')?this.service.obterCliente(params.get('id')):  of(new Cliente())
      )
    );    
  }

  gotoClientes(cliente: Cliente) {
    if( cliente.id)
      this.router.navigate(['/clientes', { id: cliente.id }]);    
    else
      this.router.navigate(['/clientes']);    
  }

  salvar(cliente: Cliente): void {
    if( cliente.id)
      this.service.alterarCliente(cliente).subscribe(() => this.gotoClientes(cliente));
    else{
      this.service.inserirCliente(cliente).subscribe(cliente => 
        {
          this.gotoClientes(cliente);
        }
      );  
    }
  }  
}
