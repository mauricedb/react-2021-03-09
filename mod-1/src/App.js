import React, { useState } from 'react';
import './App.css';
// import TheMovies from './MovieList';
import { MovieList } from './MovieList';
import { Greeting } from './Greeting';

function App() {
  const [movieId, setMovieId] = useState(null);
  const [movie, setMovie] = useState(null);

  return (
    <div id="main-div">
      <h1>Movies</h1>
      <Greeting name="Maurice" />
      <Greeting name="Jack" />
      {!movieId ? (
        <MovieList header="Cool Movies" toDetails={(id) => setMovieId(id)} />
      ) : (
        <div>
          Detais
          <button onClick={(e) => setMovieId(null)}>To list</button>
        </div>
      )}
    </div>
  );
}

export default App;
