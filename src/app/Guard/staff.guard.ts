import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { StaffService } from '../service/staff.service';

@Injectable({
  providedIn: 'root'
})
export class StaffGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):boolean {
      if(this.staff.staffguard()==true){
        return true
      }
      else{
        window.alert("Only for Staffs")
        return false
      }
  }

  constructor(private staff:StaffService){}
  
}
