import React, { PropTypes, Component } from 'react'
import NoteTextInput from './NoteTextInput'

class Header extends Component {
  handleSave(text) {
    if (text.length !== 0) {
      this.props.addNote(text)
    }
  }

  render() {
    return (
      <header className="header">
          <h1>notes</h1>
          <NoteTextInput newNote
                         onSave={this.handleSave.bind(this)}
                         placeholder="What's up today?" />
      </header>
    )
  }
}

Header.propTypes = {
  addNote: PropTypes.func.isRequired
}

export default Header
