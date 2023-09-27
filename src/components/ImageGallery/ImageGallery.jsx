import css from './ImageGallery.module.css';

export const ImageGallery = ({ children }) => {
  return (
    <>
      <ul className={css.gallery}>{children}</ul>
    </>
  );
};
