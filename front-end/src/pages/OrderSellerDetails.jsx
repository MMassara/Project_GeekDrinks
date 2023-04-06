import NavBar from '../components/NavBar';
import dataTestsIds from '../utils/dataTestIds';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import TableOrders from '../components/TableOrders';

function OrderSellerDetails() {
  const [details, setDetails] = useState([]);
  const [status, setStatus] = useState('');
  const DATE_SLICE = 10
  // const mockDetails = [{
  //   id: 2,
  //   seller: 'Fulana Pereira',
  //   date: '03/04/2023',
  //   status: 'Pendente',
  //   items: [{ itemId: 1, name: 'Cerveja Stella 250ml', quantity: 3, price: 3.50 }],
  //   totalPrice: 10.50,
  // }];
  const { id } = useParams();
  useEffect(() => {
    const token = JSON.parse(localStorage.getItem('user'));
    axios.get(`http://localhost:3001/sales`, { headers: { Authorization: token.token } }).then(({ data }) => {
      setDetails(data);
      console.log('details', details)
      console.log('Id', id)
    }).catch((err) => console.log(err));
  }, [status]);

  const changeStatusInDB = async (value) => {
    await axios.put(`http://localhost:3001/seller/orders/${id}`, { status: value });
    console.log(value)
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
        {
          details?.map((order) => (
            <section key={ order.id }>
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
                value='Preparando'
                onClick={ handleStatus }
                disabled={ order.status !== 'Pendente' }
              >
                PREPARING CHECK
              </button>
              <button
                type="button"
                data-testid={ `${dataTestsIds[58]}` }
                value='Em trânsito'
                onClick={ handleStatus }
                disabled={ order.status !== 'Preparando' }
              >
                DISPATCH CHECK
              </button>
              {/* <TableOrders
                sales={ sales }
                status={ status }
                handleStatus={ handleStatus }
              /> */}
              {/* <table>
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
              </table> */}
            </section>
          ))
        }
        <div data-testid={ `${dataTestsIds[64]}` }>
          { details.totalPrice }
        </div>
      </main>
    </>
  );
}

export default OrderSellerDetails;
