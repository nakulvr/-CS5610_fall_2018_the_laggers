import {Component, OnInit} from '@angular/core';
import {TVServiceClient} from '../services/TVServices';

@Component({
  selector: 'app-newtv',
  templateUrl: './newtv.component.html',
  styleUrls: ['./newtv.component.css']
})

export class NewtvComponent implements OnInit {

  constructor(private tvService: TVServiceClient) {

  }

  newtvShows = [];

  ngOnInit() {

    this.tvService.findNewShows()
      .then(shows => {
        this.newtvShows = shows.results;
      });
  }


}
