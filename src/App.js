import React, { Component } from 'react';
import ProductTab from './ProductTab';

import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      config: require('./config.json'),
    }
  }

  getProducts() {
    let array = [];
    let products = this.state.config.products;
    for (const key in products) {
      let product = products[key];
      console.log(product)
      //optional check for properties from prototype chain
      if (products.hasOwnProperty(key)) {
        let entry = <ProductTab key={key} product={product} />
        array.push(entry);
      }
    }
    return array
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <ul variant="pills" className="nav nav-pills" defaultactivekey="/home">
            <li role="presentation" className="active">
              <a href="/home">Home</a>
            </li>
            <li role="presentation" className="">
              <a href="/away">Away</a>
            </li>
          </ul>
        </header>
        <div className="container App-body">
          <p className="body-text">
            {this.state.config.blurb}
          </p>
          {this.getProducts()}
        </div>
        <footer className="footer App-footer">
          <p> Created By Max Waring</p>
        </footer>
      </div>
    );
  }
}