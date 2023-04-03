import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import NavBar from '../components/NavBar';
import dataTestsIds from '../utils/dataTestIds';

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
        {
          products?.map((product, index) => (
            <section key={ index }>
              <figure className="imgCard">
                <img
                  data-testid={ `${dataTestsIds[17]}${product.id}` }
                  src={ product.urlImage }
                  alt={ product.name }
                  style={ { height: '100px',
                    width: '100px' } }
                />
                <p data-testid={ `${dataTestsIds[16]}${product.id}` }>
                  { `R$ ${product.price.replace('.', ',')}` }
                </p>
              </figure>
              <div>
                <p data-testid={ `${dataTestsIds[15]}${product.id}` }>
                  { product.name }
                </p>
              </div>

              <div className="product-quantity">
                <button
                  type="button"
                  data-testid={ `${dataTestsIds[19]}${product.id}` }
                  onClick={ () => decrement(product.id) }
                >
                  -
                </button>

                <input
                  data-testid={ `${dataTestsIds[20]}${product.id}` }
                  type="number"
                  name={ `input${index}` }
                  value={ product.quantity }
                  min="0"
                  onChange={
                    ({ target: { value } }) => handleChange(product.id, Number(value))
                  }
                />

                <button
                  type="button"
                  data-testid={ `${dataTestsIds[18]}${product.id}` }
                  onClick={ () => increment(product.id) }
                >
                  +
                </button>
              </div>

            </section>
          ))
        }
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
