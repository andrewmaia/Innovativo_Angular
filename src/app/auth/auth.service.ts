import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient} from '@angular/common/http';
import * as global from '../global';


@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = global.enderecoAPI + 'usuario/autenticar';    
  redirectUrl: string;

  constructor( private http: HttpClient) { 
  }  

  
  login (usuario: string, senha: string): Observable<boolean> {
    return this.http.post<any>(this.apiUrl, {usuario:usuario, senha:senha})
      .pipe(
        map(usuario => {
          if(usuario && usuario.token){
            localStorage.setItem('usuario', JSON.stringify(usuario));            
          }
          return usuario;
        })
    );
  } 


  isLoggedIn(): boolean{
    if(localStorage.getItem('usuario'))
      return true;

    return false;
  }

  usuario(): string{
    return JSON.parse(localStorage.getItem('usuario')).nome;
  }
  
  papeis(): string{
    if(localStorage.getItem('usuario'))
      return JSON.parse(localStorage.getItem('usuario')).papeis;
    else
      return '';
  }  

  ehAdm(): boolean{
    return this.papeis().includes('admin');
  }  

  logout(): void {
    localStorage.removeItem('usuario');
  }
}

