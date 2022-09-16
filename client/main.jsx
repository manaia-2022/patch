import './tailwind.css'

import { Auth0Provider } from '@auth0/auth0-react'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import App from './App'
import { store } from './redux/store'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Auth0Provider
    domain='manaia-2022-jp.au.auth0.com'
    clientId='ZEzmKwG2iLwaMlUrDVocsbJIB0oByDyc'
    redirectUri={window.location.origin}
    audience='https://patch/api'
  >
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </Auth0Provider>
)
