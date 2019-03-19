import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { EficaciaCanais } from './eficacia-canais';
import { EficaciaCanalRelatorio } from './eficacia-canal-relatorio';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import * as global from '../global';



const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class EficaciaCanaisService {
  private apiUrl = global.enderecoAPI + 'EficaciaCanais/';

  constructor(private http: HttpClient) { 
  }

  obterRelatorio(id:string): Observable<EficaciaCanais> {
    return this.http.get<EficaciaCanais>(this.apiUrl+id);   
  } 

  obterRelatorios(): Observable<EficaciaCanalRelatorio[]>  {
    return this.http.get<EficaciaCanalRelatorio[]>(this.apiUrl);  
  }
  inserirRelatorio (eficaciaCanais: EficaciaCanais): Observable<any> {
    return this.http.post(this.apiUrl,eficaciaCanais, httpOptions);
  }
  
  obterUltimo(): Observable<EficaciaCanais> {
    return this.http.get<EficaciaCanais>(this.apiUrl+'ObterUltimo');
  }  
}
