import React, { Component } from 'react';
import { connect } from 'react-redux';


import Navigation from './Navigation';
import CardsContainer from './CardsContainer';
import Modal from './Modal'

class App extends Component {

  ModalCondition() {
    if(this.props.activeCard===null) {
      return (
        <div>No activeCard ya knob</div>
      )
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

function mapStateToProps(state) {
  return { activeCard: state.activeCard }
}

export default connect(mapStateToProps, null)(App);
