import React from 'react'
import ProjectModal from './ProjectModal.js'

class ProjectCard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showModal: false
    }
    this.handleOnClick = this.handleOnClick.bind(this)
  }

  handleOnClick() {
    this.setState({showModal: true})
  }

  render() {
    return (
      <div>
      <ProjectModal
        isOpen={this.state.showModal}
        props = {this.props}
        profile={this.props.profile}
        />
      <div className="Dev-Project-Card"
        onClick={this.handleOnClick}>

        <div className="hidden">
          <h1>{this.props.title}</h1>
        </div>
        <img src={`src/public/${this.props.profile}-images/${this.props.thumbnail}`} className="Project-Card-Image"/>
      </div>
      </div>
    )
  }
}


export default ProjectCard
