import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import NavBar from '../components/NavBar';
import TableOrders from '../components/TableOrders';
import dataTestsIds from '../utils/dataTestIds';

export default function OrderDetails() {
  const [sales, setSalles] = useState({});
  const [status, setStatus] = useState('');
  const { id } = useParams();
  useEffect(() => {
    axios.get(`http://localhost:3001/customer/orders/${id}`).then(({ data }) => {
      setSalles(data);
      // console.log('axios status data', data.status);
      setStatus(data.status);
    });
  }, [id]);
  const DATE_SLICE = 10;
  const changeStatusInDB = async (value) => {
    await api.put(`/seller/orders/${id}`, { status: value });
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
      <main>
        <section>
          <div data-testid={ `${dataTestsIds[38]}` }>
            {`Pedido ${sales.id}`}
          </div>
          <div data-testid={ `${dataTestsIds[39]}` }>
            {`Vendedor: ${sales.sellerId}`}
          </div>
          <div data-testid={ `${dataTestsIds[40]}` }>
            {sales.saleDate?.slice(0, DATE_SLICE)}
          </div>
          <div data-testid={ `${dataTestsIds[41]}` }>
            {sales.status}
          </div>
          <TableOrders
            sales={ sales }
            status={ status }
            handleStatus={ handleStatus }
          />
          <div data-testid={ `${dataTestsIds[47]}` }>
            {`Total: ${sales.totalPrice}`}
          </div>
        </section>
      </main>
    </>
  );
}
