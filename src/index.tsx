import React from 'react'
import './index.css'
import {store} from './redux/redux-store'
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import {Provider} from 'react-redux'
import App from './App'

const renderTree = () => {
  ReactDOM.render(
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>,
    document.getElementById('root'),
  )
}

renderTree()

store.subscribe(() => {
  renderTree()
})