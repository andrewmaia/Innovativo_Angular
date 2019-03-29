import { Injectable }       from '@angular/core';
import {
  CanActivate, Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  CanActivateChild,
  NavigationExtras,
  CanLoad, Route
}                           from '@angular/router';
import { AuthService }      from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate, CanActivateChild,CanLoad {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    let url: string = state.url;
    return this.validar(url,route.data.papeis);
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.canActivate(route, state);
  }

  canLoad(route: Route): boolean {
    let url = `/${route.path}`;

    return this.validar(url,route.data.papeis);
  }  

  validar(url: string, papeisRota: string[]): boolean {
    //Não está logado
    if (!this.authService.isLoggedIn() ){
      this.redirecionar(url);
      return false;
    } 
 
    //Se a rota não enviou papel é porque não tem restrição
    if(!papeisRota){
      return true;
    }

    let possuiPapelNecessarioRota = false;
    papeisRota.forEach(papel => {
      if(this.authService.papeis().includes(papel)){
        possuiPapelNecessarioRota=true;
      }
    });

    if(possuiPapelNecessarioRota)
      return true;

    this.redirecionar(url);
    return false;
  }

  redirecionar(url: string){
    this.authService.redirectUrl = url;
    this.router.navigate(['/login']); 
  }

}

