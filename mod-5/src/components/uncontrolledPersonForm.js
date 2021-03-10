import React from 'react';

export function UncontrolledPersonForm({ initialPerson }) {
  const [person, setPerson] = React.useState(initialPerson);
  const firstNameRef = React.useRef();

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();

        console.log(e.target.elements);

        const personToSave = {
          ...person,
          firstname: e.target.elements.firstName.value,
          surname: e.target.elements.surname.value,
        };

        console.log(personToSave);

        // setPerson({ ...person, firstname: 'Maurice' });
      }}
    >
      <div className="mb-3">
        <label className="form-label">Firstname</label>
        <input
          type="text"
          name="firstName"
          className="form-control"
          defaultValue={person.firstname}
          ref={firstNameRef}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Surname</label>
        <input
          type="text"
          name="surname"
          className="form-control"
          defaultValue={person.surname}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Address</label>
        <textarea
          className="form-control"
          rows={3}
          defaultValue={person.address}
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
      <button
        className="btn btn-primary"
        type="button"
        onClick={(e) => {
          firstNameRef.current.value = 'A new name';
        }}
      >
        Update
      </button>
    </form>
  );
}
