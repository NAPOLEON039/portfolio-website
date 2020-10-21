import React from 'react'
import Home from './pages/Home'

import Navbar from './components/Navbar'

import './App.css'

const App = () => {
    return(
        <div className="app">
            <Home />
            <Navbar />
        </div>
    )
}

export default App