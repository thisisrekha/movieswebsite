// src/redux/store.js


// import { configureStore } from '@reduxjs/toolkit';
// import favoriteReducer from './reducers/favoriteReducer';

// const rootReducer = combineReducers({
//     favorite: favoriteReducer,
//     // Add other reducers here if needed
// });

// const store = configureStore({
//     reducer: rootReducer,
// });

// export default store;


// import { configureStore } from '@reduxjs/toolkit';
// import favoriteReducer from './reducers/favoriteReducer';

// const rootReducer = {
//   favoriteMovies: favoriteReducer,
//   // Add other reducers here if you have them
// };

// const store = configureStore({
//   reducer: rootReducer,
//   // Add middleware here if needed
// });

// export default store;

// import { configureStore } from '@reduxjs/toolkit';
// import rootReducer from './reducers'; // Assuming you have an index.js file in the reducers folder that exports the combined rootReducer

// const store = configureStore({
//   reducer: rootReducer,
//   // Add middleware here if needed
// });

// export default store;



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





