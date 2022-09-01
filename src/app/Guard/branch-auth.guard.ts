import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { BranchService } from '../service/branch.service';

@Injectable({
  providedIn: 'root'
})
export class BranchAuthGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean { 
      if(this.branch.isbranch()==true){
        return true
      }
      else{
        window.alert("Only for Admins")
        return false
      }
  }
  
  constructor(private branch:BranchService){}
}
