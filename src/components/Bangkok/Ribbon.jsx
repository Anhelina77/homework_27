import React from 'react';
import {RibbonItem} from "components/Bangkok/RibbonItem";

export const Ribbon = props => {
  const menu = [{link: '#', text: 'All'}]

  return (
    <div className="ribbon">
      <div className="ribbon__arrow ribbon__arrow_left">
        <img src="assets/icons/angle-icon.svg" alt="icon"/>
      </div>
      <nav className="ribbon__inner">
        {menu.map((item, index) => (
          <RibbonItem key={index} {...item} active={index === 0} />
        ))}
      </nav>
      <div
        className="ribbon__arrow ribbon__arrow_right ribbon__arrow_visible"
      >
        <img src="assets/icons/angle-icon.svg" alt="icon"/>
      </div>
    </div>
  );
};
