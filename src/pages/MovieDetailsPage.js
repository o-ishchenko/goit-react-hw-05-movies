import React from 'react';
import { useState, useEffect } from 'react';
import { useParams, Link, Outlet } from 'react-router-dom';
import * as moviesSearch_API from '../services/api-movies';
import NotFoundPage from '../pages/NotFoundPage';

function MovieDetailsPage() {
  const { movieId } = useParams();

  const [movie, setMovie] = useState(null);

  useEffect(() => {
    moviesSearch_API.fetchMovieById(movieId).then(setMovie);
  }, [movieId]);

  return (
    <>
      {movie ? (
        <>
          <img
            src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
            alt={movie.title}
          />
          <h2>{movie.title ? movie.title : movie.name}</h2>
          <p>User score: {movie.vote_count}%</p>
          <h3>Overview</h3>
          <p>{movie.overview}</p>
          <h3>Genres</h3>
          {movie.genres &&
            movie.genres.map(genre => <span key={genre.id}>{genre.name}</span>)}
          <hr />
          <Link to={`movies/${movie.id}/cast`}>Cast</Link>
          <Link to={`movies/${movie.id}/reviews`}>Reviews</Link>
          <hr />
          <Outlet />
        </>
      ) : (
        <NotFoundPage />
      )}
    </>
  );
}

export default MovieDetailsPage;
