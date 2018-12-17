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
    return this.validar(url,route.data.papel);
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.canActivate(route, state);
  }

  canLoad(route: Route): boolean {
    let url = `/${route.path}`;

    return this.validar(url,route.data.papeis);
  }  

  validar(url: string, papel: string): boolean {
    if (!this.authService.isLoggedIn()){
      this.redirecionar(url);
      return false;
    } 
 
    if(papel && !this.authService.papeis().toString().includes(papel)){
      this.redirecionar(url);
      return false;
    }

    return true;
  }

  redirecionar(url: string){
    this.authService.redirectUrl = url;
    this.router.navigate(['/login']);
  }

}

