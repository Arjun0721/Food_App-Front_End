import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Admin } from '../admin';

@Injectable({
  providedIn: 'root'
})
export class ManagerService {

  constructor(private http:HttpClient) { }

  public getmanager(admin:Admin):Observable<object>{
    return this.http.post("http://localhost:8080/getbymanager",admin)
  }

  getdata(){
    return this.http.get("http://localhost:8080/manager")
  }

  deletemanager(id:any){
    return this.http.delete(`http://localhost:8080/manager/${id}`)
  }

  editmanager(id:any, manager:any){
    return this.http.put(`http://localhost:8080/manager/${id}`,manager)
  }

  isrole(){
    return localStorage.getItem('registeredRole')
  }

  managerguard(){
    if(this.isrole()=='Manager'){
      return true
    }
    else{
      return false
    }
  }

}
