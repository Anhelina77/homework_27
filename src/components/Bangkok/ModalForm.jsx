import React from 'react';

export const ModalForm = props => {
  return (
    <form className="cart-form">
      <h5 className="cart-form__title">Delivery</h5>
      <div className="cart-form__group cart-form__group_row">
        <input
          type="text"
          className="cart-form__input"
          placeholder="Name"
          required
          value="Santa Claus"
        />
        <input
          type="email"
          className="cart-form__input"
          placeholder="Email"
          required
          value="john@gmail.com"
        />
        <input
          type="tel"
          className="cart-form__input"
          placeholder="Phone"
          required
          value="+1234567"
        />
      </div>
      <div className="cart-form__group">
        <input
          type="text"
          className="cart-form__input"
          placeholder="Address"
          required
          value="North, Lapland, Snow Home"
        />
      </div>
      <div className="cart-buttons">
        <div className="cart-buttons__buttons btn-group">
          <div className="cart-buttons__info">
            <span className="cart-buttons__info-text">total</span>
            <span className="cart-buttons__info-price">€55.00</span>
          </div>
          <button
            type="submit"
            className="cart-buttons__button btn-group__button button"
          >
            order
          </button>
        </div>
      </div>
    </form>
  );
};
