import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Product from './Product';
import { Header } from './Header';
import Category from './Category';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path="/" component={Header}></Route>
        <Route exact path="/" component={Home}></Route>
        <Switch>
          <Route exact path="/product/:productID" component={Product} />
          <Route path="/*" component={Category} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
