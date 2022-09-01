import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Admin } from '../admin';
import { ManagerRegService } from '../service/manager-reg.service';

@Component({
  selector: 'app-manager-reg',
  templateUrl: './manager-reg.component.html',
  styleUrls: ['./manager-reg.component.css']
})
export class ManagerRegComponent implements OnInit {
  admin = new Admin()
  result:any
  constructor(private register:ManagerRegService, private route:Router) { }

  ngOnInit(): void {
  }

  onreg(form:NgForm){
    this.register.regManager(this.admin).subscribe((res)=>{
      this.result=res
      console.log(this.result);
      window.alert("Successfully Registered as Manager")
      this.route.navigate(['manager'])
      
  })
}


}
