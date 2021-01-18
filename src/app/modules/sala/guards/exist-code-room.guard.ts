import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { SalaService } from '../services/sala.service';
import { catchError, map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ExistCodeRoomGuard implements CanActivate {
  constructor(private salaService:SalaService, private router:Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(route.params.codigo.length == 5){ //5 digits
        return this.salaService.getInvitedStudents$(route.params.codigo).pipe(map((res:any)=>{
          return true;
        }),
        catchError(err=>{
          this.router.navigate(['sala'])
          return of(false);
        }))
      }
      this.router.navigate(['sala'])
      return false
    }
}
