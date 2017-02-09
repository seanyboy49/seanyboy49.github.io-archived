import React, { Component } from 'react';
import ScrollEvent from 'react-onscroll';
import { connect } from 'react-redux';


import Navigation from './Navigation';
import CardsContainer from './CardsContainer';

class App extends Component {
  constructor(props) {
    super(props);

    this.handleScrollCallback=this.handleScrollCallback.bind(this)
  }

  handleScrollCallback(e) {
    console.log('scrolling', e);
  }

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
        <img src="src/public/slider-images/Developer-01-01.svg" className="slider"/>
      )
    }
    else if (this.props.profile==='Filmmaker') {
      return (
        <img src="src/public/slider-images/Filmmaker-01.svg" className="slider"/>
      )
  }
    else if (this.props.profile==='Designer') {
      return (
        <img src="src/public/slider-images/Designer-01.svg" className="slider"/>
      )
    }
  }

  render() {
    return (
      <div>
        <Navigation />
          <ScrollEvent handleScrollCallback={this.handleScrollCallback} />
        {this.SliderCondition()}
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
