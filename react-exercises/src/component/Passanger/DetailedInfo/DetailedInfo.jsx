import React from 'react';


const DetailedInfo = (props) => {


    return(
        <div style={{border: '1px solid black'}}>
            <p onClick={props.close}>x</p>
            <h1>{props.price}</h1>
            <h4>Flight from {props.flightFrom}</h4>
            <h4> {props.flighHour} </h4>
            <h4>Flight to {props.destination}</h4>
            <p>Flight duration: {props.duration}</p>
            <ul>
                <li>Economy</li>
                <li>Bussiness</li>
                <li>First Class</li>
            </ul>
            <div>
                <label htmlFor='passengers'>Passengers</label>
                <input type="number" min='1' max='6' id='passengers'/>           
            </div>
            <button>Buy Now</button>
        </div>
    )
}

export default DetailedInfo;