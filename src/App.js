import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Dashboard from './components/Dashboard/Dashboard';
import Form from './components/Form/Form';
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
    console.log(res.data)
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
    
    return (
      <div className="App">
        <Header />
        <Dashboard 
          key={this.state.inventory.product_id}
          inventory={inventory}
        />
        <Form 
          postProduct={this.postProduct}
          key={this.state.inventory.product_id}
        />
      </div>
    );
  }
}

export default App;