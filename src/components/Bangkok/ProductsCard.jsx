import React from 'react';

export const ProductsCard = ({name, price}) => {
  return (
    <div className="card">
      <div className="card__top">
        <img
          src="assets/products/laab_kai_chicken_salad.png"
          className="card__image"
          alt="product"
        />
        <span className="card__price">€{price.toFixed(2)}</span>
      </div>
      <div className="card__body">
        <div className="card__title">{name}</div>
        <button type="button" className="card__button">
          <img src="assets/icons/plus-icon.svg" alt="icon"/>
        </button>
      </div>
    </div>
  );
};
