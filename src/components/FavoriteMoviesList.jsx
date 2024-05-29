import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromFavorites } from '../redux/actions/favoriteActions';
import './MoviesComponent.css'; // Use the same CSS for styling

const FavoriteMoviesList = () => {
  const favoriteMovies = useSelector(state => state.favoriteMovies.favorites);
  const dispatch = useDispatch();

  const handleUnfavorite = (id, e) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch(removeFromFavorites(id));
  };

  return (
    <div className="container">
      <h1>Favorite Movies List</h1>
      <ul className="movies-list">
        {favoriteMovies.map(movie => (
          <li 
            key={movie.id} 
            className="movie-item" 
            onClick={() => window.open(movie.imdb_url, '_blank', 'noopener,noreferrer')}
          >
            <div className="movie-details">
              <h2>{movie.movie}</h2>
              <p>Rating: {movie.rating}</p>
              <img
                src={movie.image_url}
                alt={movie.movie}
                className="movie-image"
              />
              <div>
                <a href={movie.imdb_url} target="_blank" rel="noopener noreferrer">IMDB</a>
              </div>
              <button onClick={(e) => handleUnfavorite(movie.id, e)}>Unfavorite</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FavoriteMoviesList;