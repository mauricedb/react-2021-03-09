import React from 'react';
import movies from './movies.json';
import { MovieItem } from './MovieItem';

export function MovieList({ header, toDetails }) {
  return (
    <div>
      <h2>{header}</h2>
      <ul>
        {movies.map((movie) => (
          <MovieItem key={movie.id} movie={movie} toDetails={toDetails} />
          //   <MovieItem key={movie.id} {...movie} />
        ))}
      </ul>
      {/* <pre>{JSON.stringify(movies, null, 2)}</pre> */}
    </div>
  );
}

// export default MovieList;
