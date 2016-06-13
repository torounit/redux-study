import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Header from '../components/Header'
import MainSection from '../components/MainSection'
import * as NoteActions from '../actions'

class App extends Component {
  render() {
    const { notes, actions } = this.props
    return (
      <div>
        <Header addNote={actions.addNote} />
        <MainSection notes={notes} actions={actions} />
      </div>
    )
  }
}

App.propTypes = {
  notes: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}

function mapStateToProps(state) {
  return {
    notes: state.notes
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(NoteActions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
