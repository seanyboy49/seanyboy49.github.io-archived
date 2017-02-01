import React from 'react';
import { Link } from 'react-router'

import { connect } from 'react-redux';
import { selectProfile } from '../actions/index';
import { bindActionCreators } from 'redux';

class Navigation extends React.Component{
  render() {
    return(
      <div >
        <div className="nav-bar" style={{"backgroundColor": "#3498db"}}>
            <div className="panel" onClick={() => this.props.selectProfile()}>Developer</div>
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
