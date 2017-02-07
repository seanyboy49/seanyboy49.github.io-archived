import React, { Component} from 'react';
import { connect } from 'react-redux';

import DeveloperProjectCard from './DeveloperProjectCard'
const data = require('../public/projects')

class CardsContainer extends Component {
  constructor(props) {
    super(props);

    this.handleOnClick=this.handleOnClick.bind(this)

  }

  handleOnClick(e) {
    console.log('inside CardsContainer onClick method', e.target);
  }

  condition() {
    if(this.props.profile==='Developer') {
      return (
        <div>
          <div className="Dev-Project-Card-Container">
            {data.projects.map((project, index) => {
              return(
                <DeveloperProjectCard {...project} key={index} onCardSelect={this.handleOnClick}/>
              )
            })}
        </div>
        </div>
      )
    } else {
      console.log('State hasnt changed yet');
    }
  }

  render() {
    return (
      <div>
        {this.condition()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { profile: state.profile}
}

export default connect(mapStateToProps, null)(CardsContainer);
