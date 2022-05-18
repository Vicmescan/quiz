import React, { useEffect, useState } from 'react'



export const Weather = () => {

    const APIKEY = "d26fd1940f6beecc33a0afc0393ba6c7"
    const REACT_APP_API_URL = 'https://api.openweathermap.org/data/2.5'
    
    const [lat, setLat] = useState(0);
    const [long, setLong] = useState(0);
    const [data, setData] = useState([]);
    
    useEffect(() => {
        const fetchData = async () => {
            navigator.geolocation.getCurrentPosition(function(position) {
                setLat(position.coords.latitude);
                setLong(position.coords.longitude);
            });
            
            await fetch(`${REACT_APP_API_URL}/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${APIKEY}`)
            .then(res => res.json())
            .then(result => {
                setData(result)            
            });            
        }
        fetchData();
    }, [lat,long])
    
    return (
        <div className='weather'>
            {(typeof data.main != 'undefined') ? (
                <>
                    <h3 className='city'>{data.name}</h3>
                    <p className='weatherP'>{data.main.temp}ºC, {data.weather[0].description}</p>
                </>
            ): (
            <div></div>
        )}
        </div>
    );

}