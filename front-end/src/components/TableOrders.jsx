import propTypes from 'prop-types';
import dataTestsIds from '../utils/dataTestIds';

export default function TableOrders({ sales: { items }, status, handleStatus }) {
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
                data-testid={ `${dataTestsIds[42]}${item.id}` }
              >
                {item.id}
              </td>
              <td
                data-testid={ `${dataTestsIds[43]}${item.id}` }
                n
              >
                {item.name}
              </td>
              <td
                data-testid={ `${dataTestsIds[44]}${item.id}` }
              >
                {item.quantity}
              </td>
              <td
                data-testid={ `${dataTestsIds[45]}${item.id}` }
              >
                {item.price}
              </td>
              <td
                data-testid={ `${dataTestsIds[46]}${item.id}` }
              >
                {item.price * item.quantity}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <p
        data-testid={ `${dataTestsIds[41]}` }
        className="detailsStatus"
      >
        { status }
      </p>
      <button
        type="button"
        data-testid={ `${dataTestsIds[48]}` }
        disabled={ status === 'Entregue' }
        value="Entregue"
        onClick={ (event) => handleStatus(event) }
        className="detailsBtn"
      >
        MARCAR COMO ENTREGUE
      </button>
    </>
  );
}

TableOrders.propTypes = {
  items: propTypes.array,
  status: propTypes.string,
  handleStatus: propTypes.func,
}.isRequired;
