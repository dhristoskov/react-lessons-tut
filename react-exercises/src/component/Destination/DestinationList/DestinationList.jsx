import React, { useContext, Fragment } from 'react';

import DestinationItem from '../DestinationItem/DestinationItem';
import { DestinationContext } from '../../../context/destinationContext/destinationContext';

const DestinationList = (props) => {

    const { destinations } = useContext(DestinationContext);

    let list = <div >Destination List is Empty </div>

    if(destinations.length > 0) {
       list = <Fragment>
                { destinations.map(dest => {
                return ( <DestinationItem key={dest.id}                       
                        flightFrom={dest.flightFrom}
                        flighHour={dest.flighHour}
                        destination={dest.destination}
                        duration={dest.duration} 
                        price={dest.price}
                        delete={() => props.delete(dest.id)}
                        select={() => props.select(dest)}/> )
                })}        
            </Fragment>
    }

    return (
        <ul>
            {list}
        </ul>        
    )
}

export default DestinationList;