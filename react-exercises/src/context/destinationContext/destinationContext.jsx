import React, { createContext, useReducer } from 'react';
import { destinationReducer } from './destinationReducer';

export const DestinationContext = createContext();

const DestinationContextProvider = (props) => {

    const [ destinations, dispatch ] = useReducer(destinationReducer, [
        {
            id: 1,
            flightFrom: 'London',
            destination: 'Pluto',
            duration:'22',
            flighHour: '22:00',
            price: 2500
        },
        {
            id: 2,
            flightFrom: 'Sofia',
            destination: 'Moon',
            duration:'5',
            flighHour: '21:00',
            price: 3200
        },
        {
            id: 3,
            flightFrom: 'Madrid',
            destination: 'Saturn',
            duration:'28',
            flighHour: '12:00',
            price: 2900
        }
    ]);

    return (
        <DestinationContext.Provider value={{ destinations, dispatch }}>
            {props.children}
        </DestinationContext.Provider>
    )
}

export default DestinationContextProvider;