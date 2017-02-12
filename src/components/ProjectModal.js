import React from 'react'


const overlay = document.createElement('div')
const modal = document.createElement('div');

overlay.addEventListener('click', closeModal)

function closeModal(e) {
  modal.classList.remove('Modal-Open')
  modal.innerHTML=''
  overlay.classList.remove('Overlay-Open')
}

function multipleImages(props) {
  props.fullsize.map((image) => {
    (`
      <img src=src/public/developer-fullsize/${image} class="fullsize-image"/>
      `)
  })
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
        <img src=src/public/developer-fullsize/${props.fullsize} class="fullsize-image"/>
        <p>${props.description}</p>
        <ul>
          <li><b>Date:</b> ${props.date}</li>
          <li><b>Client:</b> ${props.client}</li>
          <li><b>Service:</b> ${props.service}</li>
          <li><b>Github:</b> <a href="${props.github}"> ${props.github}</a></li>
        </ul>
      </div>
      `);

    return html;
  } else if (this.props.profile==='designer') {

      let html=(`
      <div class="Modal-Container">
        <h1 id="developer-title">${props.title}</h1>

        <p>${props.description}</p>
        <ul>
          <li><b>Date:</b> ${props.date}</li>
          <li><b>Product:</b> ${props.product}</li>
          <li><b>Service:</b> ${props.service}</li>
        </ul>
      </div>
      `);

      // var title = document.getElementById('developer-title')
      // console.log(title);
      // var div = document.createElement("div");
      // div.innerHTML = multipleImages(props);
      // div.appendChild(element)
      // html.appendChild(div);
      //  return multipleImages(props);
      return html;
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
