import { Component, OnInit } from '@angular/core';
import { Cliente } from '../models/cliente.model';
import { Router, ActivatedRoute } from '@angular/router';
import { ClienteService }  from '../cliente.service';
import { FormControl, FormGroup } from '@angular/forms';
import { requiredTextValidator } from '../../shared/validators.directive';

@Component({
  selector: 'app-cliente-detalhe',
  templateUrl: './cliente-detalhe.component.html',
  styleUrls: ['./cliente-detalhe.component.css']
})
export class ClienteDetalheComponent implements OnInit {
  form = new FormGroup({
    id: new FormControl(''),    
    nomeFantasia: new FormControl('',requiredTextValidator())
  });
  id : string;


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: ClienteService    
  ) {}

  ngOnInit() {

    this.id =  this.route.snapshot.paramMap.get("id");
    if(this.id){
      this.service.obterCliente(this.id).subscribe(cliente => 
        {
          this.form.patchValue(cliente);
        }
      ); 
    }
  }



  gotoClientes() {
      this.router.navigate(['/clientes']);    
  }  



  onSubmit({ value }: { value: Cliente}) {
    if( this.id){
      this.service.alterarCliente(value).subscribe(() => this.gotoClientes());
    }
    else{
      value.id = 0;
      this.service.inserirCliente(value).subscribe(()=>this.gotoClientes());
    }    
  }
  
  obterNomePagina(){
    return "Cliente";
  }

  obterCaminho(){
    return ['Home','Cliente'];
  }  
  
}
