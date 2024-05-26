// src/redux/store.js

import { configureStore } from '@reduxjs/toolkit';
import favoriteReducer from './reducers/favoriteReducer';
; // Adjust the import path as per your actual file structure

const rootReducer = {
  favoriteMovies: favoriteReducer,
  // Add other reducers here if needed
};

const store = configureStore({
  reducer: rootReducer,
  // Add middleware here if needed
});

export default store;





