import expect from 'expect'
import * as actions from '../../actions'
import * as types from '../../constants/ActionTypes.js'

describe('note actions', () => {
  it('addNote should create ADD_NOTE action', () => {
    expect(actions.addNote('Use Redux')).toMatch({
      type: types.ADD_NOTE,
      text: 'Use Redux',
      id: /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/
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
