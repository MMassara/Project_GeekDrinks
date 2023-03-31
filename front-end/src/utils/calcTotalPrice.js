module.exports = (array) => array.map(({ price, quantity }) => (
  Number(price) * Number(quantity)
))
  .reduce((acc, cur) => acc + cur, 0).toFixed(2).replace('.', ',');
