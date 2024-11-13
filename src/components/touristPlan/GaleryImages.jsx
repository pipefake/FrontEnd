import React, { useState } from 'react';

const GaleryImages = ( {images} ) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
      <div className="carousel-inner">
        {images.map((url, index) => (
          <div
            key={index}
            className={`carousel-item ${index === currentIndex ? 'active' : ''}`}
          >
            <img className="d-block w-100" src={url} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>
      <a
        className="carousel-control-prev"
        href="#carouselExampleControls"
        role="button"
        onClick={handlePrev}
      >
        <span className="carousel-control-prev-icon  fa-solid  icon-primary fa-stack-3x" aria-hidden="true"></span>
      </a>
      <a
        className="carousel-control-next"
        href="#carouselExampleControls"
        role="button"
        onClick={handleNext}
      >
        <span className="carousel-control-next-icon fa-solid  icon-primary  fa-stack-3x" aria-hidden="true"></span>
      </a>
    </div>

  );
};

export default GaleryImages;
