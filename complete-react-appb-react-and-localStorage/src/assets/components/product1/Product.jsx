


const Product = ({ product ,hanlder_addToCart }) => {

    const { id, sonkar, name, price, img } = product;

    // console.log(product);

    return (
        <div className="compo1">
            <h3>ID: {id}</h3>
            <h3>Type: {sonkar}</h3>
            <h3>Product name:{name}</h3>
            <img src={img} alt="" />
            <h3>Price: {price}tk</h3>
<div className="compo_btn_container">
<button onClick={ () => hanlder_addToCart(product)} className="addtoCartBtn">Add To Cart</button>
<button className="parchaseBtn">Parchase</button>
</div>
        </div>
    );
};

export default Product;