import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { ClientesComponent } from './clientes/clientes.component';
import { AdminComponent } from './admin/admin.component';

@NgModule({
  declarations: [ClientesComponent, AdminComponent],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
