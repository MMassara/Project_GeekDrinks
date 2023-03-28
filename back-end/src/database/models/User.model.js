const userModel = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: { type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: DataTypes.string,
    email: DataTypes.string,
    password: DataTypes.string,
    role: DataTypes.string,
  }, { timestamp: false,
    underscored: true,
    tableName: 'users',
    modelName: 'User',
  });

  User.associate = ({ Sale }) => {
    User.hasMany(Sale, {
      foreignKey: 'userId', as: 'sales',
    })
  };

  return User;
};

export default userModel;
