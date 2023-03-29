import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Products from './pages/Products';
import Register from './pages/Register';

export default function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/customer/products" component={ Products } />
        <Route exact path="/register" component={ Register } />
      </Switch>
    </div>
  );
}
