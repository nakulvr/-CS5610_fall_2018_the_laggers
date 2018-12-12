import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { TVServiceClient } from '../services/TVServices';
import { CommentsService } from '../services/comments.service';

import {FavouriteService} from '../services/favourite.service.client';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  tvshowId;
  tvShowName = '';
  tvShowDetails = '';
  episodeCount = 0;
  seasonCount = 0;
  tvShowImage = '';
  commentsForSeries = [];
  comment = '';
  status;
  user;
  isFavourite = 1;

  constructor(private route: ActivatedRoute, private favouriteService: FavouriteService,
              private commentsService: CommentsService,
              private tvService: TVServiceClient) {
    this.route.params.subscribe(params => this.setParams(params.tvshowId));
  }

  name;

  setParams(params) {
    this.tvshowId = params;
    this.tvService.findSeriesById(this.tvshowId).then(
      result => {
        this.tvShowName = result['name'];
        this.tvShowDetails = result['overview'];
        this.tvShowImage = result['backdrop_path'];
        this.episodeCount = result['number_of_episodes'];
        this.seasonCount = result['number_of_seasons'];
        this.status = result['status'];
      });
  }

  addFavourite() {
    if (localStorage.length === 0) {
      alert('Please Login/ Register to follow');
      return;
    }
    this.favouriteService.setMyFavouriteMovies(this.tvshowId, this.user.id).then(response =>{
      this.isFavourite = 1;
      location.reload();
    });

  }

  removeFavourite() {
    this.favouriteService.removeFromMyFavouriteMovies(this.tvshowId, this.user.id).then(response =>{
      this.isFavourite = 0;
      location.reload();
  });
  }

  postComment() {
    if (localStorage.length === 0) {
      alert('Please Login/ Register to comment');
      return;
    }
    this.commentsService.postCommentForTVSeries(this.user.id, this.tvshowId, this.comment)
      .then(res => {
        this.commentsForSeries = res;
      });
  }

  getCommentsForMovie() {
    this.commentsService.getCommentsForTVSeries(this.tvshowId)
      .then(comments => {
        console.log('comments: ' + comments);
        comments.forEach(comment => {
          this.commentsForSeries.push(comment);
          // console.log(comment);
        });
      });
  }

  ngOnInit() {
    this.getCommentsForMovie();
    this.user = JSON.parse(localStorage.getItem('user'));
    this.favouriteService.isMyFavouriteTvSeries(this.user.id, this.tvshowId).then(res => {
      if (res === null || (res.constructor === Array && res.length === 0)) {
        this.isFavourite = 1;
      }
      else {
        this.isFavourite = 0;
      }
    });
  }

}
