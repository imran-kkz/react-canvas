import React from 'react'

function Product(props){
    return(
        <div>
            <h2>Product Name: {props.name}</h2>
            <h3>Product Price: {props.price}</h3>
            <h4>Product Description: {props.description}</h4>
        </div>
    )
}
export default Product