import React from 'react'

class DeveloperProjectCard extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="Dev-Project-Card">
        <h1>{this.props.title}</h1>
      </div>
    )
  }
}


export default DeveloperProjectCard
