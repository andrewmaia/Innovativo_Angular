import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioRoutingModule } from './usuario-routing.module';
import { UsuarioListaComponent } from './usuario-lista/usuario-lista.component';
import { UsuarioDetalheComponent } from './usuario-detalhe/usuario-detalhe.component';
import { FormsModule }    from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [UsuarioListaComponent, UsuarioDetalheComponent],
  imports: [
    CommonModule,
    UsuarioRoutingModule,
    FormsModule,    
    ReactiveFormsModule  
  ]
})
export class UsuarioModule { }
