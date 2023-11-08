import React, { useState, useEffect } from 'react';
import Searchbar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';
import Button from './components/Button';
import Modal from './components/Modal';
import CustomLoader from './components/Loader';

import './styles/styles.css';

const App = () => {
  const [keyword, setKeyword] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalImage, setModalImage] = useState('');

  const handleSearch = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://pixabay.com/api/?key=39260371-83ef64e0aa197167fe58dcdf0&q=${keyword}&per_page=12&page=${page}`
      );
      const data = await response.json();
      setImages(page === 1 ? data.hits : [...images, ...data.hits]);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleChangePage = () => {
    setPage(page + 1);
  };

  const openModal = (imageUrl) => {
    setModalImage(imageUrl);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setModalImage('');
  };

  useEffect(() => {
    handleSearch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [keyword, page]);

  return (
    <div className="App">
      <Searchbar keyword={keyword} setKeyword={setKeyword} handleSearch={handleSearch} />
      <ImageGallery images={images} openModal={openModal} />
      {loading && <CustomLoader />}
      <Button show={images.length > 0 && !loading} onClick={handleChangePage} />
      <Modal show={showModal} imageUrl={modalImage} onClose={closeModal} />
    </div>
  );
};

export default App;
