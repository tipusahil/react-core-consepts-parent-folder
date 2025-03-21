import './cart.css';


const Cart = ({ cart }) => {

    console.log(cart);
    return (
        <div>
            <h3>cart gulo holo: {cart.length} </h3>

            <div className="cart_container">
                {cart.map(bottle => <img src={bottle?.image} />)}
            </div>


        </div>
    );
};

export default Cart;