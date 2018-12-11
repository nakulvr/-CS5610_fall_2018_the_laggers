import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavouriteService {

  constructor() {
  }

  setMyFavouriteMovies(tvseriesId: String, userId: String) {

    return fetch('http://tele-connect-server.herokuapp.com/api/user/' + userId + '/tvseries/' + tvseriesId + '/favourite')
      .then(response => {
      return response.json();
    });
  }

  getMyFavouriteMovies(userId: String) {
    return fetch('http://tele-connect-server.herokuapp.com/api/user/' + userId + '/favourite').then(response => {
      return response.json();
    });
  }
}
