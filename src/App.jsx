import { useState } from 'react'
import Product from './product.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Product/>
    </>
  )
}

export default App
