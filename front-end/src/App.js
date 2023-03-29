import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Products from './pages/Products';

function App() {
  return (
    <Switch>
      <Route exact path="/customer/products" component={ Products } />
    </Switch>
  );
}

export default App;
