import propTypes from 'prop-types';
import React from 'react';
import calcTotalPrice from '../../utils/calcTotalPrice';
import dataTestsIds from '../../utils/dataTestIds';

export default function Table({ products, removeProduct }) {
  const thArr = [
    'Item',
    'Descrição',
    'Quantidade',
    'Valor Unitário',
    'Sub-total',
    'Remover Item',
  ];

  return (
    <div className="tableContainer">
      <h1 className="tableTitle">Finalizar Pedido</h1>
      <section className="tableSection">
        <table className="table">
          <thead>
            <tr>
              {thArr.map((element, index) => (
                <th key={ index }>{element}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {products.map(({ name, price, quantity }, i) => (
              <tr key={ i } className="tableItemsTr">
                <td
                  data-testid={ `${dataTestsIds[23]}${i}` }
                >
                  <p className="tableItem itemIndex">{i + 1}</p>
                </td>
                <td
                  data-testid={ `${dataTestsIds[24]}${i}` }
                >
                  <p className="tableItem description">{name}</p>

                </td>
                <td
                  data-testid={ `${dataTestsIds[25]}${i}` }
                >
                  <p className="quantity tableItem">{quantity}</p>
                </td>
                <td
                  data-testid={ `${dataTestsIds[26]}${i}` }
                >
                  <p
                    className="price tableItem"
                  >
                    {`R$ ${Number(price).toFixed(2).replace('.', ',')}`}
                  </p>
                </td>
                <td
                  data-testid={ `${dataTestsIds[27]}${i}` }
                >
                  <p className="totalPrice tableItem">
                    {`R$ ${(Number(price) * Number(quantity))
                      .toFixed(2).replace('.', ',')}`}

                  </p>
                </td>
                <td>
                  <button
                    type="button"
                    data-testid={ `${dataTestsIds[28]}${i}` }
                    onClick={ () => removeProduct(i) }
                    className="removeCollumnBtn tableItem"
                  >
                    Remover

                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <h1 data-testid={ `${dataTestsIds[29]}` } className="tableTotalPrice">
          {products.length && `Total: R$ ${calcTotalPrice(products)}`}
        </h1>
      </section>
    </div>
  );
}

Table.propTypes = {
  products: propTypes.array,
  removeProduc: propTypes.func,
}.isRequired;
