import React from 'react';

export const RibbonItem = ({active, link='#', text = 'All'}) => {
  return (
    <a href={link} className={`ribbon__item${active ? ' ribbon__item_active' : ''}`}>
      {text}
    </a>
  );
};
