import React from 'react'
import '../styles/DeveloperProjectCard.css'

class DeveloperProjectCard extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="Dev-Project-Card">
        <p>Project Card goes here</p>
        <h1>{this.props.title}</h1>
        <p>{this.props.description}</p>
        <p>{this.props.date}</p>
        <p>{this.props.service}</p>
        <p>{this.props.client}</p>
        <p>{this.props.github}</p>
      </div>
    )
  }
}


export default DeveloperProjectCard
