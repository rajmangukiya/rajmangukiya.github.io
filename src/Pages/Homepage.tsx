import React, { useEffect, useState } from 'react'
import { Button, Container } from 'react-bootstrap'
import { useHistory, useLocation } from 'react-router-dom';
import Background from '../Components/Background';

interface homepageProps {

}

const Homepage: React.FC<homepageProps> = () => {
    
    return (
        <div className="homepage">
            <Container>
                
            </Container>
            <Background />
        </div>
    )
}

export default Homepage;