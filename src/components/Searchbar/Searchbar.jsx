import { Component } from 'react';
import css from './Searchbar.module.css';

export class Searchbar extends Component {
  state = {
    value: '',
  };

  handleChange = ({ target: { value } }) => {
    return this.setState({ value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.submit(this.state.value);
  };

  clearInput = event => {
    event.target.value = '';
  };

  render() {
    const { handleSubmit, handleChange, clearInput } = this;

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
              value={this.state.value}
            />
          </form>
        </header>
      </>
    );
  }
}
