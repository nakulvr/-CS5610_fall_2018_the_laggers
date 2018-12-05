import { Component, OnInit } from '@angular/core';
import {UserServiceClient} from '../services/user.service.client';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username = '' ;
  password = '' ;
  service;
  curr_user;

  constructor(private userservice: UserServiceClient) {
    this.service = userservice;
  }

  login(username, password) {
    this.username = username;
    this.password = password;
    let res = this.service.login(username, password);
    this.loginValidation(res);
    // this.service.login(username, password)
    //   .then(user => this.curr_user = user)
    //   .then(() => this.loginValidation(this.curr_user));
  }

  loginValidation(user) {
    if (user !== null) {
      alert('got to profile page');
    }
    else{
      alert('wrong credentials');}
  }

  ngOnInit() {
  }

}
