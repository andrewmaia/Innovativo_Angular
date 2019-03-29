import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClienteListaComponent } from './cliente-lista/cliente-lista.component';
import { ClienteDetalheComponent } from './cliente-detalhe/cliente-detalhe.component';
import { AuthGuard }                from '../auth/auth.guard';

const routes: Routes = [
  { 
    path: 'clientes/inserir',
    canActivate: [AuthGuard],
    data:{papeis:['admin']},      
    component: ClienteDetalheComponent 
  },     
  { 
    path: 'clientes/:id',
    canActivate: [AuthGuard],   
    data:{papeis:['admin']},      
    component: ClienteDetalheComponent 
  },
  { 
    path: 'clientes',
    canActivate: [AuthGuard],     
    data:{papeis:['admin']},      
    component: ClienteListaComponent 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClienteRoutingModule { }
