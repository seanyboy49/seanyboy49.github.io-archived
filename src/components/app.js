import React, { Component } from 'react';
import Navigation from './Navigation';
import CardsContainer from './CardsContainer';

export default class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <CardsContainer />
      </div>
    )
  }
}
