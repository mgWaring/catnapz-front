import  React, { Component } from 'react';
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
          <ul variant="pills" className="nav nav-pills" defaultActiveKey="/home">
            <li role="presentation" className="active">
              <a href="/home">Home</a>
            </li>
            <li role="presentation" className="">
              <a href="/away">Away</a>
            </li>
          </ul>
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