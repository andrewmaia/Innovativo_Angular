import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS }    from '@angular/common/http';
import { MessagesComponent } from './messages/messages.component';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthModule }              from './auth/auth.module';
import { LoginInfoComponent }         from './auth/login-info/login-info.component';
import { EficaciaCanaisModule }              from './eficacia-canais/eficacia-canais.module';
import { ClienteModule } from './cliente/cliente.module';
import { UsuarioModule } from './usuario/usuario.module';
import { JwtInterceptor } from './jwt.interceptor';
import { MainComponent } from './dashboard/main/main.component';



@NgModule({
  declarations: [
    AppComponent,
    MessagesComponent,
    PaginaNaoEncontradaComponent,
    LoginInfoComponent,
    MainComponent

  ],
  imports: [
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
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
