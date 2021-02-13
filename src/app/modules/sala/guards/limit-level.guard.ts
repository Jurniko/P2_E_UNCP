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
          if( e.max_level != routeInserted ){
             this.route.navigate([`/sala/${route.params.codigo}/lvl`])
            return false
          }else{
             return true
          }
        }))
      }
      else{
        this.route.navigate([`/sala/${route.params.codigo}/lvl`])
        return false;
      }

  }

}
