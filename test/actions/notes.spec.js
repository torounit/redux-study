import expect from 'expect'
import * as actions from '../../actions'

describe('note actions', () => {
  it('addNote should create ADD_NOTE action', () => {
    expect(actions.addNote('Use Redux')).toEqual({
      type: 'ADD_NOTE',
      id: 0,
      text: 'Use Redux'
    })
  })

  it('deleteNote should create DELETE_NOTE action', () => {
    expect(actions.deleteNote(1)).toEqual({
      type: 'DELETE_NOTE',
      id: 1
    })
  })

  it('editNote shoud create EDIT_NOTE action', () => {
    expect(actions.editNote(1, 'Use Redux everywhere')).toEqual({
      type: 'EDIT_NOTE',
      id: 1,
      text: 'Use Redux everywhere'
    })
  })

})
