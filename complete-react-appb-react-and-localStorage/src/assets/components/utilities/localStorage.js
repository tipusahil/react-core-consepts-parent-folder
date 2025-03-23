const getCartFromLS = () => {
    // const cart = localStorage.getItem("cart") || [];
    // return cart;

    const cart = localStorage.getItem('cart');
    if (cart) {
        return JSON.parse(cart);
    }
    return [];
}

// const gottedCart = getCartFromLS();
// console.log(gottedCart)

const setCartToLS = newCartId => {
    const storedCart = getCartFromLS();
    storedCart.push(newCartId);
    localStorage.setItem("cart", JSON.stringify(storedCart) );//  shorthand

    //  bujar jonno niser ta
// const storedCartAfterStringified = JSON.stringify(storedCart);
//     localStorage.setItem("cart", storedCartAfterStringified );
}

// setCartToLS(12323);


export { getCartFromLS , setCartToLS };