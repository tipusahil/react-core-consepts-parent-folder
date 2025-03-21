import './bottle.css';
import PropTypes from "prop-types";

// const Bottle = ( bottle ) => {    /// jodi eta ase (...bottle) 

// const Bottle = ( {bottle , handlerParchaseBtAddToCart}) => {  

//  ar jodi (bottles)theke egulo pass hoi
// bottle={bottle}
// handlerParchaseBtAddToCart={handlerParchaseBtAddToCart}


const Bottle = (props) => {
const {bottle , handlerParchaseBtAddToCart} = props;
    // const {id,name,im} = props.bottle;
    const { id, name, image , price } = bottle;

// console.log(handlerParchaseBtAddToCart)

    return (
        <div className="Style_bottle">
            <h3>id: {id} </h3>
            <h3> name: {name} </h3>
           {/* img: { <img src={image} /> }  */}
           img: <img src={image} alt="" /> 

            <h3> price: {price}$ </h3>
            <button onClick={() => {
                    try{
                        handlerParchaseBtAddToCart(bottle)
                    }
                    catch(error){
                        console.log(`error ta holo = ${error}`)
                    };
            }}> Parchase</button>
        </div>
    );
};

Bottle.propTypes = {
    bottle: PropTypes.object.isRequired,
    handlerParchaseBtAddToCart: PropTypes.func.isRequired,
}

export default Bottle;