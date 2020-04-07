import React, { createContext, useState } from 'react';

export const AuthContext = createContext({
    isAuth: false,
    login: () => {}
});

const AuthContextProvider = (props) => {

    const [ isItAuth, setIsItAuth ] = useState(false);

    const loginHandler = () => {
        setIsItAuth(true);
    }

    return(
        <AuthContext.Provider value={{isAuth: isItAuth, login: loginHandler}}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;