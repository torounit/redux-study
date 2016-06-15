import { createStore } from 'redux'
import rootReducer from '../reducers'
import { loadState, saveState } from '../api/localStorage'
import throttle from 'lodash/throttle'


const configureStore = () => {
  const persistedState = loadState()
  const store = createStore(rootReducer, persistedState)

  // Enabling webpack hot module replacement for reducers
  if(module.hot) {
    module.hot.accept('../reducers/', () => {
      const nextReducer = require('../reducers/').default
      store.replaceReducer(nextReducer)
    })
  }

  // Listen state change and save it to localStorage
  store.subscribe( throttle(() => {
    saveState({
      notes: store.getState().notes
    })
  }, 1000))

  return store
}

export default configureStore
