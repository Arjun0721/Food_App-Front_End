import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Products } from '../products';
import { ProductsService } from '../service/products.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  result:any
  products = new Products()
  constructor(private product:ProductsService,private route:Router) { }

  ngOnInit(): void {
  }

  onadd(form:NgForm){
    this.product.addproduct(this.products).subscribe((data)=>{
      this.result=data
      console.log(this.result)
      window.alert("New Product added successfully")
      this.route.navigate(['products'])
    })
  }

}
