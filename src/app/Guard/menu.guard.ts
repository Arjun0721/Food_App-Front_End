import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { MenuService } from '../service/menu.service';

@Injectable({
  providedIn: 'root'
})
export class MenuGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      if(this.menu.ismenu()== true){
        return true

      }
      else{
        window.alert("Only for Managers")
        return false
      }
  }
  constructor(private menu:MenuService){}
}
