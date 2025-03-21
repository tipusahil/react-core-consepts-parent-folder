
import './App.css'

// import Products './assets/components/products';
import Products from './assets/components/products/Products';
import { getCartFromLS } from './assets/components/utilities/localStorage';

function App() {


  return (
    <div >

      <h1 className='title'>Complete React app by react & localStorage (cart add & remove  to ui & localStorage project) </h1>

      <div className="parent">
        <div className="compo_container">
          <div className="title">this is compo container</div>


<Products></Products>






        </div>

        <div className="cart_container">
          <div className="title"> <h4>this is cart container</h4>
            {getCartFromLS}
          </div>
        </div>
      </div>

    </div>
  )
}

export default App
