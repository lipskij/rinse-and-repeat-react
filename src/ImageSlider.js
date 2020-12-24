import React, { useState } from 'react';
import { ImageData } from './ImageData';

const Slider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.lenth <= 0) {
    return null;
  }

  return (
    <section className="slider">
      {ImageData.map((slide, index) => {
        return (
          <div
            className={index === current ? 'slide active' : 'slide'}
            key={index}
          >
            {index === current && (
              <img src={slide.image} alt="bikes" className="image" key={index}/>
            )}
          </div>
        );
      })}
      <button className="btn" onClick={prevSlide}>
        Prev
      </button>
      <button className="btn" onClick={nextSlide}>
        Next
      </button>
    </section>
  );
};

export default Slider;
