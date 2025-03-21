
import './App.css'

// import Products './assets/components/products';
import Products from './assets/components/products/Products';

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
          <div className="title">this is cart container</div>
        </div>
      </div>

    </div>
  )
}

export default App
