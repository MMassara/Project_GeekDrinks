module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    id: { type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: DataTypes.STRING,
    price: DataTypes.DECIMAL(4, 2),
    urlImage: DataTypes.STRING,
  }, { 
    underscored: true,
    tableName: 'products',
    timestamps: false,
    underscored: true,
    modelName: 'Product',
  });
  Product.associate = ({ SalesProduct }) => {
    Product.hasMany(SalesProduct, { foreignKey: 'productId', as: 'products' });
  };
  return Product;
};
