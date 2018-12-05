import {Injectable} from '@angular/core';

@Injectable()
export class TVServiceClient {

  findAllMovies() {
    // return;
    // fetch( 'https://api.themoviedb.org/3/discover/movie?api_key=2a755cc702db2b978534603b24da9899')
    return fetch('https://api.themoviedb.org/3/tv/popular?page=1&language=en-US&api_key=2a755cc702db2b978534603b24da9899')
      .then(response => response.json());
  }

  findNewShows() {
    // return;
    // fetch( 'https://api.themoviedb.org/3/discover/movie?api_key=2a755cc702db2b978534603b24da9899')
    return fetch('https://api.themoviedb.org/3/trending/all/day?api_key=2a755cc702db2b978534603b24da9899')
      .then(response => response.json());
  }

  findGenre() {
    return fetch('https://api.themoviedb.org/3/discover/movie?api_key=2a755cc702db2b978534603b24da9899')
      .then(response => response.json());
  }
}


