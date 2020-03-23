'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "homepages",
      [
        {
          title: "test-homepage",
          description: "test is the best",
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 1
        },
        {
          title: "dummy-homepage",
          description: "dummy is the best",
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 2
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("homepages", null, {});
  }
};
