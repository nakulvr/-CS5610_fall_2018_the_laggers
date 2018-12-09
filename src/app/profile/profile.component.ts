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
  tvshows;

  constructor(private service: UserServiceClient, private router: Router, private favouriteService: FavouriteService) {
    this.userservice = service;
  }

  update() {
    if (this.password === this.verifyPassword) {
      this.user.username = this.username;
      this.user.firstName = this.firstName;
      this.user.lastName = this.lastName;
      this.user.email = this.email;
      this.user.password = this.password;
      this.userservice.updateUser(this.user).then(user => {
        if (user !== null) {
          alert('User Details has been updated successfully');
        }
      });
    }
    else
      alert('Password does not match. Please update once again!!!');
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['login']);
    location.reload();
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
    const name = JSON.parse(localStorage.getItem('user')).name
    this.service.findUserByUsername(name).then(user =>{
      user = user[0];
      this.setUser(user);
      this.favouriteService.getMyFavouriteMovies(user._id).then(response => {
        this.tvshows = response[0].tvseries;
        console.log(this.tvshows);
      })
    });
  }
}

import {FavouriteService} from '../Services/favourite.service.client';
