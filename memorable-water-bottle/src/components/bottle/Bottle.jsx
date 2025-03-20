import './bottle.css';


// const Bottle = ( bottle ) => {    /// jodi eta ase (...bottle) 

// const Bottle = ( {bottle , handlerParchaseBtAddToCard}) => {  

//  ar jodi (bottles)theke egulo pass hoi
// bottle={bottle}
// handlerParchaseBtAddToCard={handlerParchaseBtAddToCard}


const Bottle = (props) => {
const {bottle , handlerParchaseBtAddToCard} = props;
    // const {id,name,im} = props.bottle;
    const { id, name, image , price } = bottle;

// console.log(handlerParchaseBtAddToCard)

    return (
        <div className="Style_bottle">
            <h3>id: {id} </h3>
            <h3> name: {name} </h3>
           {/* img: { <img src={image} /> }  */}
           img: <img src={image} alt="" /> 

            <h3> price: {price}$ </h3>
            <button onClick={() => {
                    try{
                        handlerParchaseBtAddToCard(bottle)
                    }
                    catch(error){
                        console.log(`error ta holo = ${error}`)
                    };
            }}> Parchase</button>
        </div>
    );
};

export default Bottle;