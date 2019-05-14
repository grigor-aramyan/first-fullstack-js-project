import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import App from './components/App';
import AboutUs from './components/AboutUs';

ReactDOM.hydrate(
  <Router>
    <Route exact path="/" component={App} />
    <Route path="/about" component={AboutUs} />
  </Router>,
  document.getElementById('root')
);
