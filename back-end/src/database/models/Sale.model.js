module.exports = (sequelize, DataTypes) => {
  const Sale = sequelize.define('Sale', {
    id: { 
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    userId: { 
      type: DataTypes.INTEGER,
      foreignKey: true
    },
    sellerId: { 
      type: DataTypes.INTEGER,
      foreignKey: true
    },
    totalPrice: DataTypes.DECIMAL(9, 2),
    deliveryAddress: DataTypes.STRING,
    deliveryNumber: DataTypes.STRING,
    saleDate: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    status: { type: DataTypes.STRING, defaultValue: 'pendente' },
  }, {
    timestamp: false,
    underscored: true,
    tableName: 'sales',
    modelName: 'Sale',
  });

  Sale.associate = ({ User, SalesProduct}) => {
    Sale.belongsTo(User, {
      foreignKey: 'userId',
      foreignKey: 'sellerId',
      as: 'users'
    })
    Sale.hasMany(SalesProduct, {
      foreignKey: 'saleId', as: 'sales',
    })
  }
 
  return Sale;
};
