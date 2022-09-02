import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http:HttpClient) { }

  addproduct(product:any){
    return this.http.post("http://localhost:8080/addproducts",product)
  }

  getdata(){
    return this.http.get("http://localhost:8080/products")
  }

  getby(id:any){
    return this.http.get(`http://localhost:8080/getbyproducts/${id}`)
  }

  deletedata(id:any){
    return this.http.delete(`http://localhost:8080/deleteproducts/${id}`)
  }

  updateproducts(id:any, product:any){
    return this.http.put(`http://localhost:8080/editproducts/${id}`,product)
  }

  isregisteredStaff(){
    return localStorage.getItem('registeredRole')
  }

  isproducts(){
    if ((this.isregisteredStaff()!='undefined' && ((this.isregisteredStaff()=='Staff') || (this.isregisteredStaff()== 'Manager') ||(this.isregisteredStaff()== 'Admin')) )){
      return true
    }
    else{
      return false
    }
  }
}
