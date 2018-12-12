import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { EficaciaCanais } from './eficacia-canais';
import { EficaciaCanalRelatorio } from './eficacia-canal-relatorio';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import {MessageService} from '../message.service';
import * as global from '../global';



const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class EficaciaCanaisService {
  private apiUrl = global.enderecoAPI + 'EficaciaCanais/';

  constructor(private messageService:MessageService, private http: HttpClient) { 
  }

  obterRelatorio(id:string): Observable<EficaciaCanais> {
    return this.http.get<EficaciaCanais>(this.apiUrl+id)
      .pipe(
        tap(_ => this.messageService.add('Acessou API Relatorio EficaciaCanais')),        
        catchError(this.messageService.handleError<EficaciaCanais>('EficaciaCanais obterRelatorio'))
      );   
  } 

  obterRelatorios(): Observable<EficaciaCanalRelatorio[]>  {
    return this.http.get<EficaciaCanalRelatorio[]>(this.apiUrl)
      .pipe(
        tap(_ => this.messageService.add('Acessou API obterRelatorios')),        
        catchError(this.messageService.handleError<EficaciaCanalRelatorio[]>('EficaciaCanal obterRelatorios'))
      );  
  }
  inserirRelatorio (eficaciaCanais: EficaciaCanais): Observable<any> {
    return this.http.post(this.apiUrl,eficaciaCanais, httpOptions).pipe(
      tap(_ => this.messageService.add(`Inseriu EficaciaCanal`)),
      catchError(this.messageService.handleError<any>('EficaciaCanal inserirRelatorio'))
    );
  }    
}
