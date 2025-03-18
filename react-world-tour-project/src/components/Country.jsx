import { useState } from 'react';
import './country.css';
import CountryDetail from './countryDetail/CountryDetail';

export default function Country({ country , markVisitedBtn_handler , Hanlde_visitedFlags }) {


    const { name, region, capital, flags, population, area, cca3 } = country;
    // console.log(country)
    // console.log()
    // console.log(flags?.png)

    // ---------------button er functionality start here---------------
    const [visited, setvisited] = useState(false);
    const visit_handler = () => {

        // setvisited(true)// just ek rokom kaj hobe.

        setvisited(!visited);// toggle (!true = false ) korbe. ar jodi (!false = true) kore dibe.
        // 
        // hobe eta: ortat visited er value jodi false thakee thle true hoye jabe, & jodi true thake thle false hoye jabe. 

        /* 
         ortat visited state er value default vabe (false) set kora  ase kintu jokon  (visited button)  click korbe tkn ei (visit_handler) function ta call hobe & function er vitore dukbe. jodi user click kore thle (visited state) er value jodi true thake tokon false kore dibe. ar jodi false thake tokon true korbe. etai holo toggle er kaj
        */


 
    }
    // ---------------button er functionality end here---------------
       //  ---------------------rcve visited flags function from countries-------------
       const propsOfVisitedFlags = () => {
        Hanlde_visitedFlags(flags?.png)
    }




// console.log(markVisitedBtn_handler);





    return (


        <div className={`compo country ${visited && "visited"} `}>
{/*1.--- ekane className er modde {} diye condtion er upor bitti kore class add kora jai, abr template strng use korew kora jai. */}
        



{/* 2.--- abr caile (style) attribut er maddomew same {} diye style add kora jai */}
            <h2 style={{color: visited ? "green":"red", }}  >Country Name: {name?.common} </h2>




            <h2>Region: {region} </h2>
            <h2>Capital: {capital} </h2>
            {/* <h2>flag: <img src={flags.svg} alt="" />  </h2> */}
            <h2>Population: {population} </h2>
            <h2>Area: {area} </h2>
            <h2>Flag: <img src={flags?.png} alt="" />  </h2>
            <h2>code/key: {cca3} </h2>

            {/* -------mark visited btn ---- */}
            <button onClick={ () => markVisitedBtn_handler(name?.common) }>mark visited</button> 

            {/* visited flags button  */}
            <button onClick={propsOfVisitedFlags}>visited flags</button>
            
<br>
</br>

{/* visited button ------------- */}
            <button onClick={visit_handler}> {visited ? "Visited" : "Going"} </button>

            <p>  {visited ? "yes, i visited this country." : "I want to visit this country."} </p>


{/*  ---------- props drilling ---------------------country details coompo calling --------------------- */}
<hr/>
            <CountryDetail
            country={country}
            markVisitedBtn_handler={markVisitedBtn_handler}
            Hanlde_visitedFlags={Hanlde_visitedFlags}
            ></CountryDetail>
        </div>


    )
}

