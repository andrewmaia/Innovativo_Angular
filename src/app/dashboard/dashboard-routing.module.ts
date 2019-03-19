import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard }                from '../auth/auth.guard';
import { ClienteComponent } from './cliente/cliente.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  { path: 'dashboard', component: ClienteComponent },      
  { path: 'dashboard-sample', canActivate: [AuthGuard], data:{papel:'admin'}, component: MainComponent }   
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }



