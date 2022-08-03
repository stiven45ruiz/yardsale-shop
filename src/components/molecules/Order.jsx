import React, { useContext } from 'react'
import AppContext from '../../context/AppContext'
import close from '../../assets/icons/icon_close.png'
import '../../styles/components/Orders.scss'

const Order = ({productCart}) => {
  const {removeFromCart} = useContext(AppContext);
  const handleRemove = product => {
    removeFromCart(product)
  }

  return (
    <div className="shopping-cart">
      <figure>
        <img src={productCart.images[0]} alt={productCart.title}/>
      </figure>
      <p>{productCart.title}</p>
      <p>${productCart.price}</p>
      <img 
        src={close} 
        alt='close' 
        onClick={() => handleRemove(productCart)}
        className='remove__icon'  
      />
    </div>
  )
        
}

export {Order}