import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Dashboard from './components/Dashboard/Dashboard';
import Form from './components/Form/Form';
import axios from 'axios';
import Routes from './routes';
import {HashRouter as Router} from 'react-router-dom';

class App extends Component {
  constructor(){
    super()

    this.state = {
      inventory: [],
      currItem: {}
    }
  }
  
componentDidMount(){
  this.getInventory();
}

getInventory = () => {
  axios.get('/api/inventory').then(res => {
    // console.log(res.data)
    this.setState({
      inventory: res.data
    })
  })
}

handleEdit = (event) => {
  this.setState({
    currItem: event
  })
}

// postProduct = () => {
//   const {input} = this.state;
//   axios.post('/api/product', { inventory: input }).then(res => {
//     this.setState({
//       inventory: res.data,
//       input: ``
//     })
//   })
// }



  render() {
    const {inventory} = this.state;
    
    return (
      <div className="App"> 
        <Header />
        <Dashboard 
          key={this.state.inventory.product_id}
          inventory={inventory}
          refresh={this.getInventory}
          handleEdit={this.handleEdit}
        />
        <Form 
          postProduct={this.postProduct}
          key={this.state.inventory.product_id}
          refresh={this.getInventory}
        />
      </div>
    );
  }
}

export default App;