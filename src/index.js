import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import App from './components/App';
import AboutUs from './components/AboutUs';
import AuthCallback from './components/AuthCallback';
import ErrorLogin from './components/ErrorLogin';
import Auth from './auth/Auth';
import Dashboard from './components/Dashboard';

const auth = new Auth();

ReactDOM.hydrate(
  <Router>
    <Route exact path="/" render={ () => <App auth={auth} /> } />
    <Route path="/about" render={ () => <AboutUs auth={auth} /> } />
    <Route path="/callback" render={ () => {
      auth.handleAuthentication();
      
      return <AuthCallback />;
    }} />
    <Route path="/error" component={ErrorLogin} />
    <Route path="/dashboard" render={() => {
      if(auth.isAuthenticated()) {
        return <Dashboard />;
      } else {
        return <ErrorLogin />;
      }

    }} />
  </Router>,
  document.getElementById('root')
);
