// import { useState, useEffect } from 'react';
// import axios from 'axios';
// import './MoviesComponent.css'; // Make sure to create this CSS file

// const MoviesComponent = () => {
//   const [movies, setMovies] = useState([]);
//   const apiUrl = process.env.REACT_APP_MOVIES_API_URL;
//   const placeholderImage = 'https://via.placeholder.com/150?text=Image+Unavailable';

//   const fetchMovies = () => {
//     fetch(apiUrl)
//       .then(response => response.json())
//       .then(data => {
//         const sortedMovies = data.sort((a, b) => b.rating - a.rating);
//         setMovies(sortedMovies);
//       })
//       .catch(error => console.error('Error:', error));
//   };

//   const fetchMoviesWithAxios = () => {
//     axios.get(apiUrl)
//       .then(response => {
//         const sortedMovies = response.data.sort((a, b) => b.rating - a.rating);
//         setMovies(sortedMovies);
//       })
//       .catch(error => console.error('Error:', error));
//   };

//   useEffect(() => {
//     fetchMovies(); // or fetchMoviesWithAxios();
//   }, []);

//   return (
//     <div>
//       <h1>Movies</h1>
//       <ul className="movies-list">
//         {movies.map(movie => (
//           <li key={movie.id} className="movie-item">

//             <div className="movie-details">
//               <h2>{movie.movie}</h2>
//               <p>Rating: {movie.rating}</p>

//               <img 
//               src={movie.image_url} 
//               alt={movie.movie} 
//               onError={(e) => e.target.src = placeholderImage}
//               className="movie-image"
//             />
//     <div>
//     <a href={movie.imdb_url} target="_blank" rel="noopener noreferrer">IMDb</a>
//     </div>
//     </div>


//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default MoviesComponent;




// //favourite button

// import { useState, useEffect } from 'react';
// import axios from 'axios';
// import './MoviesComponent.css'; // Make sure to create this CSS file

// const MoviesComponent = () => {
//   const [movies, setMovies] = useState([]);
//   const [favorites, setFavorites] = useState([]);
//   const apiUrl = process.env.REACT_APP_MOVIES_API_URL;
//   const placeholderImage = 'https://via.placeholder.com/150?text=Image+Unavailable';

//   const fetchMovies = () => {
//     fetch(apiUrl)
//       .then(response => response.json())
//       .then(data => {
//         const sortedMovies = data.sort((a, b) => b.rating - a.rating);
//         setMovies(sortedMovies);
//       })
//       .catch(error => console.error('Error:', error));
//   };

//   const toggleFavorite = (id) => {
//     const index = favorites.indexOf(id);
//     if (index !== -1) {
//       // If movie is already in favorites, remove it
//       setFavorites(prevFavorites => prevFavorites.filter(movieId => movieId !== id));
//     } else {
//       // If movie is not in favorites, add it
//       setFavorites(prevFavorites => [...prevFavorites, id]);
//     }
//   };

//   useEffect(() => {
//     fetchMovies();
//   }, []);

//   return (
//     <div>
//       <h1>Movies</h1>
//       <ul className="movies-list">
//         {movies.map(movie => (
//           <li key={movie.id} className="movie-item">
//             <div className="movie-details">
//               <h2>{movie.movie}</h2>
//               <p>Rating: {movie.rating}</p>
//               <img 
//                 src={movie.image_url} 
//                 alt={movie.movie} 
//                 onError={(e) => e.target.src = placeholderImage}
//                 className="movie-image"
//               />
//               <div>

//                 <a href={movie.imdb_url} target="_blank" rel="noopener noreferrer">IMDb</a>
//               </div>
//               <div>
//                 <button onClick={() => toggleFavorite(movie.id)}>
//                   {favorites.includes(movie.id) ? 'Unfavorite' : 'Favorite'}
//                 </button>
//                 </div>
//             </div>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default MoviesComponent;





// import React from 'react';
// import { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { addToFavorites, removeFromFavorites } from '../redux/actions/favoriteActions';
// import axios from 'axios';
// import './MoviesComponent.css'; // Make sure to create this CSS file

// const MoviesComponent = () => {
//   const [movies, setMovies] = useState([]);
//   const [favorites, setFavorites] = useState([]);
//   const apiUrl = process.env.REACT_APP_MOVIES_API_URL;
//   const placeholderImage = 'https://via.placeholder.com/150?text=Image+Unavailable';

// // Get the list of favorite movies from Redux state

// const favoriteMovies = useSelector(state => state.favoriteMovies.favorites);


//  // Update this line

// // Get the dispatch function from Redux
// const dispatch = useDispatch();

//   const fetchMovies = () => {
//     fetch(apiUrl)
//       .then(response => response.json())
//       .then(data => {
//         const sortedMovies = data.sort((a, b) => b.rating - a.rating);
//         setMovies(sortedMovies);
//       })
//       .catch(error => console.error('Error:', error));
//   };

//   const toggleFavorite = (id) => {
//     const index = favorites.indexOf(id);
//     if (index !== -1) {
//       // If movie is already in favorites, remove it
//       setFavorites(prevFavorites => prevFavorites.filter(movieId => movieId !== id));
//       dispatch(removeFromFavorites(id)); // Dispatch action to remove movie from favorites
//     } else {
//       // If movie is not in favorites, add it
//       setFavorites(prevFavorites => [...prevFavorites, id]);
//       const selectedMovie = movies.find(movie => movie.id === id);
//       dispatch(addToFavorites(selectedMovie)); // Dispatch action to add movie to favorites
//     }
//   };

//   useEffect(() => {
//     fetchMovies();
//   }, []);

//   return (
//     <div>
//       <h1>Movies</h1>
//       <ul className="movies-list">
//         {movies.map(movie => (
//           <li key={movie.id} className="movie-item">
//             <div className="movie-details">
//               <h2>{movie.movie}</h2>
//               <p>Rating: {movie.rating}</p>
//               <img 
//                 src={movie.image_url} 
//                 alt={movie.movie} 
//                 onError={(e) => e.target.src = placeholderImage}
//                 className="movie-image"
//               />
//               <div>
//                 <a href={movie.imdb_url} target="_blank" rel="noopener noreferrer">IMDb</a>
//               </div>
//               <div>
//                 <button onClick={() => toggleFavorite(movie.id)}>
//                   {favoriteMovies.some(favMovie => favMovie.id === movie.id) ? 'Unfavorite' : 'Favorite'}
//                 </button>
//               </div>
//             </div>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default MoviesComponent;




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
    <div>
      <h1>Movies</h1>
      <ul className="movies-list">
        {movies.map(movie => (
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
        ))}
      </ul>
    </div>
  );
};

export default MoviesComponent;



