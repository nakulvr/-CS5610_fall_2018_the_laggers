import {Component, OnInit} from '@angular/core';
import {TVServiceClient} from '../services/TVServices';
import { RouterModule, Routes, Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-newtv',
  templateUrl: './newtv.component.html',
  styleUrls: ['./newtv.component.css']
})

export class NewtvComponent implements OnInit {

  constructor(private tvService: TVServiceClient, private router: Router) {
    this.reloadLinkNavigation()
  }

  newtvShows = [];
  searchTvQuery="";

  ngOnInit() {

    this.tvService.findNewShows()
      .then(shows => {
        this.newtvShows = shows.results;
      });
  }

  searchQuery(){
    this.tvService.searchSeriesByName(this.searchTvQuery)
    .then(movies => {
      this.newtvShows = movies.results;
    });
  }

  reloadLinkNavigation(){
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
