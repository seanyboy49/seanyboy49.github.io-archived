import React, { Component} from 'react';
import { connect } from 'react-redux';

import DeveloperProjectCard from './DeveloperProjectCard'
const data = require('../public/projects')

class CardsContainer extends Component {

  condition() {
    if(this.props.profile==='Developer') {
      console.log('Changed state to Developer');
    } else {
      console.log('State hasnt changed yet');
    }
  }

  render() {
    return (
      <div>
        Cards Container
        {this.condition()}
    </div>
    )
  }
}

function mapStateToProps(state) {
  return { profile: state.profile}
}

export default connect(mapStateToProps, null)(CardsContainer);
