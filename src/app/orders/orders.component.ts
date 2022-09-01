import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../service/orders.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  result:any
  role='Staff'
  loginstaffrole=localStorage.getItem('registeredRole')
  loginID=localStorage.getItem('loginID')
  constructor(private orders:OrdersService) { }

  ngOnInit(): void {
    this.orders.getdata().subscribe((data)=>{
    this.result=data
    console.log(this.result);
    
    })
  }

  delete(id:any){
    this.orders.deleteorders(id).subscribe((res)=>{
      console.log(res);
      this.orders.getdata().subscribe((data)=>{
        this.result=data
        console.log(this.result);
        
      })
      
    })
  }

}
