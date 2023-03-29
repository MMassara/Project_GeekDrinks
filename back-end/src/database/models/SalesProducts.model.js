module.exports = (sequelize, DataTypes) => {
  const SalesProduct = sequelize.define('SalesProduct', {
    quantity: { 
      type: DataTypes.INTEGER,
    },
    saleId: { 
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    productId: { 
      type: DataTypes.INTEGER,
      primaryKey: true
    },
  }, 
  { 
    timestamp: false,
    underscored: true,
    tableName: 'users',
    modelName: 'User',
  });
  SalesProduct.associate = ({ Sale, Product }) => {
    Sale.belongsToMany(Product,  {
      foreignKey: 'saleId', as: 'salesProducts',
      through: SalesProduct,
      otherKey: 'productId'
    })
    Product.belongsToMany(Sale, {
      foreignKey: 'productId', as: 'salesProduc',
      through: SalesProduct,
      otherKey: 'saleId'
    })
  };

  return SalesProduct;
};