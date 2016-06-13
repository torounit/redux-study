import { createStore } from 'redux'
import rootReducer from '../reducers'
import { loadState, saveState } from '../api/localStorage'


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
  store.subscribe( () => {
    saveState({
      notes: store.getStete().notes
    })
  })

  return store
}

export default configureStore
