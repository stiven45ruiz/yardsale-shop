import React, {useContext} from 'react'
import { Order } from '../components/molecules/Order'
import AppContext from '../context/AppContext'
import '../styles/components/Orders.scss'

import arrowIcon from '../assets/icons/flechita.svg'


const MyOrders = () => {

  const {state} = useContext(AppContext);
  
  return (
    <div className="my-order">
      <div className="my-order-container">
       
      </div>
    </div>
  )
}

export {MyOrders}