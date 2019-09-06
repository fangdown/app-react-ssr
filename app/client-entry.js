import ReactDom from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import React from 'react'
import { Provider } from 'react-redux'
import 'normalize.css'
import './global.less'
import createApp from './createApp'

// eslint-disable-next-line no-underscore-dangle
const { router, store } = createApp(window.__STORE__)

ReactDom.hydrate(
  // eslint-disable-next-line react/jsx-filename-extension
  <Provider store={store}>
    <BrowserRouter>{router}</BrowserRouter>
  </Provider>,
  document.getElementById('app')
)
