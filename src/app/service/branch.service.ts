import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Admin } from '../admin';
import { AdminComponent } from '../admin/admin.component';

@Injectable({
  providedIn: 'root'
})
export class BranchService {

  constructor(private http:HttpClient) { }


  getbranch(){
    return this.http.get("http://localhost:8080/getallbranch")
  }

  isregisteredAdmin(){
    return localStorage.getItem('registeredRole')
  }
  
  isbranch(){
    if (this.isregisteredAdmin()!='undefined' && this.isregisteredAdmin()=='Admin'){
      return true
    }
    else{
      return false
    }
  }

  updateBranch(id:any,branch:any){
    return this.http.put(`http://localhost:8080/updatebranch/${id}`,branch)
  }
}
