import React from 'react'

const DeveloperProjectCard = (props) =>
  (
      <div>
        <p>Project Card goes here</p>
        <h1>{props.title}</h1>
        <p>{props.description}</p>
        <p>{props.date}</p>
        <p>{props.service}</p>
        <p>{props.client}</p>
        <p>{props.github}</p>
      </div>
    )


export default DeveloperProjectCard
