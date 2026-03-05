import React from 'react'
import './style/cart.css'

const Cart = ({goods, increaseQuantity, decreaseQuantity}) => {

  return (
    <div>
      {goods.map((product)=>(
        <div key={product.id}>
          <p>{product.name}</p>
          <img src={product.image} className='cart-image' />
          <p>{product.price}</p>

          <button onClick={()=>increaseQuantity(product.id)}>+</button>

          <input
            type="number"
            value={product.quantity}
            readOnly
          />

          <button onClick={()=>decreaseQuantity(product.id)}>-</button>

        </div>
      ))}
    </div>
  )
}

export default Cart