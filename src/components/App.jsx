import { Component } from 'react';
import { RotatingLines } from 'react-loader-spinner';

import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem';
import { Loader } from './Loader/Loader';
import { Button } from './Button/Button';
import { Modal } from './Modal/Modal';
import { getAllImages } from '../API/images';

import css from './App.module.css';

export class App extends Component {
  state = {
    images: [],
    error: '',
    isLoading: false,
    isShowImages: false,
    searchQuery: '',
    page: 1,
    show: false,
    modalUrl: '',
  };

  componentDidUpdate(_, prevState) {
    if (
      prevState.searchQuery !== this.state.searchQuery ||
      prevState.page !== this.state.page
    ) {
      this.fetchImages();
    }
  }

  fetchImages = async () => {
    const { searchQuery, page } = this.state;

    try {
      this.setState({ isLoading: true });
      const data = await getAllImages(searchQuery, page);
      this.setState(prevState => {
        return {
          images: [...prevState.images, ...data.hits],
        };
      });
    } catch ({ message }) {
      this.setState({ error: message });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  handleSetSearchQuery = value => {
    this.setState({ images: [], searchQuery: value, page: 1 });
  };

  handleLoadBtnClick = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  handleImgClick = largeImageURL => {
    this.setState({
      show: true,
      modalUrl: largeImageURL,
    });
  };

  closeModal = () => {
    this.setState({
      show: false,
    });
  };

  render() {
    const { images, error, isLoading, show, modalUrl } = this.state;
    const { handleSetSearchQuery, handleLoadBtnClick, handleImgClick } = this;

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
        {images.length > 0 && (
          <Button handleClick={handleLoadBtnClick}></Button>
        )}
        {show && <Modal modalUrl={modalUrl} closeModal={this.closeModal} />}
      </div>
    );
  }
}
