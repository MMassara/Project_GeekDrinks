import styled from 'styled-components';
import propTypes from 'prop-types';
import dataTestsIds from '../utils/dataTestIds';

const SellerOrdersDetails = styled.table`
  margin-top: 30px;
  .tableOrder-id {
    background-color: #DC8332;
  }

  .tableOrder-description {
    background-color: #EEB82E;
    width: 98%;
  }

  .tableOrder-quantity {
    background-color: #DC8332;
  }

  .tableOrder-price {
    background-color: #EEB82E;
  }

  .tableOrder-totalPrice {
    background-color: #DC8332;
  }
  
  .tableOrder-item {
    display: flex;
    justify-content: center;
    padding: 5px;
    border-radius: 5px;
  }
`;
export default function SellerTableOrders({ order: { items } }) {
  const totalPrice = (price, quant) => {
    const total = price * quant;
    const totalString = `${total.toFixed(2)}`;
    console.log(totalString);
    return totalString.replace('.', ',');
  };

  return (
    <SellerOrdersDetails>
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
        {items && items.map((item) => (
          <tr key={ item.id }>
            <td
              data-testid={ `${dataTestsIds[59]}${item.id}` }
            >
              <p className="tableOrder-id tableOrder-item">{item.id}</p>
            </td>
            <td
              data-testid={ `${dataTestsIds[60]}${item.id}` }
              n
            >
              <p className="tableOrder-description tableOrder-item">{item.name}</p>
            </td>
            <td
              data-testid={ `${dataTestsIds[61]}${item.id}` }
            >
              <p className="tableOrder-quantity tableOrder-item">{item.quantity}</p>
            </td>
            <td
              data-testid={ `${dataTestsIds[62]}${item.id}` }
            >
              <p className="tableOrder-price tableOrder-item">{item.price.replace('.', ',')}</p>
            </td>
            <td
              data-testid={ `${dataTestsIds[63]}${item.id}` }
            >
              <p className="tableOrder-totalPrice tableOrder-item">{totalPrice(item.price, item.quantity)}</p>
            </td>
          </tr>
        ))}
      </tbody>
    </SellerOrdersDetails>
  );
}

SellerTableOrders.propTypes = {
  items: propTypes.array,
  status: propTypes.string,
  handleStatus: propTypes.func,
}.isRequired;
