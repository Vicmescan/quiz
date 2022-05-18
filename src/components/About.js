import React from 'react';
import { Header } from './Header';
import { Card } from 'react-bootstrap';
import { AiFillGithub } from 'react-icons/ai';
import { BsLinkedin } from 'react-icons/bs';



export const About = () => {


  return (
    <div>
      <Header />
      <Card>
        <Card.Body>
          <Card.Title variant="secundary"> Special thanks to: </Card.Title>
          <Card.Text>
            I created this App as a final project of the React module. I want to thank "https://the-trivia-api.com/" and the API "openweathermap" without which it would have been impossible to do this project, as well as the team of teachers of Digital Career Institute.
          </Card.Text>
          <Card.Text>
            Víctor Mestre Canto. 
          </Card.Text>
          <Card.Text>
            <a href="https://github.com/Vicmescan" target="_blank" rel="noreferrer" ><AiFillGithub style={{color: 'black', fontSize: '50px'}} /></a>
            <a href="https://www.linkedin.com/in/v%C3%ADctor-mestre-canto-b68a58230/" target="_blank" rel="noreferrer" ><BsLinkedin style={{color: 'black', fontSize: '50px', marginLeft: "1rem" }} /></a>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  )
};
