import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BillService {

  constructor(private http:HttpClient) { }


  generateBill(id:any,user:any){
    return this.http.post(`http://localhost:8080/mail/${id}`,user)

  }
}
