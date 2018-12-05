import { Injectable } from '@angular/core';
import { MessageService } from '../message.service';
import { Observable, of } from 'rxjs';
import { Cliente } from './cliente';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private apiUrl = 'https://localhost:5001/api/cliente/';
  constructor(private messageService: MessageService, private http: HttpClient) { }

  obterClientes(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.apiUrl)
      .pipe(
        tap(_ => this.messageService.add('Acessou API Lista de Clientes')),        
        catchError(this.messageService.handleError<Cliente[]>('Cliente obterClientes'))
      );   
  }  

  obterCliente(id:string): Observable<Cliente>  {
    return this.http.get<Cliente>(this.apiUrl+id)
      .pipe(
        tap(_ => this.messageService.add('Acessou API Obter Cliente')),        
        catchError(this.messageService.handleError<Cliente>('Cliente obterCliente'))
      );  
  }
  
  alterarCliente (cliente: Cliente): Observable<any> {
    return this.http.put(this.apiUrl+cliente.id, cliente, httpOptions).pipe(
      tap(_ => this.messageService.add(`Alterado Cliente id=${cliente.id}`)),
      catchError(this.messageService.handleError<any>('Cliente alterarCliente'))
    );
  }  

  inserirCliente (cliente: Cliente): Observable<any> {
    return this.http.post(this.apiUrl,cliente, httpOptions).pipe(
      tap(_ => this.messageService.add(`Inseriu Cliente`)),
      catchError(this.messageService.handleError<any>('Cliente inserirCliente'))
    );
  }  
}
