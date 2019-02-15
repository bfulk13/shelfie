import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Dashboard from './components/Dashboard/Dashboard';
import Form from './components/Form/Form';
import Product from './components/Product/Product';
import axios from 'axios';

class App extends Component {
  constructor(){
    super()

    this.state = {
      inventory: [],
      input: ``
    }
  }
  
componentDidMount(){
  axios.get('/api/inventory').then(res => {
    this.setState({
      inventory: res.data
    })
  })
}

postProduct = () => {
  const {input} = this.state;
  axios.post('/api/product', { inventory: input }).then(res => {
    this.setState({
      inventory: res.data,
      input: ``
    })
  })
}

deleteProduct = (id) => {
  axios.delete(`/api/inventory/${id}`).then(res => {
    this.setState({ inventory: res.data })
  })
}

  render() {
    const {inventory} = this.state;
    const mappedInventory = inventory.map( product => {
      return (
        <Product />
      )
    })
    return (
      <div className="App">
        <Header />
        <Dashboard 
          inventory={mappedInventory}
          key={inventory.id}
          name={inventory.name}
          price={inventory.price}
          img={inventory.img}
        />
        <Form 
          postProduct={this.postProduct}
        />
      </div>
    );
  }
}

export default App;