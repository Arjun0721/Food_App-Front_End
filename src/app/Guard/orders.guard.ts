import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { OrdersService } from '../service/orders.service';

@Injectable({
  providedIn: 'root'
})
export class OrdersGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean{
      if(this.orders.isorders()== true){
        return true

      }
      else{
        window.alert("Only for Staffs")
        return false
      }

  }

  constructor(private orders:OrdersService){}
  
}
