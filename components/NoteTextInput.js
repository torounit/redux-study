import React, { Component, PropTypes } from 'react'
import classnames from 'classnames'

class NoteTextInput extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      text: this.props.text || ''
    }
  }

  handleKeyDown(e) {
    const text = e.target.value.trim()
    if (e.which === 13) {
      this.props.onSave(text)
      if (this.props.newNote) {
        this.setState({ text: '' })
      }
    }
  }

  handleSubmit() {
    const text = this.refs.input.value.trim()
    if (!text) {
      return
    }
    this.props.onSave(text)
    if (this.props.newNote) {
      this.setState({ text: '' })
    }
  }

  handleChange(e) {
    this.setState({ text: e.target.value })
  }

  handleBlur(e) {
    if (!this.props.newNote) {
      this.props.onSave(e.target.value)
    }
  }

  render() {
    return (
      <div>
        <textarea className={
          classnames({
            edit: this.props.editing,
            'new-note': this.props.newNote
          })}
          placeholder={this.props.placeholder}
          autoFocus="true"
          ref = "input"
          value={this.state.text}
          onBlur={this.handleBlur.bind(this)}
          onChange={this.handleChange.bind(this)} />
        <button onClick={this.handleSubmit.bind(this)}>Save</button>
      </div>
    )
  }
}

NoteTextInput.propTypes = {
  onSave: PropTypes.func.isRequired,
  text: PropTypes.string,
  placeholder: PropTypes.string,
  editing: PropTypes.bool,
  newNote: PropTypes.bool
}

export default NoteTextInput
