import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// my import(bairer file ekane anci)
// import handleClick from `./assets/components/function1/test`
import handleClick from './assets/components/function1/test'


function App() {
  const [count, setCount] = useState(0);
  // ----------topic 3 (eseEffect) start here------------

  useEffect(() => {
    // use effect's code block
    // useEffect er modde 2ta peramitar thakbe, protom ta arrow function/function & second peramitar ta 3rd bracket []
    // api theke data load korar somoy (useEffect) use kora hoi beshi
    console.log('i am from use effect code block');

  }, [count]);

  const changer = () => {
    console.log("yes clicked changer btn")
    setCount(22)
  }

  // ----------topic 3 (eseEffect) end here------------








  // ------------------------topic 2---------------------------

  // -------- setStateCount topic--------------


  // const [stateCount, setStateCount] = useState(0);// variable evabe declare kora hoi & new value set korte hole (setXYZ(newValue) )evabe set kortee hoi
  // console.log(stateCount)

  // --------
  //  const [ name , setName] =useState('tipu')
  //  console.log(name);


  // const updateMyName = setName('sahil')
  // console.log(name)
  // --------


  // let V_count = 0;

  // // function part ----------

  // const handleVariableCount = () => {
  //   // V_count = V_count + 1;
  //   V_count++;
  // }

  // const handleStateCount = () => {
  //   let updateStateCountValue = stateCount + 1;

  //   // setStateCount(updateStateCountValue)
  //   setStateCount(stateCount + 1);//shorthand
  // }
  // // ------------- topic 2 js end here ---------------





  // -------------------under jsx (javaScript Xml) part --------------
  return (
    <>
      <div>


        {/* topic 3 (useEffect) start here */}

        <button onClick={changer}>See useEffect change </button>





        {/*  ---------topic 2 (state,setState,useState()) start here------------
        <h3> state Count : {stateCount} </h3>
        <h3> Variable count: {V_count} </h3>
        <h3>my name: {name} </h3>


        <button onClick={handleVariableCount}> click Variable_Count </button>
        <button onClick={handleStateCount}> click state_Count </button>

          ---------topic 2  end here------------
         */}

      </div>

    </>
  );
}

export default App;
