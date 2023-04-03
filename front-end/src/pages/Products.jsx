import axios from 'axios';
import React, { useEffect, useState } from 'react';
import NavBar from '../components/NavBar';
import dataTestsIds from '../utils/dataTestIds';

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/products').then(({ data }) => {
      setProducts(data);
    });
  }, []);

  return (
    <div className="container-product">
      <header>
        <NavBar />
      </header>
      <main>
        {
          products?.map((product) => (
            <section key={ product.name }>
              <div>
                <p data-testid={ `${dataTestsIds[15]}${product.id}` }>
                  { product.name }
                </p>
              </div>

              <div>
                <p data-testid={ `${dataTestsIds[16]}${product.id}` }>
                  { product.price }
                </p>
              </div>

              <div>
                <img
                  data-testid={ `${dataTestsIds[17]}${product.id}` }
                  src={ product.urlImage }
                  alt={ product.name }
                  style={ { height: '100px',
                    width: '100px' } }
                />
              </div>

              <div className="product-quantity">
                <button
                  type="button"
                  data-testid={ `${dataTestsIds[19]}${product.id}` }
                >
                  -
                </button>

                <input data-testid={ `${dataTestsIds[20]}${product.id}` } type="number" />

                <button
                  type="button"
                  data-testid={ `${dataTestsIds[18]}${product.id}` }
                >
                  +
                </button>
              </div>

            </section>
          ))
        }
      </main>
    </div>
  );
}

export default Products;
