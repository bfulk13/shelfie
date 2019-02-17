import React from 'react';

export default function Product(props){
    return(
        <div>
            <h1>Product</h1>
            <p>Name: {this.props.name}</p>
            <p>Price: {this.props.price}</p>
            <img src="{this.props.img}" alt="{this.props.name}"/>
        </div>
    )
}