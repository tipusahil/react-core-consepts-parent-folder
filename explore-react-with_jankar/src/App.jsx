import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



function App() {




  return (
    <>

      {/* kuno tag na lika just bracket use korake bola hoi fragment ( (<> </> ) ei mt tag bracket bola hoi fragment) */}

      <h1>bismillahir rahmanir rahim.</h1>

<AllTypePropsPassByCompoCalling eshobpassHoi={"esob object akare child componeent e pass hoi"} object={{object:"objeect pass hoi"}} array={["array ","pass " , " hoi"]}  boolean={"boolean pass hoi"}  string={"string xyz"}   ></AllTypePropsPassByCompoCalling>


  <DefaultValueSet defaultValueSetKoraJai={"seet kora jai"} jodiPropsPassKoraNaHoi={"yes jai"} ></DefaultValueSet>

<DefaultValueSet></DefaultValueSet>

{/* ----------------------important componeent niser ta-------------- */}
<PropsErValueHisebeObjectArrayBooleanStringNumberSobPassKoraJai evabeEiPositionThekeEvabeValuePassKorakeBolaHoi={" parent compontent theke evabe child component call kore opening tag r vitor theke evabe value pass kora k bola hoi (props passing)  "} object11={{obj:"object pass kora jai" , array1:"Array" , string:"string" , number:54,boolean:true, sobPass:"sob pass kora jai."}}         array={["array pass kora jai", "evabe array={[2,3,4,2]} evabe"]}></PropsErValueHisebeObjectArrayBooleanStringNumberSobPassKoraJai>
{/* ----------------------------------------- */}
<PropsNaLikhaDestructing grade={"5.00"} subject="english"  ></PropsNaLikhaDestructing>

      <Studentss name="mohammad" roll="786231" age="22" ></Studentss>
      <Studentss name="mostafa" roll="786232" age="12" ></Studentss>
      <Studentss name="abdullah" roll="486231" age="52" ></Studentss>
      <Studentss name="sahil" roll="486231" age="82" ></Studentss>
      <Studentss name="tipu" roll="286231" age="62" ></Studentss>


      <DynamicValueByProps name="mobile" price="3200" jabe="object akare jabe taw props peramitar rcve korle setar maddome"></DynamicValueByProps>

      <AddCssByObject></AddCssByObject>
      <CssStyleErJonno></CssStyleErJonno>

      <Student></Student>
      <Person name_property_or_props={"tipu"} ></Person>

      <SecondCom></SecondCom>
      <SecondCom></SecondCom>

      <ThirdCom></ThirdCom>

      <FourthCom></FourthCom>
      {/*  ei main App component er return er vitore jeshob child compoent call kora  hoi sei gulo k jtobar copy koa hobe totota component toiri hobee. ar ei call parent component er vitor theke child component k call kora k bola ho component calling ba component rendering , */}
    </>
  )
}


// --------------------- my components------------------------

const DefaultValueSet = ( {defaultValueSetKoraJai = "jodi kuno component call kora hoi kintu props pass kora na hoi tkn jodi sei componet er peeramitar hisebe default valuee set kora jai.", jodiPropsPassKoraNaHoi = 1 }) =>{

  return (
<div>
<h1> d{defaultValueSetKoraJai} d</h1>
<h1> d{jodiPropsPassKoraNaHoi} d</h1>
</div>

  )
}


const AllTypePropsPassByCompoCalling =  ( {eshobpassHoi,defaultValue = 10, object,array,boolean, string }  ) =>{
  return (
    <di>
<h2> parent component theke eshob props passing j akare pass hoi : {eshobpassHoi}  </h2>
<h2>object pass :  {object.object}  </h2>
<h2> abr props er maddome kuno object er vlauee na dile setar defualt value o set kora jai:  {defaultValue}  </h2>
<h2>array pass : {array}  </h2>
<h2>boolean pass : {boolean}  </h2>
<h2>string pass : {string}  </h2>
    </di>
  );
};


