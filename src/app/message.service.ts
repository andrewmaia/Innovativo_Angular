import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import * as global from './global';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  messages: string[] = [];

  handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      this.add(`${operation} falhou: ${error}`);
      return of(result as T);
    };
  }
  
  add(message: string) {
    this.messages.push(message);
  }

  clear() {
    this.messages = [];
  }

  podeExibirMensagens(): boolean{
    return global.podeExibirMensagens;
  }
}