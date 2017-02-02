import React from 'react';
import { Link } from 'react-router'

import { connect } from 'react-redux';
import { selectProfile } from '../actions/index';
import { bindActionCreators } from 'redux';

class Navigation extends React.Component{

  condition() {
    if(this.props.profile==='Developer') {
      console.log('Changed state to Developer');
    } else {
      console.log('State hasnt changed yet');
    }
  }

  handleClick(e) {
    this.props.selectProfile(e.target.innerHTML)
  }

  render() {
    return(
      <div >
        <div className="nav-bar" style={{"backgroundColor": "#3498db"}}>
            <a className="panel" onClick={this.handleClick.bind(this)}>Developer</a>
            <a className="panel" onClick={() => this.props.selectProfile('Developer')}>Designer</a>
            <a className="panel" onClick={() => this.props.selectProfile('Developer')}>Filmmaker</a>
        </div>
        {this.condition()}
        {this.props.children}
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectProfile: selectProfile }, dispatch)
}

function mapStateToProps(state) {
  console.log('mapStateToProps', state);
  return { profile: state.profile}
}


export default connect(mapStateToProps, mapDispatchToProps)(Navigation)
