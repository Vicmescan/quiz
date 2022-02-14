import React from 'react';
import {Row, Col, Container, Nav, Navbar} from 'react-bootstrap'
import { Clock } from './Clock';
import { Weather } from './Weather';


export const Footer = () => {
  return (
    <Navbar bg="secondary" expand="xl" fixed='bottom' >
    <Container>
        <Navbar.Brand href="https://github.com/Vicmescan" target="blank" >By VMC</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">    
        {/* <Navbar.Brand href="https://github.com/Vicmescan" target="blank" >By VMC</Navbar.Brand> */}
        </Nav>    
        <Nav className="me-auto">    
            <Clock />
        </Nav>
        <Nav className="me-auto">
            <Weather />
        </Nav>        
        </Navbar.Collapse>
    </Container>
    </Navbar>
   
        
            // <Navbar bg="secondary" expand="xl" fixed='bottom'>
            //     <Container >
            //         <Row>
            //             <Col><Nav.Link href="https://github.com/Vicmescan">By VMC</Nav.Link></Col>
            //             <Col><Clock/></Col>
            //             <Col><Weather/></Col>
            //         </Row>
            //     </Container>
            // </Navbar>
        
    
  )
};
