import { Component, OnInit } from '@angular/core';
import {MovieServiceClient} from '../Services/MoviesServices';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  movies = [];
  constructor(private movieService: MovieServiceClient) {

  }

  ngOnInit() {
    this.movieService.findAllMovies()
      .then(movies => console.log(movies));

    // console.log(this.movies);
  }


}
