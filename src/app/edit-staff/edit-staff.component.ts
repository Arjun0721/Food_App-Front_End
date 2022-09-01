import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StaffService } from '../service/staff.service';
import { Staff } from '../staff';

@Component({
  selector: 'app-edit-staff',
  templateUrl: './edit-staff.component.html',
  styleUrls: ['./edit-staff.component.css']
})
export class EditStaffComponent implements OnInit {

  constructor(private staff:StaffService, private route:ActivatedRoute, private root:Router) { }
  result:any
  staff1 = new Staff()
  ngOnInit(): void {
    let id = this.route.snapshot.params['id']
    this.staff.getdata().subscribe((data)=>{
      this.result=data
      console.log(this.result);

      for(let r of this.result.t){
        if (id==r.id){
          this.staff1=r
          console.log(this.staff1)}  
        }
    })
  }
  onedit(form:NgForm){
    this.staff.editstaff(this.staff1.id,this.staff1).subscribe((res)=>{
      console.log(res);
      window.alert("Updated Successfully")
      this.root.navigate(['account/staff-details'])
    })
  }

}
