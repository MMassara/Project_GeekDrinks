import axios from 'axios';
import styled from 'styled-components';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import NavBar from '../components/NavBar/NavBar';
import SellerTableOrders from '../components/SellerTableOrders';
import dataTestsIds from '../utils/dataTestIds';

const Main = styled.section`
    background-color: #FFF3E0;
    height: 100vh;
    margin: 30px;
    section {
      display: flex;
      width: 100%;
      flex-direction: column;
      justify-content: center;
    }

    .total {
      width: 100%;
      color: #FFF;
      font-weight: bold;
      display: flex;
      justify-content: center;
    }

    .value-total {
      width: 200px;
      background-color: #C94E35;
      padding: 10px;
      border-radius: 5px;
      border: 3px solid black;
    }

    button {
      padding: 5px;
      border: 1px solid black;
      width: 200px;
      margin: 5px;
      border-radius: 5px;
      box-shadow: 1px 1px 1px #000;
    }

    .title-order {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 10px;
    }

    .container-buttons {
      align-items: center;
    }
  `;

function OrderSellerDetails() {
  const [order, setOrder] = useState([]);
  const [status, setStatus] = useState('');
  const DATE_SLICE = 10;
  const { id } = useParams();
  useEffect(() => {
    const token = JSON.parse(localStorage.getItem('user'));
    axios.get(`http://localhost:3001/seller/orders/${id}`, { headers: { Authorization: token.token } }).then(({ data }) => {
      setOrder(data);
      console.log('details', order);
      console.log('Id', id);
    }).catch((err) => console.log(err));
  }, [status, id, order]);

  const changeStatusInDB = async (value) => {
    await axios.put(`http://localhost:3001/seller/orders/${id}`, { status: value });
    console.log(value);
  };

  const handleStatus = ({ target: { value } }) => {
    setStatus(value);
    changeStatusInDB(value);
  };

  return (
    <>
      <div className="container-product">
        <NavBar />
      </div>
      <Main>
        <section>
          <div className="title-order">
            <div>
              <div data-testid={ `${dataTestsIds[54]}` }>
                <p>Pedido: {`${order.id}`}</p>
              </div>
              <div data-testid={ `${dataTestsIds[56]}` }>
                <p>Data: {order.saleDate?.slice(0, DATE_SLICE).split('-').reverse().join('/')}</p>
              </div>
              <div data-testid={ `${dataTestsIds[55]}` }>
                <p>Status: {order.status}</p>
              </div>
            </div>
            <div className="container-buttons">
              <button
                type="button"
                data-testid={ `${dataTestsIds[57]}` }
                value="Preparando"
                onClick={ handleStatus }
                disabled={ order.status !== 'Pendente' }
              >
                PREPARING CHECK
              </button>
              <button
                type="button"
                data-testid={ `${dataTestsIds[58]}` }
                value="Em Trânsito"
                onClick={ handleStatus }
                disabled={ order.status !== 'Preparando' }
              >
                DISPATCH CHECK
              </button>
            </div>
            
          </div>
          
          <SellerTableOrders order={ order } />

        </section>

        <div className="total" data-testid={ `${dataTestsIds[64]}` }>
          <div className="value-total">
            <p>
              {`TOTAL A PAGAR R$ ${order.totalPrice?.replace(/\./, ',')}`}
            </p>
          </div>
        </div>
      </Main>
    </>
  );
}

export default OrderSellerDetails;
