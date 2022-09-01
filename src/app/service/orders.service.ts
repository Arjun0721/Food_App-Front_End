import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Admin } from '../admin';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(private http:HttpClient) { }

  getdata(){
    return this.http.get("http://localhost:8080/orders")
  }

  adddata(order:any){
    return this.http.post("http://localhost:8080/addorders",order)
  }


  isregisteredStaff(){
    return localStorage.getItem('registeredRole')
  }

  isorders(){
    if ((this.isregisteredStaff()!='undefined' && ((this.isregisteredStaff()=='Staff') || (this.isregisteredStaff()== 'Manager') ||(this.isregisteredStaff()== 'Admin')) )){
      return true
    }
    else{
      return false
    }
  }

  updateorders(id:any,order:any){
    return this.http.put(`http://localhost:8080/updateorders/${id}`,order)
  }

  deleteorders(id:any){
    return this.http.delete(`http://localhost:8080/orders/${id}`)
  }



}
