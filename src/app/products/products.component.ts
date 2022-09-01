import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../service/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  result:any
  role='Manager'
  loginmanagerrole=localStorage.getItem('registeredRole')
  constructor(private products:ProductsService) { }
  loginID=localStorage.getItem('loginID')
  ngOnInit(): void {
    this.products.getdata().subscribe((data)=>{
      this.result=data
      console.log(this.result);
      
    })
  }

  delete(id:any){
      this.products.deletedata(id).subscribe((res)=>{
        console.log(res);
        this.products.getdata().subscribe((data)=>{
          this.result=data
          console.log(data);
          
        })
        
      })
  }

}
