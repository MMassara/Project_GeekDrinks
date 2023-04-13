import propTypes from 'prop-types';
import React from 'react';
import dataTestsIds from '../../utils/dataTestIds';
import './style.css';

function SellerCard({ order, onClick }) {
  const ten = 10;
  return (
    <card
      className="card-product"
      key={ order.id }
      onClick={ onClick }
    >
      <div data-testid={ `${dataTestsIds[49]}${order.id}` }>
        { `Pedido ${order.id}` }
      </div>
      <div data-testid={ `${dataTestsIds[50]}${order.id}` }>
        { order.status }
      </div>
      <div data-testid={ `${dataTestsIds[51]}${order.id}` }>
        { order.saleDate.slice(0, ten).split('-').reverse().join('/') }
      </div>
      <div data-testid={ `${dataTestsIds[52]}${order.id}` }>
        { `Total: $${order.totalPrice.replace('.', ',')}` }
      </div>
      <div data-testid={ `${dataTestsIds[53]}${order.id}` }>
        { `Endereço: ${order.deliveryAddress}` }
      </div>
    </card>
  );
}

SellerCard.propTypes = {
  order: propTypes.object,
}.isRequired;

export default SellerCard;
