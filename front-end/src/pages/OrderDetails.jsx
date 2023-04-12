import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import NavBar from '../components/NavBar/NavBar';
import TableOrders from '../components/TableOrders';
import dataTestsIds from '../utils/dataTestIds';
import styled from 'styled-components';

const Main = styled.section`
    background-color: #FFF3E0;
    height: 100vh;
    /* margin-top: 30px; */
    margin: 30px;
    section {
      display: flex;
      width: 100%;
      flex-direction: column;
      justify-content: center;
    }
  `;

export default function OrderDetails() {
  const [sales, setSalles] = useState({});
  const [status, setStatus] = useState('');
  const { id } = useParams();
  useEffect(() => {
    axios.get(`http://localhost:3001/customer/orders/${id}`).then(({ data }) => {
      setSalles(data);
      console.log('axios status data', data);
      setStatus(data.status);
    });
  }, [id, status]);
  const DATE_SLICE = 10;

  const changeStatusInDB = async (value) => {
    await axios.put(`http://localhost:3001/customer/orders/${id}`, { status: value });
  };

  const handleStatus = ({ target: { value } }) => {
    setStatus(value);
    changeStatusInDB(value);
  };
  return (
    <>
      <div className="container-product">
        <header>
          <NavBar />
        </header>
      </div>
      <Main>
        <section>
          <div data-testid={ `${dataTestsIds[38]}` }>
            {`Pedido ${sales.id}`}
          </div>
          <div data-testid={ `${dataTestsIds[39]}` }>
            <p>Fulana Pereira</p>
          </div>
          <div data-testid={ `${dataTestsIds[40]}` }>
            {sales.saleDate?.slice(0, DATE_SLICE).split('-').reverse().join('/')}
          </div>
          <TableOrders
            sales={ sales }
            status={ status }
            handleStatus={ handleStatus }
          />
          <div data-testid={ `${dataTestsIds[47]}` }>
            {`Total: ${sales.totalPrice?.replace(/\./, ',')}`}
          </div>
        </section>
      </Main>
    </>
  );
}
