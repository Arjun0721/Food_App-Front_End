import { Component, OnInit } from '@angular/core';
import { BranchService } from '../service/branch.service';

@Component({
  selector: 'app-branch',
  templateUrl: './branch.component.html',
  styleUrls: ['./branch.component.css']
})
export class BranchComponent implements OnInit {
  result:any
  role='Admin'
  registeredRole=localStorage.getItem('registeredRole')
  adminid=localStorage.getItem('adminID')
  loginID=localStorage.getItem('loginID')
  constructor(private branch:BranchService) { }

  ngOnInit(): void {
    this.branch.getbranch().subscribe((data)=>{
        this.result=data
        console.log(this.result);    
    })
  }
}
