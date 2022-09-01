import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Admin } from '../admin';
import { Branch } from '../branch';
import { AddBranchService } from '../service/add-branch.service';

@Component({
  selector: 'app-add-branch',
  templateUrl: './add-branch.component.html',
  styleUrls: ['./add-branch.component.css']
})
export class AddBranchComponent implements OnInit {
  branch = new Branch()
  result:any
  constructor(private addbranch:AddBranchService, private route:Router) { }

  ngOnInit(): void {
  }

  onadd(form:NgForm){
    this.addbranch.addBranch(this.branch).subscribe((res)=>{
      this.result=res
      console.log(this.result);
      window.alert("New Branch added Successfully")
      this.route.navigate(['branch']) 
    })
  }
}
