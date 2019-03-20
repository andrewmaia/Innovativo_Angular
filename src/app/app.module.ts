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
import { MainComponent } from './dashboard/main/main.component';
import { ClienteComponent } from './dashboard/cliente/cliente.component';
import { ErroComponent } from './erro/erro.component';



@NgModule({
  declarations: [
    AppComponent,
    PaginaNaoEncontradaComponent,
    MainComponent,
    ClienteComponent,
    ErroComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AuthModule,  
    EficaciaCanaisModule,  
    DashboardModule,      
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
