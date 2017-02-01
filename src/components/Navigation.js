import React from 'react';
import { Link } from 'react-router'

import { connect } from 'react-redux';
import { selectProfile } from '../actions/index';
import { bindActionCreators } from 'redux';

class Navigation extends React.Component{

  handleClick(e) {
    this.props.selectProfile(e.target.innerHTML)
    console.log('handle click', e.target.innerHTML);
  }

  render() {
    return(
      <div >
        <div className="nav-bar" style={{"backgroundColor": "#3498db"}}>
            <a className="panel" onClick={this.handleClick.bind(this)}>Developer</a>
            <a className="panel" onClick={() => this.props.selectProfile('Developer')}>Designer</a>
            <a className="panel" onClick={() => this.props.selectProfile('Developer')}>Filmmaker</a>
        </div>
        {this.props.children}
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectProfile: selectProfile }, dispatch)
}



export default connect(null, mapDispatchToProps)(Navigation)
