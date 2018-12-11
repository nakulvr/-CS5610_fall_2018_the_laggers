import { Component, OnInit } from '@angular/core';
import {TVServiceClient} from '../services/TVServices';
import { RouterModule, Routes, Router, NavigationEnd } from '@angular/router';
@Component({
  selector: 'app-discover',
  templateUrl: './discover.component.html',
  styleUrls: ['./discover.component.css']
})
export class DiscoverComponent implements OnInit {

  constructor(private tvService: TVServiceClient, private router: Router) {
    // hacky way to reload page after init
    this.reloadLinkNavigation(); 
  }

  discover = [];
  searchTvQuery="";
  ngOnInit() {

    this.tvService.findGenre()
      .then(shows => {
        this.discover = shows.results;
      });
    // console.log(this.movies);
  }

  searchQuery(){
    this.tvService.searchSeriesByName(this.searchTvQuery)
    .then(movies => {
      this.discover = movies.results;
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
