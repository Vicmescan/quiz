import React from 'react'
import { Spinner } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export const Loading = () => {
    
    const navigate = useNavigate();

    setTimeout(() => {
        navigate('./game');
    } , 5000);

    return (
        <>
            <div className='loading'>
                <Spinner animation="border" variant="dark" style={{ margin: "80vh 0 0 49vw" }} />
            </div>

        </>
    )
}
