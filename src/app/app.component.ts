import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tele-connect';
  username = 'test';
  private strlen = localStorage.length;
  user = JSON.parse(localStorage.getItem("user"))
  constructor(private router: Router){
  }

  isAdmin(){
    //return this.user.type === 'ADMIN';
    return true;
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['login']);
    location.reload();
  }
}
