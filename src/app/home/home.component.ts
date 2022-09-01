import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private route:Router) { }
  
  ngOnInit(): void {
  }
  logout(){
    localStorage.removeItem('registeredRole')
    localStorage.removeItem('loginadminID')
    localStorage.removeItem('loginmanagerID')
    localStorage.removeItem('loginstaffID')
    window.alert("Logged Out")
    this.route.navigate(['home'])

  }





}
