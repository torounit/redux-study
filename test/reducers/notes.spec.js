import expect from 'expect'
import notes from '../../reducers/notes.js'
import * as types from '../../constants/ActionTypes.js'

describe('notes reducer', () => {
  it('should handle initial state', () => {
    expect(
      notes(undefined, {})
    ).toEqual([])
  })

  it('should handle ADD_NOTE', () => {
    expect(
      notes([], {
        type: types.ADD_NOTE,
        text: 'Run the test.',
      })[0]
    ).toMatch(
      {
        "text": /Run the test/,
        "id": /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/
      }
    )

    let [a, b] = notes([
      {
        text: 'Run the test.',
        id: 0
      }], {
        type: types.ADD_NOTE,
        text: 'Use Redux',
      })

    expect(a).toMatch(
      {
        "text": /Use Redux/,
        "id": /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/
      }
    )
    expect(b).toEqual(
      {
        text: 'Run the test.',
        id: 0
      }
    )
  })

  it('should handle DELETE_NOTE', () => {
    expect(
      notes([
        {
          text: 'Run the test.',
          id: 0
        },
        {
          text: 'Use Redux.',
          id: 1
        }
      ], {
        type: types.DELETE_NOTE,
        id: 1
      })
    ).toEqual([
      {
        text: 'Run the test.',
        id: 0
      }
    ])
  })

  it('should handle EDIT_NOTE', () => {
    expect(
      notes([
        {
          text: 'Run the test.',
          id: 0
        },
        {
          text: 'Use Redux.',
          id: 1
        }
      ], {
        type: types.EDIT_NOTE,
        id: 0,
        text: 'Fix the test.'
      })
    ).toEqual([
      {
        text: 'Fix the test.',
        id: 0
      },
      {
        text: 'Use Redux.',
        id: 1
      }
    ])
  })
})
