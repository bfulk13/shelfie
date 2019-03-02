import React, {Component} from 'react';
import Product from '../Product/Product';
import axios from 'axios';

class Dashboard extends Component{
    // constructor(props){
    //     super(props)

    //     this.state = {
    //         product_id: this.props.product_id,
    //         name: this.props.name,
    //         price: this.props.price,
    //         img: this.props.img
    //     }
    // }

    deleteProduct = (id) => {
        axios.delete(`/api/inventory/${id}`).then(res => {
            this.setState({ inventory: res.data })
        })
    }

    render(){
        const mappedInventory = this.props.inventory.map( product => {
            const { id } = product;
            return(
                <Product 
                    key={id}
                    product={product}
                    imgUrl={this.props.img}
                    delete={this.deleteProduct}
                    edit={this.props.handleEdit}
                />
            )
        })
        return(
            <div>
                <h1>Dashboard Component</h1>
                {mappedInventory}
            </div>
            
        )
    }
}

export default Dashboard;