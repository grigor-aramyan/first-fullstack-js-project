import React, { Component } from 'react';
import axios from 'axios';
import Header from './Header';
import OfferingsList from './OfferingsList';
import IntroInfo from './IntroInfo';
import Footer from './Footer';

export default class App extends Component {
  constructor(props) {
    super(props);
  
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

  render() {
    
    return (
      <div>
        <Header auth={this.props.auth} />
        <div className="container">
          <IntroInfo />
          <OfferingsList />
        </div>
        <Footer />
      </div>
    );
  }
}
