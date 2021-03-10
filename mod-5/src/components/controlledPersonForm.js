import React from 'react';
import { LabelInput } from './labelInput';

export function ControlledPersonForm({ initialPerson }) {
  const [person, setPerson] = React.useState(initialPerson);

  // console.log('Render');

  function onChange(e) {
    setPerson({ ...person, [e.target.name]: e.target.value });
  }

  function onLabelInputChanges(name, value) {
    const newPerson = { ...person, [name]: value };

    // Validate newPerson

    setPerson(newPerson);
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();

        alert(JSON.stringify(person, null, 2));
      }}
    >
      <LabelInput
        label="Firstname"
        value={person.firstname}
        name="firstname"
        onChange={onLabelInputChanges}
      />

      <LabelInput
        label="Surname"
        value={person.surname}
        name="surname"
        onChange={onLabelInputChanges}
      />
      <div className="mb-3">
        <label className="form-label">Address</label>
        <textarea
          className="form-control"
          rows={3}
          name="address"
          value={person.address}
          onChange={onChange}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Email address</label>
        <input type="text" className="form-control" />
      </div>
      <div className="mb-3">
        <label className="form-label">Phone</label>
        <input type="text" className="form-control" />
      </div>
      <div className="mb-3">
        <label className="form-label">Balance</label>
        <input type="text" className="form-control" />
      </div>
      <button className="btn btn-primary">Save</button>
    </form>
  );
}
