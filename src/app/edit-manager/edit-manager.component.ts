import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Manager } from '../manager';
import { AdminService } from '../service/admin.service';
import { ManagerService } from '../service/manager.service';

@Component({
  selector: 'app-edit-manager',
  templateUrl: './edit-manager.component.html',
  styleUrls: ['./edit-manager.component.css']
})
export class EditManagerComponent implements OnInit {

  constructor(private manager:ManagerService, private route:ActivatedRoute, private root:Router) { }
  result:any
  manager1 = new Manager()
  ngOnInit(): void {
    let id = this.route.snapshot.params['id']
    this.manager.getdata().subscribe((data)=>{
      this.result=data
      console.log(this.result);

      for(let r of this.result.t){
        if (id==r.id){
          this.manager1=r
          console.log(this.manager1)}  
        }
    })
  }
    onedit(form:NgForm){
      this.manager.editmanager(this.manager1.id,this.manager1).subscribe((res)=>{
        console.log(res);
        window.alert("Updated Successfully")
        this.root.navigate(['account/manager-details'])
      })
    }
  }



