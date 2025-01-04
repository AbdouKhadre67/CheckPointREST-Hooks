// src/components/MovieDescriptionPage.js
import React from 'react';
import { useParams, Link } from 'react-router-dom';

const MovieDescriptionPage = ({ movies }) => {
  const { movieId } = useParams();
  const movie = movies.find((m) => m.id === parseInt(movieId));

  if (!movie) {
    return <div>Film non trouvé</div>;
  }

  return (
    <div>
      <h1>{movie.title}</h1>
      <img src={movie.posterURL} alt={movie.title} />
      <p>{movie.description}</p>
      <div>
        <h3>Bande-annonce</h3>
        <iframe
          width="560"
          height="315"
          src={movie.trailerLink}
          title="Bande-annonce"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <Link to="/">Retour à l'accueil</Link>
    </div>
  );
};

export default MovieDescriptionPage;
