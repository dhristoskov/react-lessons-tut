import React from 'react';

const UserInput = (props) => {
    return(
        
        //С props викаме методи и текущите стойности от App.js, но задължително
        //със същите имена дадени в App.js - change, currentName

        <input style={{padding: '0.7em'}} type='text' //<-- Some inline styling
        onChange={props.change} value={props.currentName} /> //<-- change props and currenName props in App.js, 
    );
}

export default UserInput;