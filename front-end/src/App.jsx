import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import Products from './pages/Products';
import Register from './pages/Register';

export default function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={ <Link to="/login" /> } />
        <Route path="/login" component={ Login } />
        <Route exact path="/customer/products" component={ Products } />
        <Route exact path="/register" component={ Register } />
      </Switch>
    </div>
  );
}
