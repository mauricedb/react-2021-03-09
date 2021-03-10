import React from 'react';

export function Summary({ jokes }) {
  return (
    <div>
      <h2>Jokes Summary</h2>

      <p>There are {jokes.length} jokes</p>
    </div>
  );
}
