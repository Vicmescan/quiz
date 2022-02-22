import React from 'react';
import {Navbar, Container, Nav} from 'react-bootstrap'
import '../App.css'


export const Header = () => {

  let maxScore = localStorage.getItem('maxScore') || 0;
   

  return (
    <Navbar bg="secondary" expand="lg" >
    <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Navbar.Brand href="/">Home</Navbar.Brand>
        <Nav className="me-auto">
            <Nav.Link href="/game">Game</Nav.Link>       
        </Nav>
        </Navbar.Collapse>
        <Navbar.Brand>Max Score: {maxScore} points</Navbar.Brand>
    </Container>
    </Navbar>
  )
};
