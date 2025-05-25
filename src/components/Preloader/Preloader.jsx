import React from 'react';
import './Preloader.css';

const Preloader = () => {
  return (
    <div className="preloader-wrapper">
      <img
        src="https://i.gifer.com/ZZ5H.gif"
        alt="Loading..."
        className="preloader-gif"
      />
    </div>
  );
};

export default Preloader;
