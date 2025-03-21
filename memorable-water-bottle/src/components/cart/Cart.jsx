
import PropTypes from 'prop-types';



import './cart.css';


const Cart = ({ cart , handler_removeCartFromLS }) => {

    console.log(cart);
    return (
        <div>
            <h3>cart gulo holo: {cart.length} </h3>

            <div className="cart_container">
                {cart.map(bottle =>
                <div> 
                     <img src={bottle?.image} />
                     <button onClick={() => handler_removeCartFromLS(bottle?.id)}>remove item</button>
                 </div>)}
                
            </div>


        </div>
    );
};

Cart.propTypes = {
    cart : PropTypes.array.isRequired,
    handler_removeCartFromLS: PropTypes.func.isRequired,
}
export default Cart;