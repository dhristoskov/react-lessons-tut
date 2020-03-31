import React from 'react';

const UserOutput = (person) => {
    return(

        //Взимаме props от Аpp.js и ги ползваме тук посредством
        //props(person) в случая като викаме атрибутите закачени в полето в Аpp.js
        //userName, age
        
        <div style={{fontSize: '18px', fontWeight: '700'}}>
            <p>My name is: {person.userName}</p> 
            <p>I am {person.age} years old</p>
        </div>
    );
}

export default UserOutput;