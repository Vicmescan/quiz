import React, { useEffect, useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';



export const FinishModal = ({ show, setShow, points }) => {

  const [isAre, setIsAre] = useState("is");

  const handleClose = () => setShow(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (points > 1) {
      setIsAre("are")
    }
  },[points])

  return (
    <>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Your score this time {isAre} {points} points</Modal.Title>
        </Modal.Header>
        <Modal.Body>Finish, Do you want to play again?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => window.location.reload()}>
            Accept
          </Button>
          <Button variant="primary" onClick={() => navigate('./about')}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
