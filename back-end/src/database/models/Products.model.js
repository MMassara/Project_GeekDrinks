const productModel = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    id: { type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: DataTypes.STRING,
    price: DataTypes.DECIMAL(4,2),
    urlImage: DataTypes.STRING,
  }, { 
    timestamp: false,
    underscored: true,
    tableName: 'products',
    modelName: 'Product',
  });

  Product.associate = ({ SalesProduct }) => {
    Product.hasMany(SalesProduct, {
      foreignKey: 'productId', as: 'products',
    })
  };


  return Product;
};

module.exports = productModel;