import { Component, OnInit } from '@angular/core';
import { StaffService } from '../service/staff.service';

@Component({
  selector: 'app-staff-details',
  templateUrl: './staff-details.component.html',
  styleUrls: ['./staff-details.component.css']
})
export class StaffDetailsComponent implements OnInit {
  result:any
  loginID=localStorage.getItem('loginID')
  constructor(private staff:StaffService) { }

  ngOnInit(): void {
    this.staff.getdata().subscribe((res)=>{
      this.result=res
      console.log(this.result);
      
    })
  }

  delete(id:any){
    window.confirm("Aslo deletes corresponding Orders and Items")
    this.staff.deletestaff(id).subscribe((res)=>{
      console.log(res);
      this.staff.getdata().subscribe((res)=>{
        this.result=res
        console.log(this.result);   
      }) 
    })
  }

}
