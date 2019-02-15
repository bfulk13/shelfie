import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header'
import Dashboard from './components/Dashboard/Dashboard';
import Form from './components/Form/Form'

class App extends Component {
  constructor(){
    super()

    this.state = {
      inventory: [
        {
          name:  `rifle`,
          price: 799,
          img: `https://images.unsplash.com/photo-1518219870542-9cc78377f953?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80`
        },
        {
          name:  `handgun`,
          price: 499,
          img: `https://images.unsplash.com/photo-1510503973075-f00509204da1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80`
        },
        {
          name: `knife-hatchet combo`,
          price: 199,
          img: `https://images.unsplash.com/photo-1483992233021-1801812fdacb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80`
        }
      ]
    }
  }
  
  render() {
    const { inventory } = this.state;
    return (
      <div className="App">
        <Header />
        <Dashboard 
          inventory={inventory}
        />
        <Form />
      </div>
    );
  }
}

export default App;