// -------------- important  component eta-----------------------
const PropsErValueHisebeObjectArrayBooleanStringNumberSobPassKoraJai =(  {  object11 , array , evabeEiPositionThekeEvabeValuePassKorakeBolaHoi} ) =>{

  return (
    <div>
<h1> {object11.obj} </h1> <br></br>
<h1> {array} </h1><br></br>
<h1> {evabeEiPositionThekeEvabeValuePassKorakeBolaHoi} </h1> 
    </div>
  )
}


// -------------------------------------------------------
// const PropsNaLikhaDestructing =(props) => {
const PropsNaLikhaDestructing =( {grade , subject}) => {// props na lika destururing eki line e.

  return (
  <div>
      <h2>grade holo: {grade}  </h2>
      <h2>subject holo: {subject} </h2>
  </div>
  )

}

// --------------------------------------------------

const Studentss = (props) => {
  return (
    <div>
      <h2>student name: name {props.name}  &
          roll holo: {props.roll} 
        tarpor age holo: {props.age}
      </h2>
    </div>
  );
};






// ---- Kuno tag er valueee dynamic vabeee (props/property) eer maddomeew patano jai props ---
const DynamicValueByProps = (props) => {
  return <h1>product:{props.name} , price {props.price} tarpor egulo kemne aslo? props jeta peramitar hisebe set kora hoise seta obj akaree asce , props ta na liklew default vabe hidden hoye props ta tahke, &  props er modde jei obj ta ase seta App.jsx er return ervitore theeke oi component tag er opeining component e ja lika hoiseee sta segulai a se. props diye: ki diye ei  value gulo pelo? {props.jabe}  </h1>
}


// --- caile kuno component e className  na bosai emene ,css er jonno obj banai  sei obj ta use korew css style add kora jai jmn:-----
const AddCssByObject = () => {

  const styleByJsOBJECT = {
    border: "2px solid white",
    borderRadius: "40px",
    padding: "10px",
    color: "#d77af9",
    paddingTop: "50px",
    // tobe ( hypen (-) use kora jabena.. multi-word css er ketre hypen(-) use na kore jabena , tai camelCase e likte hobe jmn: (borderRadius:"10px") evabe, jebabe lika jabena ta holo: (border-radius:"10px") evabe lika jabena. )
  }


  return (
    <div style={styleByJsOBJECT}>
      <h2>
        css er jonno className use na koreee direct object eer maddome style add , jei tag e style add korte hobe sei tag e just objct er namee ta bosai dilei hobe, jebabe likte hobe
        div style="curly opening bracket CssErStyleObjectName curly closing Bracket,,

      </h2>


      <div style={
        {
          margin: "10px",
          color: "white",
          border: "2px solid red",
          borderRadius: "20px",
        }
      }>
        <h2>
          abr caile evabe tag er opening tag er vitore style= likar pore curly bracket er vitore object e jevabe lika hoi tik sei vabew lika pela jai jmn ei tag e style bosano hoise.,tobe seei ketree double curly brackeet er vitore property likteee hoi, eekta hocce dynamic code likar jonno, & arekta sei proeprty gulo object akare lika hocce seta bujanor jonnoo
        </h2>
      </div>
    </div>


  )

}





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
    <div className="Student">
      <h2>student1 name: {student1_Details.name}   </h2>
      <h2>student1 age: {student1_Details.age}  </h2>
      <h2>student1 class: {student1_Details.class}  </h2>
      <h2>student1 isMale?:  {student1_Details.isMale} </h2>
    </div>
  );
}

const CssStyleErJonno = () => {
  return (
    <div>

      <h2> allah is almighty</h2>
      <p className="cssPtag">css style likte caile jeei tag e style dite caibo sei tag e className="XYZclass name" evabe likte hobe..</p>

    </div>
  )
};

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
