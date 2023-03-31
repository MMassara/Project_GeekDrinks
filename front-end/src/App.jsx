import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import Products from './pages/Products';
import Register from './pages/Register';
import CustomerOrder from './pages/CustomerOrder';
import OrderDetails from './pages/OrderDetails';

export default function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Redirect to="/login" />
        </Route>
        <Route exact path="/login" component={ Login } />
        <Route exact path="/customer/products" component={ Products } />
        <Route exact path="/register" component={ Register } />
        <Route exact path="/customer/orders" component={ CustomerOrder } />
        <Route exact path="/customer/orders/:id" component={ OrderDetails } />
      </Switch>
    </div>
  );
}
