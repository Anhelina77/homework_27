import React from 'react';
import {CaruselSlide} from "components/Bangkok/CaruselSlide";

export const Carousel = props => {
  return (
    <div className="carousel">
      <div className="carousel__arrow carousel__arrow_right">
        <img src="assets/icons/angle-icon.svg" alt="icon"/>
      </div>
      <div className="carousel__arrow carousel__arrow_left">
        <img src="assets/icons/angle-left-icon.svg" alt="icon"/>
      </div>
      <div className="carousel__inner">
        <CaruselSlide/>
      </div>
    </div>
  );
};
