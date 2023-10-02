import { useState } from 'react';

import css from './Searchbar.module.css';

export const Searchbar = ({ submit }) => {
  const [value, setValue] = useState('');

  const handleChange = ({ target: { value } }) => setValue(value);

  const handleSubmit = event => {
    event.preventDefault();
    submit(value);
  };

  const clearInput = event => {
    event.target.value = '';
  };

  return (
    <>
      <header className={css.searchbar}>
        <form className={css.form} onSubmit={handleSubmit}>
          <button type="submit" className={css.button}>
            <span className={css.buttonLabel}>Search</span>
          </button>

          <input
            className={css.input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={handleChange}
            onClick={clearInput}
            value={value}
          />
        </form>
      </header>
    </>
  );
};
