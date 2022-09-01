import { Component, OnInit } from '@angular/core';
import { ManagerService } from '../service/manager.service';

@Component({
  selector: 'app-manager-details',
  templateUrl: './manager-details.component.html',
  styleUrls: ['./manager-details.component.css']
})
export class ManagerDetailsComponent implements OnInit {
  result:any
  loginID = localStorage.getItem('loginID')
  constructor(private manager:ManagerService) { }

  ngOnInit(): void {
    this.manager.getdata().subscribe((res)=>{
      this.result=res
      console.log(this.result);
      
    })
  }

  delete(id:any){
    window.confirm("Aslo deletes corresponding Menu")
    this.manager.deletemanager(id).subscribe((res)=>{
      console.log(res);
      this.manager.getdata().subscribe((res)=>{
        this.result=res
        console.log(this.result);   
      }) 
    })
  }

}
