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


  useEffect(() => {
    const fetchData = async () => {
      fetch(`https://api.trivia.willfry.co.uk/questions?limit=2`)
        .then(res => res.json())
        .then(result => {
          const all = result[0];
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


  let prove = (e) => {
    e.preventDefault();
    let clickedAns = mixAnswer[e.target.id]
    if (clickedAns === correctAnswer) {
      setSentence("Yes, Great")
      setMixAnswer("")
      setPoints(points + 1)
      setTimeout(() => {
        if (counter === data.length - 1) {
          finish(1)
        } else {
            nextQuest(e)
        }
      },2500)
    } else {
      setSentence(`bad, it was ${correctAnswer}`)
      setMixAnswer("")
      setTimeout(() => {
        if (counter === data.length - 1) {
          finish(0)
        } else {
            nextQuest(e)
        }  
      }, 3000);
    }
  }

  const navigate = useNavigate()

  let finish = (x) => {
    alert(`Finish, your score this time is ${points + x} points`)
    if (localStorage.getItem('maxScore') < points + x) {
      localStorage.setItem('maxScore', points + x)
    }
    if (window.confirm("Do you want to play again?")) {
      window.location.reload(false);
    } else {
      navigate('/')
    }
  }

  return (

    <Container className="vh-80 ms-auto" >
      <Card className="text-center justify-content-center">
        <Card.Header>Question: {counter + 1}, Points: {points} </Card.Header>
        <Card.Body>
          <Card.Title>{category}</Card.Title>
          <Card.Text>
            {question}
          </Card.Text>
          <Container fluid="md">
            <Row className="justify-content-md-center">
              <Col md="auto">
                <ButtonGroup className="m-1" >
                  <Button className="button" id="0" size="xxl" onClick={(e) => prove(e)} >| {mixAnswer[0]} |</Button>
                </ButtonGroup>
              </Col>
              <Col md="auto">
                <ButtonGroup className="m-1" >
                  <Button className="button" id="1" size="xxl" onClick={(e) => prove(e)} >| {mixAnswer[1]} |</Button>
                </ButtonGroup>
              </Col>
              <Col md="auto">
                <ButtonGroup className="m-1" >
                  <Button className="button" id="2" size="xxl" onClick={(e) => prove(e)} >| {mixAnswer[2]} |</Button>
                </ButtonGroup>
              </Col>
              <Col md="auto">
                <ButtonGroup className="m-1" >
                  <Button className="button" id="3" size="xxl" onClick={(e) => prove(e)} >| {mixAnswer[3]} |</Button>
                </ButtonGroup>
              </Col>
            </Row>
          </Container>
        </Card.Body>
        <Card.Footer ><h4>{sentence}</h4></Card.Footer>
      </Card>
    </Container>
  )
};
