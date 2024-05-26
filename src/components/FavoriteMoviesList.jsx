import React from 'react';
import { useSelector } from 'react-redux';
import './MoviesComponent.css'; // Use the same CSS for styling

const FavoriteMoviesList = () => {
  const favoriteMovies = useSelector(state => state.favoriteMovies.favorites);

  return (
    <div class="container">
      <h1>Favorite Movies List</h1>
      <ul className="movies-list">
        {favoriteMovies.map(movie => (
          <a
          key={movie.id}
          href={movie.imdb_url}
          target="_blank"
          rel="noopener noreferrer"
          className="movie-link"
         >
          <li key={movie.id} className="movie-item">
            <div className="movie-details">
              <h2>{movie.movie}</h2>
              <p>Rating: {movie.rating}</p>
              <img
                src={movie.image_url}
                alt={movie.movie}
                className="movie-image"
              />
              <div><a href={movie.imdb_url}>IMDB</a></div>
            </div>
          </li>
          </a>
        ))}
      </ul>
    </div>
  );
};

export default FavoriteMoviesList;
