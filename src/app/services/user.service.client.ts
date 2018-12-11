import {Injectable} from '@angular/core';

@Injectable()
export class UserServiceClient {
  // let URL = 'https://tele-connect-server.herokuapp.com/';
  login(username, password) {
    const credentials = {
      username: username,
      password: password
    };
    return fetch('https://tele-connect-server.herokuapp.com/api/login', {
      method: 'post',
      body: JSON.stringify(credentials),
      headers: {
        'content-type': 'application/json'
      }
    }).then(response => response.json());
  }

  // setUser(user) {
  //   return fetch('http://localhost:3000/api/session/set/curr_user/' + user.username).then(console.log);
  // }

  findUserByUserId(userId) {
    return fetch('https://tele-connect-server.herokuapp.com/api/user/' + userId).then(response => response.json());
  }

  // getUser = () => fetch('http://localhost:3000/api/session/get/curr_user').then(res => res.json());

  findUserByUsername(username) {
    const credentials = {
      username: username,
    };
    return fetch( 'https://tele-connect-server.herokuapp.com/api/username/' + username).then(response => response.json());
  }

  createUser(username, password) {
    const user = {
      username: username,
      password: password
    };

    return fetch('https://tele-connect-server.herokuapp.com/api/user', {
      body: JSON.stringify(user),
      method: 'post',
      headers: {
        'content-type': 'application/json'
      }
    }).then(response => response.json());
  }

  profile() {
      return fetch('https://tele-connect-server.herokuapp.com/api/profile',
      {
        credentials: 'include',
      }).then(response => response.json());
  }

  updateUser(user) {
    return fetch('https://tele-connect-server.herokuapp.com/api/user/'+user._id, {
      method: 'PUT',
      body: JSON.stringify(user),
      headers: {
        'content-type': 'application/json'
      }
    });
  }

  logout() {
    fetch('https://tele-connect-server.herokuapp.com/api/session/reset');
  }
}
