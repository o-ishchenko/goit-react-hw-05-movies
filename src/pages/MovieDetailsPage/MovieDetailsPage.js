import styles from './MovieDetailsPage.module.css';
import { useState, useEffect, Suspense } from 'react';
import {
  useParams,
  useLocation,
  useNavigate,
  NavLink,
  Outlet,
} from 'react-router-dom';
import * as moviesSearch_API from '../../services/api-movies';
import { toast } from 'react-toastify';
import Loader from '../../components/Loader';

function MovieDetailsPage() {
  const { movieId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    moviesSearch_API
      .fetchMovieById(movieId)
      .then(movie => {
        setMovie(movie);
        setLoading(false);
      })
      .catch(error => {
        toast.error(`${error}`);
        setLoading(false);
      });
  }, [movieId]);

  const onGoBack = () => {
    navigate(
      location.state
        ? `${location.state.from.pathname}${location.state.from.search}`
        : '/movies'
    );
  };

  return (
    <>
      <button className={styles.button} type="button" onClick={onGoBack}>
        Go back
      </button>
      <br />
      {loading && <Loader />}
      {movie && (
        <>
          <div className={styles.box}>
            <img
              src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
              alt={movie.title}
            />
            <div>
              <h2>{movie.title ? movie.title : movie.name}</h2>
              <p>User score: {movie.vote_average * 10}%</p>
              <h3>Overview</h3>
              <p>{movie.overview}</p>
              <h3>Genres</h3>
              {movie.genres &&
                movie.genres.map(genre => (
                  <span className={styles.genre} key={genre.id}>
                    {genre.name}
                  </span>
                ))}
            </div>
          </div>
          <hr />
          <NavLink
            to={`cast`}
            state={{ from: location.state.from }}
            className={({ isActive }) =>
              isActive ? styles.active : styles.link
            }
          >
            Cast
          </NavLink>
          <NavLink
            to={`reviews`}
            state={{ from: location.state.from }}
            className={({ isActive }) =>
              isActive ? styles.active : styles.link
            }
          >
            Reviews
          </NavLink>
          <hr />
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </>
      )}
    </>
  );
}

export default MovieDetailsPage;
