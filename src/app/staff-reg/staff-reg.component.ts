import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Admin } from '../admin';
import { StaffRegService } from '../service/staff-reg.service';

@Component({
  selector: 'app-staff-reg',
  templateUrl: './staff-reg.component.html',
  styleUrls: ['./staff-reg.component.css']
})
export class StaffRegComponent implements OnInit {
  admin= new Admin()
  result:any
  constructor(private register:StaffRegService, private route:Router) { }

  ngOnInit(): void {
  }

  onreg(form:NgForm){
      this.register.regStaff(this.admin).subscribe((res)=>{
        this.result=res
        console.log(this.result)
        window.alert("Successfully Registered as Staff")
        this.route.navigate(['staff'])
        
    })
  }

}
