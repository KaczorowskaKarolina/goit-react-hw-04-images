import React, { useState } from 'react';
import '../styles/button.css';

const Button = ({ onClick }) => {
  const [show, setShow] = useState(true); // Początkowy stan 'show' ustawiony na true

  return (
    <button className="Button" style={{ display: show ? 'block' : 'none' }} onClick={() => {
      setShow(true); // Zmiana stanu 'show' na false, gdy kliknięty
      onClick();
    }}>
      Load more
    </button>
  );
};

export default Button;
