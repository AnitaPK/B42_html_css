import React from 'react';
import './Gallery.css';

const Gallery = () => {
  return (
    <section className="gallery">
      <h2>Gallery</h2>
      <div className="image-container">
        <img src="https://example.com/smriti-image1.jpg" alt="Smriti Mandhana 1" />
        <img src="https://example.com/smriti-image2.jpg" alt="Smriti Mandhana 2" />
      </div>
    </section>
  );
};

export default Gallery;
