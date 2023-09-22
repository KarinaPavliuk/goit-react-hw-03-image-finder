import { Component } from 'react';

import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem';
import { Loader } from './Loader/Loader';
import { Button } from './Button/Button';
import { Modal } from './Modal/Modal';
import { getAllImages } from '../API/images';

export class App extends Component {
  componentDidMount() {
    getAllImages().then(data => console.log(data));
  }

  render() {
    return (
      <>
        <Searchbar></Searchbar>
        <ImageGallery>
          <ImageGalleryItem />
        </ImageGallery>
        <Loader></Loader>
        <Button></Button>
        <Modal></Modal>
      </>
    );
  }
}
