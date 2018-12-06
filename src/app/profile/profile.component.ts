import { Component, OnInit } from '@angular/core';
import {UserServiceClient} from '../services/user.service.client';
import {Router} from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  _id;
  user ;
  username;
  firstName;
  lastName;
  email;
  password;
  verifyPassword;
  userservice;
  constructor(private service: UserServiceClient, private router: Router) {
    this.userservice = service;
  }

  setUser(user) {
    this.user = user;
    this._id = user._id;
    this.username = user.username;
    this.firstName = user.firstName;
    this.lastName = user.lastName;
    this.email = user.email;
    this.password = user.password;
    this.verifyPassword = user.password;
  }

  ngOnInit() {
    let response = this.userservice.profile();
    this.setUser(response);
  }

}
