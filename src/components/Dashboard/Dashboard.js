import React, {Component} from 'react';
import Product from '../Product/Product'

class Dashboard extends Component{
    constructor(props){
        super(props)

        this.state = {
            
        }
    }

    render(){
        
        return(
            <div>
                <h1>Dashboard Component</h1>
                {this.props.inventory}
            </div>
            
        )
    }
}

export default Dashboard;