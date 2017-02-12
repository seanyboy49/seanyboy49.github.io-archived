import React from 'react'

const toolTip = document.createElement('div');

class About extends React.Component{
  constructor(props) {
    super(props)

    this.handleOnHover=this.handleOnHover.bind(this);
    this.handleOnLeave=this.handleOnLeave.bind(this);

  }

  handleOnHover(e) {
    toolTip.classList.add('toolTip-open');
    const target = e.target
    const coords = target.getBoundingClientRect();
    document.body.append(toolTip);
    toolTip.style.setProperty('top',`${coords.top - 10}px`)
    toolTip.style.setProperty('left',`${coords.left}px`)
    const tip = target.getAttribute('data-tip')
    toolTip.innerHTML=`<p>${tip}</p>`;
  }

  handleOnLeave() {
    toolTip.classList.remove('toolTip-open')
    toolTip.innerHTML='';
  }

  render() {
    return(
      <div className="about-container">
        <h1 className="header-content">Sean Lee</h1>
        <h2 className="subhead">A programmer, a designer and a filmmaker walk into a bar...</h2>

        <section className="about-content">
          <p>It sounds like the beginning of a terrible joke, but it's actually my resume.</p>
          <p>A creative at heart with a passion for design and technology, I'm drawn towards projects that use bold, beautiful design choices to improve human/computer interaction.</p>
        </section>

        <section className="skills">
          <h2>My Skills</h2>
            <p>It sounds like the beginning of a terrible joke, but it's actually my resume.</p>
            <p>A creative at heart with a passion for design and technology, I'm drawn towards projects that use bold, beautiful design choices to improve human/computer interaction.</p>
        </section>

            <ul className="key-stats">
              <li> <img data-tip="Location" className="icon" src="src/public/icons/Icons_Location.png" onMouseEnter={this.handleOnHover} onMouseLeave={this.handleOnLeave}></img>San Francisco, United States</li>
              <li> <img data-tip="Octocats are awesome!"className="icon" src="src/public/icons/Icons_GitHub.png" onMouseEnter={this.handleOnHover} onMouseLeave={this.handleOnLeave} ></img> <a href="https://github.com/seanyboy49">seanyboy49 </a></li>
              <li> <img data-tip="Job Status" className="icon" src="src/public/icons/Icons_Employed.png" onMouseEnter={this.handleOnHover} onMouseLeave={this.handleOnLeave} ></img>Searching</li>
              <li> <img data-tip="Available for Freelance" className="icon" src="src/public/icons/Icons_Freelance.png" onMouseEnter={this.handleOnHover} onMouseLeave={this.handleOnLeave} ></img>Freelance</li>
              <li> <img data-tip="Get in Touch!" className="icon" src="src/public/icons/Icons_Contact.png" onMouseEnter={this.handleOnHover} onMouseLeave={this.handleOnLeave} ></img><a href="mailto:seanboramlee@gmail.com" target="_top">Contact</a></li>
              <li> <img data-tip="Download My Resume!" className="icon" src="src/public/icons/Icons_Resume.png" onMouseEnter={this.handleOnHover} onMouseLeave={this.handleOnLeave} ></img> <a href="SeanLee.pdf" download>Resume</a></li>
              <li> <img data-tip="Seriously, does this even need an explanation...?" className="icon" src="src/public/icons/Icons_LinkedIn.png" onMouseEnter={this.handleOnHover} onMouseLeave={this.handleOnLeave} ></img> <a href="https://www.linkedin.com/in/seanboramlee">seanboramlee</a></li>
            </ul>
      </div>
    )
  }
}

export default About;
