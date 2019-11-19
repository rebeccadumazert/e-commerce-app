import React, { Component } from 'react';
import { getProducts } from './service';
import './product.css';

export default class Product extends Component {
  state = {
    results: [],
    product: {},
  };

  async componentDidMount() {
    const results = await getProducts();
    this.setState({
      results,
    });
    this.findProductByID();
    console.log(this.state.product);
  }
  findProductByID() {
    const product = this.state.results.find(
      result => result.id === this.props.match.params.productID
    );
    this.setState({
      product: product,
    });
  }

  render() {
    const {
      product: { image, title, section, price },
    } = this.state;
    return (
      <div className="container">
        <div className="imgContainer">
          <img className="imgProduct" src={image} alt="" />
        </div>
        <div className="productContainer">
          <p>{title}</p>
          <h2>{section}</h2>
          <p>{price}</p>
          <button>AJOUTER AU PANIER</button>
        </div>
      </div>
    );
  }
}
