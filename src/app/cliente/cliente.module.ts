import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }    from '@angular/forms';
import { ClienteRoutingModule } from './cliente-routing.module';
import { ClienteListaComponent } from './cliente-lista/cliente-lista.component';
import {ReactiveFormsModule} from '@angular/forms';
import { ClienteDetalheComponent } from './cliente-detalhe/cliente-detalhe.component';

@NgModule({
  declarations: [ClienteListaComponent, ClienteDetalheComponent],
  imports: [
    CommonModule,
    FormsModule,    
    ReactiveFormsModule,    
    ClienteRoutingModule
  ]
})
export class ClienteModule { }
