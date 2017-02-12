import React from 'react'

class About extends React.Component{
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
              <li> <img className="icon" src="src/public/icons/Icons_Location.png"></img>San Francisco, United States</li>
              <li> <img className="icon" src="src/public/icons/Icons_GitHub.png"></img> <a href="https://github.com/seanyboy49">seanyboy49 </a></li>
              <li><img className="icon" src="src/public/icons/Icons_Employed.png"></img>Searching</li>
              <li> <img className="icon" src="src/public/icons/Icons_Freelance.png"></img>Freelance</li>
              <li><img className="icon" src="src/public/icons/Icons_Contact.png"></img>Contact</li>
              <li><img className="icon" src="src/public/icons/Icons_Resume.png"></img>Resume</li>
              <li><img className="icon" src="src/public/icons/Icons_LinkedIn.png"></img> <a href="https://www.linkedin.com/in/seanboramlee">seanboramlee</a></li>
            </ul>
      </div>
    )
  }
}

export default About;
