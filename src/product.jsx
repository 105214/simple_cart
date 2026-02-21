import React, { useState } from 'react'

const Product = () => {

    const[productList,setProductList]=useState([
        {
            id:1,
            image:"/headphone.webp",
            name:"Headphone",
            price:2300,
        },
        {
            id:2,
            image:"/keyboard.webp",
            name:"Keyboard",
            price:5000,
        },
        {
            id:3,
            image:"/laptop.webp",
            name:"Laptop",
            price:38000,
        },
        {
            id:4,
            image:"/monitor.avif",
            name:"Monitor",
            price:3500,
        },
        {
            id:5,
            image:"/mouse.webp",
            name:"Mouse",
            price:880,
        },
        {
            id:6,
            image:"/watch.webp",
            name:"Smartwatch",
            price:6000,
        }
    ])
  return (
    <div>
      {productList.map((product,id)=>(
        <div key={id}>
            <img src={product.image} />
            <h2>{product.name}</h2>
            <p>{product.price}</p>
            <button>Add</button>
        </div>
      ))

      }
    </div>
  )
}

export default Product
