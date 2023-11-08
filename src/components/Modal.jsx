import React, { useEffect, useCallback } from 'react';
import '../styles/modal.css';

const Modal = ({ show, imageUrl, onClose }) => {
  const handleCloseModal = useCallback(() => {
    onClose();
  }, [onClose]);

  const handleKeyPress = useCallback((e) => {
    if (e.key === 'Escape') {
      onClose();
    }
  }, [onClose]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      handleKeyPress(e);
    };

    if (show) {
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [show, handleKeyPress]);

  const handleOverlayClick = (e) => {
    if (e.target.className === 'Overlay') {
      onClose();
    }
  };

  const handleModalClick = () => {
    handleCloseModal();
  };

  return (
    show && (
      <div className="Overlay" onClick={handleOverlayClick}>
        <div className="Modal" onClick={handleModalClick}>
          <img src={imageUrl} alt="" />
        </div>
      </div>
    )
  );
};

export default Modal;
