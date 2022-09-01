import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  constructor(private http:HttpClient) { }

  adddata(item:any){
    return this.http.post("http://localhost:8080/additems",item)
  }

  getdata(){
    return this.http.get("http://localhost:8080/getitems")
  }

  updateitems(id:any, item:any){
    return this.http.put(`http://localhost:8080/edititems/${id}`,item)
  }

  deleteitems(id:any){
    return this.http.delete(`http://localhost:8080/deleteitems/${id}`)
  }

  isregisteredStaff(){
    return localStorage.getItem('registeredRole')
  }

  isitems(){
    if ((this.isregisteredStaff()!='undefined' && ((this.isregisteredStaff()=='Staff') || (this.isregisteredStaff()== 'Manager') ||(this.isregisteredStaff()== 'Admin')) )){
      return true
    }
    else{
      return false
    }
  }
}
