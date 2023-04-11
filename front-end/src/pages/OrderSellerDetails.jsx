import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import NavBar from '../components/NavBar/NavBar';
import SellerTableOrders from '../components/SellerTableOrders';
import dataTestsIds from '../utils/dataTestIds';

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
      <main>
        <section>
          <div data-testid={ `${dataTestsIds[54]}` }>
            {`${order.id}`}
          </div>
          <div data-testid={ `${dataTestsIds[56]}` }>
            {order.saleDate?.slice(0, DATE_SLICE).split('-').reverse().join('/')}
          </div>
          <div data-testid={ `${dataTestsIds[55]}` }>
            {order.status}
          </div>
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
          <SellerTableOrders order={ order } />

        </section>

        <div data-testid={ `${dataTestsIds[64]}` }>
          { order.totalPrice?.replace(/\./, ',') }
        </div>
      </main>
    </>
  );
}

export default OrderSellerDetails;
