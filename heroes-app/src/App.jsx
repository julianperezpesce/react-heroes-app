import React, { useEffect, useReducer } from 'react';
import { AuthContext } from './auth/AuthContext';
import { authReducer } from './auth/authReducer';
import { AppRouter } from './routers/AppRouter';

const init = () => {
  // getItem('user') me dio error, tuve que cambiar el key a name o vacio
  return JSON.parse(localStorage.getItem('name')) || { logged: false }; 
};

function App() {  

  const [ user, dispatch ] = useReducer(authReducer, {}, init);

  useEffect(() => {
    localStorage.getItem('user', JSON.stringify( user ));
  }, [ user ])

  return (

      <AuthContext.Provider value={{ user, dispatch }}>
        <AppRouter />
      </AuthContext.Provider>  
  )
}

export default App;
