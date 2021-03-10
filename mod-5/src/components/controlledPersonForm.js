import React from 'react';

export function ControlledPersonForm({ initialPerson }) {
  const [person, setPerson] = React.useState(initialPerson);

  return (
    <form>
      <div className="mb-3">
        <label className="form-label">Firstname</label>
        <input type="text" className="form-control" />
      </div>
      <div className="mb-3">
        <label className="form-label">Surname</label>
        <input type="text" className="form-control" />
      </div>
      <div className="mb-3">
        <label className="form-label">Address</label>
        <textarea className="form-control" rows={3} />
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
