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

  SliderCondition() {
    if(this.props.profile==='Developer') {
      return (
        <img src="src/public/slider-images/Developer-01.svg" className="slider"/>
      )
    }
    console.log('slider', this.props.profile);
  }

  render() {
    return (
      <div>
        <Navigation />
        // {this.SliderCondition()} 
        <CardsContainer />
        {this.ModalCondition()}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { activeCard: state.activeCard, profile: state.profile }
}

export default connect(mapStateToProps, null)(App);
