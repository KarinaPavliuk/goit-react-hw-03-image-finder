import css from './ImageGalleryItem.module.css';

export const ImageGalleryItem = ({ images, handleClick }) => {
  return (
    <>
      {images.map(({ id, webformatURL, largeImageURL, tags }) => (
        <li
          key={id}
          className={css.galleryItem}
          onClick={() => handleClick(largeImageURL)}
        >
          <img
            src={webformatURL}
            className={css.image}
            alt={tags}
            loading="lazy"
          />
        </li>
      ))}
    </>
  );
};
