import expect from 'expect'
import notes from '../../reducers/notes.js'

describe('notes reducer', () => {
  it('should handle initial state', () => {
    expect(
      notes(undefined, {})
    ).toEqual([])
  })

  it('should handle ADD_NOTE', () => {
    expect(
      notes([], {
        type: 'ADD_NOTES',
        text: 'Run the test.',
        id: 0
      })
    ).toEqual([
      {
        text: 'Run the test.',
        id: 0
      }
    ])

    expect(
      notes([
        {
          text: 'Run the test.',
          id: 0
        }
      ], {
        type: 'ADD_NOTES',
        text: 'Use Redux',
        id: 1
      })
    ).toEqual([
      {
        text: 'Run the test.',
        id: 0
      },
      {
        text: 'Use Redux',
        id: 1
      }
    ])

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
        type: 'ADD_NOTES',
        text: 'Fix the test.',
        id: 2
      }).toEqual([
        {
          text: 'Run the test.',
          id: 0
        },
        {
          text: 'Use Redux.',
          id: 1
        },
        {
          text: 'Fix the test.',
          id: 2
        },
      ])
    )

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
          type: 'DELETE_NOTE',
          id: 1
        }).toEqual([
          {
            text: 'Run the test.',
            id: 0
          }
        ])
      )
    })
  })

  it('should handle EDIT_NOTE', () => {
    expect([
      {
        text: 'Run the test.',
        id: 0
      },
      {
        text: 'Use Redux.',
        id: 1
      }
    ], {
      type: 'EDIT_NOTE',
      id: 0,
      text: 'Fix the test.'
    }).toEqual([
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
