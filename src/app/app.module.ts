import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS }    from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthModule }              from './auth/auth.module';
import { EficaciaCanaisModule }  from './eficacia-canais/eficacia-canais.module';
import { DashboardModule }  from './dashboard/dashboard.module';
import { ClienteModule } from './cliente/cliente.module';
import { UsuarioModule } from './usuario/usuario.module';
import { AppInterceptor } from './app.interceptor';
import { ErroComponent } from './erro/erro.component';
import {MenusHabilitadosPipe} from "../app/shared/pipes/menusHabilitados.pipe"


@NgModule({
  declarations: [
    MenusHabilitadosPipe,
    AppComponent,
    PaginaNaoEncontradaComponent,
    ErroComponent
  ],
  imports: [
    DashboardModule,          
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AuthModule,  
    EficaciaCanaisModule,  
    ClienteModule,
    UsuarioModule,            
    AppRoutingModule, 
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AppInterceptor, multi: true },    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
