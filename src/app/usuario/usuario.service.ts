import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from './models/usuario.model';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import * as global from '../global';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})


export class UsuarioService {
  private apiUrl = global.enderecoAPI + 'usuario/';  
  constructor(private http: HttpClient) { }

  obterUsuarios(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.apiUrl);   
  }
  
  obterUsuario(id:string): Observable<Usuario>  {
    return this.http.get<Usuario>(this.apiUrl+id);  
  }
  
  alterarUsuario (usuario: Usuario): Observable<any> {
    return this.http.put(this.apiUrl+usuario.id, usuario, httpOptions);
  }  

  inserirUsuario (usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(this.apiUrl,usuario, httpOptions);
  }  
}

