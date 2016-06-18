import { ADD_NOTE, EDIT_NOTE, DELETE_NOTE } from '../constants/ActionTypes.js'

const initialState  = []

const notes = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NOTE:
      return [
        {
          id: action.id,
          text: action.text
        },
        ...state
      ]

    case DELETE_NOTE:
      return state.filter( note =>
        note.id !== action.id
      )

    case EDIT_NOTE:
      return state.map( note =>
        note.id === action.id ?
          Object.assign({}, note, { text: action.text }) :
          note
      )

    default:
      return state
  }
}

export default notes
