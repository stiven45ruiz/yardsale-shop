import React from 'react';

import { Product } from '../molecules/Product';
import '../../styles/components/Products.scss';

const Products = () => {
  return (
    <section class="main-container">
      <div class="cards-container">
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </section>
  );
};

export { Products };
