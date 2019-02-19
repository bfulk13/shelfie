import React, {Component} from 'react';

class Form extends Component{
    constructor(props){
        super(props)

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

    addProduct = () => {
        this.props.postProduct({
            imgURL: this.props.imgURL,
            prodName: this.props.prodName,
            price: this.props.price
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
                <button onClick={ () => this.addProduct() }>Add to Inventory</button>
            </div>
            
        )
    }
}

export default Form;