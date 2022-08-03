import React from 'react';
import { Header } from './molecules/Header';
import '../styles/global.scss';

const Layout = ({ children }) => {
  return (
  
  <div className="layout">
    <Header></Header>
    {children}
  </div>)
  
};

export { Layout };
