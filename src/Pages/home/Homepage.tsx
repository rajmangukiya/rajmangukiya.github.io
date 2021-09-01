import React, { useEffect, useState } from 'react'
import { useRef } from 'react';
import { Button, Container } from 'react-bootstrap'
import { useHistory, useLocation } from 'react-router-dom';
import Background from '../../Components/Background';
import Pointer from '../../Components/Pointer';
import WaterWaves from '../../Components/WaterWaves';
import About from '../About';
import Contact from '../contact/Contact';
import Homedata from './Homedata';

interface homepageProps {

}

const Homepage: React.FC<homepageProps> = () => {

    return (
        <div id="main" className="main">
            <Background />
            <Homedata />
            <About />
            <Contact />
            <WaterWaves />
        </div>
    )
}

export default Homepage;