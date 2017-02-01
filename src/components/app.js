import React, { Component } from 'react';
import Navigation from './Navigation';
import Developer from './Developer';

export default class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <Developer />
      </div>
    )
  }
}
