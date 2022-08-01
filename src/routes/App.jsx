import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Layout } from '../components/Layout';
import { Home } from '../pages/Home';
import { SignUp } from '../containers/SignUp';
import { Login } from '../containers/Login';
import { RecoveryPass } from '../containers/RecoveryPass';
import { NotFound } from '../pages/NotFound';
import { MyOrders } from '../containers/MyOrders';
import { MyAccount } from '../containers/MyAccount';
import { SendEmail } from '../containers/SendEmail';

// import '../styles/global.css'

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route exact path="/" element={<Home />} />

          <Route exact path="/signup" element={<SignUp />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/orders" element={<MyOrders />}/>
          <Route exact path="/send-email" element={<SendEmail />}/>
          <Route exact path="/account" element={<MyAccount />}/>
          <Route exact path="/recovery-password" element={<RecoveryPass />} />
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
