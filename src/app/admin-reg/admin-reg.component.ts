import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Admin } from '../admin';
import { AdminRegService } from '../service/admin-reg.service';

@Component({
  selector: 'app-admin-reg',
  templateUrl: './admin-reg.component.html',
  styleUrls: ['./admin-reg.component.css']
})
export class AdminRegComponent implements OnInit {
  result:any
  constructor(private register:AdminRegService, private Route:Router) { }
  admin = new Admin()
  ngOnInit(): void {
  }

  onreg(form:NgForm){
    this.register.regAdmin(this.admin).subscribe((res)=>{
      this.result=res
      console.log(this.result);
      window.alert("Successfully registered as Admin")
      this.Route.navigate(['admin'])
      
  })
}

}
