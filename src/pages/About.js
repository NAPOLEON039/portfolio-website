import React from 'react'
import Boy from '../../public/assets/aboutPageBoy.svg'
import Circle from '../../public/assets/aboutPageCircle.svg'

import './About.css'

const About = () => {
    return (
        <div className="about">
            <div id="about-info">
                <img id="about-circle" width="600px" src={Circle} />
                <p>Some text</p>
            </div>
            <img id="boy-image" height="550px" src={Boy} />
        </div>
    )
}

export default About