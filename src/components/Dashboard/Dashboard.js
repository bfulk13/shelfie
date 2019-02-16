import React, {Component} from 'react';
import Product from '../Product/Product'

class Dashboard extends Component{
    constructor(props){
        super(props)

        this.state = {
            product_id: props.product_id,
            name: props.name,
            price: props.price,
            img: props.img
        }
    }

    render(){
        const mappedInventory = this.props.inventory.map( product => {
            return(
                <Product 
                    key={this.state.product_id}
                    name={this.state.name}
                    price={this.state.price}
                    img={this.state.img}
                />
            )
        })
        console.log(mappedInventory)
        return(
            <div>
                <h1>Dashboard Component</h1>
                {mappedInventory}
            </div>
            
        )
    }
}

export default Dashboard;