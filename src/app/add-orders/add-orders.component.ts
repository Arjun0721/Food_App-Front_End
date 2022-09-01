import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Order } from '../order';
import { Orders } from '../orders';
import { OrdersService } from '../service/orders.service';

@Component({
  selector: 'app-add-orders',
  templateUrl: './add-orders.component.html',
  styleUrls: ['./add-orders.component.css']
})
export class AddOrdersComponent implements OnInit {
  result:any
  order1 = new Order()
  constructor(private order:OrdersService,private route:Router) { }

  ngOnInit(): void {
  }

  onadd(form:NgForm){
    this.order.adddata(this.order1).subscribe((data)=>{
      this.result=data
      console.log(this.result)
      window.alert("Ordered successfully")
      this.route.navigate(['orders'])
      
    })
  }


}
