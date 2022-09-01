import { Component, OnInit } from '@angular/core';
import { AdminService } from '../service/admin.service';

@Component({
  selector: 'app-admin-deatils',
  templateUrl: './admin-deatils.component.html',
  styleUrls: ['./admin-deatils.component.css']
})
export class AdminDeatilsComponent implements OnInit {
  result:any
  loginID = localStorage.getItem('loginID')
  constructor(private admin:AdminService) { }

  ngOnInit(): void {
    this.admin.getdata().subscribe((res)=>{
      this.result=res
      console.log(this.result);
      
    })
  }

  delete(id:any){
    window.confirm("Aslo deletes corresponding Branch")
    this.admin.deleteadmin(id).subscribe((res)=>{
      console.log(res);
      this.admin.getdata().subscribe((res)=>{
        this.result=res
        console.log(this.result);   
      }) 
    })
  }
}
