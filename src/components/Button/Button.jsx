import css from './Button.module.css';

export const Button = ({ handleClick }) => {
  return (
    <>
      <button type="button" className={css.button} onClick={handleClick}>
        Load more
      </button>
    </>
  );
};
