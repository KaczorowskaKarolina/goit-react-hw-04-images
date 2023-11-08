import React from 'react';
import { Hearts } from 'react-loader-spinner';
import '../styles/loader.css';

const Loader = () => {
  return (
    <Hearts 
  height="80"
  width="80"
  color="#ef71f6"
  ariaLabel="hearts-loading"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
/>
  );
};

export default Loader;