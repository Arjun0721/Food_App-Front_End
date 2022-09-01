import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Products } from '../products';
import { ProductsService } from '../service/products.service';

@Component({
  selector: 'app-update-products',
  templateUrl: './update-products.component.html',
  styleUrls: ['./update-products.component.css']
})
export class UpdateProductsComponent implements OnInit {

  constructor(private product:ProductsService, private route:ActivatedRoute,private root:Router) { }
  result:any
  products = new Products()
  ngOnInit(): void {
    let id= this.route.snapshot.params['id']
    
    this.product.getdata().subscribe((data)=>{
      this.result=data
      console.log(this.result);

      for(let r of this.result.t){
        if (id==r.id){
          this.products=r
          console.log(this.products);
        }
        }
      })
  }
  
  onupdate(form:NgForm){
    this.product.updateproducts(this.products.id,this.products).subscribe((res)=>{
      console.log(res);
      window.alert("Updated Successfully")
      this.root.navigate(['products'])
      
    })
  }

}
