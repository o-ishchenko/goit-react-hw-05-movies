import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Searchbar from 'components/Searchbar';
import * as moviesSearch_API from '../services/api-movies';

function MoviesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [data, setData] = useState([]);

  const handleFormSubmit = searchQuery => {
    setSearchQuery(searchQuery);
    setData([]);
  };

  useEffect(() => {
    if (!searchQuery) {
      return;
    }
    moviesSearch_API.fetchMoviesBySearchQuery(searchQuery).then(setData);
  }, [searchQuery]);

  return (
    <>
      <Searchbar onSubmit={handleFormSubmit} />
      {data && (
        <ul>
          {data.map(data => (
            <li key={data.id}>
              <Link to={`${data.id}`}>
                {data.title ? data.title : data.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
      <ToastContainer autoClose={1500} position="top-center" />
    </>
  );
}

export default MoviesPage;
