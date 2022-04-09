import React from 'react';
// import { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PageHeader from 'components/PageHeader';
import Searchbar from 'components/Searchbar';

function MoviesPage() {
  // const [searchQuery, setSearchQuery] = useState('');
  // const [data, setData] = useState([]);

  const handleFormSubmit = searchQuery => {
    // setSearchQuery(searchQuery);
    // setData([]);
  };

  return (
    <>
      <PageHeader>Movies Page</PageHeader>
      <Searchbar onSubmit={handleFormSubmit} />
      <ToastContainer autoClose={1500} position="top-center" />
    </>
  );
}

export default MoviesPage;
