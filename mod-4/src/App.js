import { Page } from './components/page';

import jokes from './data/jokes.json';

function App() {
  return (
    <div>
      <h1>Redux</h1>
      <Page jokes={jokes} />
    </div>
  );
}

export default App;
