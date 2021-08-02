import './index.css'
import '@fontsource/roboto'
import React from 'react'
import ReactDOM from 'react-dom'
import Router from './components/Router/Router'
import { store } from './store'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

ReactDOM.render(
    // <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <Router />
            </BrowserRouter>
        </Provider>
    /*</React.StrictMode>*/,
    document.getElementById('root')
)
