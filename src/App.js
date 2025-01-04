// src/App.js
import React, { useState } from 'react';
import MovieList from './components/MovieList';
import Filter from './components/Filter';
import './styles.css';

function App() {
  const [movies, setMovies] = useState([
    {
      title: 'Inception',
      description: 'A thief who steals corporate secrets through the use of dream-sharing technology.',
      posterURL: 'https://via.placeholder.com/150',
      rating: 8.8
    },
    {
      title: 'The Dark Knight',
      description: 'Batman faces the Joker, a criminal mastermind who wants to create chaos.',
      posterURL: 'https://via.placeholder.com/150',
      rating: 9.0
    }
  ]);

  const [filterTitle, setFilterTitle] = useState('');
  const [filterRating, setFilterRating] = useState('');

  const filteredMovies = movies.filter((movie) => {
    return (
      movie.title.toLowerCase().includes(filterTitle.toLowerCase()) &&
      (filterRating ? movie.rating >= filterRating : true)
    );
  });

  const addMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
  };

  return (
    <div className="App">
      <h1>Application de Cinéma</h1>
      <Filter
        filterTitle={filterTitle}
        filterRating={filterRating}
        setFilterTitle={setFilterTitle}
        setFilterRating={setFilterRating}
      />
      <MovieList movies={filteredMovies} />
      <button onClick={() => addMovie({
        title: 'Avengers: Endgame',
        description: 'The Avengers assemble to reverse the damage done by Thanos.',
        posterURL: 'https://via.placeholder.com/150',
        rating: 8.4
      })}>
        Ajouter un film
      </button>
    </div>
  );
}

export default App;
