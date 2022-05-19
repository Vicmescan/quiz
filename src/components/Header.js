import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap'
import { Clock } from './Clock';
import { Weather } from './Weather';
import '../App.css'
import { useNavigate } from 'react-router-dom';



export const Header = () => {

  let maxScore = localStorage.getItem('maxScore') || 0;

  const navigate = useNavigate();
  return (
    <Navbar bg="light" expand="lg" >
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Navbar.Brand onClick={()=>navigate('/game')} style={{cursor:"pointer"}}>Game</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=>navigate('/about')}>About</Nav.Link>
          </Nav>
          <hr></hr>
          <Nav className="me-auto">
            Max Score: {maxScore} points
          </Nav>
          <hr></hr>
          <Nav className="me-auto">
            <Weather />
          </Nav>
        </Navbar.Collapse>
        <Navbar.Brand><Clock /></Navbar.Brand>
      </Container>
    </Navbar>
  )
};
