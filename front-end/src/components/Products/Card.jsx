import propTypes from 'prop-types';
import { TextField, Paper } from '@mui/material';
import Button from '@mui/material/Button';
import React from 'react';
import dataTestsIds from '../../utils/dataTestIds';
import './style.css';

function Card({ product, handleChange, increment, decrement }) {
  // const buttonStyle = {
  //   fontWeight: '600',
  //   color: '#FFF',
  //   background: '#C94E35',
  //   width: '5px',
  // };

  // const textFildStyle = {
  //   fontWeight: '600',
  //   width: '15%',
  //   textAlign: 'center',
  //   background: '#FFF',
  // };
  return (
    <section
      className="card-product"
      key={ product.id }
    >
      <figure className="imgCard">
        <img
          className="card-product-img"
          data-testid={ `${dataTestsIds[17]}${product.id}` }
          src={ product.urlImage }
          alt={ product.name }
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
      <div className="buttons">
        <button
          variant="outlined"
          className="button"
          // sx={ buttonStyle }
          type="button"
          size="large"
          component={ Paper }
          data-testid={ `${dataTestsIds[19]}${product.id}` }
          onClick={ () => decrement(product.id) }
        >
          -
        </button>

        <input
          // style={ { width: '10%', textAlign: 'center' } }
          component={ Paper }
          className="quatityInput"
          // sx={ textFildStyle }
          data-testid={ `${dataTestsIds[20]}${product.id}` }
          type="number"
          name={ `input${product.id}` }
          value={ product.quantity }
          min="0"
          onChange={
            ({ target: { value } }) => handleChange(product.id, Number(value))
          }
        />

        <button
          variant="outlined"
          className="button"
          // sx={ buttonStyle }
          type="button"
          component={ Paper }
          data-testid={ `${dataTestsIds[18]}${product.id}` }
          onClick={ () => increment(product.id) }
        >
          +
        </button>
      </div>
    </section>
  );
}

Card.propTypes = {
  product: propTypes.object,
  handleChange: propTypes.func,
  increment: propTypes.func,
  decrement: propTypes.func,
}.isRequired;

export default Card;
