import React, { useEffect, useState } from 'react';
import { Card, Button, ButtonGroup, Container, Row, Col } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import '../App.css';


export const Questions = () => {

 

  const [data, setData] = useState([]);
  const [category, setCategory] = useState("");
  const [correctAnswer, setCorrectAnswer] = useState("");
  const [question, setQuestion] = useState("");
  const [mixAnswer, setMixAnswer] = useState([1, 2, 3]);
  const [counter, setCounter] = useState(0);
  const [sentence, setSentence] = useState("")
  const [points, setPoints] = useState(0)


  let nextQuest = (e) => {
    e.preventDefault();
    const all = data[counter + 1];
    setCategory(all.category)
    setQuestion(all.question)
    setCorrectAnswer(all.correctAnswer)
    let together = ([all.incorrectAnswers[0], all.incorrectAnswers[1], all.incorrectAnswers[2]])
    together.splice(Math.floor(Math.random() * 4), 0, all.correctAnswer)
    console.log(together);
    setMixAnswer(together)
    setCounter(counter + 1)
    setSentence("")
  }

  useEffect(() => {
    const fetchData = async () => {
      fetch(`https://api.trivia.willfry.co.uk/questions?limit=2`)
        .then(res => res.json())
        .then(result => {
          const all = result[counter];
          console.log(result);
          setCategory(all.category)
          setQuestion(all.question)
          setCorrectAnswer(all.correctAnswer)
          let together = ([all.incorrectAnswers[0], all.incorrectAnswers[1], all.incorrectAnswers[2]])
          together.splice(Math.floor(Math.random() * 4), 0, all.correctAnswer)
          console.log(together);
          setMixAnswer(together)
          setData(result)
        })
        .catch(err => {
          console.log("catch", err);
        })
    }
    fetchData()
  }, []);

  let prove = (e) => {
    e.preventDefault();
    let clickedAns = mixAnswer[e.target.id]
    if (clickedAns === correctAnswer) {
      setSentence("ole tus webos")
      setMixAnswer("")
      setPoints(points + 1)
      if (counter === data.length - 1) {
        setPoints(points)
        finish()
      } else {
        setTimeout(() => {
          nextQuest(e)
        }, 3000)
      }
    } else {
      setSentence("cagada")
      setMixAnswer(" ")
      if (counter === data.length - 1) {
        finish()
      } else {
        setTimeout(() => {
          nextQuest(e)
        }
          , 3000)
      }
    }
  }

  const navigate = useNavigate()

  let finish = () => {  
      alert(`Finish, your score this time is ${points} points`)
      if (window.confirm("Do you want to play again?")) {
        window.location.reload(false);
      }else {
        navigate('/')
      }
  }

  return (

    <>
      <Card className="text-center">
        <Card.Header>Question: {counter + 1}, Points: {points} </Card.Header>
        <Card.Body>
          <Card.Title>{category}</Card.Title>
          <Card.Text>
            {question}
          </Card.Text>
          <Container fluid="md">
          <Row className="justify-content-md-center">
          <Col md="auto"> 
          <ButtonGroup className="m-2" >
            <Button className="button" id="0" size="lg" onClick={(e) => prove(e)} >1- {mixAnswer[0]} </Button>
          </ButtonGroup>
          </Col>
          <Col md="auto">
          <ButtonGroup className="m-2" >
            <Button className="button" id="1" size="lg" onClick={(e) => prove(e)} >2- {mixAnswer[1]} </Button>
          </ButtonGroup>
          </Col>
          <Col md="auto">
            <ButtonGroup className="m-2" >
            <Button className="button" id="2" size="lg" onClick={(e) => prove(e)} >3- {mixAnswer[2]} </Button>
          </ButtonGroup>
          </Col>
          <Col md="auto">
          <ButtonGroup className="m-2" >
            <Button className="button" id="3" size="lg" onClick={(e) => prove(e)} >4- {mixAnswer[3]} </Button>
          </ButtonGroup>
          </Col>
          </Row>
          </Container>
        </Card.Body>
        <Card.Footer className="text-muted">{sentence}</Card.Footer>
        <Button onClick={nextQuest}>Next Question {counter + 1}</Button>
      </Card>
    </>
  )
};
