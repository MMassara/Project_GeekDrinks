import propTypes from 'prop-types';
import styled from 'styled-components';
import { Grid, Paper, TextField } from '@mui/material';
import React from 'react';
import dataTestsIds from '../../utils/dataTestIds';
import './style.css';

const Details = styled.div`
  display: flex;
  flex-direction: row;
  gap: 30px;
  padding-bottom: 10px;
  label {
    display: flex;
    gap: 10px;
    align-items: center;

      input {
      height: 5px;
    }
  }

  #select {
    border-radius: 5px;
    border-color: #c0baba;
    background-color: #fff;
    padding: 10px;
    font-size: medium;
    box-shadow: 0px 1px 2px #c0baba;
  }

`;

const FinishButton = styled.button`
  background-color: #D36934;
  height: 4vh;
  width: 150px;
  margin-top: 5px;
  text-decoration: none;
  border-radius: 5px;
  border: none;
  color: #fff;
  font-family: 'Roboto, Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  font-weight: 600;
`;

export default function AddressForm({ sellers, finishPurchase, handleChange }) {
  return (
    <section className="cartSection">
      <h2>Endereço para Entrega</h2>
      <form onSubmit={ finishPurchase } className="cartForm">
        <Details className="sellerSection">
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
            Endereço:
            <TextField
              required
              component={ Paper }
              onChange={ handleChange }
            />
          </label>
          <label htmlFor="houseNumber">
            Número:
            <TextField
              required
              component={ Paper }
              onChange={ handleChange }
            />
          </label>
          <FinishButton
            type="submit"
            data-testid={ `${dataTestsIds[33]}` }
            className="finishPurchaseBtn"
          >
            FINALIZAR PEDIDO
          </FinishButton>
        </Details>
      </form>
    </section>
  );
}

AddressForm.propTypes = {
  sellers: propTypes.array,
  finishPurchase: propTypes.func,
  handleChange: propTypes.func,
}.isRequired;
