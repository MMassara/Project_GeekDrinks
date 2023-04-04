import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import NavBar from '../components/NavBar';
import TableOrders from '../components/TableOrders';
import dataTestsIds from '../utils/dataTestIds';

export default function OrderDetails() {
  const [sales, setSalles] = useState({});
  const { id } = useParams();
  useEffect(() => {
    axios.get(`http://localhost:3001/customer/orders/${id}`).then(({ data }) => {
      setSalles(data);
      console.log('axios data', data);
    });
  }, [id]);
  const DATE_SLICE = 10;
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
          <button
            type="button"
            data-testid={ `${dataTestsIds[48]}` }
          >
            Marcar como entregue
          </button>
          <TableOrders sales={ sales } />
          <div data-testid={ `${dataTestsIds[47]}` }>
            {`Total: ${sales.totalPrice}`}
          </div>
        </section>
      </main>
    </>
  );
}
