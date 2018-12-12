import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, delay, tap,map } from 'rxjs/operators';
import {MessageService} from '../message.service';
import { HttpClient} from '@angular/common/http';
import * as global from '../global';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = global.enderecoAPI + 'usuario/autenticar';    
  redirectUrl: string;

  constructor(private messageService:MessageService, private http: HttpClient) { 
  }  

  
  login (usuario: string, senha: string): Observable<boolean> {
    return this.http.post<any>(this.apiUrl, {usuario:usuario, senha:senha})
      .pipe(
        map(usuario => {
          if(usuario && usuario.token){
            this.messageService.add(`Usuario ${usuario.id} logou`)            
            localStorage.setItem('usuario', JSON.stringify(usuario));            
          }
          return usuario;
        }),
        catchError(this.messageService.handleError<any>('Auth Login'))
    );
  } 

  isLoggedIn(): boolean{
    if(localStorage.getItem('usuario'))
      return true;

    return false;
  }

  usuario(): string{
    return JSON.parse(localStorage.getItem('usuario')).usuario;
  }  

  logout(): void {
    localStorage.removeItem('usuario');
  }
}

