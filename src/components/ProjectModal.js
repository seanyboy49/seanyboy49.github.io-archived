import React from 'react'

const modal = document.createElement('div');


class ProjectModal extends React.Component {
  constructor(props) {
    super(props)
    this.renderModal = this.renderModal.bind(this);
    this.createMarkup = this.createMarkup.bind(this);
  }

  componentDidMount() {
    console.log('component did mount', this.props);
  }
  componentDidUpdate() {
    console.log('component updated', this.props)
  }
  createMarkup(props) {
    return `
    <h1>${props.title}</h1>
    <p>${props.description}</p>
    <p>Date: ${props.date}</p>
    <p>Client: ${props.client}</p>
    <p>Service: ${props.service}</p>
    `
  }

  renderModal() {
        modal.classList.add('Modal-Open')
        modal.innerHTML=this.createMarkup(this.props.props)
        document.body.append(modal)
  }
  render() {
    console.log('inside render', this.props);
    return (
      <div>
        {
          this.props.isOpen ?
          this.renderModal()
          : null
        }
      </div>
    )
  }
}

export default ProjectModal
