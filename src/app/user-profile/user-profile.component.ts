import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FollowService} from '../services/follow.client.service';
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
  followers;
  following_users;
  tvshows;
  user;

  constructor(private route: ActivatedRoute, private followService: FollowService, private favouriteService: FavouriteService,
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
    this.user =
      this.followers = this.followService.getFollowers(this.userId);
    //   .then(response => {
    //   this.followers = response;
    // });
    this.following_users = this.followService.getFollowing(this.userId);
    //   .then(response => {
    //   this.following_users = response;
    // });
  }

}
