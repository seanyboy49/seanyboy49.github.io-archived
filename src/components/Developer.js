import React from 'react'
import DeveloperProjectCard from './DeveloperProjectCard'
const data = require('../public/projects')

const shows = data
const puke = obj => {
  return <pre>{JSON.stringify(obj, 2, ' ')}</pre>
}

class Developer extends React.Component {
  render() {
    return(
      <div>
        <h1>Developer muhhfucker</h1>
        <DeveloperProjectCard></DeveloperProjectCard>
          {puke(data)}
      </div>
    )
  }
}

export default Developer
