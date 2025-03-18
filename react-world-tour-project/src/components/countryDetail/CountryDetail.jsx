import React from 'react';
import CountryData from '../countrydata/CountryData';


const CountryDetail = (props) => {

    // const { country, markVisitedBtn_handler, Hanlde_visitedFlags } = props;


    // console.log(` from CountryDetail > inside country data ` + country , markVisitedBtn_handler , Hanlde_visitedFlags);


    return (
        <div>
            <h2>Country detail: compo </h2>

            <h2>nise Country data </h2>
            {/* ---------props drilling----CountryData calling ----------------------------------------------- */}

            {/* -------props patanor way no 1--------------- */}
            {/* <CountryData
                country={country}
                markVisitedBtn_handler={markVisitedBtn_handler}
                Hanlde_visitedFlags={Hanlde_visitedFlags}
            ></CountryData> */}


                {/* -------props patanor way no 1--------------- */}

                <CountryData  {...props} ></CountryData>

                {/* eknae defual vabe jeheto props ta ob jai so props ta ekan theke ...spread op diye oi obj tar (country,Hanlde_visitedFlags,etc) egulo copy hoye (CountryData) component er props hisebe jai  */}
        </div>
    );
};

export default CountryDetail;