import { useState, useEffect } from 'react';
// import '../public/products.json';
import Product from '../product1/Product';
// import { getCartFromLS, setCartToLS } from '../utilities/localStorage';


const Products = () => {


    // ------------------------------------------------------
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("./products.json")
            .then(res => res.json())
            .then(data => setProducts(data))
            .catch(err => console.log(`error ta hhol = ${err}`));
    }, []);
    // ------------------------------------------------------

    // ------------------------------------------------------

    const [cart, setCart] = useState([]);

    const hanlder_addToCart = itemForAddToCart => {

        // setCart([itemForAddToCart]);
        // -------------validation check--- ekta product jate ekadik bar add korte na apre tar jonno cart e thaka prodcut er id & new add korar jonno peramitar er maddome jei id ta asce setar id diye validation check kora hocce, jodi oi name id na thake tahle cart e thaka ager product gulo copy korbe & new product taw add kore dibe. ar jodi thake thle add korbena.------
        const isExist = cart.find(storedProduct => storedProduct.id === itemForAddToCart.id);
        // console.log(`${isExist ? isExist + "yes ase" : "na nai"}`);
        if (!isExist) {
            console.log("nai add kora hocce");
            setCart([...cart, itemForAddToCart]);

        }
        else {
            console.log('ase', cart);
            alert("this cart alrady have inside");

        }
        // -------------


    }

    // -------------------------cart item delete hanlder function start here----------------
    const handleDelete = id => {
        // console.log(id)
        const newcart = cart.filter(item => item.id != id);
        console.log(newcart);
        setCart(newcart);
    }
    // -------------------------cart item delete hanlder function end here----------------



    console.log(cart);
    //     const showItemToUI  = id =>{
    //      const isExist =   products.find(product => product.id ===id);
    // return isExist;
    //     }


    // getCartFromLS , setCartToLS
    // ------------------------------------------------------

    return (
        <div className='parent'>
            {/* <div className='compo_container'> */}

            <div className="compo_container">
                {products.map(product1 => <Product
                    key={product1.id}
                    product={product1}
                    hanlder_addToCart={hanlder_addToCart} >

                </Product>)}
            </div>

            <div className="cart_container">

                <h4 className='title'>this is cart container</h4>

                <div>
                    {cart.map((product1, index) => (
                        <div key={product1.id} className="cart_info">
                            <h5>{index + 1}</h5>
                            <h5>name: {product1.name}</h5>
                            <h5>price: {product1.price}</h5>
                            <button onClick={() => handleDelete(product1.id)}>delete</button>
                        </div>
                    ))}

                </div>

            </div>
        </div>
    );
};

export default Products;