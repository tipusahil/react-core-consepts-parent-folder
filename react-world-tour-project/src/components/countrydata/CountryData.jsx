import React from 'react';

const CountryData = ( props ) => {

   const  { country, markVisitedBtn_handler, Hanlde_visitedFlags } = props;

// console.log(` from countryData > inside country data ` + country , markVisitedBtn_handler , Hanlde_visitedFlags);


    return (
        <div>
            <h3>inside contrydetail asce jmn: {country?.name?.common} </h3>
        </div>
    );
};

export default CountryData;