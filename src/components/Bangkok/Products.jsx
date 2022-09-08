import React from 'react';
import {ProductsCard} from "components/Bangkok/ProductsCard";

export const Products = (props) => {
  const products = [{
    id: 1,
    name: 'Laab kai chicken salad',
    price: 10.00
  }]

  return (
    <div className="products-grid">
      <div className="products-grid__inner">
        {products.map((item, index) => (
          <ProductsCard key={index} {...item}/>
        ))}
      </div>
    </div>
  );
};
