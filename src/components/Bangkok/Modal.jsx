import React from 'react';
import {ModalCard} from "components/Bangkok/ModalCard";
import {ModalForm} from "components/Bangkok/ModalForm";

export const Modal = props => {
  const products = [{
    id: 1,
    name: 'Penang shrimp',
    price: 10.00,
    count: 3,
  }]

  return (
    <div className="modal">
      <div className="modal__overlay"></div>
      <div className="modal__inner">
        <div className="modal__header">
          <button type="button" className="modal__close">
            <img src="assets/icons/cross-icon.svg" alt="close-icon"/>
          </button>
          <h3 className="modal__title">Your order</h3>
        </div>
        <div className="modal__body">
          <div>
            {products.map((item, index) => (
              <ModalCard key={index} {...item}/>
            ))}
            <ModalForm/>
          </div>
        </div>
      </div>
    </div>
  );
};
