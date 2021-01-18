import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService:AuthService, private router:Router){}

  /*
  * Cuando estas autenticado, no puedes ingresar a registrarte a una sala, o ignresar codigo de sala, ya que tienes NECESARIAMENTE logout
  */
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

        return this.authService.studentInfo().pipe(map((res:any)=>{
          console.log("si tiene su tolen",state.url.length)
          if(state.url.split('/').length<=3){
            this.router.navigate([`sala/${res.code.code}/lvl`])
          }
          return true;
        }),

        catchError(err=>{
          if(state.url.split('/').length >=4){
            this.router.navigate([`/sala`])
          }
          localStorage.removeItem("token");
          return of(true);
        }))
  }

}
