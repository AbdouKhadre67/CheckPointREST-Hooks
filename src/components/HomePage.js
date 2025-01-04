// HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';

const movies = [
  { id: 1, title: 'Film 1', description: 'Description du film 1', trailerLink: 'https://www.youtube.com/embed/xyz' },
  { id: 2, title: 'Film 2', description: 'Description du film 2', trailerLink: 'https://www.youtube.com/embed/abc' },
];

const HomePage = () => {
  return (
    <div>
      <h1>Liste des Films</h1>
      <div className="movies">
        {movies.map((movie) => (
          <div key={movie.id} className="movie-card">
            <h2>{movie.title}</h2>
            <p>{movie.description}</p>
            <Link to={`/movie/${movie.id}`}>Voir la description</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
