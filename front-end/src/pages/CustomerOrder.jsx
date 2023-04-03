import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import NavBar from '../components/NavBar';
import dataTestsIds from '../utils/dataTestIds';

function CustomerOrder() {
  const history = useHistory();
  const mockOrders = [{
    id: 1,
    status: 'Pendente',
    date: '08/04/21',
    price: 23.80,
  }, {
    id: 2,
    status: 'Preparando',
    date: '08/04/21',
    price: 14.20,
  }, {
    id: 3,
    status: 'Entregue',
    date: '07/04/21',
    price: 28.46,
  }];
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/sales').then(({ data }) => {
      console.log(data);
      setOrders(data.map((allData) => (allData)));
    });
  });

  console.log(orders);

  return (
    <>
      <div className="container-product">
        <header>
          <NavBar />
        </header>
      </div>
      <main>
        {
          mockOrders.map((order) => (
            <card
              key={ order.id }
              onClick={
                () => history.push(`/customer/orders/${order.id}`)
              }
            >
              <div data-testid={ `${dataTestsIds[34]}${order.id}` }>
                { `Pedido ${order.id}` }
              </div>
              <div data-testid={ `${dataTestsIds[35]}${order.id}` }>
                { order.status }
              </div>
              <div data-testid={ `${dataTestsIds[36]}${order.id}` }>
                { order.date }
              </div>
              <div data-testid={ `${dataTestsIds[37]}${order.id}` }>
                {`R$ ${order.price}`}
              </div>
            </card>
          ))
        }
      </main>
    </>
  );
}

export default CustomerOrder;
