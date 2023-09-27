import css from './Loader.module.css';

export const Loader = ({ children }) => {
  return (
    <>
      <p className={css.loader}>{children}</p>
    </>
  );
};
