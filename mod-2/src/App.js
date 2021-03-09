import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

import { Jokes } from './components/jokes';
import { Accounts } from './components/accounts';
import reactDom from 'react-dom';

function App() {
  const [urlAccounts, setUrlAccount] = React.useState('');
  const [urlJokes, setUrlJokes] = React.useState(
    'https://the-problem-solver-sample-data.azurewebsites.net/jon-skeet'
  );

  return (
    <div>
      <h1>Authoring React Components</h1>

      <button
        onClick={() => {
          setUrlAccount(
            'https://the-problem-solver-sample-data.azurewebsites.net/accounts'
          );
          setUrlJokes(
            'https://the-problem-solver-sample-data.azurewebsites.net/jon-skeet'
          );
        }}
      >
        Load
      </button>

      <Accounts url={urlAccounts} />
      <Jokes url={urlJokes} />
    </div>
  );
}

export default App;
