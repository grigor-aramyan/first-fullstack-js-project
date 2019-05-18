import auth0 from 'auth0-js';

export default class Auth {
    auth0 = new auth0.WebAuth({
        domain: 'mern-practitioner.auth0.com',
        clientID: '4FoS2jAVqhcPtwZlnqADpFiET66kuD11',
        redirectUri: 'http://localhost:4242/callback',
        responseType: 'token id_token',
        scope: 'openid profile'
    });

    constructor() {
        this.login = this.login.bind(this);
        this.logout = this.logout.bind(this);
        this.handleAuthentication = this.handleAuthentication.bind(this);
        this.isAuthenticated = this.isAuthenticated.bind(this);
        this.renewSession = this.renewSession.bind(this);
        
    }

    login() {
        this.auth0.authorize();
    }

    handleAuthentication() {
        this.auth0.parseHash((err, authResult) => {
          if (authResult && authResult.accessToken && authResult.idToken) {
            this.setSession(authResult);
          } else if (err) {
            location.replace('/error');
            console.log(err);
            alert(`Error: ${err.error}. Check the console for further details.`);
          }
        });
    }
    
    setSession(authResult) {

        localStorage.setItem('isLoggedIn', 'true');

        let expiresAt = (authResult.expiresIn * 1000) + new Date().getTime();

        localStorage.setItem('accessToken', authResult.accessToken);
        localStorage.setItem('idToken', authResult.idToken);
        localStorage.setItem('expiresAt', expiresAt);

        location.replace('/dashboard');
    }
    
    renewSession() {
        this.auth0.checkSession({}, (err, authResult) => {
            if (authResult && authResult.accessToken && authResult.idToken) {
             this.setSession(authResult);
            } else if (err) {
             this.logout();
             console.log(err);
             alert(`Could not get a new token (${err.error}: ${err.error_description}).`);
            }
        });
    }
    
    logout() {
        
        // Remove isLoggedIn flag from localStorage
        localStorage.removeItem('isLoggedIn');

        localStorage.removeItem('idToken');
        localStorage.removeItem('accessToken');
        localStorage.removeItem('expiresAt');

        this.auth0.logout({
          returnTo: window.location.origin
        });
    
        // navigate to the home route
        location.replace('/');
    }
    
    isAuthenticated() {
        try {
            let expiresAt = localStorage.getItem('expiresAt');
            return new Date().getTime() < expiresAt;
        } catch (err) {
            return false;
        }
    }
}