module.exports = (sequelize, DataTypes) => {
  const SalesProduct = sequelize.define(
'SalesProduct', 
{
    quantity: { 
      type: DataTypes.INTEGER,
    },
    saleId: { 
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    productId: { 
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
  },
{ 
    timestamps: false,
    underscored: true,
    tableName: 'salesProducts',
    modelName: 'SalesProduct',
  },
);
  SalesProduct.associate = ({ Sale, Product }) => {
    Sale.belongsToMany(Sale, {
      foreignKey: 'saleId',
as: 'salesProduct',
      through: SalesProduct,
      otherKey: 'productId',
    });
    Product.belongsToMany(Product, {
      foreignKey: 'productId',
as: 'salesProduct',
      through: SalesProduct,
      otherKey: 'saleId',
    });
  };

  return SalesProduct;
};
