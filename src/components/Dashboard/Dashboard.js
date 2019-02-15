import React, {Component} from 'react';
import Product from '../Product/Product'

class Dashboard extends Component{
    constructor(props){
        super(props)

        this.state = {
            
        }
    }

    render(){
        // const mappedInventory = this.props.map(item => {
        //     return (
        //         <Product 

        //         />
        //     )
        // })
        return(
            <div>
                <h1>Dashboard Component</h1>
            </div>
            
        )
    }
}

export default Dashboard;