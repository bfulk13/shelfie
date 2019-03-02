import React, {Component} from 'react';
import axios from 'axios';

class Form extends Component{
    constructor(props){
        super(props)

        this.state = {
            imgURL: ``,
            prodName: ``,
            price: 0
        }
    }

    handleInput = (prop, val) => {
        this.setState({
            [prop]: val
        })
    }

    cancelAdd = () => {
        this.setState({  
            imgURL: ``,
            prodName: ``,
            price: 0
        })
    }

    componentDidUpdate(appProps, appState){
        if(appProps.currItem !== this.props.currItem){
            const { product_id, name, price, img } = this.props.currItem;
            this.setState({
                name: name,
                price: price,
                imgUrl: img,
                id: product_id 
            })
        }
    }

    addProduct = () => {
        const { prodName, price, imgUrl } = this.state;
        axios.post(`/api/product`, { prodName, price, imgUrl }).then(res =>{
            this.setState({
                imgURL: ``,
                prodName: ``,
                price: 0
            })
        })
        this.props.refresh();
    }

    editProduct = () => {
        const { imgUrl, prodName, price, id } = this.state;
        axios.put(`/api/product/${id}`,{prodName,price,imgUrl}).then(res => {
            this.setState({
                name:``,
                price:0,
                url:``,
                id:``  
            })
        })
        this.props.refresh()
    }



    render(){
        return(
            <div>
                <h1>Form Component</h1>
                <input 
                    value={this.state.imgURL}
                    onChange={ e => this.handleInput('imgUrl', e.target.value) }
                    placeholder="image URL"
                />
                <input 
                    value={this.state.prodName}
                    onChange={ e => this.handleInput('prodName', e.target.value) }
                    placeholder="product name"
                />
                <input 
                    value={this.state.price}
                    onChange={ e => this.handleInput('price', e.target.value) }
                    placeholder="price"
                />
                <button onClick={ () => this.cancelAdd() }>Cancel</button>
                {this.state.id ? 
                    (<button onClick={ () => this.editProduct() }>Save Changes</button>)
                    :
                    (<button onClick={ () => this.addProduct() }>Add to Inventory</button>)
                }
            </div>
            
        )
    }
}

export default Form;