import React from 'react';

const Char = (props) => {
    const style={ //<-- inline-styled component
        display: 'inline-block',
        padding: '16px',
        margin: '16px',
        textAlign: 'center',
        border: '2px solid black',
        cursor: 'pointer'
    }

    //Ползваме props, за да прихванем зададените в App.js
    //променливи бутона clicked и буквите chars които сме задали в App.js 
    return(
        <div style={style} onClick={props.clicked}>
            {props.chars}
        </div>
    )
}

export default Char;