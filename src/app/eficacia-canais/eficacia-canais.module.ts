import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import { EficaciaCanaisRoutingModule } from './eficacia-canais-routing.module';
import { RelatorioComponent } from './relatorio/relatorio.component';
import { FormularioComponent } from './formulario/formulario.component';
import { RelatorioListaComponent } from './relatorio-lista/relatorio-lista.component';

@NgModule({
  declarations: [RelatorioComponent, FormularioComponent, RelatorioListaComponent],  
  imports: [
    CommonModule,
    ReactiveFormsModule,
    EficaciaCanaisRoutingModule
  ]
})
export class EficaciaCanaisModule { }
