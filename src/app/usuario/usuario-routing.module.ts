import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsuarioListaComponent } from './usuario-lista/usuario-lista.component';
import { UsuarioDetalheComponent } from './usuario-detalhe/usuario-detalhe.component';
import { AuthGuard }                from '../auth/auth.guard';

const routes: Routes = [
  { 
    path: 'usuarios/inserir',
    canActivate: [AuthGuard],
    data:{papel:'admin'},  
    component: UsuarioDetalheComponent 
  },     
  { 
    path: 'usuarios/:id',
    canActivate: [AuthGuard],   
    data:{papel:'admin'},      
    component: UsuarioDetalheComponent 
  },  
  { 
    path: 'usuarios',
    canActivate: [AuthGuard],     
    data:{papel:'admin'},      
    component: UsuarioListaComponent 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuarioRoutingModule { }

