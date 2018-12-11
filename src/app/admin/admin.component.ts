import {Component, OnInit} from '@angular/core';
import {UserServiceClient} from '../services/user.service.client';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  users = [];

  constructor(private userService: UserServiceClient) {
  }

  ngOnInit() {
    this.userService.findAllUsers()
      .then(users => this.users = users);
  }

  deleteUser(userId) {
    this.userService.deleteUser(userId)
      .then(users => this.users = users);
  }
}
