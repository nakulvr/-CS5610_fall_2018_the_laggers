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

  constructor(private userservice: UserServiceClient, private router: Router) {
    this.service = userservice;
    this.router = router;
  }

  login(username, password) {
    this.username = username;
    this.password = password;
    this.service.login(username, password).then(user => {
      if (user !== null) {
        localStorage.setItem("user",JSON.stringify({name: user[0].username, id: user[0]._id, type: user[0].type}))
        this.router.navigate(['home']);
        location.reload();
      }
      else{
        alert('Invalid User Credentials. Please try again or Register yourself!!!');
      }
    });
  }

  loginValidation(user) {
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
