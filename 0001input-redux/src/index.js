import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import App from './App'
import inputApp from './reducers'

render(
  <Provider store={createStore(inputApp)}>
    <App />
  </Provider>,
  document.querySelector("#app")
);