import React from 'react';
import { Link } from 'react-router'
import ScrollEvent from 'react-onscroll';


import { connect } from 'react-redux';
import { selectProfile } from '../actions/index';
import { bindActionCreators } from 'redux';



class Navigation extends React.Component{
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this)
    this.handleScrollCallback=this.handleScrollCallback.bind(this)

  }


  handleScrollCallback(e) {
    const NavBar = this.refs.NavBar;
    const topOfNav = NavBar.offsetTop;
    console.log(topOfNav, 'topOfNav');

    if(window.scrollY >= topOfNav) {
      document.body.style.paddingTop=NavBar.offsetHeight + 'px';
      document.body.classList.add('fixed-nav')
    }
  }


  handleClick(e) {
    this.props.selectProfile(e.target.innerHTML)
  }

  render() {
    return(

      <div >
        <ScrollEvent handleScrollCallback={this.handleScrollCallback} />

        <ul id="nav-bar" ref="NavBar" >
            <li className="panel logo"><a href="#">SEAN</a></li>
            <li className="panel"> <Link to="/developer">Developer</Link></li>
            <li className="panel"> <Link to="/designer">Designer</Link></li>
            <li className="panel"> <Link to="/filmmaker">Filmmaker</Link></li>
            <li className="panel"> <Link to="/about">About</Link></li>

        </ul>
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
