import {Injectable} from '@angular/core';

@Injectable()
export class MovieServiceClient {

  findAllMovies() {
    return  fetch( 'https://api.themoviedb.org/3/discover/movie?api_key=2a755cc702db2b978534603b24da9899')
      .then (response => response.json());
  }
}
