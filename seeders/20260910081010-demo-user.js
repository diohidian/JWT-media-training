'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [
      {
        name: 'Admin',
        email: 'admin@mail.com',
        password: '123456',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Budi',
        email: 'budi@mail.com',
        password: '123456',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  }
};