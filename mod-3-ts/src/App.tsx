import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Greeting } from './greeting';

function App() {
  return (
    <div className="App">
      <Greeting firstName="Maurice" />
    </div>
  );
}

export default App;
