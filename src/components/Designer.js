import React from 'react';

import ProjectCard from './ProjectCard';

const data = require('../public/designer')

class Designer extends React.Component{
  render() {
    return(
      <div>
        <img src="src/public/slider-images/Designer-01.svg" className="slider"/>
        <div className="Dev-Project-Card-Container">
          {data.projects.map((project, index) => {
            return(
              <ProjectCard {...project} key={index} />
            )
          })}
        </div>
    </div>
    );
  }
}

export default Designer;
