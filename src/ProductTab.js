import React, { PureComponent } from 'react';
import './ProductTab.css';

export default class ProductTab extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            expand: false,
            moreContent: false
        }
    }

    handleClick = (e) => {
        this.setState({ expand: !this.state.expand, moreContent: !this.state.moreContent })
    }

    render() {
        const expand = this.state.expand ? 'expanded' : '';
        return (
            <a href={`#${this.props.product_id}`} className={`card-wrapper ${expand}`} onClick={this.handleClick}>
                {this.state.moreContent ?
                    <div className="large-card">
                        <div>
                            <h2>{this.props.product.title}</h2>
                            <img src={this.props.product.imageUrl ? this.props.product.imageUrl : 'http://placehold.it/300'}
                                alt='alt text'
                            />
                        </div>
                        <div>
                            <p>{this.props.product.body}</p>
                            <br />
                            <p>£ {this.props.product.price}</p>
                        </div>
                    </div>
                    :
                    <div className="card">
                        <h3>{this.props.product.title}</h3>
                        <p>{this.props.product.body}</p>
                        <p>£ {this.props.product.price}</p>
                    </div>
                }
            </a>
        );
    }

}