import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Menu } from '../menu';
import { MenuService } from '../service/menu.service';

@Component({
  selector: 'app-add-menu',
  templateUrl: './add-menu.component.html',
  styleUrls: ['./add-menu.component.css']
})
export class AddMenuComponent implements OnInit {
  result:any
  menu = new Menu()
  constructor(private menus:MenuService, private route:Router) { }
  
  ngOnInit(): void {
  }

  onadd(form:NgForm){
    this.menus.putdata(this.menu).subscribe((res)=>{
      this.result=res
      console.log(this.result);
      window.alert("New Menu added Successfully")
      this.route.navigate(['menu']) 
    })
  }

}
