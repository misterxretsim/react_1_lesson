import './index.css'
import '@fontsource/roboto'
import React from 'react'
import ReactDOM from 'react-dom'
import Router from './Components/Router/Router'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Router />
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
)
