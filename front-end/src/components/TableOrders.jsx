import propTypes from 'prop-types';

export default function TableOrders({ items }) {
  return (
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
    </table>
  );
}

TableOrders.propTypes = {
  items: propTypes.array,
}.isRequired;
