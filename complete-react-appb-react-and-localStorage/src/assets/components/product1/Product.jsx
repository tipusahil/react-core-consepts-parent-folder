


const Product = ({ product }) => {

    const { id, sonkar, name, price, img } = product;

    console.log(product);

    return (
        <div className="compo1">
            <h3>ID: {id}</h3>
            <h3>type: {sonkar}</h3>
            <h3>this product name:{name}</h3>
            <img src={img} alt="" />
            <h3>this product price:{price}</h3>
            <button className="parchaseBtn">Parchase</button>
        </div>
    );
};

export default Product;