import propTypes from 'prop-types';
import React from 'react';
import dataTestsIds from '../../utils/dataTestIds';

export default function AddressForm({ sellers, finishPurchase, handleChange }) {
  return (
    <section className="cartSection">
      <h2>Detalhes e Endereço para Entrega</h2>
      <form onSubmit={ finishPurchase } className="cartForm">
        <section className="sellerSection">
          <label htmlFor="select">
            P. Vendedora Responsável:
            <select
              id="select"
              name="sellerId"
              data-testid={ `${dataTestsIds[30]}` }
              onChange={ handleChange }
              className="formInputs addressSelect"
            >
              {sellers.map(({ name, id }, index) => (
                <option key={ index } value={ id }>{name}</option>
              ))}
            </select>
          </label>
          <label htmlFor="address">
            Endereço
            <input
              type="text"
              id="address"
              placeholder="Digite seu Endereço"
              name="deliveryAddress"
              data-testid={ `${dataTestsIds[31]}` }
              onChange={ handleChange }
              className="formInputs"
              required
            />
          </label>
          <label htmlFor="houseNumber">
            Número
            <input
              type="number"
              id="houseNumber"
              name="deliveryNumber"
              data-testid={ `${dataTestsIds[32]}` }
              onChange={ handleChange }
              className="formInputs"
              required
            />
          </label>
        </section>
        <button
          type="submit"
          data-testid={ `${dataTestsIds[33]}` }
          className="finishPurchaseBtn"
        >
          FINALIZAR PEDIDO
        </button>
      </form>
    </section>
  );
}

AddressForm.propTypes = {
  sellers: propTypes.array,
  finishPurchase: propTypes.func,
  handleChange: propTypes.func,
}.isRequired;
