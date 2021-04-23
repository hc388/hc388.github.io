import React from 'react'
import ReactDOM from 'react-dom'
import {HashRouter} from 'react-router-dom'
import BooksApp from './App'
import './index.css'

ReactDOM.render(<React.StrictMode><HashRouter><BooksApp/></HashRouter></React.StrictMode>, document.getElementById('root'))
