import expect from 'expect'
import * as actions from '../../actions'
import * as types from '../../constants/ActionTypes.js'

describe('note actions', () => {
  it('addNote should create ADD_NOTE action', () => {
    expect(actions.addNote('Use Redux')).toEqual({
      type: types.ADD_NOTE,
      text: 'Use Redux'
    })
  })

  it('deleteNote should create DELETE_NOTE action', () => {
    expect(actions.deleteNote(1)).toEqual({
      type: types.DELETE_NOTE,
      id: 1
    })
  })

  it('editNote shoud create EDIT_NOTE action', () => {
    expect(actions.editNote(1, 'Use Redux everywhere')).toEqual({
      type: types.EDIT_NOTE,
      id: 1,
      text: 'Use Redux everywhere'
    })
  })

})
