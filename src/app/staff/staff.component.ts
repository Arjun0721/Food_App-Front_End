import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Admin } from '../admin';
import { StaffService } from '../service/staff.service';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.css']
})
export class StaffComponent implements OnInit {

  constructor(private staff:StaffService,private route:Router) { }
  result:any
  registeredRole:any
  admin = new Admin()
  requiredRoleStaff='Staff'
  loginID:any
  ngOnInit(): void {
    localStorage.setItem('requiredRoleStaff',this.requiredRoleStaff)
  }

  onloginstaff(form:NgForm){
    this.staff.getstaff(this.admin).subscribe((res)=>{
      this.result=res
      console.log(this.result);
      
      this.registeredRole=this.result.role
      this.loginID=this.result.id
      localStorage.setItem('loginID',this.loginID)
      localStorage.setItem('registeredRole',this.registeredRole)
      window.alert("Logged in as Staff")
      },error=>{  
      alert("Invalid Details")
      })
      this.route.navigate(['home'])
    
  }

}
