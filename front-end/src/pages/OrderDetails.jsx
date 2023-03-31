import React from 'react';
import NavBar from '../components/NavBar';
import dataTestsIds from '../utils/dataTestIds';

function OrderDetails() {
  const mockDetails = [{
    id: 1,
    seller: 'Fulana Pereira',
    date: '07/04/2021',
    status: 'Entregue',
    items: [{ itemId: 1, description: 'Cerveja Stella 250ml', quantity: 3, price: 3.50 }],
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
              <div data-testid={ `${dataTestsIds[38]}` }>
                {`Pedido ${order.id}`}
              </div>
              <div data-testid={ `${dataTestsIds[39]}` }>
                {`Vendedor: ${order.seller}`}
              </div>
              <div data-testid={ `${dataTestsIds[40]}` }>
                {order.date}
              </div>
              <div data-testid={ `${dataTestsIds[41]}` }>
                {order.status}
              </div>
              <button
                type="button"
                data-testid={ `${dataTestsIds[48]}` }
              >
                MARCAR COMO ENTREGUE
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
                        data-testid={ `${dataTestsIds[42]}${item.itemId}` }
                      >
                        {item.itemId}
                      </td>
                      <td
                        data-testid={ `${dataTestsIds[43]}${item.itemId}` }
                      >
                        {item.description}
                      </td>
                      <td
                        data-testid={ `${dataTestsIds[44]}${item.itemId}` }
                      >
                        {item.quantity}
                      </td>
                      <td
                        data-testid={ `${dataTestsIds[45]}${item.itemId}` }
                      >
                        {item.price}
                      </td>
                      <td
                        data-testid={ `${dataTestsIds[46]}${item.itemId}` }
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
        <div data-testid={ `${dataTestsIds[47]}` }>
          {`Total: ${mockDetails[0].totalPrice}`}
        </div>
      </main>
    </>
  );
}

export default OrderDetails;
