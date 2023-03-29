import React from 'react';
import { Navigate, Route, Switch } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import Products from './pages/Products';
import Register from './pages/Register';

export default function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" element={ <Navigate to="/login" /> } />
        <Route path="/login" element={ <Login /> } />
        <Route exact path="/customer/products" component={ Products } />
        <Route exact path="/register" component={ Register } />
      </Switch>
    </div>
  );
}
