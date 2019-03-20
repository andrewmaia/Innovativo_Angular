import { NgModule } from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';
import { ErroComponent } from './erro/erro.component';


const appRoutes: Routes = [
  { path: 'erro', component: ErroComponent },      
  { path: '',   redirectTo: '/eficacia-canais/relatorio', pathMatch: 'full' },  
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
