import React from 'react';
import { Product } from '../molecules/Product';
import useGetProducts from '../../hooks/useGetProducts';
import '../../styles/components/Products.scss';

const API = 'https://api.escuelajs.co/api/v1/products';

const Products = () => {

  const products = useGetProducts(API)

  return (
    <section className="main-container">
      <div className="cards-container">
        {products.map((product) => (
          <Product 
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </section>
  );
};

export { Products };
