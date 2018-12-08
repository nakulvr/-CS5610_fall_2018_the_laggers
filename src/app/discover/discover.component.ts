import { Component, OnInit } from '@angular/core';
import {TVServiceClient} from '../Services/TVServices';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.component.html',
  styleUrls: ['./discover.component.css']
})
export class DiscoverComponent implements OnInit {

  constructor(private tvService: TVServiceClient) {

  }

  discover = [];

  ngOnInit() {

    this.tvService.findGenre()
      .then(shows => {
        this.discover = shows.results;
      });
    // console.log(this.movies);
  }

}
