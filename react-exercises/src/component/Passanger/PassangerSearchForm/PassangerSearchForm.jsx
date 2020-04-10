import React, { Fragment, useState } from 'react';

const PassangerSearchForm = () => {

    const [ oneWay, setOneWay ] = useState(true)

    const onToggleOneWay = () => {
        setOneWay(!oneWay);
    }
    
    let inputs = <input type='date' />

    if(oneWay){
        inputs = <div>
                    <input type='date' />
                    <input type='date' />
                </div>
    }

    return(
        <Fragment>
            <div>
                <button disabled={!oneWay} onClick={onToggleOneWay}>One-Way</button>
                <button disabled={oneWay} onClick={onToggleOneWay}>Rount-Trip</button>
            </div>
            <div>
                <input type='text' placeholder='from...' />
                <input type='text' placeholder='to...' />
            </div>
           {inputs}
        </Fragment>
    )

}

export default PassangerSearchForm;