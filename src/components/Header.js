import React from 'react';
import {Navbar, Container, Nav} from 'react-bootstrap'
import '../App.css'


export const Header = () => {
   

  return (
    <Navbar bg="secondary" expand="lg" >
    <Container>
        <Navbar.Brand href="/">Quiz Game</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
            <Nav.Link href="/game">Game</Nav.Link>
            <Nav.Link href="/info">Info</Nav.Link>           
        </Nav>
        </Navbar.Collapse>
    </Container>
    </Navbar>
  )
};
