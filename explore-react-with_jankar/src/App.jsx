import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



function App() {




  return (
    <>

      {/* kuno tag na lika just bracket use korake bola hoi fragment ( (<> </> ) ei mt tag bracket bola hoi fragment) */}

      <h1>bismillahir rahmanir rahim.</h1>
      <Student></Student>
      <Person name_property_or_props={"tipu"} ></Person>

      <SecondCom></SecondCom>
      <SecondCom></SecondCom>

      <ThirdCom></ThirdCom>

      <FourthCom></FourthCom>
      {/*  ei main App component er return er vitore jeshob child compoent banano hoi sei gulo k jtobar copy koa hobe totota component toiri hobee. */}
    </>
  )
}


// --------------------- my components------------------------
// ------------student component----------


// ---------------- new compo------------

function Student() {

  const student1_Details = {
    name: "mohammad",
    age: 22,
    class: "five",
    isMale: true,
  };

  return (
    <div>
      <h2>student1 name: {student1_Details.name}   </h2>
      <h2>student1 age: {student1_Details.age}  </h2>
      <h2>student1 class: {student1_Details.class}  </h2>
      <h2>student1 isMale?:  {student1_Details.isMale} </h2>
    </div>
  );
}



// -----------person component------------
function Person() {

  const name = "mustafa";
  const age = 22;
  const money = 10;
  const array1 = ["1.english  ", "2.bangla  ", "3.urdo "];
  const obj = {
    home: "lohagara amirbath",
    study: "madrasha student"
  };

  return (
    <div>
      <h2>name: {name} </h2>
      <h2>age: {age} </h2>
      <h2>gender: {money + 20} </h2>
      <h2> language jane: {array1} </h2>
      <h2>home town: {obj.home} </h2>

    </div>
  )
}


// -----------------------------------egulo component thakbe.---
const SecondCom = () => {
  return (
    <h1>subhan allah 1</h1>
  )
}


function ThirdCom() {
  return <h1>alhamdulillah 2</h1>
}

const FourthCom = () => {
  return <h1>allahu akbar 3</h1>
}


export default App
