import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Bill } from '../bill';
import { Customer } from '../customer';
import { BillService } from '../service/bill.service';
import { OrdersService } from '../service/orders.service';

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.css']
})
export class BillComponent implements OnInit {
  bill = new Customer()
  result:any
  message:any
  constructor(private bills:BillService,private order:OrdersService ,private route:ActivatedRoute,private root:Router) { }

  ngOnInit(): void {
    let id= this.route.snapshot.params['id']
    
    this.order.getdata().subscribe((data)=>{
      this.result=data
      console.log(this.result);

      for(let r of this.result.t){
        if (id==r.id){
          this.bill=r
          console.log(this.bill);

        }
        }
      })

  }

  onupdate(form:NgForm){
    window.alert("Bill sent Successfully")
    this.bills.generateBill(this.bill.id,this.bill).subscribe((res)=>{
      this.message=res
      console.log(this.message); 
      this.root.navigate(['orders'])
    })
  }


}
