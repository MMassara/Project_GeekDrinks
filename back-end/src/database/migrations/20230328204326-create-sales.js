module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('sales', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      user_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'users',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },

      seller_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'users',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },

      total_price: { allowNull: false, type: Sequelize.DECIMAL(9, 2) },
      delivery_address: { allowNull: false, type: Sequelize.STRING },
      delivery_number: { allowNull: false, type: Sequelize.STRING },
      sale_date: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      status: { allowNull: false, type: Sequelize.STRING },
 
    });
  },

  async down(queryInterface, _Sequelize) {
     await queryInterface.dropTable('sales');
  },
};
