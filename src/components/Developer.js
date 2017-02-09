import React from 'react';

import DeveloperProjectCard from './DeveloperProjectCard';
const data = require('../public/projects')



class Developer extends React.Component{
  render() {
    return(
      <div className="Dev-Project-Card-Container">
        {data.projects.map((project, index) => {
          return(
            <DeveloperProjectCard {...project} key={index} />
          );
        })}
      </div>
    );
  }
}

export default Developer;
