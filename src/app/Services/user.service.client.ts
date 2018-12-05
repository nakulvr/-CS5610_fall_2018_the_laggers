export class UserServiceClient {
  login(username, password) {
    const credentials = {
      username: username,
      password: password
    };
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
}
