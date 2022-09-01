import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ManagerService } from '../service/manager.service';

@Injectable({
  providedIn: 'root'
})
export class ManagerGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):boolean {
      if(this.manager.managerguard()==true){
        return true
      }
      else{
        window.alert("Only for Managers")
        return false
      }
  }

  constructor(private manager:ManagerService){}
  
}
