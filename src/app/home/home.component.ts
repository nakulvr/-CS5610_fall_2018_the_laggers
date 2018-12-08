import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {TVServiceClient} from '../Services/TVServices';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private tvService: TVServiceClient) {

  }

  tvshows = [];

  ngOnInit() {
    this.tvService.findAllMovies()
      .then(movies => {
        this.tvshows = movies.results;
        // console.log(this.tvshows);
      });
    // console.log(this.movies);
  }


}
