import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Users } from './components/Users/Users';
import { UserProvider } from './hooks/users';
import './globalStyles.scss';
import { UserInfo } from './components/Users/UserInfo';

function App() {
  return (
    <UserProvider>
      <Routes>
        <Route path="/"  element={< Users/>} />
        <Route path="/details/:id"  element={< UserInfo/>}/>
      </Routes>
    </UserProvider>
  );
}

export default App;
