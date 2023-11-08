import React, { useEffect } from 'react';
import '../styles/modal.css';

const Modal = ({ show, imageUrl, onClose }) => {
  const handleCloseModal = (e) => {
    if (e.target.className === 'Overlay') {
      onClose();
    }
  };

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyPress);

    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [onClose]);

  return (
    show && (
      <div className="Overlay" onClick={handleCloseModal}>
        <div className="Modal">
          <img src={imageUrl} alt="" />
        </div>
      </div>
    )
  );
};

export default Modal;

