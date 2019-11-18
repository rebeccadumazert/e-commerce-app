import React, { Component } from 'react';
import getProducts from './service';
import './home.css';

export default class Home extends Component {
  state = {
    results: [],
  };
  async componentDidMount() {
    const results = await getProducts();
    this.setState({
      results,
    });
    console.log(results);
  }
  render() {
    return (
      <div className="container">
        {this.state.results.map(result => (
          <div key={result.id} className="containerImg">
            <img src={result.image} alt="product"></img>
            <div className="containerInfo">
              <h1>{result.section}</h1>
              <p>{result.price}</p>
            </div>
            <p>{result.title}</p>
          </div>
        ))}
      </div>
    );
  }
}
