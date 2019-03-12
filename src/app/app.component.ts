import { Component } from '@angular/core';
import { AuthService } from './auth/auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nomePagina;
  caminhoLista;
  constructor(public authService: AuthService) { }  

  logout() {
    this.authService.logout();
    window.location.reload();
  }  

  onActivate(componentRef){
    this.nomePagina=componentRef.obterNomePagina();
    this.caminhoLista = componentRef.obterCaminho();
  }  
}
