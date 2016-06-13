import React, { Component, PropTypes } from 'react'
import classnames from 'classnames'
import NoteTextInput from './NoteTextInput'

class Note extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      editing: false
    }
  }

  handleDoubleClick() {
    this.setState({ editing: true })
  }

  handleSave(id, text) {
    if (text.length === 0) {
      this.props.deleteNote(id)
    } else {
      this.props.editNote(id, text)
    }
    this.setState({ editing: false })
  }

  render() {
    const { note, deleteNote } = this.props

    let element
    if (this.state.editing) {
      element = (
        <NoteTextInput text={note.text}
                       editing={this.state.editing}
                       onSave={(text) => this.handleSave(note.id, text)} />
      )
    } else {
      element = (
        <div className="view">
          <label onDoubleClick={this.handleDoubleClick.bind(this)}>
            {note.text}
          </label>
          <button className="destroy"
                  onClick={() => deleteNote(note.id)} />
        </div>
      )
    }

    return (
      <li className={classnames({
        editing: this.state.editing
      })}>
        {element}
      </li>
    )
  }
}

Note.propTypes = {
  note: PropTypes.object.isRequired,
  editNote: PropTypes.func.isRequired,
  deleteNote: PropTypes.func.isRequired,
}

export default Note
