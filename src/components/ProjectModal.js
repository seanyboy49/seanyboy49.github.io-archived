import React from 'react'

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
      console.log('modal is open');
    }
  }
  render() {
    return null
  }
}

export default ProjectModal
