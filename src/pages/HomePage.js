import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageHeader from 'components/PageHeader';
import * as moviesSearch_API from '../services/api-movies';

function HomePage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    moviesSearch_API.fetchTrendingMovies().then(r => {
      setMovies(r);
      console.log(r);
    });
  }, []);

  return (
    <>
      <PageHeader>Trending today</PageHeader>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <Link to={`movies/${movie.id}`}>
              {movie.title ? movie.title : movie.name}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default HomePage;
