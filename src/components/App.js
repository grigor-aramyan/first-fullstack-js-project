import React, { Component } from 'react';
import Header from './Header';
import OfferingsList from './OfferingsList';
import IntroInfo from './IntroInfo';

export default class App extends Component {
  constructor() {
    super();
    this.state = { inputV: '' };
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
      </div>
    );
  }
}
