import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { SalaService } from '../services/sala.service';

@Injectable({
  providedIn: 'root'
})
export class LimitLevelGuard implements CanActivate {
  constructor(private salaService : SalaService, private route : Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      let routeInserted = route.params.lvl

      if(routeInserted <= 3){
        return this.salaService.postLevelsStudents$().pipe(map((e:any)=>{

          if( !e && routeInserted == 1 ){
              return true
          }else if(routeInserted <= (e+1)){ // e+1 => si hice el nivel 1, me devolvera 1, pero eso limita a que pueda hacer el dos
              return true
          }else{
            this.route.navigate([`/sala/${route.params.codigo}/lvl`])
            return false
          }
        }))
      }
      else{
        this.route.navigate([`/sala/${route.params.codigo}/lvl`])
        return false;
      }

  }

}
