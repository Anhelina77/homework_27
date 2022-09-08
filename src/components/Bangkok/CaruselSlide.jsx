import React from 'react';

export const CaruselSlide = props => {
  return (
    <div className="carousel__slide">
      <img
        src="assets/carousel/penang_shrimp.png"
        className="carousel__img"
        alt="slide"
      />
      <div className="carousel__caption">
        <span className="carousel__price">€16.00</span>
        <div className="carousel__title">Penang shrimp</div>
        <button type="button" className="carousel__button">
          <img src="assets/icons/plus-icon.svg" alt="icon"/>
        </button>
      </div>
    </div>
  );
};
