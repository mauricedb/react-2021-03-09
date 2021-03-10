import React from 'react';
import './App.css';

import { Cat } from './components/Cat';
import { Dog } from './components/Dog';
import notFound from './components/404.jpg';

function App() {
  return (
    <div>
      <header>
        <ul>
          <li>Home</li>
          <li>Cat</li>
          <li>Dog</li>
        </ul>
      </header>

      <Cat />
      <Dog />
      <img src={notFound} alt="Route not found" />
    </div>
  );
}

export default App;
