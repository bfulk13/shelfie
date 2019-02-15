import React, {Component} from 'react';

class Form extends Component{
    constructor(){
        super()

        this.state = {
            imgURL: ``,
            prodName: ``,
            price: 0
        }
    }

    handleImg = (val) => {
        this.setState({ imgURL: val })
    }

    handleProdName = (val) => {
        this.setState({ prodName: val })
    }

    handlePrice = (val) => {
        this.setState({ price: val })
    }

    cancelAdd = () => {
        this.setState({  
            imgURL: ``,
            prodName: ``,
            price: 0
        })
    }

    render(){
        return(
            <div>
                <h1>Form Component</h1>
                <input 
                    value={this.state.imgURL}
                    onChange={ e => this.handleImg(e.target.value) }
                />
                <input 
                    value={this.state.prodName}
                    onChange={ e => this.handleProdName(e.target.value) }
                />
                <input 
                    value={this.state.price}
                    onChange={ e => this.handlePrice(e.target.value) }
                />
                <button onClick={ () => this.cancelAdd() }>Cancel</button>
                <button>Add to Inventory</button>
            </div>
            
        )
    }
}

export default Form;