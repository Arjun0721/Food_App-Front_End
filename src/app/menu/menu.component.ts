import { Component, OnInit } from '@angular/core';
import { MenuService } from '../service/menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  result:any
  loginID=localStorage.getItem('loginID')
  registeredRole = localStorage.getItem('registeredRole')
  role='Manager'
  constructor(private menu:MenuService) { }

  ngOnInit(): void {
    this.menu.getdata().subscribe((data)=>{
      this.result=data
      console.log(this.result);
      
  })
  }

}
