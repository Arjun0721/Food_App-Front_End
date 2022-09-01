import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Admin } from '../admin';

@Injectable({
  providedIn: 'root'
})
export class StaffService {

  constructor(private http:HttpClient) { }

  public getstaff(admin:Admin):Observable<object>{
    return this.http.post("http://localhost:8080/getbystaff",admin)
  }

  getdata(){
    return this.http.get("http://localhost:8080/getallstaff")
  }

  deletestaff(id:any){
    return this.http.delete(`http://localhost:8080/deletestaff/${id}`)
  }

  editstaff(id:any, staff:any){
    return this.http.put(`http://localhost:8080/updatestaff/${id}`,staff)
  }

  isrole(){
    return localStorage.getItem('registeredRole')
  }

  staffguard(){
    if(this.isrole()=='Staff'){
      return true
    }
    else{
      return false
    }
  }


}
