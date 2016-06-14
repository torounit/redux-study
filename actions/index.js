import * as types from '../constants/ActionTypes.js'
import { v4 } from 'node-uuid'

export const addNote = (text) => ({type: types.ADD_NOTE, text: text, id:v4()})
export const deleteNote = (id) => ({type: types.DELETE_NOTE, id: id})
export const editNote = (id, text) => ({type: types.EDIT_NOTE, id: id, text: text})
