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

  createMarkup(props) {
    if(this.props.profile==='developer') {
      let html= (`
      <div class="Modal-Container">
        <h1>${props.title}</h1>
        <img src=src/public/developer-fullsize/${props.fullsize} class="Project-Card-Image"/>
        <p>${props.description}</p>
        <ul>
          <li><b>Date:</b> ${props.date}</li>
          <li><b>Client:</b> ${props.client}</li>
          <li><b>Service:</b> ${props.service}</li>
        </ul>
      </div>
      `);
      props.media ? html += (
        `<video width="350" height="734" controls autoplay>
          <source src="src/public/developer-fullsize/${props.title}.mp4" type="video/mp4">
          <source src="movie.ogg" type="video/ogg">
        </video>`
      ) : html
    return html;
  } else if (this.props.profile==='designer') {
      return `
      <div class="Modal-Container">
        <h1>${props.title}</h1>
        <img src=src/public/designer-thumbnails/${props.thumbnail} class="Project-Card-Image"/>
        <p>${props.description}</p>
        <ul>
          <li><b>Date:</b> ${props.date}</li>
          <li><b>Product:</b> ${props.product}</li>
          <li><b>Service:</b> ${props.service}</li>
        </ul>
      </div>
      `
    }
  }

  renderModal() {
        modal.classList.add('Modal-Open')
        overlay.classList.add('Overlay-Open')
        modal.innerHTML=this.createMarkup(this.props.props)
        document.body.append(overlay)
        document.body.append(modal)
  }
  render() {
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
