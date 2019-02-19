import React from 'react';

export default function Product(props){
    return(
        <div>
            <h1>Product</h1>
            <p>Name: {props.name}</p>
            <p>Price: {props.price}</p>
            <img src="{props.img}" alt="product"/>
        </div>
    )
}