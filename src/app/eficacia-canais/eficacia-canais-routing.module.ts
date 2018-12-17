import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RelatorioComponent }       from './relatorio/relatorio.component';
import { FormularioComponent }       from './formulario/formulario.component';
import { RelatorioListaComponent }     from './relatorio-lista/relatorio-lista.component';
import { AuthGuard }                from '../auth/auth.guard';

const routes: Routes = [
  { path: 'eficacia-canais/relatorio', canActivate: [AuthGuard],  component: RelatorioListaComponent },  
  { path: 'eficacia-canais/relatorio/:id', canActivate: [AuthGuard],  component: RelatorioComponent },
  { path: 'eficacia-canais/novo', canActivate: [AuthGuard], data:{papel:'admin'},    component: FormularioComponent }  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EficaciaCanaisRoutingModule { }
