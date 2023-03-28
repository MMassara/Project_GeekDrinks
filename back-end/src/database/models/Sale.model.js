const saleModel = (sequelize, DataTypes) => {
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
    totalPrice: DataTypes.decimal(9, 2),
    deliveryAddress: DataTypes.string,
    deliveryNumber: DataTypes.string,
    saleDate: { type: DataTypes.date, defaultValue: DataTypes.NOW },
    status: { type: DataTypes.string, defaultValue: 'pendente' },
  }, {
    timestamp: false,
    underscored: true,
    tableName: 'sales',
    modelName: 'Sale',
  });

  Sale.associate = ({ User, SalesProduct}) => {
    Sale.belongsTo(User, {
      foreignKey: 'userId',
      as: 'users'
    })
    Sale.belongsTo(User, {
      foreignKey: 'sellerId',
      as: 'users'
    })
    Sale.hasMany(SalesProduct, {
      foreignKey: 'saleId', as: 'sales',
    })
  }
 
  return Sale;
};

export default saleModel;