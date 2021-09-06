import React from 'react'
import { Container, Nav, Navbar, NavDropdown, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" sticky="top" className="header-nav">
                <Container style={{ height: '60px' }}>
                    <Navbar.Brand href="#main">Protfolio</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav>
                            <Nav.Link href="#work">Work</Nav.Link>
                            <Nav.Link eventKey={2} href="#about">
                                About
                            </Nav.Link>
                            <Nav.Link href="#contact" eventKey={3}>
                                Contact
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Header
