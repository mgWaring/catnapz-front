import React, { PureComponent } from 'react';
import './ProductTab.css';

export default class ProductTab extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            expand: false
        }
    }

    handleClick = (e) => {
        this.setState({ expand: !this.state.expand })
    }

    render() {
        const expand = this.state.expand ? 'expanded' : 'collapsed';
        return (
            <div id={this.props.product.id} className={`card-wrapper ${expand}`} onClick={this.handleClick}>
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