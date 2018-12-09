import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { TVServiceClient } from '../Services/TVServices';
import { CommentsService } from '../Services/comments.service';

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

  constructor(private route: ActivatedRoute,
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
        // this.episodeCount =
      });
    // console.log(this.tvshowId);
  }

  postComment() {

  }

  getCommentsForMovie() {
    this.commentsService.getCommentsForTVSeries(this.tvshowId)
      .then(comments => {
        console.log("comments: " + comments);
        comments.forEach(comment => {
          this.commentsForSeries.push(comment);
          console.log(comment);
        });
      });;
  }

  ngOnInit() {
    this.getCommentsForMovie();
  }

}
