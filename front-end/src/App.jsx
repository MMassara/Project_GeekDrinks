import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Cart from './pages/Cart';
import CustomerOrder from './pages/CustomerOrder';
import Login from './pages/Login';
import OrderDetails from './pages/OrderDetails';
import Products from './pages/Products';
import Register from './pages/Register';

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
        <Route exact path="/customer/checkout" component={ Cart } />
        <Route exact path="/customer/orders" component={ CustomerOrder } />
        <Route exact path="/customer/orders/:id" component={ OrderDetails } />
      </Switch>
    </div>
  );
}
