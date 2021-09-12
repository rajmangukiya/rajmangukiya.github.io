import React, { useEffect, useRef, useState } from 'react'
import Home from './home/Home';
import WaterWaves from '../Components/WaterWaves';
import About from './about/About';
import Contact from './contact/Contact';
import Work from './work/Work';

const Main: React.FC<any> = () => {

    return (
        <div id="main" className="main">
            <Home />
            <Work />
            <About />
            <Contact />
        </div>
    )
}

export default Main;