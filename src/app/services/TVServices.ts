import {Injectable} from '@angular/core';

@Injectable()
export class TVServiceClient {

  findAllMovies(settings) {
    let defaultSettings = {
      'url': 'https://api.themoviedb.org/3/tv/popular',
      'api_key': '2a755cc702db2b978534603b24da9899',
      'language': 'en-US'
    };
    let s = Object.assign({}, settings, defaultSettings);
    return fetch(s.url + '?page=' + s.pageNum + '&language=' + s.language + '&api_key=' + s.api_key)
      .then(response => response.json());
  }

  createTVseries(tvshow) {
    const tvseries = {
      '_id': tvshow.id,
      'name': tvshow.name,
      'vote_average': tvshow.vote_average
    };
    return fetch('https://tele-connect-server.herokuapp.com/api/tvseries', {
      body: JSON.stringify(tvseries),
      method: 'post',
      headers: {
        'content-type': 'application/json'
      }
    }).then(response => response.json());
  }
  findNewShows() {
    return fetch('https://api.themoviedb.org/3/trending/all/day?api_key=2a755cc702db2b978534603b24da9899')
      .then(response => response.json());
  }

  findGenre() {
    return fetch('https://api.themoviedb.org/3/discover/movie?api_key=2a755cc702db2b978534603b24da9899')
      .then(response => response.json());
  }

  findSeriesById(tvShowId) {
    return fetch('https://api.themoviedb.org/3/tv/' + tvShowId + '?api_key=2a755cc702db2b978534603b24da9899&language=en-US')
      .then(response => response.json());
  }

  searchSeriesByName(tvSeries) {
    return fetch('https://api.themoviedb.org/3/search/tv?query=' + tvSeries + '&api_key=2a755cc702db2b978534603b24da9899&language=en-US&page=1')
      .then(response => response.json());
  }

  findTvSeriesInLocal(tvShowId){
    return fetch('https://tele-connect-server.herokuapp.com/api/tvseries/' + tvShowId).then(response => response.json());
  }
}
