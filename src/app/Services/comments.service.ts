import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor() { }

  postCommentForTVSeries(userId: string, tvseriesId: string, comment: string) {
    const commentJson = {
      comment: comment
    };

    return fetch('https://tele-connect-server.herokuapp.com/api/user/' + userId + '/tvseries/' + tvseriesId + '/comment', {
      method: 'post',
      body: JSON.stringify(commentJson),
      headers: {
        'content-type': 'application/json'
      }
    }).then(response => response.json());
  }

  getCommentsForTVSeries(tvseriesId: string) {
      return fetch('https://tele-connect-server.herokuapp.com/api/tvseries/' + tvseriesId + '/comment')
      .then(response => response.json());
  }

  getMyComments(userId: String) {
    return fetch('https://tele-connect-server.herokuapp.com/api/user/' + userId + '/comment').then(response => response.json());
  }
}
