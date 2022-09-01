import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Admin } from '../admin';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http:HttpClient) { }

  public loginuser(admin:Admin):Observable<object>{
    return this.http.post("http://localhost:8080/getby",admin)
  }

  deleteadmin(id:any){
    return this.http.delete(`http://localhost:8080/deleteadmin/${id}`)
  }

  update(id:any,admin:any){
    return this.http.post(`http://localhost:8080/editadmin/${id}`,admin)
  }


  getdata(){
    return this.http.get("http://localhost:8080/admin")
  }

  isadmin(){
    return localStorage.getItem('registeredRole')
  }

  adminguard(){
    if(this.isadmin()=='Admin'){
      return true
    }
    else{
      return false
    }
  }
}
