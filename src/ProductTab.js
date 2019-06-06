import React, {PureComponent} from 'react';

export default class ProductTab extends PureComponent {

    render() {
        console.log(this.props);
        return(
        <div id={this.props.product.id} className="card-wrapper">
            <a href={this.props.product.id}>
            <div className="card">            
                <h3>{this.props.product.title}</h3>
                <p>{this.props.product.body}</p>
                <p>£ {this.props.product.price}</p>
            </div>
            </a>
        </div>
        );
    }
   
}