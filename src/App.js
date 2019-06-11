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
        let entry = <ProductTab key={key} product_id={key} product={product} />
        array.push(entry);
      }
    }
    return array
  }

  render() {
    return (
      <div className="App">
        <div className="catnaps-header">
          <img src={this.state.config.logoUrl} alt="CatNapz logo" width="100" height="100" className="catnaps-logo" />
          <span className="header-text">
            CatNapz
          </span>
        </div>
        <div className="container App-body">
          <p className="body-text">
            {this.state.config.blurb}
          </p>
          <div className="products">
            {this.getProducts()}
          </div>
        </div>
        <footer className="footer catnaps-footer">
          <div >
            <p className="footer-text"> Created By Max Waring | <span className="spin">&#169;</span> 2019</p>
          </div>
        </footer>
      </div>
    );
  }
}