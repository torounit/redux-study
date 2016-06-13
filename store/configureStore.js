import { createStore } from 'redux'
import rootReducer from '../reducers'


const configureStore = (preloadedStete) => {
  const store = createStore(rootReducer, preloadedStete)

  // Enabling webpack hot module replacement for reducers
  if(module.hot) {
    module.hot.accept('../reducers/', () => {
      const nextReducer = require('../reducers/').default
      store.replaceReducer(nextReducer)
    })
  }

  return store
}

export default configureStore
