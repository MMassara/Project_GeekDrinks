import propTypes from 'prop-types';
import React from 'react';
import dataTestsIds from '../../utils/dataTestIds';

function Card({ product, handleChange, increment, decrement }) {
  return (
    <section key={ product.id }>
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
          name={ `input${product.id}` }
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
  );
}

Card.propTypes = {
  product: propTypes.object,
  handleChange: propTypes.func,
  increment: propTypes.func,
  decrement: propTypes.func,
}.isRequired;

export default Card;
