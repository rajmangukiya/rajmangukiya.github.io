import React, { useEffect, useState } from 'react'
import { Button, Container } from 'react-bootstrap'
import { useHistory, useLocation } from 'react-router-dom';

interface homepageProps {

}

const Homepage: React.FC<homepageProps> = () => {
    
    return (
        <div className="homepage">
            <Container>
                <p>Home Page</p>
            </Container>
        </div>
    )
}

export default Homepage;