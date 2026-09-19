'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Cards', [
      {
        image: "https://images.pexels.com/photos/14495871/pexels-photo-14495871.jpeg",
        title: "Rumah baru",
        text: "rumah bagus yang di tata rapih",
        link: "none",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  }
};