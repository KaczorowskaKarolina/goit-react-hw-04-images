import React from 'react';
import '../styles/imageGallery.css';

const ImageGallery = ({ images, openModal }) => {
  return (
    <ul className="ImageGallery">
      {images.map((image, index) => (
        <li key={index} className="ImageGalleryItem" onClick={() => openModal(image.largeImageURL)}>
          <img src={image.webformatURL} alt={image.tags} className="ImageGalleryItem-image" />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
