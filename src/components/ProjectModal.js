import React from 'react'

const modal = document.createElement('div');


class ProjectModal extends React.Component {
  constructor(props) {
    super(props)
    this.renderModal = this.renderModal.bind(this);
  }

  componentDidMount() {
    console.log('component did mount', this.props);
  }
  componentDidUpdate() {
    console.log('component updated', this.props)
  }

  renderModal(props) {
    if(props.isOpen === true) {
      modal.classList.add('Modal-Open')
      document.body.append(modal)
      console.log('modal is open', props);
    }
  }
  render() {
    console.log('inside render', this.props);
    return (
      <div>
        {
          this.props.isOpen ? <h1>Hello</h1> : null
        }
      </div>
    )
  }
}

export default ProjectModal
