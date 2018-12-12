import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavouriteService {

  constructor() {
  }

  setMyFavouriteMovies(tvseriesId: String, userId: String) {
    return fetch('https://tele-connect-server.herokuapp.com/api/user/' + userId + '/tvseries/' + tvseriesId + '/favourite')
      .then(response => {
      return response.json();
    });
  }

  removeFromMyFavouriteMovies(tvshowId, userId) {
    return fetch('https://tele-connect-server.herokuapp.com/api/user/' + userId + '/tvseries/' + tvshowId + '/favourite', {
      method: 'delete'
    }).then(response => {return response.json()});
  }

  isMyFavouriteTvSeries(userId, tvshowId) {
    return fetch('https://tele-connect-server.herokuapp.com/api/tvseries/' + tvshowId + '/user/' + userId + '/favourite')
      .then(response => response.json());
  }

  getMyFavouriteMovies(userId: String) {
    return fetch('https://tele-connect-server.herokuapp.com/api/user/' + userId + '/favourite').then(response => {
      return response.json();
    });
  }
}
