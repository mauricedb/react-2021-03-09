import React from 'react';
import { useSelector } from 'react-redux';

export function Jokes() {
  const jokes = useSelector((state) => state.jokes);

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
