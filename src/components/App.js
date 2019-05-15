import React, { Component } from 'react';
import axios from 'axios';
import Header from './Header';
import OfferingsList from './OfferingsList';
import IntroInfo from './IntroInfo';
import Footer from './Footer';

export default class App extends Component {
  constructor() {
    super();
    this.state = { inputV: '' };
  }

  componentDidMount() {
    axios.get('/users')
      .then(function(res) {
        console.log(res.data.firstname);
      })
      .catch(function(err) {
        console.log('in case of error');
      })
      .finally(function() {
        console.log('finally always executed');
      });
  }

  onChange = (e) => {
    this.setState({ inputV: e.target.value });
  }

  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <IntroInfo />
          <OfferingsList />
        </div>
        <Footer />
      </div>
    );
  }
}
