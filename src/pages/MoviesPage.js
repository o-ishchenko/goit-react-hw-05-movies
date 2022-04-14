import { useState, useEffect } from 'react';
import { useLocation, useSearchParams, Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import Searchbar from 'components/Searchbar';
import Loader from 'components/Loader';
import * as moviesSearch_API from '../services/api-movies';

function MoviesPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(
    searchParams.get('query') ?? ''
  );
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  const handleFormSubmit = searchQuery => {
    setSearchQuery(searchQuery);
    setSearchParams({ query: searchQuery });
    setData([]);
  };

  useEffect(() => {
    if (!searchQuery) {
      return;
    }
    setLoading(true);
    moviesSearch_API.fetchMoviesBySearchQuery(searchQuery).then(data => {
      if (data.length === 0) {
        toast.info(
          `We did not find the movie ${searchQuery}. Please, try another movie`
        );
      }
      setData(data);
      setLoading(false);
    });
  }, [searchQuery]);

  return (
    <>
      <Searchbar onSubmit={handleFormSubmit} />
      {loading && <Loader />}
      {data && (
        <ul>
          {data.map(data => (
            <li key={data.id}>
              <Link to={`${data.id}`} state={{ from: location }}>
                {data.title ? data.title : data.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default MoviesPage;
