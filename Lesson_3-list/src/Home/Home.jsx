import React, { useState, Fragment } from 'react';
import Student from './Student';

const Home = () => {

    const [ students, setStudents ] = useState([ 
        {id:1, name:'Peter', age: 16, grade: 4.45},
        {id:2, name:'Ivan', age: 15, grade: 3.75},
        {id:3, name:'Katia', age: 17, grade: 5.35},
        {id:4, name:'Gerogi', age: 15, grade: 5.00},
        {id:5, name:'Vessi', age: 16, grade: 5.85}
    ])
    //Toggle функция за скриване и показване на 
    //съдаржанието посредством сменянето на boolen 
    //променливата на  true - false
    const [show, setShow] = useState(false);
    const toggleShow = () => {
        setShow(!show);
    }

    //Изтриване на картичка по id като filter списъка
    //и дублицираме съдаржанието му
    const deleteHendler = (id) => {
        const newStudents = [...students.filter(student => student.id !== id)];
        setStudents(newStudents);
    }

    return(
        <Fragment>
            <div className='btnWrapper'>
                <button className='btn' onClick={toggleShow}>Show Students</button>{}
            </div>
            {
                show ?  <div className='main'>
                
                {students.map(student => {
                    return (
                        <Student key={student.id} name={student.name}
                        age={student.age} grade={student.grade} 
                        delete={() => deleteHendler(student.id)} />
                    )
                })}
            </div> : null }  
        </Fragment>
    )
}

export default Home;