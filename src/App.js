import logo from './logo.svg';
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import MoviesComponent from './components/MoviesComponent';
import FavoriteMoviesList from './components/FavoriteMoviesList';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <nav className="navbar">
            <ul className="nav-links">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/favorites">Favorite Movies</Link>
              </li>
            </ul>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<MoviesComponent />} />
            <Route path="/favorites" element={<FavoriteMoviesList />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
