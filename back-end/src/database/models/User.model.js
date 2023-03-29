const userModel = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: { type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.STRING,
  }, { timestamps: false,
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

module.exports = userModel;
