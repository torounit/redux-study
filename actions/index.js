import * as types from '../constants/ActionTypes.js'

export const addNote = (text) => ({type: types.ADD_NOTE, text})
export const deleteNote = (id) => ({type: types.DELETE_NOTE, id: id})
export const editNote = (id, text) => ({type: types.EDIT_NOTE, id: id, text: text})
