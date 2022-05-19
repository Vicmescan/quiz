import React, { useEffect, useState } from 'react';
import { Card, Button, ButtonGroup, Container, Row, Col } from 'react-bootstrap'
import { FinishModal } from './FinishModal';
import '../App.css';



export const Questions = () => {


  // counter for the question
  const [counter, setCounter] = useState(0);

  // array of questions
  const [data, setData] = useState([]);
  const [category, setCategory] = useState("");
  // actual question
  const [question, setQuestion] = useState("");
  // correct answers
  const [correctAnswer, setCorrectAnswer] = useState("");
  // array of answers
  const [mixAnswer, setMixAnswer] = useState([1, 2, 3]);
  // phrase that is seen when you answer and changes depending on whether it is correct or not
  const [sentence, setSentence] = useState("")
  // sum of points obtained in the current game
  const [points, setPoints] = useState(0);
  // the set visible or invisible the answer to the question when you click on the button
  const [visible, setVisible] = useState("block");
  // show the modal for play again when you finish the game
  const [show, setShow] = useState(false);

  useEffect(() => {

    const fetchData = (e) => {
      fetch(`https://the-trivia-api.com/api/questions?limit=10`)
        .then(res => res.json())
        .then(result => {
          // set result to data
          setData(result)
          // take the data of the first question and set it to const all
          const all = result[0];
          // define the first question category
          setCategory(all.category)
          // define the first question
          setQuestion(all.question)
          // define the first question correct answer
          setCorrectAnswer(all.correctAnswer)
          // take the first three incorrect answers of the first question
          let together = ([all.incorrectAnswers[0], all.incorrectAnswers[1], all.incorrectAnswers[2]])
          // shuffle the true answer and the three incorrect answers
          together.splice(Math.floor(Math.random() * 4), 0, all.correctAnswer)
          // set the shuffled answers to the state
          setMixAnswer(together)
        })
        .catch(err => {
          console.log("catch", err);
        })
    }
    fetchData()
  }, []);

  console.log(data);


  let nextQuest = (e) => {
    e.preventDefault();
    // add one to the counter and define the next question
    const all = data[counter + 1];
    setCategory(all.category)
    setQuestion(all.question)
    setCorrectAnswer(all.correctAnswer)
    let together = ([all.incorrectAnswers[0], all.incorrectAnswers[1], all.incorrectAnswers[2]])
    together.splice(Math.floor(Math.random() * 4), 0, all.correctAnswer)
    setMixAnswer(together)
    // make visible the next answers
    setVisible("block")
    // add one to the counter
    setCounter(counter + 1)
    // set the god or the bad sentence invisible
    setSentence("")
  }


  let prove = (e) => {
    e.preventDefault();
    let clickedAns = mixAnswer[e.target.id]
    // if the answer is correct
    if (clickedAns === correctAnswer) {
      setSentence("Yes, Great")
      setVisible("none")
      setPoints(points + 1)
      // wait for 2 seconds and a half for the next question
      setTimeout(() => {
        // if it was the last question invoque the finish function, else the next question
        if (counter === data.length - 1) {
          finish(1)
        } else {
          nextQuest(e)
        }
      }, 2500)
      // if the answer is incorrect
    } else {
      setSentence(`bad, it was ${correctAnswer}`)
      setVisible("none")
      // wait for 2 seconds and a half for the next question
      setTimeout(() => {
        // if it was the last question invoque the finish function, else the next question
        if (counter === data.length - 1) {
          finish(0)
        } else {
          nextQuest(e)
        }
      }, 2500);
    }
  }


  // if counter is equal to the length of the data array, the game is finished and this function is called
  let finish = (x) => {
    setPoints(points + x)
    // if your score is higher than the highscore, it will be the new highscore setting in local storage
    if (localStorage.getItem('maxScore') < points) {
      localStorage.setItem('maxScore', points)
    }
    // ask for another game if the answer is not, got back to the home page
    setShow(true);
  }



  return (

    <Container className="vh-80 mt-5" >
      <FinishModal show={show} setShow={setShow} points={points} />
      <Card className="text-center justify-content-center">
        <Card.Header>Question: {counter + 1} / 10, Points: {points} </Card.Header>
        <Card.Body>
          <Card.Title>{category}</Card.Title>
          <Card.Text>{question}</Card.Text>
          <Container fluid="md">
            <Row className="justify-content-md-center" style={{ display: `${visible}` }}>
              <Col md="auto" className="d-grid gap-2">
                <ButtonGroup className="m-1" >
                  <Button variant="secondary" className="button" id="0" size="lg" onClick={(e) => prove(e)}  > {mixAnswer[0]} </Button>
                </ButtonGroup>
              </Col>
              <Col md="auto" className="d-grid gap-2">
                <ButtonGroup className="m-1" >
                  <Button variant="secondary" className="button" id="1" size="lg" onClick={(e) => prove(e)} > {mixAnswer[1]} </Button>
                </ButtonGroup>
              </Col>
              <Col md="auto" className="d-grid gap-2">
                <ButtonGroup className="m-1" >
                  <Button variant="secondary" className="button" id="2" size="lg" onClick={(e) => prove(e)} > {mixAnswer[2]} </Button>
                </ButtonGroup>
              </Col>
              <Col md="auto" className="d-grid gap-2">
                <ButtonGroup className="m-1" >
                  <Button variant="secondary" className="button" id="3" size="lg" onClick={(e) => prove(e)} > {mixAnswer[3]} </Button>
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
