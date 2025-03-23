
import './App.css'

// import Products './assets/components/products';
import Products from './assets/components/products/Products';
import { getCartFromLS } from './assets/components/utilities/localStorage';

function App() {


  return (
    <div >

      <h1 className='title'>Complete React app by react & localStorage (cart add & remove  to ui & localStorage project) </h1>


      <div>
        <Products></Products>
      </div>



    </div>
  )
}

export default App
