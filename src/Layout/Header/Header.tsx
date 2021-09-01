import React from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" className="header-nav">
                <Container>
                    <Navbar.Brand href="#main">Protfolio</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse >
                        <Nav>
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link eventKey={2} href="#about">
                                About Us
                            </Nav.Link>
                            <Nav.Link href="#contact" eventKey={3}>
                                Contact Us
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Header
