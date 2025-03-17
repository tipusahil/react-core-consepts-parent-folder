import  './styleForCountry.css';


export default function Country( {country} ) {


    const {name,region, capital , flags} = country;
    console.log(country)
    console.log(flags?.png)
    return (
        <div className='compo'>
        
        <h2>Country Name: {name?.common} </h2>
        <h2>Region: {region} </h2>
        <h2>Capital: {capital} </h2>
        <h2>Flag: <img src={flags?.png} alt="" />  </h2>
        {/* <h2>flag: <img src={flags.svg} alt="" />  </h2> */}
       

        
        </div>
    )
}

