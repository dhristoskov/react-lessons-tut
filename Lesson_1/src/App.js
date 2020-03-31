import React, { useState } from 'react';
import UserOutput from './UserOutput/UserOutput';
import UserInput from './UserInput/UserInput';

function App() {

  const [ pesron ,setPerson ] = useState({
    username: 'Ivan',
    age: '25'
  });

  const handleChange = (e) => {
    setPerson({...pesron, username: e.target.value})
  }

  return (
    <div className="App" style={{margin:'auto',textAlign: 'center',
     display: 'flex', flexDirection: 'column', width: '250px'}}>
      <UserOutput userName={pesron.username} age={pesron.age}/>
      <UserInput change={handleChange} currentName={pesron.username}/>
    </div>
  );
}

export default App;
