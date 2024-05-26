// import React from 'react';
// import { useSelector } from 'react-redux';

// const FavoriteMoviesList = () => {
//   // Get the list of favorite movies from Redux state
//   const favoriteMovies = useSelector(state => state.favoriteMovies);

//   return (
//     <div>
//       <h1>Favorite Movies List</h1>
//       <ul>
//         {favoriteMovies.map(movie => (
//           <li key={movie.id}>
//             <h2>{movie.movie}</h2>
//             <p>Rating: {movie.rating}</p>
//             <img src={movie.image_url} alt={movie.movie} />
//             <a href={movie.imdb_url} target="_blank" rel="noopener noreferrer">IMDb</a>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default FavoriteMoviesList;



// import React from 'react';
// import { useSelector } from 'react-redux';

// const FavoriteMoviesList = () => {
//   // Get the list of favorite movies from Redux state
//   const favoriteMovies = useSelector(state => state.favoriteMovies.favorites);


//   return (
//     <div>
//       <h1>Favorite Movies List</h1>
//       <ul>
//         {favoriteMovies.map(movie => (
//           <li key={movie.id}>
//             <h2>{movie.movie}</h2>
//             <p>Rating: {movie.rating}</p>
//             <img src={movie.image_url} alt={movie.movie} />
//             <a href={movie.imdb_url} target="_blank" rel="noopener noreferrer">IMDb</a>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default FavoriteMoviesList;



// import React from 'react';
// import { useSelector } from 'react-redux';

// const FavoriteMoviesList = () => {
//   // Get the list of favorite movies from Redux state
//   const favoriteMovies = useSelector(state => state.favoriteMovies.favorites);

//   return (
//     <div>
//       <h1>Favorite Movies List</h1>
//       <ul>
//         {favoriteMovies.map(movie => (
//           <li key={movie.id}>
//             <h2>{movie.movie}</h2>
//             <p>Rating: {movie.rating}</p>
//             <img src={movie.image_url} alt={movie.movie} />
//             <a href={movie.imdb_url} target="_blank" rel="noopener noreferrer">IMDb</a>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default FavoriteMoviesList;





import React from 'react';
import { useSelector } from 'react-redux';
import './MoviesComponent.css'; // Use the same CSS for styling

const FavoriteMoviesList = () => {
  const favoriteMovies = useSelector(state => state.favoriteMovies.favorites);

  return (
    <div>
      <h1>Favorite Movies List</h1>
      <ul className="movies-list">
        {favoriteMovies.map(movie => (
          <li key={movie.id} className="movie-item">
            <div className="movie-details">
              <h2>{movie.movie}</h2>
              <p>Rating: {movie.rating}</p>
              <img
                src={movie.image_url}
                alt={movie.movie}
                className="movie-image"
              />
              <a href={movie.imdb_url} target="_blank" rel="noopener noreferrer">IMDb</a>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FavoriteMoviesList;
