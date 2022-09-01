import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../service/items.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  result:any
  role='Staff'
  loginstaffrole=localStorage.getItem('registeredRole')
  loginID=localStorage.getItem('loginID')
  constructor(private items:ItemsService) { }

  ngOnInit(): void {
    this.items.getdata().subscribe((data)=>{
      this.result=data
      console.log(this.result);
    })
  }

  delete(id:any){
    this.items.deleteitems(id).subscribe((res)=>{
      console.log(res);
      this.items.getdata().subscribe((data)=>{
        this.result=data
        console.log(this.result);
        
      })
      
    })
  }
}
