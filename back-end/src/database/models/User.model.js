module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: { type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.STRING,
  },{
    underscored: true,
    tableName: 'users',
    timestamps: false,
  });

  User.associate = ({ Sale }) => {
    User.hasMany(Sale, {
      foreignKey: 'userId', as: 'sales',
    });
  };
  return User;
};
