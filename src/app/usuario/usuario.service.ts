import { Injectable } from '@angular/core';
import { MessageService } from '../message.service';
import { Observable, of } from 'rxjs';
import { Usuario } from './usuario';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import * as global from '../global';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})


export class UsuarioService {
  private apiUrl = global.enderecoAPI + 'usuario/';  
  constructor(private messageService: MessageService, private http: HttpClient) { }

  obterUsuarios(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.apiUrl)
      .pipe(
        tap(_ => this.messageService.add('Acessou API Lista de Usuarios')),        
        catchError(this.messageService.handleError<Usuario[]>('Usuario obterUsuarios'))
      );   
  }
  
  obterUsuario(id:string): Observable<Usuario>  {
    return this.http.get<Usuario>(this.apiUrl+id)
      .pipe(
        tap(_ => this.messageService.add('Acessou API Obter Usuario')),        
        catchError(this.messageService.handleError<Usuario>('Usuario obterUsuario'))
      );  
  }
  
  alterarUsuario (usuario: Usuario): Observable<any> {
    return this.http.put(this.apiUrl+usuario.id, usuario, httpOptions).pipe(
      tap(_ => this.messageService.add(`Alterado Usuario id=${usuario.id}`)),
      catchError(this.messageService.handleError<any>('Usuario alterarUsuario'))
    );
  }  

  inserirUsuario (usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(this.apiUrl,usuario, httpOptions).pipe(
      tap(_ => this.messageService.add(`Inseriu Usuario`)),
      catchError(this.messageService.handleError<Usuario>('Usuario inserirUsuario'))
    );
  }  
}

