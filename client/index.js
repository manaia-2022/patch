import { Auth0Provider } from '@auth0/auth0-react'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'

import App from './components/App'
import store from './store'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    /**
     * Auth0Provider is a component that has a hook that provides
     * all authorization operations
     *
     * TODO: replace the empty strings below with your own domain, clientId, and audience
     */
    <Auth0Provider
      domain=''
      clientId=''
      redirectUri={window.location.origin}
      audience=''
    >
      <Provider store={store}>
        <Router>
          <App />
        </Router>
      </Provider>
    </Auth0Provider>,
    document.getElementById('app')
  )
})
