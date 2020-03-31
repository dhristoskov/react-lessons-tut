import React from 'react';

const Student = (student) => {
    return(
        <div className='studentWrapper'>
            <p>Student name: {student.name}</p>
            <p>Age: {student.age}<span> Grade: {student.grade}</span></p>
            <button onClick={student.delete}>Delete</button>
        </div>
    );
}

export default Student;