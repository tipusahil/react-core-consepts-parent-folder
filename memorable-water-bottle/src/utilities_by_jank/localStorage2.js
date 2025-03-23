const getCartFromLS = () => {

    const cart = localStorage.getItem('cart');

    if (cart) {//thakle/true hole dukbe if er code block e
        return JSON.parse(cart);
    }
    return [];
}



const saveNewCartToLS = (cartData) => {
    const cartStringified = JSON.stringify(cartData);

    // localStorage.setItem("cart",JSON.stringify(cartData)); //shorthand
    localStorage.setItem("cart", cartStringified);
}

const SetNewItemToCartToLS = newItem => {
    const cart = getCartFromLS();
    cart.push(newItem);

    saveNewCartToLS(cart);
}

// SetNewItemToCartToLS()


const removeCartFromLS = id => {
    // visual cart remove korte hbe
    // & LS theke cart ta remove korte hobe.

    const cart = getCartFromLS();
    const remainingCart = cart.filter(idx => idx !== id);

    saveNewCartToLS(remainingCart);
}






export { SetNewItemToCartToLS , getCartFromLS ,removeCartFromLS };