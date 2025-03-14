
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useState } from 'react'
import Team from './Team'
import UseEffect1 from './useEffect1';
import Friends from './Friends';
import Friends2 from './Friends2';
import Postss from './assets/posts folder/postss'

function App() {

  const [count, setCount] = useState(0)

  function handleBtn1() {
    alert("button 1 clicked")
  }
  function handleBtn2(pera1) {
    alert(`button 1 clicked ${pera1 + 5}`)
  }
  // ---------------------------- for useStatee----------
  function increament() {
    const newCount = count + 1
    setCount(newCount)
  }
  function dicreament() {
    const newCount = count - 1;
    setCount(newCount);
  }
  // ----------------------
  return (

// ----------------team ------------------

// ----------------team ------------------

    <div className='container'>
 
<Postss></Postss>

<Friends2></Friends2>


<Friends></Friends>


<UseEffect1></UseEffect1>

<Team></Team>

      <div className='useStateStyle'>
        <h2>countStateVairalbee er value holo: {count} </h2>
        <button onClick={increament}> increament</button>
        <button onClick={dicreament}> dicreament</button>
      </div>










      <h1>React core concepts part 2 </h1>
      {/* ----------html e jevabe onclick event hanlder liktm---------
 <button onclick="handleBtn1()">btn 1 click me </button> */}


      {/* react er jsx e javabe onclick handler likte hobe ----niom 1----------*/}
      <button onClick={handleBtn1} >btn 1 onclick e handler add without peramitar </button>
      {/* -----------------niom 2----------------- */}
      {/* <button onClick={handleBtn2()} >btn 2 click me </button> eevabe () ei bracket charai liktee hobe, nahoi btn click korar agei oi function call hoyue jabe. */}

      {/* -----------------niom 3 peeramir pass korte caile----------------- */}
      {/* niser niome arrow function lika call kora jabe , & evabe liklee peeramitar o pass kora jabee. */}
      <button onClick={() => handleBtn2(5)} >btn 3 peramitar pass korte caile arrow func. lika sei arrow func. theke call kore pass korte hbe </button>


      {/* ------------niom 4--- onclick e arrow function lika alert---------------- */}
      <button onClick={() => alert("onclick e arrow function lika alert")} >  btn4 direct onclick e arrow function lika alert  </button>



      {/* -------niom 5--- onclick e multiline arrow function lika alert---------------- */}
      <button onClick={() => {
        alert("onclick e arrow function lika alert")
      }} >  btn 5  onclick e multiline er arrow func. lika alert</button>


      {/* -------niom 6--- onclick e normal function lika alert---------------- */}
      <button onClick={function normalFunInOnClick() { alert("btn er onclick e normal function ") }} >  btn 6 btn onclick e normal function lika alert </button>




    </div>
  )
}

export default App
