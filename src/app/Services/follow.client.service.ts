import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FollowService {
  constructor() {
  }

  getFollowers(){
    return [{
        "_id": "5c0a60681375f70016056138",
        "username": "testing2",
        "email": "testing2@gmail.com"
    }]
  }

  getFollowing(){
    return [{
      "_id": "5c0a82f2cc9c94001620122c",
      "username": "testing3",
      "email": "testing3@gmail.com"
    }]
  }

  addFollowers(){
    return []; // return success msg -> should be used in user profile page
  }

  addFollowing(){
    return []; // return success msg -> should be used in user profile page
  }

  deleteFollowers(){
    return []; // return new followers array -> should be used in my profile view page
  }

  deleteFollowing(){
    return []; // return new array => should be used in my profile view page
  }

}
