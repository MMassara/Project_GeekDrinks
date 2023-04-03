import React, { useEffect, useState } from 'react';
import NavBar from '../components/NavBar';
import dataTestsIds from '../utils/dataTestIds';
import { useParams } from 'react-router-dom';

function OrderSellerDetails() {
  const mockDetails = [{
    id: 2,
    seller: 'Fulana Pereira',
    date: '03/04/2023',
    status: 'Pendente',
    items: [{ itemId: 1, name: 'Cerveja Stella 250ml', quantity: 3, price: 3.50 }],
    totalPrice: 10.50,
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
          
          mockDetails.map((order) => (
            <section key={ order.id }>
              <div data-testid={ `${dataTestsIds[54]}` }>
                {`${order.id}`}
              </div>
              <div data-testid={ `${dataTestsIds[56]}` }>
                {order.date}
              </div>
              <div data-testid={ `${dataTestsIds[55]}` }>
                {order.status}
              </div>
              <button
                type="button"
                data-testid={ `${dataTestsIds[57]}` }
              >
                PREPARING CHECK
              </button>
              <button
                type="button"
                data-testid={ `${dataTestsIds[58]}` }
                disabled
              >
                DISPATCH CHECK
              </button>
              <table>
                <thead>
                  <tr>
                    <th>Item</th>
                    <th>Descrição</th>
                    <th>Quantidade</th>
                    <th>Valor unitário</th>
                    <th>Sub-total</th>
                  </tr>
                </thead>
                <tbody>
                  {order.items.map((item) => (
                    <tr key={ item.itemId }>
                      <td
                        data-testid={ `${dataTestsIds[59]}${item.itemId}` }
                      >
                        {item.itemId}
                      </td>
                      <td
                        data-testid={ `${dataTestsIds[60]}${item.itemId}` }
                      >
                        {item.name}
                      </td>
                      <td
                        data-testid={ `${dataTestsIds[61]}${item.itemId}` }
                      >
                        {item.quantity}
                      </td>
                      <td
                        data-testid={ `${dataTestsIds[62]}${item.itemId}` }
                      >
                        {item.price}
                      </td>
                      <td
                        data-testid={ `${dataTestsIds[63]}${item.itemId}` }
                      >
                        {item.price * item.quantity}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </section>
          ))
        }
        <div data-testid={ `${dataTestsIds[64]}` }>
          {`${mockDetails[0].totalPrice}`}
        </div>
      </main>
    </>
  );
}

export default OrderSellerDetails;
