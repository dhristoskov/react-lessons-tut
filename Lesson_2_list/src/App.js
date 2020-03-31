import React, { useState } from 'react';
import Validation from './Validation/Validation';
import Char from './Char/Char';

function App() {

  const [text, setText ] = useState({
    msg: ''
  })

  //Промяната на текста в полето
  const handleChange = (e) => {
    setText({...text, msg: e.target.value})
  }

  //Изтриване на елемент със splice() метод хващаме индекса 
  //и изтриваме един елемент
    const deleteHandler = (index) => {

    const newText = text.msg.split('');
    newText.splice(index, 1);
    const updatedText = newText.join('');
    setText({msg: updatedText})
  }

  //Разделяме си текста на букви 
  const charArray = text.msg.split('').map((ch, index) => {
    return ( <Char chars={ch} key={index} clicked={() => deleteHandler(index)}/>)
  })

  return (
    <div className="App" style={{textAlign: 'center'}}>
      <input type='text' onChange={handleChange} value={text.msg}/>
      <p>msg: {text.msg}</p>
      <Validation length={text.msg.length}/>
      {charArray}
    </div>
  );
}

export default App;
