import expect from 'expect'
import * as storage from '../../api/localStorage.js'

const state = [
  {
    text: 'Run the test.',
    id: 0
  }
]

describe('localStorage api', () => {
  afterEach(() => {
    localStorage.clear()
    localStorage.itemInsertionCallback = null
  })

  it('should write state to localStorage', () => {
    storage.saveState(state)
    expect(
      JSON.parse(localStorage.getItem('state'))
    ).toEqual(state)
  })

  it('should return undefined with errors when writing', () => {
    localStorage.itemInsertionCallback = () => {
      let err = new Error('Mock localStorage quota exceeded')
      err.code = 22
      throw err
    }
    expect(
      storage.saveState()
    ).toEqual('error')
  })

  it('should return undefined with empty localStorage', () => {
    localStorage.setItem('state', {})
    expect(storage.loadState()).toEqual(undefined)
  })

  it('should read state from localStorage', () => {
    localStorage.setItem('state', JSON.stringify(state))
    expect(storage.loadState()).toEqual(state)
  })

  it('should return undefined with errors when reading', () => {
    localStorage.clear()
    expect(
      storage.loadState()
    ).toEqual(undefined)
  })

})
