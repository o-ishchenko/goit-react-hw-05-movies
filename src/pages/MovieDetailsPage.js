import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as moviesSearch_API from '../services/api-movies';

function MovieDetailsPage() {
  const { movieId } = useParams();

  const [movie, setMovie] = useState(null);

  useEffect(() => {
    moviesSearch_API.fetchMovieById(movieId).then(setMovie);
  }, [movieId]);

  return (
    <>
      {movie && (
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
          {movie.genres && (
            <ul>
              {movie.genres.map(({ id, name }) => (
                <li key={id}>{name}</li>
              ))}
            </ul>
            // <p>{movie.genres.name.slice(0, 3).join(', ')}</p>
          )}

          <hr />
        </>
      )}
    </>
  );
}

export default MovieDetailsPage;
