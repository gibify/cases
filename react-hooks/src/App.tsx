import React from 'react';
import './App.css';
import { EventListener } from './components/EventListener';
// import { Counter } from './components/Counter';
// import { Users } from './components/Users';
// import { Wallet } from './components/Wallet';


function App() {
  return (
    <div className="container">
      {/* <Counter />
      <Wallet />
      <Users /> */}
      <EventListener />
    </div>
  );
}

export default App;
