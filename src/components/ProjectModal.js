import React from 'react'

const overlay = document.createElement('div')
const modal = document.createElement('div');

overlay.addEventListener('click', closeModal)

function closeModal(e) {
  modal.classList.remove('Modal-Open')
  modal.innerHTML=''
  overlay.classList.remove('Overlay-Open')
}


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
    <div class="Modal-Container">
      <h1>${props.title}</h1>
      <img src=src/public/developer-images/${props.thumbnail} class="Project-Card-Image"/>
      <p>${props.description}</p>
      <ul>
        <li><b>Date:</b> ${props.date}</li>
        <li><b>Client:</b> ${props.client}</li>
        <li><b>Service:</b> ${props.service}</li>
      </ul>
    </div>
    `
  }

  renderModal() {
        modal.classList.add('Modal-Open')
        overlay.classList.add('Overlay-Open')
        modal.innerHTML=this.createMarkup(this.props.props)
        document.body.append(overlay)
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
