import React, { useState, useEffect } from "react";

const AuthContext = React.createContext({
  isLoggedIn: false,
  onLogout: () => {},                       //Just for autocompletion when using it in another components
  onLogin: (email, password) => {},
})

export const AuthContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  useEffect(()=> {
    const storedUserLoggedInInformation = localStorage.getItem('isLoggedIn');

    if(storedUserLoggedInInformation === '1') {
      setIsLoggedIn(true);
    }
  }, [])

  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    localStorage.setItem('isLoggedIn', '1');
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    setIsLoggedIn(false);
  };
  
  return <AuthContext.Provider
    value={{
      isLoggedIn: isLoggedIn,
      onLogin: loginHandler,
      onLogout: logoutHandler,
    }}
  >{props.children}</AuthContext.Provider>
}

export default AuthContext;