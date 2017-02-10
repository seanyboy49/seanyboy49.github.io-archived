import React from 'react';

import ProjectCard from './ProjectCard';

const data = require('../public/developer')



class Developer extends React.Component{
  render() {
    return(
      <div>
        <img src="src/public/slider-images/Developer-01-01.svg" className="slider"/>
        <div className="Dev-Project-Card-Container">
          {data.projects.map((project, index) => {
            return(
              <ProjectCard
                {...project}
                key={index}
                profile="developer"
                />
            )
          })}
        </div>
    </div>

    )
  }
}

export default Developer;
