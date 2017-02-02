import React, { Component } from 'react';
import Navigation from './Navigation';
import CardsContainer from './CardsContainer';
import Modal from './Modal'

export default class App extends Component {

  ModalCondition() {
    if(this.props.activeCard===null) {
      return
    } else {
      <Modal />
    }
  }

  render() {
    return (
      <div>
        <Navigation />
        <CardsContainer />
        {this.ModalCondition()}
      </div>
    )
  }
}
