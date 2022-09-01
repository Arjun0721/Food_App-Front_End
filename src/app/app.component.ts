import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo';
  
  constructor(private route:Router){}

  logout(){
    localStorage.removeItem('registeredRole')
    localStorage.removeItem('loginID')
    window.alert("Logged Out")
    this.route.navigate(['home'])

  }
}
