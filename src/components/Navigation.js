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


  handleScrollCallback() {
    const NavBar = this.refs.NavBar;
    const topOfNav = NavBar.offsetTop;

    const mq = window.matchMedia( "(min-width: 376px)" );

    if (window.scrollY > topOfNav && mq.matches) {
      document.body.style.paddingTop=NavBar.offsetHeight + 'px';
      document.body.classList.add('fixed-nav')
    } else {
      document.body.classList.remove('fixed-nav')
      document.body.style.paddingTop = 0
    }
  }


  handleClick(e) {
    this.props.selectProfile(e.target.innerHTML)
  }

  render() {
    return(

      <div >
        <ScrollEvent handleScrollCallback={this.handleScrollCallback} />
        <nav id="nav-bar" ref="NavBar" >
        <ul>
            <li className="logo"><a href="#">SEAN</a></li>
            <li> <Link to="/developer">Developer</Link></li>
            <li> <Link to="/designer">Designer</Link></li>
            <li> <Link to="/filmmaker">Filmmaker</Link></li>
            <li> <Link to="/about">About</Link></li>
        </ul>
        </nav>
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
