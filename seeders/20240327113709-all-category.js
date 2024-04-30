"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert(
      "Categories",
      [
        {
          name: "all",
          createdAt: "20-03-2024",
          updatedAt: "20-03-2024",
        },
        {
          name: "food",
          createdAt: "20-03-2024",
          updatedAt: "20-03-2024",
        },
        {
          name: "beverage",
          createdAt: "20-03-2024",
          updatedAt: "20-03-2024",
        },
        {
          name: "appatizer",
          createdAt: "20-03-2024",
          updatedAt: "20-03-2024",
        },
        {
          name: "main course",
          createdAt: "20-03-2024",
          updatedAt: "20-03-2024",
        },
        {
          name: "dessert",
          createdAt: "20-03-2024",
          updatedAt: "20-03-2024",
        },
        {
          name: "coffe",
          createdAt: "20-03-2024",
          updatedAt: "20-03-2024",
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete("Categories", null, {});
  },
};
