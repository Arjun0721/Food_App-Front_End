import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private http:HttpClient) { }

  getdata(){
    return this.http.get("http://localhost:8080/menu")
  }

  putdata(menu:any){
    return this.http.post("http://localhost:8080/savemenu",menu)
  }


  isregisteredManager(){
    return localStorage.getItem('registeredRole')
  }

  ismenu(){
    if ((this.isregisteredManager()!='undefined' && ((this.isregisteredManager()=='Manager') || (this.isregisteredManager()=='Admin')) )){
      return true
    }
    else{
      return false
    }
  }
  updateMenu(id:any, menu:any){
    return this.http.put(`http://localhost:8080/editmenu/${id}`,menu)
  }

}
