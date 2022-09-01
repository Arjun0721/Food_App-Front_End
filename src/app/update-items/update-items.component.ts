import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Items } from '../items';
import { ItemsService } from '../service/items.service';

@Component({
  selector: 'app-update-items',
  templateUrl: './update-items.component.html',
  styleUrls: ['./update-items.component.css']
})
export class UpdateItemsComponent implements OnInit {
  result:any
  items = new Items()
  constructor(private item:ItemsService, private route:ActivatedRoute, private root:Router) { }

  ngOnInit(): void {
    let id= this.route.snapshot.params['id']
    
    this.item.getdata().subscribe((data)=>{
      this.result=data
      console.log(this.result);

      for(let r of this.result.t){
        if (id==r.id){
          this.items=r
          console.log(this.items);
        }
        }
      })
  }

  onupdate(form:NgForm){
    this.item.updateitems(this.items.id,this.items).subscribe((res)=>{
      console.log(res);
      window.alert("Updated Successfully")
      this.root.navigate(['items'])
      
    })
  }

}
