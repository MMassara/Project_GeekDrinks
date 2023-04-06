import propTypes from 'prop-types';
import dataTestsIds from '../utils/dataTestIds';

export default function SellerTableOrders({ order: { items } }) {

  const totalPrice = (price, quant) => {
    const total = price * quant;
    const totalString = `${total.toFixed(2)}`
    console.log(totalString)
    return totalString.replace('.', ',')
  }

  return (
    <>
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
          {items && items.map((item) => (
            <tr key={ item.id }>
              <td
                data-testid={ `${dataTestsIds[59]}${item.id}` }
              >
                {item.id}
              </td>
              <td
                data-testid={ `${dataTestsIds[60]}${item.id}` }
                n
              >
                {item.name}
              </td>
              <td
                data-testid={ `${dataTestsIds[61]}${item.id}` }
              >
                {item.quantity}
              </td>
              <td
                data-testid={ `${dataTestsIds[62]}${item.id}` }
              >
                {item.price.replace('.', ',')}
              </td>
              <td
                data-testid={ `${dataTestsIds[63]}${item.id}` }
              >
                {totalPrice(item.price, item.quantity)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

SellerTableOrders.propTypes = {
  items: propTypes.array,
  status: propTypes.string,
  handleStatus: propTypes.func,
}.isRequired;
