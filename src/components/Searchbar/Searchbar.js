import { useState } from 'react';
import s from './Searchbar.module.css';
import { toast } from 'react-toastify';

function Searchbar({ onSubmit }) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleQueryChange = event => {
    setSearchQuery(event.currentTarget.value.toLowerCase());
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (searchQuery.trim() === '') {
      toast.info('Enter your query for searching');
      return;
    }
    onSubmit(searchQuery);
    setSearchQuery('');
  };

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <input
        className={s.input}
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search films"
        value={searchQuery}
        onChange={handleQueryChange}
      />
      <button type="submit" className={s.button}>
        <span className={s.label}>Search</span>
      </button>
    </form>
  );
}

export default Searchbar;
