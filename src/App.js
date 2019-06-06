import  React, { Component } from 'react';
import logo from './logo.svg';
import { Nav } from 'react-bootstrap';

import ProductTab from './ProductTab';

import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      config : require('./config.json'),
    }
    console.log(this.state)
  }

  getProducts() {
    let array = [];
    let obj = this.state.config.products;
    for (const key in obj) {
      let product = obj[key];      
      console.log(product)
      //optional check for properties from prototype chain
      if (obj.hasOwnProperty(key)) {
        let entry = <ProductTab product={ product }/>
        array.push(entry);     
      }
    }
    console.log(array)
    return array
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Nav variant="pills" className="nav nav-pills" defaultActiveKey="/home">
            <Nav.Item role="presentation" className="active">
              <Nav.Link href="/home">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item role="presentation" className="">
              <Nav.Link href="/away">Away</Nav.Link>
            </Nav.Item>
          </Nav>
        </header>
        <body className="container App-body">
          <p className="body-text">
            {this.state.config.blurb}
          </p>
          {this.getProducts()}
        </body>
        <footer className="footer App-footer">
          <p> Created By Max Waring</p>
        </footer>
      </div>
    );
  }
}