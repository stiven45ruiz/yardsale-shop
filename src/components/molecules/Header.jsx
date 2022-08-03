import React, {useState, useContext} from 'react';
import { Menu } from '../organism/Menu';
import { MyOrder } from '../../containers/MyOrder';
import { MenuMovile } from '../organism/MenuMovile';
import AppContext from '../../context/AppContext';
import iconMenu from '../../assets/icons/icon_menu.svg'
import logYardSale from '../../assets/logos/logo_yard_sale.svg'
import shopingCart from '../../assets/icons/icon_shopping_cart.svg'
import usericon from '../../assets/icons/user-regular.svg'
import '../../styles/components/Header.scss';
import { Link } from 'react-router-dom';

const Header = () => {

  const {state} = useContext(AppContext);
  const [movileMenuToggle, setMovileMenuToggle] = useState(false);
  const [togleOrders, setTogleorders] = useState(false)
  const [toggle, setToggle] = useState(false);

  const hanbleToggle = () =>{
    setToggle(!toggle)
  }

  return (
    <nav className='headerBar'>
      <img 
        onClick={()=> setMovileMenuToggle(!movileMenuToggle)}
        src={iconMenu} 
        alt="menuIcon" 
        className="menu-icon" 
      />

      <div className="navbar-left">
        <Link to='/' className='container__logo'>
          <picture className='container__logo'>
            <img src={logYardSale} alt="logo" className="logo" />
          </picture>
        </Link>
        

        <ul>
          <li>
            <Link to="/">All</Link>
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
          <li className='user-icon' onClick={hanbleToggle}>
            <img src={usericon} alt="userIcon" />
          </li>
          <li className="navbar-email" onClick={hanbleToggle}>
            platzi@example.com
          </li>
          
          <li 
            className="navbar-shopping-cart" 
            onClick={() => setTogleorders(!togleOrders)}
            >
            <img src={shopingCart} alt="shopping cart" />
            {state.cart.length > 0 ? <div>{state.cart.length}</div>: null}
          </li>
        </ul>
      </div>
      {!!toggle && <Menu/>}
      {!!movileMenuToggle && <MenuMovile/>}
      {!!togleOrders && 
        <MyOrder 
          setTogleorders={setTogleorders}
          togleOrders={togleOrders}
        />
      }
    </nav>
  );
};

export { Header };
