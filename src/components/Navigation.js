import React from 'react';
import { Link } from 'react-router'

import { connect } from 'react-redux';
import { selectProfile } from '../actions/index';
import { bindActionCreators } from 'redux';

class Navigation extends React.Component{
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this)
    this.handleScroll=this.handleScroll.bind(this)
  }

  handleScroll(e) {
    console.log('scrolling', e);
  }

  handleClick(e) {
    this.props.selectProfile(e.target.innerHTML)
  }

  render() {
    return(
      <div >
        <div className="nav-bar" onScroll={this.handleScroll}>
            <a className="panel" onClick={this.handleClick}>Developer</a>
            <a className="panel" onClick={this.handleClick}>Designer</a>
            <a className="panel" onClick={this.handleClick}>Filmmaker</a>
            <a className="panel" onClick={this.handleClick}>About</a>

        </div>
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
