// src/components/MovieList.js
import React from 'react';

function MovieList({ movies }) {
  // Vérification que `movies` est un tableau avant d'utiliser .map()
  if (!Array.isArray(movies)) {
    return <p>Pas de films disponibles.</p>;
  }

  return (
    <div>
      {movies.map((movie, index) => (
        <div key={index}>
          <h2>{movie.title}</h2>
          <img src={movie.posterURL} alt={movie.title} />
        </div>
      ))}
    </div>
  );
}

export default MovieList;
