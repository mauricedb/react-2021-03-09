import React from 'react';

export function Jokes({ jokes }) {
  return (
    <div>
      <h2>Chuck Norris Jokes</h2>
      <ul>
        {jokes.map((joke) => (
          <li key={joke.id}>{joke.joke}</li>
        ))}
      </ul>
    </div>
  );
}
