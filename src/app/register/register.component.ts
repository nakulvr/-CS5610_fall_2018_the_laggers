import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {UserServiceClient} from '../services/user.service.client';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
 username = '';
 password = '';
 verifyPassword = '';
 userservice;
  constructor(private service: UserServiceClient, private router: Router) {
    this.userservice = service;
  }

  register(username, password, verifyPassword) {
    if (username.length === 0 || password.length === 0 || verifyPassword === 0){
      alert('Please enter Proper Username and Password');
      return;
    }
    if (password !== verifyPassword) {
      alert('Password does not match. Please try again!!!');
      return;
    }

    this.userservice.findUserByUsername(username).then((uname) => {
      if (uname === null || (uname.constructor === Array && uname.length === 0)){
        this.userservice.createUser(username, password).then(() => this.router.navigate(['login']));
      }
      else{
        alert('UserName already exists. Please try a new UserName');
      }
    });
  }

  ngOnInit() {
  }

}
