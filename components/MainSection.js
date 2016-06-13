import React, { Component, PropTypes } from 'react'
import Note from './Note'


class MainSection extends Component {
  constructor(props, context) {
    super(props, context)
  }

  render() {
    const { notes, actions } = this.props

    return (
      <section className="main">
        <ul className="note-list">
          {notes.map(note =>
            <Note key={note.id} note={note} {...actions} />
          )}
        </ul>
      </section>
    )
  }
}

MainSection.propTypes = {
  notes: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}

export default MainSection
