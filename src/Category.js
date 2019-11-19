import React, { Component } from 'react';
import { getProductsTried, getProductAtCatalog } from './service';
import get from 'lodash.get';
import { Link } from 'react-router-dom';

export default class Category extends Component {
  state = {
    products: [],
    catalog: [],
  };
  async componentDidMount() {
    const catalog = await getProductsTried();
    this.setState({
      catalog,
    });
    const catalogAtPath = get(
      catalog,
      this.props.match.url.replace(/\//gi, '.').slice(1)
    );
    const products = getProductAtCatalog(catalogAtPath);
    this.setState({
      products,
    });
  }

  render() {
    return (
      <div className="container">
        {this.state.products.map(result => (
          <div key={result.id} className="containerProduct">
            <Link to={`/product/${result.id}`}>
              <img src={result.image} alt="product"></img>
              <div className="containerInfo">
                <h1>{result.section}</h1>
                <p>{result.price} TVA incluse</p>
              </div>
              <p>{result.title}</p>
            </Link>
          </div>
        ))}
      </div>
    );
  }
}
