import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ProductsService } from '../service/products.service';

@Injectable({
  providedIn: 'root'
})
export class ProductGuardGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      if(this.products.isproducts()== true){
        return true

      }
      else{
        window.alert("Login First")
        return false
      }
    }

    constructor(private products:ProductsService){}
  
  
}
