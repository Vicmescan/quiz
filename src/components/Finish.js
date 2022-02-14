import { Button } from 'bootstrap';
import React from 'react'
import { Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { Footer } from './Footer';
import { Header } from './Header';


export const Finish = (points) => {

    const navigate = useNavigate()

    let clickHandler = (e) => {
        console.log("hello");
    }
    // let finish = () => {
    //     setTimeout(() => {
    //         alert(`Finish, your score this time is ${points} points`)
    //         if (window.confirm("Do you want to play again?")) {
    //             window.location.reload(false);
    //         } else {
    //             navigate('/')
    //         }
    //     }, 2000)
    // }

    return (
        <div>
            <Header />
            <Card className="text-center">
                <Card.Header>Finish</Card.Header>
                <Card.Body>
                    <Card.Title>Your score is {points} points</Card.Title>
                    <Card.Text>
                        Do you want to play again or do you want to exit?
                    </Card.Text>

                </Card.Body>
                <Card.Footer className="text-muted">
                    <a href="/" className="btn btn-primary">Exit</a>
                    <a href="/game" className="btn btn-primary">Play Again</a>
                </Card.Footer>
            </Card>
            <Footer />

        </div>
    )
}
