import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Admin } from '../admin';

@Injectable({
  providedIn: 'root'
})
export class AdminRegService {

  constructor(private http:HttpClient) { }

  public regAdmin(admin:Admin):Observable<object>{
    return this.http.post("http://localhost:8080/admin",admin)
  }
}
