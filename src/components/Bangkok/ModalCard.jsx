import React from 'react';

export const ModalCard = ({name, price, count}) => {
  return (
    <div className="cart-product">
      <div className="cart-product__img">
        <img src="assets/products/red_curry.png" alt="product"/>
      </div>
      <div className="cart-product__info">
        <div className="cart-product__title">{name}</div>
        <div className="cart-product__price-wrap">
          <div className="cart-counter">
            <button
              type="button"
              className="cart-counter__button cart-counter__button_minus"
            >
              <img
                src="assets/icons/square-minus-icon.svg"
                alt="minus"
              />
            </button>
            <span className="cart-counter__count">{count}</span>
            <button
              type="button"
              className="cart-counter__button cart-counter__button_plus"
            >
              <img src="assets/icons/square-plus-icon.svg" alt="plus"/>
            </button>
          </div>
          <div className="cart-product__price">€{(price * count).toFixed(2)}</div>
        </div>
      </div>
    </div>
  );
};
