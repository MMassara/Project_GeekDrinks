import React from 'react';
import { useHistory } from 'react-router-dom';
import NavBar from '../components/NavBar';
import dataTestsIds from '../utils/dataTestIds';

function SellerOrder() {
  const history = useHistory();
  const mockOrders = [{
    id: 1,
    status: 'Pendente',
    date: '08/04/21',
    price: 23.80,
    address: 'Rua Aemon',
  }, {
    id: 2,
    status: 'Preparando',
    date: '08/04/21',
    price: 14.20,
    address: 'Rua Daenerys',
  }, {
    id: 3,
    status: 'Entregue',
    date: '07/04/21',
    price: 28.46,
    address: 'Rua jão das neves',
  }];
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
                { order.date }
              </div>
              <div data-testid={ `${dataTestsIds[52]}${order.id}` }>
                {`R$ ${order.price}`}
              </div>
              <div data-testid={ `${dataTestsIds[53]}${order.id}` }>
                {`R$ ${order.address}`}
              </div>
            </card>
          ))
        }
      </main>
    </>
  );
}

export default SellerOrder;
