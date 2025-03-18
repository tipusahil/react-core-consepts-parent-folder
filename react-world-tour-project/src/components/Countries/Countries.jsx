
import Country from "../Country"
import './countries.css'
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
    // ---------------------------end--------------------------------------

    // -------------------mark visited btn functionality start------------

    const [markVisitedCountries, setmarkVisitedCountries] = useState([])

    const markVisitedBtn_handler = (visitedCountry_name_From_country) => {
        console.log("eta country component er (mark visited) btn click korle ei (arrow function er mddome oi (countries.jsx) theke pawa (markVisitedCountriesBtn_handler(country ))  evabe argument hisebe country ortat component pass kora hobe.) erpor seta  ((contries.jsx) er (markVisitedCountriesBtn_handler) er functioner maddome peramitarta pabe & seta console hbe");
        console.log(visitedCountry_name_From_country)
        // --push pop kaj hoina karon:
        //  setmarkVisitedCountries(push((country));// react er hook/useState e kuno array te notun kuno item add/remove korte caile (push,pop) egulo diye kaj hobena , tai useState er thaka array take (...spread) op. diye (...useStateArray) ta copy kore notun 1ta arraybane hobe, then jei item ta add/remove krote caile sei item ta oi notun array er modde add kroe dite hobe jmn: 

        // (...spread op) diye state er array te notun item add kora hoi.jmn:

        // const newMarkVisitedCountriesArray = [...markVisitedCountries , country];// ager use state er array copy kore notun ekta item/country jog kore new array banalam , then seta setState kore dilm niser line er maddome.

        // const newMarkVisitedCountriesArray = [...markVisitedCountries , `${markVisitedCountries.includes(country)? "already have it":country }`];
        const newMarkVisitedArray = [...markVisitedCountries, ` ${markVisitedCountries.includes(visitedCountry_name_From_country) ? markVisitedCountries : visitedCountry_name_From_country}`];

        setmarkVisitedCountries(newMarkVisitedArray);
        console.log(markVisitedCountries);
    }
    // -----------mark visited btn functionality end--------------------------------------

    // -----------------------Hanlde_visitedFlags start here ------------------------------

    const [visitedFlags , setvisitedFlags] = useState([]);

    const Hanlde_visitedFlags =(flagsPropsFromCountry) => {
        console.log(flagsPropsFromCountry);

        const new_visitedFlags   = [...visitedFlags ,flagsPropsFromCountry];
        setvisitedFlags(new_visitedFlags)
    }


    // -----------------------Hanlde_visitedFlags end here ------------------------------

    // -----------------------------------------------------------------





    return (
        <div className="">

            <div className="map_of_contries">

                <h2>Countries ase : {countries.length} ta </h2>

                {/* ----------------------start slice 0-5---------------- */}
                {/* slice kore 250ta theke 5ta deakte caile */}
                {/* <div className="compo_container">
                    {countries.slice(0, 5).map(country_1ta_kore => <Country country={country_1ta_kore} ></Country>)}
                </div> */}

                {/* ----------------------end------------------- */}




                {/* ------- mark visited btn click korlei sei component gulo ei ol container e add hobe. start here ------------------------ */}

                <div>
                    <ol> marked visited  countries: 
                        {
                            markVisitedCountries.map(visitedCountry_name_From_country => <li>{visitedCountry_name_From_country}</li>  )
                        }
                       
{/* {visitedFlags.map(visitedFlags_1_src => <li><img src={visitedFlags_1_src}></img></li> )} */}
                        {/* <p>visited countries: <li>{markVisitedCountries.name}</li> </p> */}

                    </ol>

                </div>

                {/* visited flags */}
<div className="visitedCountries_countries">
<ul>  {visitedFlags.map(visitedFlags_1_src => <img className="" src={visitedFlags_1_src}></img>)}</ul>

</div>
                {/* ------------------------ol end here ------------------------- */}




                {/*------------- 250ta sob dekate caile ------------------*/}
                <div className="compo_container">

                    {

                        countries.map(country_1ta_kore =>
                            <Country
                                country={country_1ta_kore}
                                markVisitedBtn_handler={markVisitedBtn_handler} 
                                Hanlde_visitedFlags = {Hanlde_visitedFlags}
                                ></Country>)

                    }

                </div>
                {/* -------------------------------------- */}

            </div>



        </div>
    );
};

export default Countries;