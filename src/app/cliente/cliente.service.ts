import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Cliente } from './models/cliente.model';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import * as global from '../global';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private apiUrl = global.enderecoAPI + 'cliente/';  
  constructor(private http: HttpClient) { }

  obterClientes(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.apiUrl);
  }  

  obterCliente(id:string): Observable<Cliente>  {
    return this.http.get<Cliente>(this.apiUrl+id);  
  }
  
  alterarCliente (cliente: Cliente): Observable<any> {
    return this.http.put(this.apiUrl+cliente.id, cliente, httpOptions);
  }  

  inserirCliente (cliente: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(this.apiUrl,cliente, httpOptions);
  }  
}
