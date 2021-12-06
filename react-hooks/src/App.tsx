import React from 'react';
import './App.css';
import { Counter } from './components/Counter';
import { Wallet } from './components/Wallet';


function App() {
  return (
    <div className="container">
      <Counter />
      <Wallet />
    </div>
  );
}

export default App;
