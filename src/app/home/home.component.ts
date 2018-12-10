import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {TVServiceClient} from '../services/TVServices';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private tvService: TVServiceClient) {

  }

  private tvshows = [];
  private currentPageNum = 1;

  ngOnInit() {
    let defaultSettings = {
      pageNum : 1
    };
   this.listTrendingMovies(defaultSettings);
  }

  paginate(pageNum) {
    this.listTrendingMovies({pageNum: pageNum});
    this.currentPageNum = pageNum;
    console.log(pageNum);
  }

  listTrendingMovies(settings){
    this.tvService.findAllMovies(settings)
      .then(movies => {
        this.tvshows = movies.results;
        // console.log(this.tvshows);
      });
  }

}
