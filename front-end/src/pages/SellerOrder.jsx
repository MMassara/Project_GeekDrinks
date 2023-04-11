import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import NavBar from '../components/NavBar/NavBar';
import dataTestsIds from '../utils/dataTestIds';

function SellerOrder() {
  const [orderArray, setOrderArray] = useState([]);
  // const [status, setStatus] = useState('');
  const ten = 10;
  const history = useHistory();
  useEffect(() => {
    const token = JSON.parse(localStorage.getItem('user'));
    axios.get('http://localhost:3001/sales', { headers: { Authorization: token.token } }).then(({ data }) => {
      setOrderArray(data);
      // setStatus(data.status)
      // console.log('details', order)
      // console.log('Id', id)
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
          orderArray?.map((order) => (
            <card
              key={ order.id }
              onClick={
                () => history.push(`/seller/orders/${order.id}`)
              }
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
                { order.totalPrice.replace('.', ',') }
              </div>
              <div data-testid={ `${dataTestsIds[53]}${order.id}` }>
                { order.deliveryAddress }
              </div>
            </card>
          ))
        }
      </main>
    </>
  );
}

export default SellerOrder;
