export class AuthService {
  loggedIn = false;

  isAuthenticated() {
    if (this.loggedIn) {
      return new Promise((resolve) => {
        resolve(this.loggedIn);
      });
    }

    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log('Resolving...');
        resolve(this.loggedIn);
      }, 1000);
    })

    return promise;
  }

  login() {
    this.loggedIn = true;
    console.log('LoggedIn: ', this.loggedIn);
  }

  logout() {
    this.loggedIn = false;
    console.log('LoggedIn: ', this.loggedIn);
  }
}
