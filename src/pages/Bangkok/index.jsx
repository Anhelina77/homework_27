import React, { Fragment } from 'react';
import {Header} from "components/Bangkok/Header";
import {Carousel} from "components/Bangkok/Carousel";
import {Ribbon} from "components/Bangkok/Ribbon";
import {Filters} from "components/Bangkok/Filters";
import {Products} from "components/Bangkok/Products";
import {Modal} from "components/Bangkok/Modal";
// import '@/assets/styles.css';

export const Bangkok = props => {
  return (
    <Fragment>
      <Header/>
      <main>
        <div className="container">
          <Carousel/>
        </div>
        <div className="container">
          <Ribbon/>
        </div>
        <div className="container">
          <Filters/>
        </div>
        <div className="container">
          <Products/>
        </div>
      </main>
      <Modal/>
    </Fragment>
  );
};
