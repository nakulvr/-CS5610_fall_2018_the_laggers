import {Component, OnInit, Input} from '@angular/core';
import {ActivatedRoute, Params, Router, NavigationEnd} from '@angular/router';
import {TVServiceClient} from '../services/TVServices';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private tvService: TVServiceClient,
              private router: Router) {
    this.reloadLinkNavigation();
  }

  tvshows = [];
  private currentPageNum = 1;
  private totalPages = 3;
  totalPageArr = [1, 2, 3, 4, 5];
  searchTvQuery = '';

  ngOnInit() {
    const defaultSettings = {
      pageNum: 1
    };
    this.listTrendingMovies(defaultSettings);
  }

  createTVseries(tvshow){
    this.tvService.findTvSeriesInLocal(tvshow.id).then(res => {
      if ((res === null || (res.constructor === Array && res.length === 0))) {
        this.tvService.createTVseries(tvshow).then(res => res);
      }
      this.router.navigate(['movies/' + tvshow.id]);
   });
  }
  paginate(pageNum) {
    this.listTrendingMovies({pageNum: pageNum});
    this.currentPageNum = pageNum;
    console.log(pageNum);
  }

  listTrendingMovies(settings) {
    this.tvService.findAllMovies(settings)
      .then(movies => {
        this.tvshows = movies.results;
        this.totalPages = movies.total_pages;
        // console.log(this.tvshows);
      });
  }

  searchQuery() {
    this.tvService.searchSeriesByName(this.searchTvQuery)
      .then(movies => {
        this.tvshows = movies.results;
        this.totalPages = movies.total_pages;
      });
  }

  reloadLinkNavigation() {
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };

    this.router.events.subscribe((evt) => {
      if (evt instanceof NavigationEnd) {
        this.router.navigated = false;
        window.scrollTo(0, 0);
      }
    });
  }


}
