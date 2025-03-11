import React from "react";
const singleProduct = (props) => {
    // const singleProduct = ({ product1 }) => {// evabew kora jai, (bracket er vitore (props)ta) default vabe tahke hardcoddd vabe na lika direct okanew destruc kora jai.

    // console.log(props.product1)
    const { product1, index1 } = props;
    console.log(index1)

    return (
        <div>
            <h1>{product1.title}</h1>
        </div>
    );
}

export default singleProduct;