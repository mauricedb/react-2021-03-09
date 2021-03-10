import React from 'react';

export function LabelInput({ label, value, name, onChange, error }) {
  function onInputChange(e) {
    onChange([name], e.target.value);
  }

  return (
    <div className="mb-3">
      <label className="form-label" htmlFor={name}>
        {label}
      </label>
      <input
        id={name}
        type="text"
        className="form-control"
        value={value}
        onChange={onInputChange}
      />
      {error && <div>{error}</div>}
    </div>
  );
}
