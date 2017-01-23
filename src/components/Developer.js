import React from 'react'
import DeveloperProjectCard from './DeveloperProjectCard'
const data = require('../public/projects')

const projects = data
const puke = obj => {
  return <pre>{JSON.stringify(obj, 2, ' ')}</pre>
}

const parseShows = (data) => {
  data.projects.map((project) => {
    return `
      <div>
        <p>${project.title}</p>
        <p>${project.description}</p>
        <p>${project.date}</p>
        <p>${project.service}</p>
        <p>${project.client}</p>
        <p>${project.github}</p>
      </div>
      `
  })
}

class Developer extends React.Component {
  render() {
    return(
      <div>
        <h1>Developer muhhfucker</h1>
        {projects.projects.map((project) => {
          return(
            <DeveloperProjectCard {...project} />
          )
        })}
      </div>
    )
  }
}

export default Developer
