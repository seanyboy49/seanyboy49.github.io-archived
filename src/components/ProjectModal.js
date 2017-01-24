import React from 'react'

const modal = document.createElement('div');


class ProjectModal extends React.Component {
  constructor(props) {
    super(props)
    this.renderModal = this.renderModal.bind(this);
  }

  componentDidMount() {
    console.log('component did mount', this.props);
    this.renderModal(this.props)
  }
  componentDidUpdate() {
    console.log('component updated', this.props)
    this.renderModal(this.props)
  }

  renderModal(props) {
    if(props.isOpen === true) {
      modal.classList.add('Modal-Open')
      document.body.append(modal)
      console.log('modal is open', props);
    }
  }
  render() {
    return null
  }
}

export default ProjectModal
