import React, {useContext} from 'react'
import { Order } from '../components/molecules/Order'
import AppContext from '../context/AppContext'
import arrowIcon from '../assets/icons/flechita.svg'
import '../styles/components/MyOrder.scss'

const MyOrder = ({setTogleorders, togleOrders}) => {
  const {state} = useContext(AppContext);

  const sumPrice = () =>{
    const reducer = (accumulator, currentValue)=> accumulator + currentValue.price;
    const totalPrice = state.cart.reduce(reducer, 0)
    
    return totalPrice
  }

  return (
    <aside className="product-detail">
    <div className="title-container">
      <img 
        onClick={() => setTogleorders(!togleOrders)}
        src={arrowIcon} alt="arrow"/>
      <p className="title">My order</p>
    </div>

    <div className="my-order-content">
      <div className='order__items'>
        {
          state.cart.length > 0?
          state.cart.map((productCart)=> (
          <Order 
            productCart={productCart}   
            key={`productsCart-${productCart.id}`
          }/>
          ))
          :<p>Sin productos</p>
        }
      </div>
        


      <div className="order">
        <p>
          <span>Total</span>
        </p>
        <p>${sumPrice()}</p>
      </div>

      <button className="primary-button">
        Checkout
      </button>
    </div>
  
  </aside>
  )
}

export {MyOrder}