import React, { useState } from 'react';

const DestinationForm = (props) => {

    const [ newDestination, setNewDestination ] = useState({
            price:'',
            flightFrom: '',
            destination: '',
            duration:'',
            flighHour: ''
    })

    const { price, flightFrom, destination, duration, flighHour } = newDestination;

    const onChangeHandler = (e) => {
        setNewDestination({...newDestination, [e.target.name]:e.target.value});
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();
        props.addNew(newDestination);
        setNewDestination({
            price:'',
            flightFrom: '',
            destination: '',
            duration:'',
            flighHour: ''
        })
    }

    return(
        <form onSubmit={onSubmitHandler}>
             <input type='text' name='price' value={price} placeholder='Price' 
            onChange={onChangeHandler} required/>
            <input type='text' name='flightFrom' value={flightFrom} placeholder='Departure from' 
            onChange={onChangeHandler} required/>
            <input type='text' name='duration' value={duration} placeholder='Departure time'
            onChange={onChangeHandler} required />
            <input type='text' name='destination' value={destination} placeholder='Destination' 
            onChange={onChangeHandler} required/>
            <input type='text' name='flighHour' value={flighHour} placeholder='Duration in days' 
            onChange={onChangeHandler} required/>
            <input type='submit' value='Submit' />
        </form>
    )
}

export default DestinationForm;