import 'bootstrap/dist/css/bootstrap.min.css';

import { UncontrolledPersonForm } from './components/uncontrolledPersonForm';
import { ControlledPersonForm } from './components/controlledPersonForm';

const initialPerson = {
  id: 1,
  firstname: 'Spears',
  surname: 'Mcmahon',
  email: 'spearsmcmahon@comtract.com',
  balance: 3_213.97,
  phone: '(865) 535-2756',
  address: '674 Moultrie Street\nHobucken\nMaryland',
};

function App() {
  return (
    <div className="container">
      {/* <UncontrolledPersonForm initialPerson={initialPerson} /> */}
      <ControlledPersonForm initialPerson={initialPerson} />
    </div>
  );
}

export default App;
