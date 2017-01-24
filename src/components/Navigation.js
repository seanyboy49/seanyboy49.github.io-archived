import React from 'react';
import { Link } from 'react-router'

class Navigation extends React.Component{
  render() {
    return(
      <div >
        <div className="nav-bar" style={{"backgroundColor": "#3498db"}}>
            <div className="panel"><Link to="/developer">Developer</Link></div>
            <div className="panel"><Link to="/designer">Designer</Link></div>
            <div className="panel"><Link to="/filmmaker">Filmmaker</Link></div>
            <div className="panel"><Link to="/resume">Resume</Link></div>
        </div>
        {this.props.children}
      </div>
    )
  }
}

export default Navigation
