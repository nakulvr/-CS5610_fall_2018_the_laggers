export class UserServiceClient {
  // let URL = 'https://tele-connect-server.herokuapp.com/';
  login(username, password) {
    const credentials = {
      username: username,
      password: password
    };
    // console.log('user service');
    // console.log(username, password);
    // return {
    //   username: 'hari',
    //   password: '123',
    //   Firstname: 'hari',
    //   lastname: 'siva',
    //   email: 'a@a.com',
    //   followers: [],
    //   following: [],
    //   comments: []
    // };
    return fetch('https://tele-connect-server.herokuapp.com/api/login', {
      method: 'post',
      body: JSON.stringify(credentials),
      //credentials: 'include',
      headers: {
        'content-type': 'application/json'
      }
    }).then(response => response.json());
  }

  setUser(user) {
    fetch('https://tele-connect-server.herokuapp.com/api/session/set/curr_user/'+ user.username);
  }

  getUser() {
    console.log('inside get user service')
    return fetch('https://tele-connect-server.herokuapp.com/api/session/get/curr_user/').then(response => response);
  }

  findUserByUsername(username) {
    console.log("inside findusername client service");
    const credentials = {
      username: username,
    };
    // return null;
    return fetch( 'https://tele-connect-server.herokuapp.com/api/username/' + username).then(response => response.json());
    // , {
    //   method: 'post',
    //   //credentials: 'include',
    //   body: JSON.stringify(credentials),
    //   headers: {
    //     'content-type': 'application/json'
    //   }
    // }).then(response => response.json());
  }

  createUser(username, password) {
    console.log("inside register client service");
    const user = {
      username: username,
      password: password
    };

    // return {
    //   username: 'hari',
    //   password: '123',
    //   Firstname: '',
    //   lastname: '',
    //   email: '',
    //   followers: [],
    //   following: [],
    //   comments: []
    // };
    return fetch('https://tele-connect-server.herokuapp.com/api/user', {
      body: JSON.stringify(user),
      method: 'post',
      //credentials: 'include',
      headers: {
        'content-type': 'application/json'
      }
    }).then(response => response.json());
  }

  profile() {
    // return {
    //   username: 'hari',
    //   password: '123',
    //   firstName: 'hari',
    //   lastName: 'siva',
    //   email: 'a@a.com'
    // };
      return fetch('https://tele-connect-server.herokuapp.com/api/profile',
      {
        credentials: 'include',
      }).then(response => response.json());
  }

  updateUser(user) {
    // return user;
    console.log(user._id);
    return fetch('https://tele-connect-server.herokuapp.com/api/user/'+user._id, {
      method: 'PUT',
      body: JSON.stringify(user),
      //credentials: 'include',
      headers: {
        'content-type': 'application/json'
      }
    });
  }

  logout() {
    fetch('https://tele-connect-server.herokuapp.com/api/session/reset');
  }
}
