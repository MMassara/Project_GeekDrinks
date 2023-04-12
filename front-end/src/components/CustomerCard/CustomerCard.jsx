import propTypes from 'prop-types';
import React from 'react';
import dataTestsIds from '../../utils/dataTestIds';
import './style.css';

function CustomerCard({ order, onClick }) {
  const ten = 10;
  return (
    <card
      className="card-product"
      key={ order.id }
      onClick={ onClick }
    >
      <div data-testid={ `${dataTestsIds[34]}${order.id}` }>
        { `Pedido ${order.id}` }
      </div>
      <div data-testid={ `${dataTestsIds[35]}${order.id}` }>
        { order.status }
      </div>
      <div data-testid={ `${dataTestsIds[36]}${order.id}` }>
        { order.saleDate.slice(0, ten).split('-').reverse().join('/') }
      </div>
      <div data-testid={ `${dataTestsIds[37]}${order.id}` }>
        {`Total: $${order.totalPrice.replace('.', ',')}`}
      </div>
    </card>
  );
}

CustomerCard.propTypes = {
  order: propTypes.object,
}.isRequired;

export default CustomerCard;
