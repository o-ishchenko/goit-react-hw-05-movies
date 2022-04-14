import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styles from './CastPage.module.css';
import * as moviesSearch_API from '../../services/api-movies';

function CastPage() {
  const { movieId } = useParams();
  const [actors, setActors] = useState([]);

  useEffect(() => {
    moviesSearch_API.fetchMovieActors(movieId).then(setActors);
  }, [movieId]);

  return (
    <ul className={styles.list}>
      {actors.map(
        actor =>
          actor.profile_path && (
            <li className={styles.item} key={actor.id}>
              <img
                className={styles.image}
                src={`https://image.tmdb.org/t/p/w300${actor.profile_path}`}
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
