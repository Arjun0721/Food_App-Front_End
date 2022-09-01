import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Branch } from '../branch';

@Injectable({
  providedIn: 'root'
})
export class AddBranchService {

  constructor(private http:HttpClient) { }

  public addBranch(branch:Branch):Observable<object>{
    return this.http.post("http://localhost:8080/branch",branch)
  }


}
