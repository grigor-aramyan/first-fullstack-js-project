import React, { Component } from 'react';
import Header from './Header';

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
          some text in container
        </div>
      </div>
    );
  }
}
