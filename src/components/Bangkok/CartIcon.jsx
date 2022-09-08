import React from 'react';

export const CartIcon = ({count = 5, price = 55}) => {
  return (
    <button type="button" className="cart-icon cart-icon_visible">
      <div className="cart-icon__inner">
        <span className="cart-icon__count">{count}</span>
        <span className="cart-icon__price">€${price.toFixed(2)}</span>
      </div>
    </button>
  );
};
