import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.render(
    <BrowserRouter>
    <App />
    </BrowserRouter>
    , document.getElementById('root'))


    //tutorial from here https://www.youtube.com/watch?v=i6L2jLHV9j8
    //menu starter code from here https://github.com/negomi/react-burger-menu
    //I know the values and the displayed names don't match, but I wanted to have fun with it.