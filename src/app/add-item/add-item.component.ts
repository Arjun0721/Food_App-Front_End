import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Items } from '../items';
import { ItemsService } from '../service/items.service';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {

  constructor(private item:ItemsService, private route:Router) { }
  result:any
  items = new Items()

  ngOnInit(): void {
  }

  onadd(form:NgForm){
    this.item.adddata(this.items).subscribe((data)=>{
      this.result=data
      console.log(this.result)
      window.alert("New Item added successfully")
      this.route.navigate(['items'])
      
    })
  }

}
