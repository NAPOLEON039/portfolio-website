import React from 'react'

import '../../public/assets/homePageBoySitting.svg'
import './Home.css'

const Home = () => (
    <div className="home">
        <div className="heading">
            <h1>I'm <span id="text-name">Nihar,</span></h1>
            <h1>Web Developer</h1>
        </div>
        <div className="image">
            <img width="30px" height="30px" src="../../public/assets/homePageBoySitting.svg" />
        </div>
    </div>
)

export default Home