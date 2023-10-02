import { useEffect } from 'react';
import css from './Modal.module.css';

export const Modal = ({ modalUrl, closeModal }) => {
  useEffect(() => {
    document.addEventListener('keydown', handleKeyEsc);
  }, []);

  useEffect(() => {
    return () => {
      document.removeEventListener('keydown', handleKeyEsc);
    };
  }, []);

  const handleKeyEsc = event => {
    if (event.code === 'Escape') {
      closeModal();
    }
  };

  const handleOverlayClick = event => {
    if (event.target === event.currentTarget) {
      closeModal();
    }
  };

  return (
    <div className={css.overlay} onClick={handleOverlayClick}>
      <div className={css.modal}>
        <img src={modalUrl} alt="" />
      </div>
    </div>
  );
};
