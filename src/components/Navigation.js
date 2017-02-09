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
            <span className="panel"> <Link to="/developer">Developer</Link></span>
            <span className="panel"> <Link to="/designer">Designer</Link></span>
            <span className="panel"> <Link to="/filmmaker">Filmmaker</Link></span>
            <span className="panel"> <Link to="/about">About</Link></span>

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
