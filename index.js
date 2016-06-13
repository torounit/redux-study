import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'
import App from './containers/App'
import { loadState, saveState } from './api/localStorage'

const persistedState = loadState()
const store = configureStore(persistedState)
console.log(store.getState().notes)

// Listen state change and save it to localStorage
store.subscribe( () => {
  saveState({
    notes: store.getState().notes
  })
})

render(
  <Provider store = {store} >
   <App />
  </Provider>,
  document.getElementById('root')
)
