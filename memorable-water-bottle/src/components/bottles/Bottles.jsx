import { useState } from 'react';
import { useEffect } from 'react';
import './bottles.css';
import Bottle from '../Bottle/Bottle';
import { SetNewItemToCartToLS, getCartFromLS } from '../../utilities_by_jank/localStorage2';

const Bottles = () => {

    const [bottles_st, setbottles_st] = useState([]);

    useEffect(() => {
        fetch('bottles.json')
            .then(res => res.json())
            .then(data => setbottles_st(data))
            .catch(err => console.log(`error ta holo ${err}`));
    }, []);

    // console.log(setbottles_st)


    // ---------------------bottle parchase event handler start here--------------------------

    const [cart, setCart] = useState([]);

    const handlerParchaseBtAddToCart = lastAdded_bottle => {
        console.log(lastAdded_bottle.name);
        console.log(lastAdded_bottle);

        const newCart = [...cart, lastAdded_bottle];
        setCart(newCart);
        // console.log(cart);
        SetNewItemToCartToLS(lastAdded_bottle.id);
    }

    // ---------------------bottle parchase event handler end here------------------


    // --------------laod cart from localStorage by useEffect , START HERE----------
    useEffect(() => {

        // if (cart.length > 3) {// eirokom condtion diyew useEffect load koranu jai.
        const stored_savedCartOr_id = getCartFromLS();
        // setCart(stored_savedCartOr_id);
        console.log(`stored cart/id holo = `, stored_savedCartOr_id);

        // ----LS te stored howa id gulo te loop caliye sei id diye (bottles_st)te find kore jei id gulo ls e stored kora id er sate mattch kabe sei id wala item gulo notun ekta array te push kora jate ls te stored howa item gulo ui tew show koranu jai.
        const savedCartOrIdForShowingToUI = [];
        for (const storedItemId of stored_savedCartOr_id) {
            console.log(storedItemId);

            const cartMatchedBottle = bottles_st.find(bottle => bottle.id === storedItemId);
            console.log(`localStorage e saved cart/id gulo holo = `, cartMatchedBottle);
            savedCartOrIdForShowingToUI.push(cartMatchedBottle);

        };

        console.log(savedCartOrIdForShowingToUI);


    },[cart]);
    // --------------laod cart from localStorage by useEffect , START HERE----------


    return (
        <div>
            <h2>bottle ase holo: {bottles_st.length} </h2>
            <h3>bottle added to cart: {cart.length}</h3>
            {/* <h3>last added bottle name: {(cart.length - 1).name} </h3> */}



            <div className="bottles_container">
                {
                    bottles_st.map(bottle => <Bottle
                        // {...bottle} 
                        bottle={bottle}
                        key={bottle.id}
                        handlerParchaseBtAddToCart={handlerParchaseBtAddToCart}
                    ></Bottle>)
                    // key={bottle.id} bottle={bottle}
                }
            </div>

        </div>
    );
};

export default Bottles;