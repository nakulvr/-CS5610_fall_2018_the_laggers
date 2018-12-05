import { Component, OnInit } from '@angular/core';
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
  constructor(private service: UserServiceClient) {
    this.userservice = service;
  }

  register(username, password, verifyPassword) {

    if (password !== verifyPassword) {
      alert('Password does not match. Please try again!!!');
      return;
    }
    let response = this.userservice.findUsername(username);
    if (response !== null) {
      alert("Username already exists");
    }
    else {
      let result = this.userservice.createUser(username, password);
      if (result !== null)
        alert('Go to Profile Page');
      else
        alert('Registration failed due to server error. Please try again');
    }
  }

  ngOnInit() {
  }

}
