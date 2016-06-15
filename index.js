import "./stylus/main.styl"

import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import Root from './components/Root'
import configureStore from './store/configureStore'


const store = configureStore()

render(
  <Root store={store} />,
  document.getElementById('root')
)
