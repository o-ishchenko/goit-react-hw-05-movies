import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as moviesSearch_API from '../services/api-movies';

function CastPage() {
  const { movieId } = useParams();
  const [actors, setActors] = useState([]);

  useEffect(() => {
    moviesSearch_API.fetchMovieActors(movieId).then(setActors);
  }, [movieId]);

  return (
    <ul>
      {actors.map(
        actor =>
          actor.profile_path && (
            <li key={actor.id}>
              <img
                src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
                alt={actor.name}
              />
              <h3>{actor.name}</h3>
              <p>{actor.character}</p>
            </li>
          )
      )}
    </ul>
  );
}

export default CastPage;
