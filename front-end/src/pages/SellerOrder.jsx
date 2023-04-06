import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import NavBar from '../components/NavBar';
import dataTestsIds from '../utils/dataTestIds';
import axios from 'axios';

function SellerOrder() {
  const [order, setOrder] = useState([]);
  // const [status, setStatus] = useState('');
  const ten = 10;
  const history = useHistory();
  // const mockOrders = [{
  //   id: 1,
  //   status: 'Pendente',
  //   date: '08/04/21',
  //   price: 23.80,
  //   address: 'Rua Aemon',
  // }, {
  //   id: 2,
  //   status: 'Preparando',
  //   date: '08/04/21',
  //   price: 14.20,
  //   address: 'Rua Daenerys',
  // }, {
  //   id: 3,
  //   status: 'Entregue',
  //   date: '07/04/21',
  //   price: 28.46,
  //   address: 'Rua jão das neves',
  // }];

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem('user'));
    axios.get(`http://localhost:3001/sales`, { headers: { Authorization: token.token } }).then(({ data }) => {
      setOrder(data);
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
          order?.map((order) => (
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
