import React from 'react'

class DeveloperProjectCard extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    console.log(this.props.thumbnail);
    return (
      <div className="Dev-Project-Card">
        <h1>{this.props.title}</h1>
        <img src={`src/public/developer-images/${this.props.thumbnail}`} className="Project-Card-Image"/>
      </div>
    )
  }
}


export default DeveloperProjectCard
