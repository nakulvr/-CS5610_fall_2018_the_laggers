import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
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
  router;

  constructor(private userservice: UserServiceClient, private router: Router) {
    this.service = userservice;
    this.router = router;
  }

  login(username, password) {
    this.username = username;
    this.password = password;
    this.service.login(username, password).then(user =>{
      console.log("after output");
      console.log(user);
      if (user !== null) {
        this.service.setUser(user);
        this.router.navigate(['home']);
      }
      else{
        alert('Invalid User Credentials. Please try again or Register yourself!!!');
      }
    });
    // this.loginValidation(res);
    // this.service.login(username, password)
    //   .then(user => this.curr_user = user)
    //   .then(() => this.loginValidation(this.curr_user));
  }

  loginValidation(user) {
    console.log("after output");
    console.log(user);
    if (user !== null) {
      this.router.navigate(['home']);
    }
    else{
      alert('Invalid User Credentials. Please try again or Register yourself!!!');
    }
  }

  ngOnInit() {
  }

}
