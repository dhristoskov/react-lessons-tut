import React, { Fragment, useContext, useState } from 'react';

import DestinationList from '../../component/Destination/DestinationList/DestinationList';
import DesetinationForm from '../../component/Destination/DestinationForm/DestinationForm';
import { DestinationContext } from '../../context/destinationContext/destinationContext';
import DetailedInfo from '../../component/Passanger/DetailedInfo/DetailedInfo';
import PassangerSearchForm from '../../component/Passanger/PassangerSearchForm/PassangerSearchForm'

const DestinationMain = () => {

    const { dispatch } = useContext(DestinationContext);
    const [ selected, setSelected ] = useState('');

    const addDestinationHandler = (newDestination) => {
        dispatch({type: 'ADD_DESTINATION', newDestination:{id: new Date(), ...newDestination}});
    }

    const delDestinationHandler = (id) => {
        dispatch({type: 'REMOVE_DESTINATION', id})
    }
    const onSelectedHandler = (selectedItem) => {
        setSelected(selectedItem)
    }

    const onCloseSelected = () => {
        setSelected('')
    }

    let selectedItem = null;

    if(selected){
    selectedItem = <DetailedInfo
     price={selected.price}
     flightFrom={selected.flightFrom}
     flighHour={selected.flighHour}
     destination={selected.destination}
     duration={selected.duration}  
     close={onCloseSelected}/>
    }

    return (
        <Fragment>
            <PassangerSearchForm />
            <DestinationList 
            delete={delDestinationHandler}
            select={onSelectedHandler}/>
            <DesetinationForm 
            addNew={addDestinationHandler}/>
            {selectedItem}
        </Fragment>
    )
}

export default DestinationMain;