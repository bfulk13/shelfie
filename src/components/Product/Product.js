import React from 'react';

export default function Product(props){
    return(
        <div>
        {console.log(props)}
            <h1>Product</h1>
            <p>Name: {props.product.name}</p>
            <p>Price: {props.product.price}</p>
            <img src="{props.product.img}" alt="product"/>
            <button onClick={ () => props.delete(props.product.id) }>Delete</button>
            <button onClick={ () => props.handleEdit(props.product) }>Edit</button>
        </div>
    )
}