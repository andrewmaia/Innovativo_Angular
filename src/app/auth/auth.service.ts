import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, delay, tap,map } from 'rxjs/operators';
import {MessageService} from '../message.service';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'https://localhost:5001/api/usuario/autenticar';  
  isLoggedIn = false;
  usuario: string;
  redirectUrl: string;

  constructor(private messageService:MessageService, private http: HttpClient) { 
  }  

  
  login (usuario: string, senha: string): Observable<boolean> {
    return this.http.post<any>(this.apiUrl, {usuario:usuario, senha:senha})
      .pipe(
        map(usuario => {
          if(usuario && usuario.token){
            this.isLoggedIn = true   
            this.usuario = usuario.usuario;                     
            this.messageService.add(`Usuario ${usuario.id} logou`)            
            localStorage.setItem('usuario', JSON.stringify(usuario));            
          }
          return usuario;
        }),
        catchError(this.messageService.handleError<any>('Auth Login'))
    );
  } 


  logout(): void {
    this.isLoggedIn = false;
    this.usuario = "";
    localStorage.removeItem('usuario');
  }
}

