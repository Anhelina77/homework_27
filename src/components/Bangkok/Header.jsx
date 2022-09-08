import React from 'react';
import {CartIcon} from "components/Bangkok/CartIcon";

export const Header = props => {
  return (
    <header className="header container">
      <h1 className="heading logo">Bangkok Express</h1>
      <h3 className="subheading">Great food・Free delivery・Fair price</h3>

      <CartIcon/>
    </header>
  );
};
