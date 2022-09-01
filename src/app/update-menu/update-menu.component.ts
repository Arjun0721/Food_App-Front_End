import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Menu } from '../menu';
import { MenuService } from '../service/menu.service';

@Component({
  selector: 'app-update-menu',
  templateUrl: './update-menu.component.html',
  styleUrls: ['./update-menu.component.css']
})
export class UpdateMenuComponent implements OnInit {
  result:any
  menu = new Menu()
  constructor(private route:ActivatedRoute,private menuupdate:MenuService, private root:Router) { }

  ngOnInit(): void {
    let id= this.route.snapshot.params['id']
    
    this.menuupdate.getdata().subscribe((data)=>{
      this.result=data
      console.log(this.result);

      for(let r of this.result.t){
        if (id==r.id){
          this.menu=r
          console.log(this.menu);
        }
        }
      })
  }
  onupdatemenu(form:NgForm){
    this.menuupdate.updateMenu(this.menu.id,this.menu).subscribe((res)=>{
      console.log(res);
      window.alert("Updated Successfully")
      this.root.navigate(['menu'])    
    })
  }
}
