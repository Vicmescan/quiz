import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap'
import { Clock } from './Clock';
import { Weather } from './Weather';
import '../App.css'


export const Header = () => {

  let maxScore = localStorage.getItem('maxScore') || 0;


  return (
    <Navbar bg="light" expand="lg" >
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Navbar.Brand href="/">Game</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/about">About</Nav.Link>
          </Nav>
          <Nav className="me-auto">
            Max Score: {maxScore} points
          </Nav>
          <Nav className="me-auto">
            <Weather />
          </Nav>
        </Navbar.Collapse>
        <Navbar.Brand><Clock /></Navbar.Brand>
      </Container>
    </Navbar>
  )
};
