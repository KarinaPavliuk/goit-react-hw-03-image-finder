import { Component } from 'react';
import css from './Modal.module.css';

export class Modal extends Component {
  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyEsc);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyEsc);
  }

  handleKeyEsc = event => {
    if (event.code === 'Escape') {
      this.props.closeModal();
    }
  };

  handleOverlayClick = event => {
    if (event.target === event.currentTarget) {
      this.props.closeModal();
    }
  };

  render() {
    return (
      <>
        <div className={css.overlay} onClick={this.handleOverlayClick}>
          <div className={css.modal}>
            <img src={this.props.modalUrl} alt="" />
          </div>
        </div>
        {/* {this.props.images.map(({ id, largeImageURL, tags }) => (
          <div className={css.overlay}>
            <div className={css.modal}>
              <img key={id} src={largeImageURL} alt={tags} />
            </div>
          </div>
        ))} */}
      </>
    );
  }
}
