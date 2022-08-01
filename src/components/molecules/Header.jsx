import React, {useState} from 'react';
import '../../styles/components/Header.scss';
import MyAccount from '../../containers/MyAccount.jsx'

const Header = () => {

  const [toggle, setToggle] = useState(false);
  const hanbleToggle = () =>{
    setToggle(!toggle)
  }

  return (
    <nav>
      <img src="./icons/icon_menu.svg" alt="menu" className="menu" />

      <div className="navbar-left">
        <img src="./logos/logo_yard_sale.svg" alt="logo" className="logo" />

        <ul>
          <li>
            <a href="/">All</a>
          </li>
          <li>
            <a href="/">Clothes</a>
          </li>
          <li>
            <a href="/">Electronics</a>
          </li>
          <li>
            <a href="/">Furnitures</a>
          </li>
          <li>
            <a href="/">Toys</a>
          </li>
          <li>
            <a href="/">Others</a>
          </li>
        </ul>
      </div>

      <div className="navbar-right">
        <ul>
          <li className="navbar-email" onClick={hanbleToggle}>
            platzi@example.com
          </li>
          <li className="navbar-shopping-cart">
            <img src="./icons/icon_shopping_cart.svg" alt="shopping cart" />
            <div>2</div>
          </li>
        </ul>
      </div>
      {!!toggle && <MyAccount/>}
    </nav>
  );
};

export { Header };
