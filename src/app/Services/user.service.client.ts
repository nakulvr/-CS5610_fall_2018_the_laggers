export class UserServiceClient {
  login(username, password) {
    const credentials = {
      username: username,
      password: password
    };
    console.log("user service");
    console.log(username, password);
    return {
      username: 'hari',
      password: '123',
      Firstname: 'hari',
      lastname: 'siva',
      email: 'a@a.com',
      followers: [],
      following: [],
      comments: []
    };
    // return fetch('url', {
    //   method: 'post',
    //   body: JSON.stringify(credentials),
    //   credentials: 'include',
    //   headers: {
    //     'content-type': 'application/json'
    //   }
    // }).then(response => response.json());
  }
  findUsername(username) {
    const credentials = {
      username: username,
    };
    return null;
    // return fetch('url', {
    //   method: 'post',
    //   body: this.JSON.stringify(credentials),
    //   credentials: 'include',
    //   headers: {
    //     'content-type': 'application/json'
    //   }
    // }).then(response => response.json());
  }

  createUser(username, password) {
    const user = {
      username: username,
      password: password
    };

    return {
      username: 'hari',
      password: '123',
      Firstname: '',
      lastname: '',
      email: '',
      followers: [],
      following: [],
      comments: []
    };
    // return fetch('https://secure-coast-10881.herokuapp.com/api/user', {
    //   body: JSON.stringify(user),
    //   credentials: 'include', // include, same-origin, *omit
    //   method: 'post',
    //   headers: {
    //     'content-type': 'application/json'
    //   }
    // });
  }

}
