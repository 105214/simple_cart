import React, { useState } from 'react'
import Cart from './Cart.jsx'
import './style/product.css'
const Product = () => {
    // const [productId,setProductId]=useState([])
    const [products,setProduct]=useState([])
    const[productList,setProductList]=useState([
        {
            id:1,
            image:"/headphone.webp",
            name:"Headphone",
            price:2300,
            quantity:1,
        },
        {
            id:2,
            image:"/keyboard.webp",
            name:"Keyboard",
            price:5000,
            quantity:1,
        },
        {
            id:3,
            image:"/laptop.webp",
            name:"Laptop",
            price:38000,
            quantity:1,
        },
        {
            id:4,
            image:"/monitor.avif",
            name:"Monitor",
            price:3500,
            quantity:1,
        },
        {
            id:5,
            image:"/mouse.webp",
            name:"Mouse",
            price:880,
            quantity:1,
        },
        {
            id:6,
            image:"/watch.webp",
            name:"Smartwatch",
            price:6000,
            quantity:1,
        }
    ])

  const productHandler=(product)=>{
    
    const isDuplicate=products.some(item=>item.id===product.id)
    
      if(isDuplicate){
    console.log("product already in cart")
    return
  } 

  setProduct([...products,product])
  }

 
const increaseQuantity = (id) => {
  setProduct(prevProducts =>
    prevProducts.map(item =>
      item.id === id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    )
  )
}

const decreaseQuantity = (id) => {
  setProduct(prevProducts =>
    prevProducts.map(item =>
      item.id === id && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    )
  )
}

   
  return (
  <>
  
  
 
<Cart goods={products} 
increaseQuantity={increaseQuantity}
decreaseQuantity={decreaseQuantity}/>
   
    <div className='product-main-box'>
      {productList.map((product)=>(
        <div className='product-box' key={product.id}>
            <img src={product.image} className='product-image'/>
            <h2 className='product-name'>{product.name}</h2>
            <p className='product-price'>{product.price}</p>
            <p> {product.quantity} </p>
            <button onClick={()=>productHandler(product)} className='btn'>Add</button>
        </div>
      ))

      }
    
    </div>
  </>
  )
}

export default Product






  // const productHandler=(product)=>{
    // //    setProduct([...products,product])
    //    setProduct((prevCart)=>{
    //     const existItem=prevCart.find(item=>item.id===product.id)

    //     if(existItem){
    //         return prevCart.map(item=>item.id===product.id ?
    //             {...item,quantity:item.quantity+1}:item
    //         )

    //     }return[...prevCart,{...product,quantity:1}]
    //    })

      
    // }