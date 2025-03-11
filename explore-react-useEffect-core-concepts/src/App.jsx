import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// -----------
import import_export_test from './assets/components/function2/two'

// ----
import SingleProduct from "./assets/components/function2/singleProduct/singleProduct"

function App() {
  const [count, setCount] = useState(0)

  const [control1, setcontrol1] = useState("tipu")
  const [products, setproducts] = useState([]);


  useEffect(() => {

    console.log("i responded from react building useEffect")

    const mos = setcontrol1("mustafa");
    console.log(control1)
  }, [control1])


  const useEffectHandler = () => {

    const changed = setcontrol1("sahil")
    console.log(control1)
  }

  // ---------------------

  useEffect(() => {

    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(data => {
             const apiSet = setproducts(data)
      })
  
      // -----------
  }, [])

        console.log(products)

  const productsHandler = () => {
    setproducts([])
  }

  // <h3>evabe curly bracket er vitore jekuno html/jsx lika jai.</h3>

  return (
    <>
      <div>


{products.map((product , index) => (

    <SingleProduct product1={product} index1 = {index}> </SingleProduct>
))}

{/* <h3>evabe curly bracket er vitore jekuno html/jsx lika jai.</h3> */}
        <button onClick={useEffectHandler}>control useEffect </button>

        <button onClick={productsHandler}>get products </button>
      </div>

    </>
  )
}

export default App
