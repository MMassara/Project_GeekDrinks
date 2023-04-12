import { Grid } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import NavBar from '../components/NavBar/NavBar';
import Card from '../components/Products/Card';
import dataTestsIds from '../utils/dataTestIds';

function Products() {
  const [products, setProducts] = useState([]);
  const [isDisabled, setIsDisabled] = useState(true);
  const history = useHistory();

  useEffect(() => {
    axios.get('http://localhost:3001/products').then(({ data }) => {
      const localProducts = JSON.parse(localStorage.getItem('products'));
      const stateProducts = data.map((allData) => ({ ...allData, quantity: 0 }));
      const reponse = stateProducts.map((element) => {
        const objt = localProducts.find((product) => product.name === element.name);
        if (objt) {
          return objt;
        }
        return element;
      });
      // const filteredProducts = localProducts.filter(({ quantity }) => quantity > 0);
      setProducts(reponse);
    });
  }, []);

  useEffect(() => {
    setIsDisabled(!products.some(({ quantity }) => quantity > 0));
  }, [products]);

  function setProductsOnLocalStorage() {
    const filteredProducts = products.filter(({ quantity }) => quantity > 0);
    localStorage.setItem('products', JSON.stringify(filteredProducts));
    // setIsDisabled(!products.some(({ quantity }) => quantity > 0));
  }

  const handleChange = (id, value) => {
    setProducts((prevProducts) => prevProducts.map((product) => {
      if (product.id === id) {
        return { ...product, quantity: value };
      }
      return product;
    }));
  };

  const increment = (id) => {
    setProducts((prevProducts) => prevProducts.map((product) => {
      if (product.id === id) {
        return { ...product, quantity: product.quantity + 1 };
      }
      return product;
    }));
    setProductsOnLocalStorage();
  };

  const decrement = (id) => {
    setProducts((prevProducts) => prevProducts.map((product) => {
      if (product.id === id && product.quantity > 0) {
        return { ...product, quantity: product.quantity - 1 };
      }
      return product;
    }));
    setProductsOnLocalStorage();
  };

  const calcProducts = () => products.map(({ quantity, price }) => (
    Number(quantity) * Number(price)
  )).reduce((acc, curr) => acc + curr, 0);

  return (
    <div className="container-product">
      <header>
        <NavBar />
      </header>
      <main>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          style={ { backgroundColor: '#FFF3E0' } }
          sx={ { mt: 3, mb: 2 } }
        >
          {
            products?.map((product) => (
              <Card
                key={ product.id }
                product={ product }
                handleChange={ handleChange }
                increment={ increment }
                decrement={ decrement }
              />
            ))
          }
        </Grid>
        <button
          type="button"
          data-testid={ `${dataTestsIds[21]}` }
          onClick={ () => history.push('/customer/checkout') }
          disabled={ isDisabled }
          className="cartBtn"
        >
          VER CARRINHO: R$
          {' '}
          <span data-testid={ `${dataTestsIds[22]}` }>
            {calcProducts().toFixed(2).replace('.', ',')}
          </span>
        </button>
      </main>
    </div>
  );
}

export default Products;
