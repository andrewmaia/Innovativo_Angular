import { Component, OnInit } from '@angular/core';
import { Cliente } from '../cliente';
import { Observable } from 'rxjs';
import { ClienteService }  from '../cliente.service';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-cliente-lista',
  templateUrl: './cliente-lista.component.html',
  styleUrls: ['./cliente-lista.component.css']
})
export class ClienteListaComponent implements OnInit {
  clientes$: Observable<Cliente[]>;
  selectedId: number;  

  constructor(
    private service: ClienteService,
    private route: ActivatedRoute    
  ) { }

  ngOnInit() {
    this.clientes$ = this.route.paramMap.pipe(
      switchMap(params => {
        this.selectedId = +params.get('id'); //o + na frente converte para number
        return this.service.obterClientes();
      })
    );    
  }
}
