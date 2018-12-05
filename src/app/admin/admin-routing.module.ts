import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard }                from '../auth/auth.guard';
import { ClientesComponent }       from './clientes/clientes.component';
import { AdminComponent }       from './admin/admin.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    canActivate: [AuthGuard],    
    children: [
      {
        path: '',
        canActivateChild: [AuthGuard],        
        children: [
          { path: 'clientes', component: ClientesComponent },
          { path: '', component: ClientesComponent }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
