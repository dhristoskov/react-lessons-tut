import React, { useContext } from 'react';
import { AuthContext } from './context/auth-context';

import Ingredients from './components/Ingredients/Ingredients';
import Auth from './components/Auth';

const App = props => {
  const { isAuth } = useContext(AuthContext);

  let content = <Auth />
  if(isAuth){
    content = <Ingredients />
  }

  return content;
};

export default App;
