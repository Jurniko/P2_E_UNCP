import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthDocenteGuard implements CanActivate {
  constructor(private authDocente:AuthService, private router:Router  ){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

        return this.authDocente.infoTeacher().pipe(map(e=>{
          if(state.url == "/login"){
            this.router.navigate(['/docente']);
          }
          return true;
        }),
        catchError(err=>{
          if( state.url != "/login"){
            this.router.navigate(['/login']);
          }
          return of(true);
        }))
  }

}
