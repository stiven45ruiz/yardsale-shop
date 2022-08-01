import React from 'react';
import { Header } from '../components/molecules/Header';
import { Products } from '../components/organism/Products';

const Home = () => {
  return (
    <main className="home">
      <Header />
      <Products />
    </main>
  );
};

export { Home };
