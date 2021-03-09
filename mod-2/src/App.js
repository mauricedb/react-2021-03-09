import 'bootstrap/dist/css/bootstrap.css';

import { Jokes } from './components/jokes';
import { Accounts } from './components/accounts';

function App() {
  return (
    <div>
      <h1>Authoring React Components</h1>

      <Jokes />
      <Accounts />
    </div>
  );
}

export default App;
