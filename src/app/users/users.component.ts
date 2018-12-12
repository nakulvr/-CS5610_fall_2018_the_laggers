import {Component, OnInit} from '@angular/core';
import {UserServiceClient} from '../services/user.service.client';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users = [];

  constructor(private  userService: UserServiceClient) {
  }

  ngOnInit() {
    this.userService.findAllUsers()
      .then(users => this.users = users);
  }

  followUser(followId) {
    this.userService.followingUser(JSON.parse(localStorage.getItem('user')).id, followId)
      .then(() =>
        this.userService.followerUser(JSON.parse(localStorage.getItem('user')).id, followId));
  }

  unfollowUser(followId) {
    this.userService.unfollowingUser(JSON.parse(localStorage.getItem('user')).id, followId)
      .then(() =>
        this.userService.unfollowerUser(JSON.parse(localStorage.getItem('user')).id, followId));
  }

  findFollowing(followId) {
    let following = false;
    this.userService.findFollowing(JSON.parse(localStorage.getItem('user')).id, followId)
      .then(result => {
        following = result.length !== 0;
      });
    return following;
  }
}
