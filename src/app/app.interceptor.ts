import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthService }              from './auth/auth.service';
import {Router} from "@angular/router";

@Injectable()
export class AppInterceptor implements HttpInterceptor {
    constructor(private authService: AuthService,private router: Router) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        //Obtém o usuário logado
        let usuarioCorrente = JSON.parse(localStorage.getItem('usuario'));
        //Se o usuário estiver logado, adiciona ao cabeçalho de todas as requisição o token de acesso
        if (usuarioCorrente && usuarioCorrente.token) {
            request = request.clone({
                setHeaders: { 
                    Authorization: `Bearer ${usuarioCorrente.token}`
                }
            });

        }

        return next.handle(request).pipe(catchError(err => {
            if (err.status === 401 && !request.url.includes("usuario/autenticar"))   {
                //Se por algum acaso o token da API expirar e a autenticação do Agular estiver ativa 
                //Desloga sozinho
                this.authService.logout();
                location.reload(true);
            }
            else if(!request.url.includes("usuario/autenticar") && err.status!==409) {
                this.router.navigate(['/erro']);    
            }

            return throwError(err);
        }))
    }
}





