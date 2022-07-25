import React from 'react'
import ReactDOM from 'react-dom/client'
import { GlobalStyles } from './global-styles'
import App from './App'

// set up BrowserRouter
import { BrowserRouter as Router } from 'react-router-dom'

// redux setup
import { Provider } from 'react-redux'
import configureStore from './store/store'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <GlobalStyles />
    <Router>
      <Provider store={configureStore}>
        <App />
      </Provider>
    </Router>
  </React.StrictMode>
)
