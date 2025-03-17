
import Country from "../Country"

import { useEffect, useState } from "react";

const Countries = () => {

    const [countries, setcountries] = useState([]);//mt array dite hobe jodi ekadik obj set hoi, ortat (array of obj) hole
    useEffect(() => {

        fetch("https://restcountries.com/v3.1/all")
            .then(res => res.json())
            .then(data => setcountries(data))
            .catch(error => console.error(`amr error ta holo = ${error}`));

    }, []);// [] eta holo dependency etar upor depend kore useEffect ta execute hbe.


    // after set ta countires data on useState
    // console.log(countries)

    //  return er vitore html moto koree ja lika hoi seta  jsx (javaScript Xml) 

    return (
        <div>
            <h2> pass hobe ei jsx theke </h2>

            <div className="map_of_contries">

                <h2>Countries ase : {countries.length} ta </h2>

{/* -------------------------------------- */}
{/* slice kore 250ta theke 5ta deakte caile */}
                {countries.slice(0, 5).map(country_1ta_kore => <Country country={country_1ta_kore} ></Country>)}


{/* 250ta sob dekate caile ------------------*/}
                {
                countries.map(country_1ta_kore => <Country country={country_1ta_kore} ></Country>)
                }
{/* -------------------------------------- */}


            </div>



        </div>
    );
};

export default Countries;