import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Admin } from '../admin';
import { ManagerService } from '../service/manager.service';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent implements OnInit {

  constructor(private manager:ManagerService, private route:Router) { }
  result:any
  registeredRole:any
  admin = new Admin()
  requiredRoleManager='Manager'
  loginID:any


  ngOnInit(): void {
    localStorage.setItem('requiredRoleManager',this.requiredRoleManager)
  }

  onloginManager(form:NgForm){
    this.manager.getmanager(this.admin).subscribe((res)=>{
      this.result=res
      console.log(this.result);
      
      this.registeredRole=this.result.role
      this.loginID=this.result.id
      localStorage.setItem('loginID',this.loginID)
      localStorage.setItem('registeredRole',this.registeredRole)
      window.alert("Logged in as Manager")
      },error=>{  
      alert("Invalid Details")
      })
      this.route.navigate(['home'])
    }

}
