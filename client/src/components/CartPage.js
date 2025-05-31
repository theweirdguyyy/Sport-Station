import React from 'react'
import { useCart } from '../context/cart_context';
const CartPage = () => {
  const[cart,setCart] = useCart();
  return (
    <React.Fragment>
      <div className='container'>
        <div className='row'>
          Your cart
        </div>
      </div>
    </React.Fragment>
  )
}

export default CartPage;