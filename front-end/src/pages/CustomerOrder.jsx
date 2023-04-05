import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import NavBar from '../components/NavBar';
import dataTestsIds from '../utils/dataTestIds';

function CustomerOrder() {
  const [orders, setOrders] = useState([]);
  const history = useHistory();
  const ten = 10;

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem('user'));
    axios.get('http://localhost:3001/sales', { headers: { Authorization: token.token } }).then(({ data }) => {
      setOrders(data);
    }).catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div className="container-product">
        <header>
          <NavBar />
        </header>
      </div>
      <main>
        {
          orders?.map((order) => (
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
                { order.saleDate.slice(0, ten).split('-').reverse().join('/') }
              </div>
              <div data-testid={ `${dataTestsIds[37]}${order.id}` }>
                {`${order.totalPrice.replace(/\./, ',')}`}
              </div>
            </card>
          ))
        }
      </main>
    </>
  );
}

export default CustomerOrder;
