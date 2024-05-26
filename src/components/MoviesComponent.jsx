import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToFavorites, removeFromFavorites } from '../redux/actions/favoriteActions';
import './MoviesComponent.css'; // Ensure this CSS file exists

const MoviesComponent = () => {
  const [movies, setMovies] = useState([]);
  const apiUrl = process.env.REACT_APP_MOVIES_API_URL;
  const placeholderImage = 'https://via.placeholder.com/150?text=Image+Unavailable';

  // Get the list of favorite movies from Redux state
  const favoriteMovies = useSelector(state => state.favoriteMovies.favorites);
  const dispatch = useDispatch();

  const fetchMovies = () => {
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        const sortedMovies = data.sort((a, b) => b.rating - a.rating);
        setMovies(sortedMovies);
      })
      .catch(error => console.error('Error:', error));
  };

  const toggleFavorite = (id) => {
    const isFavorite = favoriteMovies.some(movie => movie.id === id);
    if (isFavorite) {
      dispatch(removeFromFavorites(id));
    } else {
      const selectedMovie = movies.find(movie => movie.id === id);
      dispatch(addToFavorites(selectedMovie));
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div class="container">
      <h1>Movies</h1>
      <ul className="movies-list">
        {movies.map(movie => (
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
                onError={(e) => e.target.src = placeholderImage}
                className="movie-image"
              />
              <div>
                <a href={movie.imdb_url} target="_blank" rel="noopener noreferrer">IMDb</a>

              </div>
              <div>
                <button onClick={() => toggleFavorite(movie.id)}>
                  {favoriteMovies.some(favMovie => favMovie.id === movie.id) ? 'Unfavorite' : 'Favorite'}
                </button>
              </div>
            </div>
          </li>
          </a>
        ))}
      </ul>
    </div>
  );
};

export default MoviesComponent;
