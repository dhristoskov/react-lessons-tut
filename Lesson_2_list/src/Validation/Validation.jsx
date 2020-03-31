import React from 'react'

const Validation = (props) => {

    let valMsg;

    if(props.length > 1 && props.length <= 5){
        valMsg = 'Text is too short'
    }
    if(props.length > 5){
        valMsg = 'The text is long enought' 
    }

    return(
        <p>{valMsg}</p>
    );
}

export default Validation;