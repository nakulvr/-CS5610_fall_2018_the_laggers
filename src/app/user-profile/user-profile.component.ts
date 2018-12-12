import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import {FavouriteService} from '../services/favourite.service.client';
import {UserServiceClient} from '../services/user.service.client';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  userId;
  // favouriteService;
  follower_users = [];
  following_users = [];
  tvshows;
  user;
  followingFlag = false;
  follow;

  constructor(private route: ActivatedRoute, private favouriteService: FavouriteService,
              private userService: UserServiceClient, private router: Router) {
    this.route.params.subscribe(params => this.setParams(params.uid));
  }

  setParams(uid) {
    this.userId = uid;
  }

  // follow(){
  //   if(localStorage.length==0){
  //     alert("Please Login/ Register to follow");
  //     return;
  //   }
  //   const profileUser = JSON.parse(localStorage.getItem("user"));
  //   //this.followService.addFollowers(user._id, profileUser.id);
  //   //this.followService.addFollowing(profileUser.id, user._id);
  //   alert("Follow action is Successful");
  // }

  ngOnInit() {
    this.userService.findUserByUserId(this.userId).then(user => {
      this.user = user;
    });
    this.favouriteService.getMyFavouriteMovies(this.userId).then(response => {
      if (response.length > 0) {
        this.tvshows = response[0].tvseries;
      }
    });
    this.findFollowing(this.userId);
    this.userService.findFollow(this.userId)
      .then(res => {
        this.follow = res;
        this.setFollowingUsers(this.follow);
        this.setFollowerUsers(this.follow);
        // console.log(res);
      });
    // console.log(this.follow);
  }

  updateFollow() {
    if (localStorage.length === 0) {
      alert('Please Login/ Register to comment');
      return;
    }
    this.userService.findFollow(this.userId)
      .then(res => {
        this.follow = res;
        this.setFollowingUsers(this.follow);
        this.setFollowerUsers(this.follow);
        console.log(res);
      });
  }

  userProfile(uid) {
    this.router.navigate(['/profile/' + uid]);
  }

  setFollowingUsers(follow) {
    // console.log(follow);
    if (follow !== undefined) {
      this.following_users = follow.following;
    }
  }

  setFollowerUsers(follow) {
    // console.log(follow);
    if (follow !== undefined) {
      this.follower_users = follow.followers;
    }
  }

  followUser(followId) {
    if (localStorage.length === 0) {
      alert('Please Login/ Register to comment');
      return;
    }
    this.userService.followingUser(JSON.parse(localStorage.getItem('user')).id, followId)
      .then(() =>
        this.userService.followerUser(JSON.parse(localStorage.getItem('user')).id, followId))
      .then(() => {
        this.updateFollow();
        this.findFollowing(followId);
      });
  }

  unfollowUser(followId) {
    if (localStorage.length === 0) {
      alert('Please Login/ Register to comment');
      return;
    }
    this.userService.unfollowingUser(JSON.parse(localStorage.getItem('user')).id, followId)
      .then(() =>
        this.userService.unfollowerUser(JSON.parse(localStorage.getItem('user')).id, followId))
      .then(() => {
        this.updateFollow();
        this.findFollowing(followId);
      });
  }

  findFollowing(followId) {
    this.userService.findFollowing(JSON.parse(localStorage.getItem('user')).id, followId)
      .then(result => {
        this.followingFlag = result.length !== 0;
      });
    // return following;
  }
}
