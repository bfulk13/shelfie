import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Dashboard from './components/Dashboard/Dashboard';
import Form from './components/Form/Form';
import Product from './components/Product/Product';

class App extends Component {
  constructor(){
    super()

    this.state = {
      inventory: [
        {
          id: 1,
          name:  `rifle`,
          price: 799,
          img: `https://images.unsplash.com/photo-1518219870542-9cc78377f953?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80`
        },
        {
          id: 2,
          name:  `handgun`,
          price: 499,
          img: `https://images.unsplash.com/photo-1510503973075-f00509204da1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80`
        },
        {
          id: 3,
          name: `knife-hatchet combo`,
          price: 199,
          img: `https://images.unsplash.com/photo-1483992233021-1801812fdacb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80`
        }
      ]
    }
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
        <Form />
      </div>
    );
  }
}

export default App;
