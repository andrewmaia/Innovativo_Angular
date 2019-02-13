import { NgModule } from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';
import { AuthGuard }                          from './auth/auth.guard';
import { MainComponent } from './dashboard/main/main.component';


const appRoutes: Routes = [
  {
    path: 'admin',
    loadChildren: './admin/admin.module#AdminModule',
    canLoad: [AuthGuard],
    data:{papel:'admin'}  
  },  
  { path: 'dashboard', component: MainComponent },  
  { path: '',   redirectTo: '/clientes', pathMatch: 'full' },  
  { path: '**', component: PaginaNaoEncontradaComponent }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
  )],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
