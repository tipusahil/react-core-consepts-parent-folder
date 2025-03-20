function getData_FromLocalStorage() {
    const cart = localStorage.getItem('cart');

    if (cart) {
        return JSON.parse(cart); // shorthand

        // const realCart = JSON.parse(cart);
        // return realCart;
    }
    return [];

}

// -----------------------------------------

function setNewItemToLocalStorage(newItem) {
    const savedCart = getData_FromLocalStorage();
    savedCart.push(newItem)
    localStorage.setItem("cart", JSON.stringify(savedCart));// shorthand
    //  --easy but lengty way 2
    // let cartStringified = JSON.stringify(savedCart);
    // localStorage.setItem("cart", cartStringified);

}

setNewItemToLocalStorage();

// -----------------------------------------
// const newItem = [
//     { id: 1, name: "Classic Water Bottle", image: "https://i.pinimg.com/736x/3c/92/47/3c92478e4a3444e9edd5b965446b1ddc.jpg" },
//     { id: 2, name: "Sporty Water Bottle", image: "https://i.pinimg.com/736x/3c/92/47/3c92478e4a3444e9edd5b965446b1ddc.jpg" },
//     { id: 3, name: "Eco-friendly Water Bottle", image: "https://i.pinimg.com/736x/3c/92/47/3c92478e4a3444e9edd5b965446b1ddc.jpg" },

// ];

// setNewItemToLocalStorage(newItem);

