import React, { Fragment } from 'react';

const DestinationItem = (props) => {

    return (
        <Fragment>
            <li onClick={props.select}>
                <h2>Price: {props.price}</h2>
                <h4>Flight from {props.flightFrom}<span> {props.flighHour} </span></h4>
                <h4>Flight to {props.destination}</h4>
                <p>Flight duration: {props.duration}</p>           
            </li>
            <button onClick={props.delete}>Remove</button>
        </Fragment>
    )
}

export default DestinationItem;