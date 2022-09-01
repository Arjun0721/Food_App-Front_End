import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Orders } from '../orders';
import { OrdersService } from '../service/orders.service';

@Component({
  selector: 'app-update-orders',
  templateUrl: './update-orders.component.html',
  styleUrls: ['./update-orders.component.css']
})
export class UpdateOrdersComponent implements OnInit {

  constructor(private order:OrdersService, private route:ActivatedRoute,private root:Router) { }
  result:any
  orders = new Orders()
  ngOnInit(): void {
    let id= this.route.snapshot.params['id']
    
    this.order.getdata().subscribe((data)=>{
      this.result=data
      console.log(this.result);

      for(let r of this.result.t){
        if (id==r.id){
          this.orders=r
          console.log(this.orders);

        }
        }
      })
  }

  onupdate(form:NgForm){
    this.order.updateorders(this.orders.id,this.orders).subscribe((res)=>{
      console.log(res);
      window.alert("Updated Successfully")
      this.root.navigate(['orders'])
      
    })
  }

}
