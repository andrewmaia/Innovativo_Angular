import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { MainComponent } from '../dashboard/main/main.component';
import { ClienteComponent } from '../dashboard/cliente/cliente.component';
import { FunilEtapaPizzaComponent } from './funil-etapa-pizza/funil-etapa-pizza.component';
import { EficaciaCanaisPizzaComponent } from './eficacia-canais-pizza/eficacia-canais-pizza.component';

@NgModule({
  declarations: [
    MainComponent,
    ClienteComponent,    
    FunilEtapaPizzaComponent, EficaciaCanaisPizzaComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
