import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { Router } from '@angular/router';
import menus from "../app/menus.json";



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {
  nomePagina:string;
  caminhoLista:string;
  menuLista;
  ano:number;
  constructor(public authService: AuthService,private router: Router) { }  

  ngOnInit() {
    this.ano =(new Date()).getFullYear();
    this.menuLista=menus;
  }

  logout() {
    this.authService.logout();
    window.location.reload();
  }  

  paginaSelecionada(menu) {
    return (menu==this.router.url);
  }    

  onActivate(componentRef){
    this.nomePagina=componentRef.obterNomePagina();
    this.caminhoLista = componentRef.obterCaminho();
  }  
}
