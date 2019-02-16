import React from 'react';
import Dashboard from '../Dashboard/Dashboard'

export default function Product(props){
    return(
        <div>
            <h1>Product</h1>
            <p>{props.name}</p>
            <p>{props.price}</p>
            <img src="{props.img}" alt="product-image"/>
        </div>
    )
}