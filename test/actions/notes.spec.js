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
})
