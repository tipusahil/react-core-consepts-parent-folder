import { useState, useEffect } from 'react';
// import '../public/products.json';
import Product from '../product1/Product';


const Products = () => {


    // ------------------------------------------------------
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("products.json")
            .then(res => res.json())
            .then(data => setProducts(data))
            .catch(err => console.log`error ta hhol = ${err}`);
    }, []);
    // ------------------------------------------------------


    return (
        <div>

<div className="compo_containe2">
{products.map(product1 => <Product key={product1.id} product={product1} ></Product>)}
</div>

        </div>
    );
};

export default Products;