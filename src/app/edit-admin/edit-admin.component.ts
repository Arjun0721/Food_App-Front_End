import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Admin } from '../admin';
import { AdminRegService } from '../service/admin-reg.service';
import { AdminService } from '../service/admin.service';

@Component({
  selector: 'app-edit-admin',
  templateUrl: './edit-admin.component.html',
  styleUrls: ['./edit-admin.component.css']
})
export class EditAdminComponent implements OnInit {

  constructor(private admin:AdminService, private route:ActivatedRoute, private root:Router) { }
  result:any
  admin1 = new Admin()
  ngOnInit(): void {
    let id = this.route.snapshot.params['id']
    this.admin.getdata().subscribe((data)=>{
      this.result=data
      console.log(this.result);

      for(let r of this.result.t){
        if (id==r.id){
          this.admin1=r
          console.log(this.admin1)}  
        }
    }) 
  }

  onupdate(form:NgForm){
    this.admin.update(this.admin1.id,this.admin1).subscribe((res)=>{
      console.log(res);
      window.alert("Updated Successfully")
      this.root.navigate(['account/admin-details'])
    })
  }

}
