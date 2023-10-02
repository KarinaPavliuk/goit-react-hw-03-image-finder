import { useState, useEffect } from 'react';
import { RotatingLines } from 'react-loader-spinner';

import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem';
import { Loader } from './Loader/Loader';
import { Button } from './Button/Button';
import { Modal } from './Modal/Modal';
import { getAllImages } from '../API/images';

import css from './App.module.css';

export const App = () => {
  const [images, setImages] = useState([]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [page, setPage] = useState(1);
  const [show, setShow] = useState(false);
  const [modalUrl, setModalUrl] = useState('');

  useEffect(() => {
    searchQuery && fetchImages();
  }, [searchQuery, page]);

  const fetchImages = async () => {
    try {
      setIsLoading(true);
      const data = await getAllImages(searchQuery, page);
      setImages([...images, ...data.hits]);
    } catch ({ message }) {
      setError(message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSetSearchQuery = value => {
    setImages([]);
    setSearchQuery(value);
    setPage(1);
  };

  const handleLoadBtnClick = () => {
    setPage(page + 1);
  };

  const handleImgClick = largeImageURL => {
    setShow(true);
    setModalUrl(largeImageURL);
  };

  const closeModal = () => {
    setShow(false);
  };

  return (
    <div className={css.app}>
      <Searchbar submit={handleSetSearchQuery} />
      {images.length > 0 && (
        <ImageGallery>
          <ImageGalleryItem images={images} handleClick={handleImgClick} />
        </ImageGallery>
      )}
      {error && <p>{error}</p>}
      {isLoading && (
        <Loader>
          <RotatingLines
            strokeColor="#3f51b5"
            strokeWidth="5"
            animationDuration="0.75"
            width="96"
            visible={true}
          />
        </Loader>
      )}
      {images.length > 0 && <Button handleClick={handleLoadBtnClick}></Button>}
      {show && <Modal modalUrl={modalUrl} closeModal={closeModal} />}
    </div>
  );
};
