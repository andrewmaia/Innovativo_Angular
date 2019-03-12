import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuario';
import { Router, ActivatedRoute } from '@angular/router';
import { UsuarioService }  from '../usuario.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { requiredTextValidator } from '../../shared/validators.directive';
import { ClienteService} from '../../cliente/cliente.service';
import { Cliente } from '../../cliente/cliente';

@Component({
  selector: 'app-usuario-detalhe',
  templateUrl: './usuario-detalhe.component.html',
  styleUrls: ['./usuario-detalhe.component.css']
})
export class UsuarioDetalheComponent implements OnInit {
  form = new FormGroup({
    id: new FormControl(''),    
    nome: new FormControl('',requiredTextValidator()),
    email: new FormControl('',requiredTextValidator()),
    senha: new FormControl('',requiredTextValidator()),
    clienteID: new FormControl('',Validators.required),          
  });
  id : string;
  clientes: Cliente[];   

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: UsuarioService,
    private clienteService: ClienteService      
  ) {}

  obterNomePagina(){
    return "Usuário";
  }

  obterCaminho(){
    return ['Home','Usuário'];
  }
  ngOnInit() {
    this.clienteService.obterClientes().subscribe(clientes=>this.clientes=clientes);
    this.id =  this.route.snapshot.paramMap.get("id");
    if(this.id){
      this.service.obterUsuario(this.id).subscribe(usuario => 
        {
          this.form.patchValue(usuario);
        }
      ); 
    }
  }

  gotoUsuarios() {
    if(this.id)
      this.router.navigate(['/usuarios', { id: this.id }]);    
    else
      this.router.navigate(['/usuarios']);    
  }  

  onSubmit({ value }: { value: Usuario}) {
    if( this.id){
      this.service.alterarUsuario(value).subscribe(() => this.gotoUsuarios());
    }
    else{
      value.id = 0;
      this.service.inserirUsuario(value).subscribe(()=>this.gotoUsuarios());
    }    
  }    
}

