import React, { useState } from 'react';
import '../styles/imageGallery.css';

const ImageGallery = ({ images, openModal }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (largeImageURL) => {
    setSelectedImage(largeImageURL);
    openModal(largeImageURL);
  };

  return (
    <ul className="ImageGallery">
      {images.map((image, index) => (
        <li key={index} className={selectedImage === image.largeImageURL ? 'ImageGalleryItem selected' : 'ImageGalleryItem'} onClick={() => handleImageClick(image.largeImageURL)}>
          <img src={image.webformatURL} alt={image.tags} className="ImageGalleryItem-image" />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
