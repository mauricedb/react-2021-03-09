import React from 'react';
import {
  BrowserRouter,
  HashRouter,
  Route,
  Switch,
  Link,
} from 'react-router-dom';
import './App.css';

import { Cat } from './components/Cat';
import { Dog } from './components/Dog';
import notFound from './components/404.jpg';

function App() {
  return (
    <BrowserRouter>
      <div>
        <header>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/cat">Cat</Link>
            </li>
            <li>
              <Link to="/dog">Dog</Link>
            </li>
          </ul>
        </header>

        <Switch>
          <Route path="/cat/:catName">
            <Cat />
          </Route>
          <Route path="/cat">
            <Cat />
          </Route>
          <Route path="/dog">
            <Dog />
          </Route>

          <Route path="/" exact>
            <p>Make your choice</p>
          </Route>

          <Route>
            <img src={notFound} alt="Route not found" />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
