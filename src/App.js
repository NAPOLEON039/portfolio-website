import React from 'react'
import Home from './pages/Home'
import About from './pages/About'

import Navbar from './components/Navbar'

import './App.css'

const App = () => {
    return(
        <div className="app">
            <About />
            <Navbar />
        </div>
    )
}

export default App