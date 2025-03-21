const getCartFromLS= () => {
    // const cart = localStorage.getItem("cart") || [];
    // return cart;

    const cart = localStorage.getItem('cart');
    if(cart){
        return JSON.parse('cart');
    }
    return [];
}

// const gottedCart = getCartFromLS();
// console.log(gottedCart)

const setCartToLS = newCartId =>{
const previousCart = getCartFromLS();
previousCart.push(newCartId);
}

const addItemToLS = () =>{

}

export { getCartFromLS };