import React from 'react';

export const FiltersSlider = props => {

  return (
    <div className="filters__slider">
      <div className="slider">
        <div className="slider__thumb" style="left: 75%;">
          <span className="slider__value">3</span>
        </div>
        <div className="slider__progress" style="width: 75%;"></div>
        <div className="slider__steps">
          <span></span><span></span><span></span
        ><span className="slider__step-active"></span><span></span>
        </div>
      </div>
    </div>
  );
};
