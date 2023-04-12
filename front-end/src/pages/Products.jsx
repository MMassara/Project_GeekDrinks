import { Grid } from '@mui/material';
import styled from 'styled-components';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import NavBar from '../components/NavBar/NavBar';
import Card from '../components/Products/Card';
import dataTestsIds from '../utils/dataTestIds';

const TotalButtonValue = styled.button`
  background-color: #C94E35;
  padding: 10px;
  border-radius: 5px;
  width: 200px;
  height: 50px;
  color: #FFF;
  font-weight: bold;
  margin: auto;
  border: 3px solid black;
`;

const DivButton = styled.div`
  display: flex;
  justify-content: center;
`;

function Products() {
  const [products, setProducts] = useState([]);
  const [isDisabled, setIsDisabled] = useState(true);
  const history = useHistory();

  useEffect(() => {
    axios.get('http://localhost:3001/products').then(({ data }) => {
      setProducts(data.map((allData) => ({ ...allData, quantity: 0 })));
    });
  }, []);

  useEffect(() => {
    function setProductsOnLocalStorage() {
      const filteredProducts = products.filter(({ quantity }) => quantity > 0);
      localStorage.setItem('products', JSON.stringify(filteredProducts));
      setIsDisabled(!products.some(({ quantity }) => quantity > 0));
    }
    setProductsOnLocalStorage();
  }, [products]);

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
  };

  const decrement = (id) => {
    setProducts((prevProducts) => prevProducts.map((product) => {
      if (product.id === id && product.quantity > 0) {
        return { ...product, quantity: product.quantity - 1 };
      }
      return product;
    }));
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
        <DivButton>
          <TotalButtonValue
            type="button"
            data-testid={ `${dataTestsIds[21]}` }
            onClick={ () => history.push('/customer/checkout') }
            disabled={ isDisabled }
          >
            {`VER CARRINHO: R$ ${calcProducts().toFixed(2).replace('.', ',')}`}
          </TotalButtonValue>
        </DivButton>
      </main>
    </div>
  );
}

export default Products;
