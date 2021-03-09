import React from 'react';

export const MovieItem = ({ movie, toDetails }) => {
  return (
    <li>
      <div>
        <h3 onClick={() => toDetails(movie.id)}>{movie.title}</h3>

        <img
          src={'//image.tmdb.org/t/p/w185' + movie.poster_path}
          alt={movie.title}
        />
      </div>
    </li>
  );
};

// export const MovieItem = ({ title, poster_path }) => {
//   return (
//     <li>
//       <div>
//         <h3>{title}</h3>

//         <img src={'//image.tmdb.org/t/p/w185' + poster_path} alt={title} />
//       </div>
//     </li>
//   );
// };
