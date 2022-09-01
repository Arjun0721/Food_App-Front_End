import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ItemsService } from '../service/items.service';

@Injectable({
  providedIn: 'root'
})
export class ItemsGuardGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      if(this.items.isitems()== true){
        return true

      }
      else{
        window.alert("Login first")
        return false
      }
    }
    constructor(private items:ItemsService){}
    }
  
    
  

