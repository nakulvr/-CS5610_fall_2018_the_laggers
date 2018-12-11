import {Component, OnInit} from '@angular/core';
import {UserServiceClient} from '../services/user.service.client';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  users = [];
  username: any;
  password: any;
  firstName: any;
  lastName: any;
  email: any;
  userType = 'FAN';

  constructor(private userService: UserServiceClient) {
  }

  ngOnInit() {
    this.userService.findAllUsers()
      .then(users => this.users = users);
  }

  addUser(username, password, firstName, lastName, email, type) {
    if (username === undefined || password === undefined) {
      alert('username or password cant be empty');
    } else {
      this.userService.createFullUser(username, password, firstName, lastName, email, type)
        .then(users => this.users = users);
    }
  }

  deleteUser(userId) {
    this.userService.deleteUser(userId)
      .then(users => this.users = users);
  }
}
